import { Footer, Navbar, Services, Transactions, Welcome } from '@components/ui'

const style = {
  pageWrapper: 'min-h-screen',
}

function Home() {
  return (
    <div className={style.pageWrapper}>
      <div className="navbarWrapper">
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
