import { Footer, Navbar, Services, Transactions, Welcome } from '@components/ui'

const style = {
  wrapper: 'min-h-screen',
}

function Home() {
  return (
    <div className={style.wrapper}>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Home
