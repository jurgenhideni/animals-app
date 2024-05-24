'use client'
import React from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Sidebar from './Sidebar'


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center border-b-2 max-lg:hidden'>
      <div className='flex items-center gap-5'>
      <img src="/assets/logo.png" alt="logo" className='max-w-[80px]' />
     <h1 className='text-[2rem] font-bold'>Fluffy<strong className='text-[rgba(119,0,255,0.41)]'>Friends</strong> </h1>
      </div>
     
    <div className='flex gap-[70px] mx-5'>
    <Link href='/'>Home</Link>
     <Dropdown/>
     <Link href='about'>About Us</Link>
    <Link href='/contact'>Contact Us</Link>
    </div>
   </div>

   <div className='lg:hidden flex justify-between  items-center'>
<img src="/assets/logo.png" alt="image" className='w-[70px] h-[70px] p-2' />
  <Sidebar/>
   </div>
    </>
  )
}

export default Navbar