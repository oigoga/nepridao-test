import React from 'react'
import { BsGraphUp } from "react-icons/bs";

const Reviewjunior = () => {
  return (
    <>
      <div className="flex flex-col font-Montserrat my-4 border-dashed border-2 border-grey">
        <h4 className="font-extrabold text-black text-2xl mx-12 mt-4">Junior</h4>
        <div className="flex justify-between w-full mx-12 my-5">
          <div className="bg-green h-96 w-1/2 flex items-center justify-center">
            <p className="text-bg-color text-center">0% filled</p>
          </div>
          <div className=" w-1/2 ml-10">
            <h5 className="text-base font-semibold">Details</h5>
            <div className="border-b-2 border-grey flex py-4 w-72 justify-between">
              <div className="flex flex-col w-1/2  ">
                <p className="">Details</p>
                <p className="font-semibold">15%</p>
              </div>
              <div className="flex w-1/2 flex-col">
                <p className="">Size</p>
                <p className="font-semibold">150000 USDC</p>
              </div>
            </div>
            <div className="my-5">
              <h5 className="text-base font-semibold">Your Investments</h5>
              <div className="border-b-2 border-grey  py-4 w-72">
                <div className="flex mb-2  ">
                  <p className="text-grey font-medium">Value: 0 USDC</p>
                </div>
                <div className="flex   mt-2">
                  <p className="text-grey font-medium">
                    Projected Value: 0 USDC
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
            <h5 className="text-base font-semibold">Invest in Tranche</h5>
            <div className="flex ">
            <input type="text" id="deal-name" className=" mr-5 shadow-sm bg-transparent border border-grey text-black text-sm  focus:ring-teal focus:border-teal block  p-2.5 placeholder:text-black " placeholder="Amount" required/>
            <button className=" flex bg-teal py-3 px-5 rounded-sm text-bg-color font-semibold">
            <BsGraphUp className="mx-2 mt-1 font-bold"/>
            Invest
            </button>
          
            </div>
            <p className="my-2 font-semibold">Maximum Amount: 150000 USDC</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reviewjunior
