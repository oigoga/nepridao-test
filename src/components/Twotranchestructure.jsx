import React from "react";
import { IoRadioButtonOffOutline } from "react-icons/io5";
import Twotranchepiechart from "./graphs/Twotranchepiechart";
import { FaCircle } from "react-icons/fa";
import { RiRadioButtonFill } from "react-icons/ri";
import { useState } from "react";

const Twotranchestructure = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle ? (
        <div className="border-dashed border-2 bg-white px-5 my-10 border-black">
          <div className="flex justify-between border-b-2 border-grey py-3">
            <div className="flex">
              <button
                className="mr-2 text-teal"
                onClick={() => setToggle((prev) => !prev)}
              >
                <RiRadioButtonFill className="h-5 w-5" />
              </button>
              <h5 className="ml-2 mt-2 font-semibold text-xl">
                Two Tranche Structure
              </h5>
            </div>
            <div className="py-3">
              <button className="underline">Edit</button>
            </div>
          </div>
          <div className="flex justify-around  py-4 my-4 font-Montserrat">
            <div className="h-48 w-48 p-5">
              <Twotranchepiechart />
            </div>

            <div className="flex justify-around">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Principal
                    </th>
                    <th scope="col" className="font-bold px-6 py-3">
                      Expected APR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="flex px-6 py-4">
                      <FaCircle className="mt-1  mx-2 text-dark-mint" />
                      <p className="text-md font-medium">Senior</p>
                    </td>
                    <td className="px-6 py-4">100%</td>
                    <td className="px-6 py-4 text-right font-semibold">7.9%</td>
                  </tr>
                  <tr className="text-grey">
                    <td className="flex px-6 py-4">
                      <p className="text-md text-black ml-6 font-medium">
                        Mezzanine
                      </p>
                    </td>
                    <td className="px-6 py-4">/</td>
                    <td className="px-6 py-4 text-right font-semibold">/</td>
                  </tr>

                  <tr className="text-black">
                    <td className="flex px-6 py-4">
                      <FaCircle className="mt-1 mx-2 text-green" />
                      <p className="text-md text-black font-medium">Junior</p>
                    </td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4 text-right font-semibold">
                      28.9%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-dashed border-2 px-5 my-10 border-black">
          <div className="flex justify-between border-b-2 border-grey py-3">
            <div className="flex">
              <button
                className="mr-2 text-teal"
                onClick={() => setToggle((prev) => !prev)}
              >
                <IoRadioButtonOffOutline className="h-5 w-5" />
              </button>
              <h5 className="ml-2 mt-2 font-semibold text-xl">
                Two Tranche Structure
              </h5>
            </div>
            <div className="py-3">
              <button className="underline">Edit</button>
            </div>
          </div>
          <div className="flex justify-around  py-4 my-4 font-Montserrat">
            <div className="h-48 w-48 p-5">
              <Twotranchepiechart />
            </div>

            <div className="flex justify-around">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">
                      Principal
                    </th>
                    <th scope="col" className="font-bold px-6 py-3">
                      Expected APR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="flex px-6 py-4">
                      <FaCircle className="mt-1  mx-2 text-dark-mint" />
                      <p className="text-md font-medium">Senior</p>
                    </td>
                    <td className="px-6 py-4">100%</td>
                    <td className="px-6 py-4 text-right font-semibold">7.9%</td>
                  </tr>
                  <tr className="text-grey">
                    <td className="flex px-6 py-4">
                      <p className="text-md text-black ml-6 font-medium">
                        Mezzanine
                      </p>
                    </td>
                    <td className="px-6 py-4">/</td>
                    <td className="px-6 py-4 text-right font-semibold">/</td>
                  </tr>

                  <tr className="text-black">
                    <td className="flex px-6 py-4">
                      <FaCircle className="mt-1 mx-2 text-green" />
                      <p className="text-md text-black font-medium">Junior</p>
                    </td>
                    <td className="px-6 py-4">20%</td>
                    <td className="px-6 py-4 text-right font-semibold">
                      28.9%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Twotranchestructure;
