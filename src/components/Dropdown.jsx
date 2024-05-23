import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <button onClick={toggleDropdown} className='flex items-center gap-2'>
        Gallery <FaChevronDown />
      </button>
      {isOpen && (
        <div className='absolute mt-2 flex flex-col bg-white shadow-lg border items-start w-[80px] rounded-lg z-10'>
          <Link href='/dogs' className='p-2 w-full border-b hover:bg-gray-200'>Dogs</Link>
          <Link href='/cats' className='p-2 w-full border-b hover:bg-gray-200'>Cats</Link>
          <Link href='/birds' className='p-2 w-full hover:bg-gray-200'>Birds</Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
