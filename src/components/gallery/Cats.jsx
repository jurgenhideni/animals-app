import React, { useState,useEffect } from 'react'
import { Luckiest_Guy } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const luckiest = Luckiest_Guy({
    subsets: ["latin"],
    weight:['400']
   });

   const poppins = Poppins({
    subsets: ["latin"],
    weight:['100','200','300','400','500','600','700']
   });   
   
const Cats = () => {
const [search, setSearch] = useState("");
const [cats, setCats] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

 // Modal:
 const [open, setOpen] = useState(false);
 const [selectedCat, setselectedCat] = useState(null);
 const handleOpen = (cat) => {
   setselectedCat(cat);
   setOpen(true);
 };
 const handleClose = () => setOpen(false);
/////

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
   <div className='flex max-md:flex-col justify-between m-5 items-center'>
    <h1 className={`${luckiest.className} text-[3rem]`}>Gallery</h1>
    <div className='flex max-md:justify-center items-center rounded-md'>
          <input
            type="search"
            placeholder=' Search for a cat...'
            className='outline-none border-none placeholder-[rgb(40,40,40)] h-fit p-2 max-sm:max-w-[250px] md:w-[300px] px-3 rounded-l-md bg-[rgb(238,238,238)]'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className='bg-purple-500 rounded-r-lg text-white px-5 py-2' onClick={handleSearch}>Search</button>
        </div>
   </div>

   <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}

   <div className='flex flex-wrap max-lg:justify-center gap-5 ml-4 max-lg:ml-0 my-4'>
   {cats.map((cat)=>(
    <>
    <div key={cat.id} onClick={()=>handleOpen(cat)} className='text-center w-fit rounded-b-xl shadow-[-2px_2px_20px_rgba(0,0,0,0.2)]'>
    <img src={cat.image} alt="cat" className='max-w-[250px] rounded-t-[10px]' />
    <div className=' rounded-b-[10px] p-3'>
    <p className=' font-bold italic'>{cat.name}</p>
    <p>{cat.origin}</p>
    </div>
    
    </div>

    </>
   ))}
   </div>


   <Modal open={open} onClose={handleClose} className='max-h-full flex justify-center items-center'>
        <Box sx={{ bgcolor: 'background.paper',
         width: '300px',
         borderRadius: '10px',
         outline:'none',
         
         }}>
          {selectedCat && (
            <>
              
              <div className='p-10 flex flex-col gap-5'>
                <h2 className={`${poppins.className} font-bold text-[1.5rem] text-center`} >{selectedCat.name}</h2>
                <p><strong>Origin</strong> {selectedCat.origin}</p>
                <p><strong>Temperament</strong> {selectedCat.temperament}</p>
                <p><strong>Colors</strong> {selectedCat.colors.join(', ')}</p>
                <p><strong>Desctription</strong> {selectedCat.description}</p>
                
              </div>
            </>
          )}
        </Box>
      </Modal>
   </div>
   </>
  )
}

export default Cats