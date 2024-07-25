import React from 'react'
import hilink from '../assets/hilink-logo.svg'
import user from '../assets/user.svg'
import menu from '../assets/menu.svg'
import { NAV_LINKS } from '../constants'

const Header = () => {
  return (
    <header className='flex py-8 w-full mx-auto items-center px-20 max-xl:px-16 
    max-lg:justify-between max-lg:px-10 max-lg:py-6`'>
        <a href="#Hero" className=''>
            <img src={hilink} alt="" />
        </a>

        <div className='mx-auto flex items-center  max-lg:hidden'>
          {NAV_LINKS.map((item) => (
            <a 
            href={item.href} 
            key={item.key} 
            className='text-gray-600 px-8 text-lg 
             hover:font-semibold  max-xl:px-6 ' >
            {item.label}</a>
          ))}
        </div>

        <div className='flex justify-end max-lg:hidden'>
          <button 
          className='bg-grey text-white font-bold text-lg 
          flex items-center justify-center gap-3 px-8 rounded-full py-4 hover:bg-black'>
            <img src={user} alt="" />
            Login
          </button>
        </div>

        <button className='hidden max-lg:flex items-center'>
          <img src={menu} width={30} alt="" />
        </button>

    </header>
  )
}

export default Header