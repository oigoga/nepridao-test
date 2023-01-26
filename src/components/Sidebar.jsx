import React from "react";
import { useState } from "react";
import Mainpage from  './Mainpage'

const sidebar = () => {
  

  return (
    <>
      <div className=" w-64 z-10 fixed left-0 h-screen bg-black font-Montserrat text-bg-color">
        <div className="text-bg-color border-b-2 p-1 border-bg-color w-1/6 m-3 ">
          <h3 className="font-Montserrat font-light">
            CRE <br /> DIX
          </h3>
        </div>
        <div className="flex flex-col justify-between mt-60 font-bold">
          <button className="p-2 my-2" >
            Invest/Withdraw
          </button>
          <button  className="bg-bg-color text-black p-2 my-2" >
            Deals
          </button>
        </div>

        
      </div>
     
    </>
  );
};

export default sidebar;
