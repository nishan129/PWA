import React from 'react';

import { DoorOpen ,Search } from 'lucide-react';
export default function SearchForm() {
  return (
    <form className='flex items-center'>
        <label for="voice-search" className='sr-only'>
            Search
        </label>
        <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <Search className='w-4 h4 text-gray-500 dark:text-gray-400' />
            </div>
            <input type="text" id='voice-search' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600'
            placeholder='Search Products...'
            required/>

        </div>
        {/* <button type="submit"
        className='inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-green-600 rounded-lg border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600'>
            <Search className='w-4 h-4 me-2' />
            <span>Search</span>
        </button> */}
    </form>
    
  );
}
