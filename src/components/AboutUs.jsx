import React from 'react'
import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image';

const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });

const AboutUs = () => {
  return (
  <>
  <h1 className={`${luckiest.className} text-[3rem] my-5 text-center`}>About <span className='text-purple-300'>Us</span></h1>
  
  <div className='flex justify-around items-center'>
<div className='max-w-[650px] b'>
<h2 className={`${luckiest.className} text-[2rem] mb-10 uppercase`}>Who we Are</h2>
<p className='leading-[2.5rem] font-light text-[1.1rem]'>
We are a passionate team of animal lovers and pet experts
dedicated to curating a comprehensive and visually stunning
gallery of pets. Our team includes animal enthusiasts who
are committed to sharing their knowledge and love for animals
with you. Whether you're a seasoned pet owner, considering
 adoption, or simply an animal lover, we invite you to explore 
 our gallery, learn from our experts,
 and join our community of like-minded individuals. 
</p>
</div>
<Image src="/assets/about-us.jpg" alt="image" width={700} height={600}/>
  </div>

  <div className='flex justify-around items-center'>
  <Image src="/assets/cat-parrot.png" alt="image" width={700} height={600}/>
<div className='max-w-[650px] '>
<h2 className={`${luckiest.className} text-[2rem] mb-10 uppercase`}>Our Mission</h2>
<p className='leading-[2.5rem] font-light text-[1.1rem]'>
 Our Mission is to create a visually engaging and informative
 platform that celebrates the diversity and beauty of dogs,
 cats, and birds. We aim to educate and inspire pet enthusiasts 
 by providing detailed information about each animal's origin,
 breed, characteristics, and more. Through our extensive 
 gallery and expert content, we strive to foster a deeper
 appreciation and understanding of these wonderful creatures.
</p>
</div>
</div>

<div className='flex justify-around items-center'>
  <div className='max-w-[650px]'>
  <h2 className={`${luckiest.className} text-[2rem] mb-2 uppercase`} >What we offer</h2>
  <div className='mt-10'>
  <h3 className='text-[1.2rem] my-2 font-bold text-[rgb(187,119,212)]'>Comprehensive Pet Gallery</h3>
<p className='leading-[2.5rem] text-[1.1rem]'>Step into our virtual world of pets where you'll find a visually stunning
   gallery showcasing a wide variety of breeds. From playful puppies to majestic 
  birds, our curated collection offers something for every animal enthusiast.
Join us on our journey to celebrate the wonderful world of pets. Whether you're 
here to learn, connect, or simply admire adorable photos, we're thrilled to have
 you as part of our community.</p>
  </div>

  </div>
<Image src='/assets/macaw.png' alt='parrot' width={700} height={600} className='relative bottom-14'/>
</div>

  </>
  )
}

export default AboutUs