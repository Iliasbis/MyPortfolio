import React, { useState } from 'react'
import { Link } from 'react-scroll';

export const NavBar = () => {

    const links = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Skills", link: "/skills" },
        { name: "Work", link: "/work" },
        { name: "Contact", link: "/contact" },
    ]
    const [menu, setMenu] = useState(false);
    const logo = "</"
    const logoend = ">"
    return (
        <nav className='flex fixed justify-between  w-full px-6 py-6 items-center shadow-md shadow-gray-300 bg-slate-100 z-50'>
            <h2 className='text-slate-500 cursor-pointer select-none self-center'><span className='text-teal-500'>{logo}</span> ILias Bis <span className='text-teal-400'>{logoend} </span> </h2>
            <div onClick={() => setMenu(true)} className='text-3xl absolute top-4 right-8 cursor-pointer md:hidden'><ion-icon name={'menu'}></ion-icon> </div>
            <ul className={`md:flex md:pt-1 md:items-center md:pb-0 absolute md:static md:z-auto md:self-center z-20 right-0 w-screen h-screen md:w-auto md:pl-0 px-2 transition-all duration-500 ease-in md:flex-row md:h-full flex flex-col items-start  pt-24 md:justify-evenly md:bg-slate-100 bg-white ${menu ? 'top-0 opacity-100' : 'top-[-2250px]'} md:opacity-100 opacity-0 `}>
                {links.map((l) => {
                    return <>
                        <div onClick={() => setMenu(false)} className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'><ion-icon name={'close'}></ion-icon> </div>
                        <li className={`list md:mx-4 text-slate-500 select-none ${menu ? 'py-7 px-10 mx-auto md:py-0' : 'md:py-0 py-0'} `}><Link to={l.link} spy={true} smooth={true} duration={500} >{l.name} </Link> </li>
                    </>
                })}
            </ul>
            <h2></h2>
        </nav>
    )
}
