import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='bg-white z-10 shadow top-0 sticky'>
        <div className='mx-auto container justify-between p-6 flex'>
            <Logo />
            <Link href='/cart'
            className='flex items-center space-x-l text-gray-700 hover:text-gray-900'
            >
            <div className='relative'>
                <ShoppingCartIcon className='w-7 h-7 flex-shrink-0'/>
            </div>
            <p className='text-lg'>$0.00 {" "}
            <span className='text-sm text-gray-500'>(0)</span>
            </p>
            </Link>
        </div>
    </header>
  )
}

export default Header