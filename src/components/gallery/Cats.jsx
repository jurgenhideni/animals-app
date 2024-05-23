import React, { useState,useEffect } from 'react'
import { Luckiest_Guy } from 'next/font/google';
import { IoMdSearch } from "react-icons/io";


const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });
   
const Cats = () => {
const [search, setSearch] = useState("");
const [cats, setCats] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchCats = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/cats?search=${query}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCats(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchCats(search);
  };

  useEffect(() => {
    fetchCats(); 
  }, []);


  return (
   <>
   <div className='flex justify-between m-5 items-center'>
    <h1 className={`${luckiest.className} text-[3rem]`}>Gallery</h1>
    <div className='flex items-center gap-2 rounded-md bg-[rgb(238,238,238)]'>
    <input
        type="search"
        placeholder=' Search . . .'
        className='outline-none border-none placeholder-[rgb(40,40,40)] h-fit p-2 w-[300px] px-3 rounded-md bg-[rgb(238,238,238)]'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          />
    <IoMdSearch className='mr-5' onClick={handleSearch}/>
    </div>
   </div>

   <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}

   <div className='flex flex-wrap gap-5 ml-8 my-4'>
   {cats.map((cat)=>(
    <>
    <div className='text-center w-fit'>
    <img src={cat.image} alt="dog" className='max-w-[250px] rounded-t-[10px]' />
    <div className='border-b border-black border-x rounded-b-[10px] p-3'>
    <p className=' font-bold italic'>{cat.name}</p>
    <p>{cat.origin}</p>
    </div>
    
    </div>

    </>
   ))}
   </div>



   </div>
   </>
  )
}

export default Cats