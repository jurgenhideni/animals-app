import React from 'react'
import Image from 'next/image'
import { Luckiest_Guy } from 'next/font/google';
import Link from 'next/link';
import breedData from '../breeds.json';


const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight:['400']
 });

const Hero = () => {
  return (
    <>
    <div className='flex max-lg:flex-col items-center justify-around rounded-[20px]'>
      <div className='flex flex-col max-md:gap-10 gap-5 items-center relative'>
      <h1 className={`${luckiest.className} max-md:px-2 text-[2.7rem] max-w-[450px] text-center`}>Your Ultimate Guide to Pet Information</h1>
      <p className='max-w-[500px] max-md:max-w-[320px] text-slate-500 text-[0.9rem] text-center'>
      Discover a world of fascinating pets, from adorable 
      cats and loyal dogs to exotic birds. Whether youre 
      looking to adopt a new furry friend or simply want 
      to learn more about your favorite animals,
       our comprehensive guide has everything you need.
      </p>
      <Link href='/about' className='text-white bg-purple-600 font-bold p-3 rounded-[10px]'>Learn More . . .</Link>
      </div>
    <Image className='max-lg:ml-5 max-lg:my-2 max-lg:max-w-[350px]' src="/assets/hero.png" width={750} height={500} alt='image'/>
    </div>
  
  <div className='my-10 max-lg:mt-0 pb-10 bg-[rgba(0,0,0,0.05)]'>
    <h2 className={`${luckiest.className} text-center mb-4 font-semibold text-[2rem] pt-5`}>POPULAR BREEDS</h2>
    <div className='flex max-lg:flex-wrap justify-center gap-5 my-4 mx-auto w-fit'>
    {breedData.dogs.map((dog)=>(
  <div key={dog.id} className='hover:scale-105 shadow-md w-fit bg-white text-center max-lg:px-1 max-lg:py-2 p-3 rounded-md'>
   <Image src={dog.url} width={150} height={100} alt='image'/>
   <span>{dog.name}</span>
  </div>
))}
</div>

<div className='flex max-lg:flex-wrap justify-center gap-5 mx-auto w-fit'>
    {breedData.cats.map((cat)=>(
  <div key={cat.id} className='shadow-md w-fit bg-white text-center max-lg:px-1 max-lg:py-2 p-3 rounded-md hover:scale-105'>
   <Image src={cat.url} width={150} height={100} alt='image'/>
   <span>{cat.name}</span>
  </div>
))}
</div>

  </div>
    </>
  )
}

export default Hero