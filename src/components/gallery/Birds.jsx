import React, { useState,useEffect } from 'react'
import { Luckiest_Guy } from 'next/font/google';



const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });
   
const Birds = () => {
const [search, setSearch] = useState("");
const [birds, setBirds] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchBirds = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/birds?search=${query}`);
      if (!response.ok) {
        throw new Error('Network response error');
      }
      const data = await response.json();
      setBirds(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchBirds(search);
  };

  useEffect(() => {
    fetchBirds(); 
  }, []);


  return (
   <>
   <div className='flex justify-between m-5 items-center max-md:block'>
    <h1 className={`${luckiest.className} text-[3rem] text-center`}>Gallery</h1>
    <div className='flex max-md:justify-center items-center  rounded-md '>
    <input
        type="search"
        placeholder=' Search for a bird...'
        className='outline-none border-none placeholder-[rgb(40,40,40)] h-fit p-2 w-[300px] px-3 rounded-l-md bg-[rgb(238,238,238)]'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          />
    <button className='bg-purple-500 text-white px-5 py-2' onClick={handleSearch}>Search</button>
    </div>
   </div>

   <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}

   <div className='flex flex-wrap max-lg:justify-center gap-5 ml-8 max-lg:ml-0 my-4 max'>
   {birds.map((bird)=>(
    <>
    <div key={dog.id} className='rounded-b-xl  text-center w-fit shadow-[-2px_2px_20px_rgba(0,0,0,0.2)]'>
    <img crossorigin="anonymous" src={bird.image} alt="bird" className='max-w-[250px] rounded-t-[10px]' />
    <div className='p-3'>
    <p className=' font-bold italic'>{bird.name}</p>
    <p className='max-w-[200px]'>{bird.place_of_found}</p>
  
    </div>
    
    </div>

    </>
   ))}
   </div>



   </div>
   </>
  )
}

export default Birds