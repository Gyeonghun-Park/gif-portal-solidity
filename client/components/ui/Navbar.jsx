import { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '@images/logo.png'

const style = {
  wrapper: 'flex items-center justify-between w-full p-4 md:justify-center',
  logoContainer: 'flex-initial items-center justify-center md:flex-[0.5]',
  logoImage: 'w-32 cursor-pointer',
  navItemContainer:
    'flex-row items-center justify-between flex-initial hidden text-white list-none md:flex',
  loginButton:
    'mx-4 cursor-pointer rounded-full bg-[#2952e3] py-2 px-7 hover:bg-[#2546bd]',
  mobileWrapper: 'relative flex',
  icon: 'text-white cursor-pointer md:hidden',
  mobileNavItemContainer:
    'blueGlassmorphism animate-slide-in fixed -top-0 -right-2 z-10 flex h-screen w-[70vw] list-none flex-col items-end justify-start rounded-md p-3 text-white shadow-2xl md:hidden',
}

const navItems = ['Market', 'Exchange', 'Tutorials', 'Wallets']

const NavBarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className={style.wrapper}>
      <div className={style.logoContainer}>
        <div className={style.logoImage}>
          <Image src={logo} alt="logo" height={40} width={40} />
        </div>
      </div>
      <ul className={style.navItemContainer}>
        {navItems.map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className={style.loginButton}>Login</li>
      </ul>
      <div className={style.mobileWrapper}>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className={style.icon}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className={style.icon}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className={style.mobileNavItemContainer}>
            <li className="w-full my-2 text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navItems.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
