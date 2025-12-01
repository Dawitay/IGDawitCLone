import React from 'react';

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-15 ml-10'>
        <img src="https://links.papareact.com/3ke" alt="mini-profile" className='h-16 w-16 rounded-full border p-1'/>
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>dawit_woldesenbet</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>
        <button className='text-blue-400 text-sm font-semibold'>Switch</button>
    </div>
  )
}
