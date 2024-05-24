import React from 'react'
import { Luckiest_Guy } from 'next/font/google'
import { Poppins } from 'next/font/google';
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'


const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });

   
const poppins = Poppins({
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700']
 });

const AboutUs = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1366px)'
  })



  return (
  <div className={`${poppins.className} mx-5`}>
  <h1 className={`${luckiest.className} text-[2.5rem] py-5 text-center`}>About <span className='text-purple-600'>Us</span></h1>
  <p className='text-center text-[rgba(0,0,0,0.7)] lg:max-w-[700px] mx-auto'>We are a passionate team of animal lovers and pet experts
dedicated to curating a comprehensive and visually stunning
gallery of pets.</p>

<div className='lg:flex justify-around gap-20  my-20 items-center'>

<div id='about-paragraphs' className='lg:max-w-[500px] lg:flex lg:flex-col lg:gap-5'>
<div className=' rounded-lg max-lg:bg-[url(/assets/purple-dog.jpg)] bg-cover bg-center mt-5 max-lg:text-white max-lg:h-[500px] max-lg:flex max-lg:flex-col max-lg:justify-end'>
  <div className='max-lg:bg-gradient-to-b from-[rgba(0,0,0,0.5)] '>
  <h2 className='text-[1.5rem] lg:text-[2rem] font-bold lg:text-purple-600'>Who We Are</h2>
  <p className='leading-[2rem]'>Our team includes animal enthusiasts who
are committed to sharing their knowledge and love for animals
with you. We invite you to explore 
 our gallery. Learn from our experts,
 and join our community of like-minded individuals. </p>
  </div>
</div>
<div className=' my-5 rounded-lg max-lg:bg-[url(/assets/purple-cat.jpg)] bg-cover bg-center max-lg:text-white max-lg:h-[550px] max-lg:flex max-lg:flex-col max-lg:justify-end'>
  <div className=' bg-gradient-to-b max-lg:from-[rgba(0,0,0,0.5)]'>
  <h2 className='text-[1.5rem] lg:text-[2rem] font-bold lg:text-purple-600'>Our Mission</h2>
<p className='leading-[2rem]'>  Our Mission is to create a visually engaging and informative
 platform that celebrates the diversity and beauty of dogs,
 cats, and birds. We aim to educate and inspire pet enthusiasts 
 by providing detailed information about each animals origin,
 breed, characteristics, and more.</p>
  </div>
</div>
 <div className='my-5 rounded-lg max-lg:bg-[url(/assets/purple-bird.jpg)] bg-cover bg-center max-lg:text-white max-lg:h-[550px] max-lg:flex max-lg:flex-col max-lg:justify-end'>
  <div className=' bg-gradient-to-b max-lg:from-[rgba(0,0,0,0.5)]'>
  <h2 className='text-[1.5rem] lg:text-[2rem] font-bold lg:text-purple-600'> What We Offer </h2>
<p className='leading-[2rem]'>  Step into our virtual world of pets where youll find a visually stunning
   gallery showcasing a wide variety of breeds. From playful puppies to majestic 
  birds, our curated collection offers something for every animal enthusiast.
Join us on our journey to celebrate the wonderful world of pets.</p>
  </div>
</div>
</div>

<Image src="/assets/about.png" width={700} height={500} alt="" className='rounded-xl max-lg:hidden max-w-[700px] min-w-[560px]' />

</div>



</div>
  )
}

export default AboutUs