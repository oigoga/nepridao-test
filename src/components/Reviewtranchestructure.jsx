import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { FaCircle } from "react-icons/fa";
import Reviewpiechart from './graphs/Reviewpiechart';


const Reviewtranchestructure = () => {

  
  return (
    <div className='flex justify-around border-dashed border-2 py-4 border-black my-4 font-Montserrat'>
        <div className='h-60 w-60 p-5'>
        <Reviewpiechart/>
        </div>
        
<div class="flex justify-around">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                <th scope="col" class="px-6 py-3">
                    Principal
                </th>
                <th scope="col" class="font-bold px-6 py-3">
                    Expected APR
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
               
                <td class="flex px-6 py-4">
                    <FaCircle className='mt-1  mx-2 text-dark-mint'/>
                    <p className='text-md font-medium'>Senior</p>
                </td>
                <td class="px-6 py-4">
                   800000 USDC - 80%
                </td>
                <td class="px-6 py-4 text-right font-semibold">
                    5.1%
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                
                <td class="flex px-6 py-4">
                <FaCircle className='mt-1 mx-2 text-mint'/>
                    <p className='text-md font-medium'>Mezzanine</p>
                </td>
                <td class="px-6 py-4">
                    150000 USDC - 15%
                </td>
                <td class="px-6 py-4 text-right font-semibold">
                    15.8%
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                
                <td class="flex px-6 py-4">
                <FaCircle className='mt-1 mx-2 text-green'/>
                    <p className='text-md font-medium'>Junior</p>
                </td>
                <td class="px-6 py-4">
                    50000 USDC - 5%
                </td>
                <td class="px-6 py-4 text-right font-semibold">
                    28.9%
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Reviewtranchestructure