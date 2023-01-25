import React from 'react'
import Card from './Card'
function Navabar() {
  return (
    
        <nav className='flex justify-end mr-3 my-4'>
        <button className='border-2 border-black shadow-sm shadow-grey px-4 py-1 mx-3  w-24'>
            Active 
        </button>
        <button className='border-2 border-black px-4 mx-3 py-1 shadow-sm shadow-grey  w-32'>
           Address 
        </button>
    </nav>
    
    
  )
}

export default Navabar