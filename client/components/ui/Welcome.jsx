import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from '@components/ui'

const tableCommonStyles = `min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white`

const style = {
  wrapper: `flex w-full items-center justify-center`,
  leftContainer: `mf:flex-row flex flex-col items-start justify-between py-12 px-4 md:p-20`,
  title: `mf:mr-10 flex flex-1 flex-col items-start justify-start`,
  titleLarge: `text-3xl sm:text-5xl text-white text-gradient py-1`,
  titleSmall: `mt-5 w-11/12 text-left text-base font-light text-white md:w-9/12`,
  connect: `my-5 flex cursor-pointer flex-row items-center justify-center rounded-full bg-[#2952e3] p-3 hover:bg-[#2546bd]`,
  connectIcon: `mr-2 text-white`,
  connectText: `text-base font-semibold text-white`,
  table: `mt-10 grid w-full grid-cols-2 sm:grid-cols-3`,
  rightContainer: `mf:mt-0 mt-10 flex w-full flex-1 flex-col items-center justify-start`,
  card: `eth-card white-glassmorphism my-5 flex h-40 w-full flex-col rounded-xl p-3 sm:w-72`,
  cardContainer: `flex h-full w-full flex-col justify-between`,
  cardHeader: `flex items-start justify-between`,
  cardEthLogo: `flex h-10 w-10 items-center justify-center rounded-full border-2 border-white`,
  cardEthText: `mt-1 text-lg font-semibold text-white`,
  cardAddress: `text-sm font-light text-white`,
  form: `blue-glassmorphism flex w-full flex-col items-center justify-start p-5 sm:w-96`,
  formLine: `xmy-2 h-[1px] w-full bg-gray-400`,
  formButton: `mt-2 w-full cursor-pointer rounded-full border-[1px] border-[#3d4f7c] p-2 text-white hover:bg-[#3d4f7c]`,
}

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

function Welcome() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftContainer}>
        <div className={style.title}>
          <h1 className={style.titleLarge}>
            Send Crypto <br /> across the world
          </h1>
          <p className={style.titleSmall}>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Crypto.
          </p>
          {!false && (
            <button
              className={style.connect}
              type="button"
              onClick={null}
            >
              <AiFillPlayCircle className={style.connectIcon} />
              <p className={style.connectText}>
                Connect Wallet
              </p>
            </button>
          )}

          <div className={style.table}>
            <div className={`rounded-tl-2xl ${tableCommonStyles}`}>
              Reliability
            </div>
            <div className={tableCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${tableCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${tableCommonStyles}`}>
              Web 3.0
            </div>
            <div className={tableCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${tableCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className={style.rightContainer}>
          <div className={style.card}>
            <div className={style.cardContainer}>
              <div className={style.cardHeader}>
                <div className={style.cardEthLogo}>
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className={style.cardAddress}>
                  0x23afd...f22sf
                </p>
                <p className={style.cardEthText}>
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className={style.form}>
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={null}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={null}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={null}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={null}
            />

            <div className={style.formLine} />

            {false ? (
              <Loader />
            ) : (
              <button
                className={style.formButton}
                type="button"
                onClick={null}
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
