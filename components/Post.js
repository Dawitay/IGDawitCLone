import React from 'react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function Post({img, username, caption, userImg}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
        {/* Post Header */}
        <div className='flex items-center p-5 bg-white'>
            <img src={userImg} alt={username} className='h-12 w-12 rounded-full object-cover p-1 border mr-3'/>
            <p className='font-bold flex-1'>{ username }</p>
            <EllipsisHorizontalIcon className='h-5'/>
        </div>
        {/* Post Image */}
        <img src={img} alt={username} className='object-cover w-full'/>
        {/* Post Buttons */}
        {/* Post Caption */}
        <div className='p-5 truncate'>      
        </div>
      <h1>{ username }</h1>
    </div>
  )
}
