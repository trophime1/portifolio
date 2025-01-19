import React from 'react'

export default function Navbar() {
    const listNavbar = [
        {name: 'Home', link:'#home'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
    ];
  return (
    <header className='fixed top-0 left-0 w-full z-50  border-b bg-slate-700'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <span className='ml-3 text-3xl font-bold text-white '>Trophime</span>
            </a>
            <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center font-medium '>
                {
                    listNavbar.map((item, index) =>(
                        <a key={index} href={item.link} className='mr-5 hover:text-yellow-300'>
                            {item.name}
                        </a>
                    ))
                }
            </nav>
            <button className='inline-flex items-center py-1 px-7 focus:outline-none text-base text-white mt-4
             md:mt-0 border border-white hover:border-yellow-300 hover:text-gray-900'>
                <a href='#contact'>Contact me</a>
            </button>
        </div>
    </header>
  )
}
