import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
   <Link href='/' className='flex items-center space-x-2'>
    <Image src='/logo.svg' alt='Logo' width={42} height={42}/>
    <span className='font-extrabold hidden text-3xl text-gray-700 sm:inline-block'>
      Mr.Ice
    </span>
   </Link>
  )
}

export default Logo;