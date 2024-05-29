'use client'
import React from 'react'
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Luckiest_Guy } from 'next/font/google';
import { FaDog, FaHome } from "react-icons/fa";
import { FaCat } from 'react-icons/fa';
import { GiHummingbird } from "react-icons/gi";
import { TbInfoSquareRounded } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";

import Drawer from '@mui/material/Drawer';
import Link from 'next/link';

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight:['400']
 });


const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    
  return (
    <>
    <div className='p-4'>
      <button className='text-[2.5rem] text-purple-500' onClick={toggleDrawer(true)}><AiOutlineMenu /></button>
    
      <Drawer  sx={{
                    '& .MuiDrawer-paper': {
                        width: '270px', 
                        background: 'white',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                    },
                }} anchor='right' open={open} onClose={toggleDrawer(false)}>
      <div className='flex flex-col items-center py-5 bg-[url(/assets/purple-texture.png)]'>
        <img src="/assets/logo.png" alt="logo" className='max-w-[100px] invert' />
        <span className={`${luckiest.className} text-center text-[2rem] text-white`} >fluffy <br /> friends ™</span>
      </div>
       <div className='flex flex-col items-center justify-center h-full gap-2 mx-2 text-purple-900'>
        <Link href='/' className={`${luckiest.className} w-full text-center py-3 text-[1.5rem] rounded-md flex justify-center gap-2 `} > <FaHome />Home</Link>
        <Link href='/dogs' className={`${luckiest.className} w-full text-center py-3  text-[1.5rem] rounded-md flex justify-center gap-2 `} > <FaDog/>Dogs</Link>
        <Link href='/cats' className={`${luckiest.className} w-full text-center py-3  text-[1.5rem] rounded-md flex justify-center gap-2 `} > <FaCat />Cats</Link>
        <Link href='/birds' className={`${luckiest.className} w-full text-center py-3  text-[1.5rem] rounded-md flex justify-center gap-2 `} > <GiHummingbird />Birds</Link>
        <Link href='/about' className={`${luckiest.className} w-full text-center py-3  text-[1.5rem] rounded-md flex justify-center gap-2 `} > <TbInfoSquareRounded />About Us</Link>
        <Link href='/contact' className={`${luckiest.className} w-full text-center py-3  text-[1.5rem] rounded-md flex justify-center gap-2`} > <RiContactsFill />Contact Us</Link>

     
       </div>
      </Drawer>
     
     
     </div>  
    </>
  )
}

export default Sidebar