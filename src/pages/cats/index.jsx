import React from 'react'
import '../../app/globals.css'
import Navbar from '@/components/Navbar'
import Cats from '@/components/gallery/Cats'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-between min-h-[100vh]'>
    <Cats/>
    <Footer/>
    </div>

    </>
  )
}

export default index