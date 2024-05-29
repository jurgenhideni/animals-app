import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import { Luckiest_Guy } from 'next/font/google';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: ['400']
});

const poppins = Poppins({
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700']
 });

const Dogs = () => {
  const [search, setSearch] = useState("");
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Modal:
  const [open, setOpen] = useState(false);
  const [selectedDog, setselectedDog] = useState(null);
  const handleOpen = (dog) => {
    setselectedDog(dog);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
 


  const fetchDogs = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/dogs?search=${query}`);
      if (!response.ok) {
        throw new Error('Network response error');
      }
      const data = await response.json();
      setDogs(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchDogs(search);
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div className={`${poppins.className}`}>
      <div className='flex justify-between m-5 items-center max-md:block'>
        <h1 className={`${luckiest.className} text-[3rem] text-center`}>Gallery</h1>
        <div className='flex max-md:justify-center items-center rounded-md'>
          <input
            type="search"
            placeholder=' Search for a dog...'
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
          {dogs.map((dog) => (
            <div key={dog.id} onClick={() => handleOpen(dog)}>
              <div className='rounded-b-xl text-center w-fit shadow-[-2px_2px_20px_rgba(0,0,0,0.2)]'>
                <img src={dog.image} alt="dog" className='max-w-[250px] rounded-t-[10px]' />
                <div className='p-3'>
                  <p className='font-bold '>{dog.name}</p>
                  <p>{dog.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={handleClose} className='max-h-full flex justify-center items-center'>
        <Box sx={{ bgcolor: 'background.paper',
         width: '300px',
         borderRadius: '10px',
         outline:'none',
         
         }}>
          {selectedDog && (
            <>
              
              <div className='p-10 flex flex-col gap-5'>
                <h2 className={`${poppins.className} font-bold text-[1.5rem] text-center`} >{selectedDog.name}</h2>
                <img src={selectedDog.image} alt="dog" className='max-w-[200px]' />
                <p><strong>Breed Group:</strong> {selectedDog.breed_group}</p>
                <p> <strong>Size:</strong> {selectedDog.size}</p>
                <p><strong>Lifespan:</strong> {selectedDog.lifespan}</p>
                <p><strong>Origin</strong> {selectedDog.origin}</p>
                <p><strong>Temperament</strong> {selectedDog.temperament}</p>
                <p><strong>Colors</strong> {selectedDog.colors.join(', ')}</p>
                <p><strong>Desctription</strong> {selectedDog.description}</p>
                
              </div>
            </>
          )}
        </Box>
      </Modal>
    </div>
  )
}

export default Dogs;
