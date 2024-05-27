import React from 'react'
import { useForm} from '@formspree/react';
import { Poppins } from 'next/font/google'
import { Luckiest_Guy } from 'next/font/google';
import Image from 'next/image';


const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });

   
const poppins = Poppins({
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700']
 });

const Contact = () => {
    const [state, handleSubmit] = useForm("xnqeywbo");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


  return (
    <div className={`${poppins.className}`}>

    <h1 className={`${luckiest.className} text-center text-[2.5rem]`}>Contact <span className='text-purple-600'>Us</span></h1>
        <form onSubmit={handleSubmit} className='rounded-lg flex flex-col gap-5 m-7 border border-purple-600 p-5 md:max-w-[700px]'>
         <label htmlFor="firstName" className='text-purple-600'>First Name</label>
         <input className='bg-[rgba(244,242,242,0.47)] p-2 rounded-lg outline-purple-600' type="text" name='firstName' placeholder='First Name ...' required/>
         <label htmlFor="lastName" className='text-purple-600'>Last Name</label>
         <input className='bg-[rgba(244,242,242,0.47)] p-2 rounded-lg outline-purple-600' type="text" name="lastName" placeholder='Last Name...'  required/>
         <label htmlFor="Email" className='text-purple-600'>Email</label>
         <input className='bg-[rgba(244,242,242,0.47)] p-2 rounded-lg outline-purple-600' type="email" name='email' placeholder='E-Mail...' required />
         <label htmlFor="message" className='text-purple-600'>Your Message</label>
         <textarea rows={7} className='bg-[rgba(244,242,242,0.47)] p-2 rounded-lg outline-purple-600' name="message" placeholder='Your message...' required ></textarea>
         <button type='submit' className='bg-purple-600 py-3 text-[white] rounded-lg' disabled={state.submitting}>Send</button>
        </form>
    
    
    
    </div>
  )
}

export default Contact