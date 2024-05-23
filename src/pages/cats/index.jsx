import React from 'react'
import '../../app/globals.css'
import Navbar from '@/components/Navbar'
import Cats from '@/components/gallery/Cats'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <>
    <Navbar/>
    <Cats/>
    <Footer/>
    </>
  )
}

export default index