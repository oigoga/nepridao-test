import React from 'react'
import { useState } from 'react';
import { IoRadioButtonOffOutline } from "react-icons/io5";
const Bulletloan = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <>
            <div className="border-dashed border-black border-2 rounder-sm p-5">
            <div className="flex flex-col">
          <div className="flex ">
            <button className="p-3 " onClick={() => setToggle((prev) => !prev)}>
              <IoRadioButtonOffOutline className="text-teal h-5 w-5" />
            </button>
            <div>
              <h3 className="font-bold text-xl">Bullet Loan</h3>
              <p>The Principal that is borrowed is paid back in <br /> full at the end of the loan term</p>
            </div>
          </div>
          {toggle ? (
            <div className="border-t-2 border-gray my-4 py-3 flex ">
            <div className="my-3 self-end">Graph</div>
              
             
            </div>
          ) : null}
        </div>
            </div>
    </>
  )
}

export default Bulletloan