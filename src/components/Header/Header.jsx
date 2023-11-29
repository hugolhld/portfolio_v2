import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='fixed py-2 flex justify-between items-center w-full z-10'>
        <div className='mx-4'>
            <h3 className='font-bold uppercase text-2xl'>
                <span className='bg-white logo' style={{/* webkitTextStroke: 'transparent' */ webkitBackgroundClip: 'clip'}}>
                    Hugo.
                </span>
                <span className='text-white' >
                    LHLD
                </span>
            </h3>
        </div>
        <nav className='font-semibold text-2xl mx-4'>
            <ul className='flex gap-2 text-white'>
                <li>home</li>
                <li>projects</li>
                <li>skills</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header