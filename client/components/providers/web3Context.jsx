import { useEffect, useState, createContext, useContext } from 'react'
import { ethers } from 'ethers'
import { animateScroll as scroll } from 'react-scroll'
import { contractABI, contractAddress } from '@lib/constants'

export const Web3Context = createContext()

let ethereum
let transactionCountLocal
let isConnected = false

if (typeof window !== 'undefined') {
  ethereum = window.ethereum
  transactionCountLocal = window.localStorage.getItem('transactionCount')
}

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionsContract
}

export const Web3Provider = ({ children }) => {
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  })
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(
    transactionCountLocal
  )
  const [transactions, setTransactions] = useState([])

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract()

        const availableTransactions =
          await transactionsContract.getAllTransactions()

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        )

        console.log(structuredTransactions)

        setTransactions(structuredTransactions)
      } else {
        console.log('Ethereum is not present')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])
        isConnected = true
        getAllTransactions()
      } else {
        console.log('No accounts found')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = createEthereumContract()
        const currentTransactionCount =
          await transactionsContract.getTransactionCount()

        if (typeof window !== 'undefined') {
          window.localStorage.setItem(
            'transactionCount',
            currentTransactionCount
          )
        }
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData
        const transactionsContract = createEthereumContract()
        const parsedAmount = ethers.utils.parseEther(amount)

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: addressTo,
              gas: '0x5208',
              value: parsedAmount._hex,
            },
          ],
        })

        const transactionHash = await transactionsContract.addToBlockchain(
          addressTo,
          parsedAmount,
          message,
          keyword
        )

        setIsLoading(true)
        console.log(`Loading - ${transactionHash.hash}`)
        await transactionHash.wait()
        console.log(`Success - ${transactionHash.hash}`)
        setIsLoading(false)
        scroll.scrollToBottom()

        const transactionsCount =
          await transactionsContract.getTransactionCount()

        setTransactionCount(transactionsCount.toNumber())
      } else {
        console.log('No ethereum object')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect()
    if (isConnected) {
      checkIfTransactionsExists()
    }
  }, [transactionCount])

  return (
    <Web3Context.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  return useContext(Web3Context)
}
