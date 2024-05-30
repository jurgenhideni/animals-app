import React from 'react'
import '../../app/globals.css'
import Navbar from '@/components/Navbar'
import Dogs from '@/components/gallery/Dogs'
import Footer from '@/components/Footer'

const index = () => {
  return (
    <>
    <Navbar/>
    <Dogs/>
    <Footer/>
    </>
  
  )
}

export default index