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
   
   
const Birds = () => {
const [search, setSearch] = useState("");
const [birds, setBirds] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

 // Modal: --------------------------------------------------
 const [open, setOpen] = useState(false);
 const [selectedBird, setselectedBird] = useState(null);
 const handleOpen = (bird) => {
   setselectedBird(bird);
   setOpen(true);
 };
 const handleClose = () => setOpen(false);
//-----------------------------------------------

//API Fetch ----------------------------------------
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
//---------------------------------------------------------

  return (
   <>
   <div className='flex justify-between m-5 items-center max-md:block'>
    <h1 className={`${luckiest.className} text-[3rem] text-center`}>Gallery</h1>
    <div className='flex max-md:justify-center items-center  rounded-md '>
    <input
        type="search"
        placeholder=' Search for a bird...'
        className='outline-none border-none placeholder-[rgb(40,40,40)] max-sm:max-w-[250px] md:w-[300px] h-fit p-2 w-[300px] px-3 rounded-l-md bg-[rgb(238,238,238)]'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          />
    <button className='bg-purple-500 text-white px-5 py-2 rounded-r-lg' onClick={handleSearch}>Search</button>
    </div>
   </div>

   <div>
   {loading && <p>Loading...</p>}
   {error && <p>{error}</p>}

   <div className='flex flex-wrap max-lg:justify-center gap-5 ml-4 max-lg:ml-0 my-4'>
   {birds.map((bird)=>(
    <>
    <div key={bird.id} onClick={()=>handleOpen(bird)} className='rounded-b-xl  text-center w-fit shadow-[-2px_2px_20px_rgba(0,0,0,0.2)]'>
    <img src={bird.image} alt="bird" className='max-w-[250px] rounded-t-[10px]' />
    <div className='p-3'>
    <p className=' font-bold italic'>{bird.name}</p>
    <p className='max-w-[200px]'>{bird.place_of_found}</p>
  
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
          {selectedBird && (
            <>
              
              <div className='p-10 flex flex-col gap-5'>
                <h2 className={`${poppins.className} font-bold text-[1.5rem] text-center`} >{selectedBird.name}</h2>
                <p><strong>Origin</strong> {selectedBird.species}</p>
                <p><strong>Temperament</strong> {selectedBird.family}</p>
                <p><strong>Colors</strong> {selectedBird.habitat}</p>
                <p><strong>Found :</strong> {selectedBird.place_of_found}</p>
                <p><strong>Diet</strong> {selectedBird.diet}</p>
                <p><strong>Desctription</strong> {selectedBird.description}</p>
                <p><strong>Weight</strong> {selectedBird.weight_kg}</p>
                <p><strong>Height</strong> {selectedBird.height_cm}</p>
             
                
              </div>
            </>
          )}
        </Box>
      </Modal>

   </div>
   </>
  )
}

export default Birds