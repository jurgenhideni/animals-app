import React from 'react'
import "../../app/globals.css"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Birds from '@/components/gallery/Birds'
const index = () => {
  return (
    <>
    <Navbar/>
    <Birds/>
    <Footer/>
    </>

  )
}

export default index