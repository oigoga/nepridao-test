import React from "react";
import Reviewtranchestructure from "./Reviewtranchestructure";
import { IoRadioButtonOffOutline } from "react-icons/io5";
import Onetranchepiechart from "./graphs/Onetranchepiechart";
import Ontranchestructure from "./Ontranchestructure";
import Twotranchestructure from "./Twotranchestructure";
import Threetranchestructure from "./Threetranchestructure";
import { BsFileEarmark } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
const Tranchestructure = () => {
  return (
    <>
      <div className="font-Montserrat py-5 ">
        <p className="font-light mb-5">
          Please fill in all information to submit a new deal
        </p>
        <Ontranchestructure />
        <Twotranchestructure />
        <Threetranchestructure />
        <div>
          <p className="font-light my-5">
            For custom tranche structures, you can use our upload functionality.
          </p>
          <div className="border-dashed border-2 border-gray my- 4 p-4">
            <div className="flex">
              <BsFileEarmark className="mt-1.5" />
              <p className="ml-3">
                Drop your file here or  {" "}
                <span className="underline px-1 ">
                  <label for="myfile">
                      Select a file{" "}
                    <input
                      className="hidden"
                      type="file"
                      id="myfile"
                      name="myfile"
                    />{" "}
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    id="myfile"
                    name="myfile"
                  />
                </span>
              </p>
            </div>
            <p className="text-grey my-2">
                Filetypes supported: <span className="ml-2">.csv</span> 
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tranchestructure;
