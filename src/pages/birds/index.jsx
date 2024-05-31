import React from 'react'
import "../../app/globals.css"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Birds from '@/components/gallery/Birds'
const index = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-[100vh] flex flex-col justify-between'>
    <Birds/>
    <Footer/>
    </div>
    </>

  )
}

export default index