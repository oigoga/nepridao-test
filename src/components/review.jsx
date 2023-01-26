import React from 'react'
import Topbar from './Topbar'
import { HiKey } from "react-icons/hi";
import { RiShareBoxFill } from "react-icons/ri";
import Amortizationloan from './Amortizationloan';
import Reviewtranchestructure from './Reviewtranchestructure';
import Reviewmezzanine from './Reviewmezzanine';
import Reviewjunior from './Reviewjunior';

const Review = () => {
   
  return (
    
    <>
    <div className='flex justify-between py-3  font-Montserrat  border-b-2 border-grey'>
        <h2 className='text-6xl font-bold'>Fintech Deal-1 </h2>
        <button className='bg-yellow rounded-3xl px-3 font-bold text-sm h-10 mt-3' >Open for Funding</button>
        <button className='bg-teal text-bg-color p-3 font-bold rounded-sm'>Activate Deal</button>
    </div>
    <div className='flex justify-between font-Montserrat  border-b-2 border-grey py-4'>
    <div className='flex'>
        <HiKey className='my-1'/>
       <p className='font-semibold'>Borrower Public Key: EzjdHndnH...</p> 
        <button className='mx-1'><RiShareBoxFill className='my-1'/></button>
    </div>
    <div className='flex'>
        <HiKey className='my-1'/>
       <p className='font-semibold'>Deal Address: EzjdHndnH...</p>
        <button className='mx-1'><RiShareBoxFill className='my-1'/></button>
    </div>
    </div>
    <div className='flex justify-around py-5 font-Montserrat'>
        <div className='border-2 border-grey p-5 w-1/3 mr-2' >
            <p className='text-md font-medium'>Principal</p>
            <h4 className='text-xl font-bold'>1M USDC</h4>
        </div>
        <div className='border-2 border-grey p-5 w-1/3 mx-2' >
            <p className='text-md font-medium'>Interest</p>
            <h4 className='text-xl font-bold'>131.3K USDC</h4>
        </div>
        <div className='border-2 border-grey p-5 w-1/3 ml-2' >
            <p className='text-md font-medium'>Financing Fee</p>
            <h4 className='text-xl font-bold'>16%</h4>
        </div>
    </div>
    <div>
        <h4 className='text-3xl font-semibold'>Repayment Schedule</h4>
            <Amortizationloan/>
    </div>
    <div>
        <h4 className='text-3xl font-semibold'>Tranche STructure </h4>
           <Reviewtranchestructure/>
    </div>
    <div>
        <h4 className='text-3xl font-semibold'>Invest in Tranches</h4>
            <Reviewmezzanine/>
            <Reviewjunior/>
    </div>
   </>
   
  
  )
}

export default Review
