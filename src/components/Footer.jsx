'use client'
import React from 'react'
import Image from 'next/image'
import { luckiest } from './gallery/Dogs'


const Footer = () => {
  return (
    <div className='w-full max-md:flex flex-col max-md:items-center bg-purple-500 text-white p-5'>

      <div className='w-fit text-center'>
      <Image src="/assets/logo.png" alt="" className='invert' height={80} width={80} />
       <h1 className={`${luckiest.className} text-[1.5rem]`}>Fluffy <br /> Friends </h1>
      </div>

    </div>
  )
}

export default Footer