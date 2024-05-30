'use client'
import React from 'react'
import Image from 'next/image'
import { luckiest } from './gallery/Dogs'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className=' flex  w-full max-md:flex-col justify-between gap-5 max-md:items-center bg-purple-500 text-white p-5'>

      <div className='w-fit text-center'>
      <Image src="/assets/logo.png" alt="" className='invert' height={80} width={80} />
       <h1 className={`${luckiest.className} text-[1.5rem]`}>Fluffy <br /> Friends </h1>
      </div>
      <div className='flex flex-col  max-md:hidden' >
        <h3 className='font-extrabold'>Website</h3>
        <Link href='/'>Home</Link> 
        <Link href='/dogs'>Dogs</Link> 
        <Link href='/cats'>Cats</Link> 
        <Link href='/birds'>Birds</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/contact' >Contact Us</Link> 
      </div>

      <div className='flex flex-col gap-4 text-center'>
      <h3 className='font-extrabold max-sm:hidden'>Contact</h3>
      <p>Skanderbeg Square, Tiranë</p>
      <p>info@fluffyfriends.com</p>
      <p>+355 69 54 86 984</p>
      </div>  

    </div>
  )
}

export default Footer