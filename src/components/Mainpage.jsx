import React from 'react';
import Card from './Card';
import Navabar from './Navabar';

const mainpage = () => {
  return (
   <Card>
   <div className='flex flex-col justify-end '>

   <div>
   <Navabar/>
   </div>
   
     <div className='flex justify-center z-20 text-black ml-80 w-48 bg-teal h-screen'>mainnn</div>
   </div>
   </Card>
  )
}

export default mainpage