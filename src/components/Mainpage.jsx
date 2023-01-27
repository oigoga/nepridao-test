import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Card";
import Review from "./review";
import Navabar from "./Navabar";
import { IoIosArrowBack } from "react-icons/io";
import Topbar from "./Topbar";
import Dealdetails from "./Dealdetails";
import Tranchestructure from './Tranchestructure';


const mainpage = () => {
 

  return (
    <Card>
      <div className="flex flex-col  ">
        <div>
          <Navabar />
        </div>

        <div className="flex flex-col  text-black py-5  " id="Mainpage">
          <button className="flex  text-teal font-bold">
            <div className="mt-1 mr-2 border-teal rounded-md h-4 border-2">
              <IoIosArrowBack className="h-full" />
            </div>
            <p className="-mt-0.5">Go back to all deals</p>
          </button>
          <div className="py-3">
            <h3 className="font-bold text-4xl">Create New Deal</h3>
          </div>
          <div>
            <Topbar/>
            <Routes>
              <Route path='/deal' element={<Dealdetails/>}/>
              <Route path='/tranche' element={<Tranchestructure/>}/>
              <Route exact path='/review' element={<Review/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default mainpage;
