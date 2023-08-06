import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { StarIcon as outlinedStartIcon } from '@heroicons/react/24/solid';

function Rating() {
  return (
    <div className='flex items-center -ml-1'>
        {Array.from({length: 5 }).map((_, index) => (
            <StarIcon key={index} className='h-6 w-6 flex-shrink-0 text-blue-400'/>
        ))}
        {Array.from({length: -1 }).map((_, index) => (
            <outlinedStartIcon key={index} className='h-6 w-6 flex-shrink-0 text-blue-400'/>
        ))}
    </div>
  )
}

export default Rating;