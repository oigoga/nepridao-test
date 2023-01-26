import React from "react";
import { useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import { IoRadioButtonOffOutline } from "react-icons/io5";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const Amortizationloan = () => {
  const [toggle, setToggle] = useState(false);
  const [showTable, setShowTabe] = useState(false);
  return (
    <>
      <div className="border-dashed border-black border-2 my-5 rounder-sm p-5">
        <div className="flex flex-col">
          <div className="flex ">
            <button className="p-3 " onClick={() => setToggle((prev) => !prev)}>
              <IoRadioButtonOffOutline className="text-teal h-5 w-5" />
            </button>
            <div>
              <h3 className="font-bold text-xl">Amortization Loan</h3>
              <p>Pay off a debt over time in equal installments</p>
            </div>
          </div>
          {toggle ? (
            <div className="border-t-2 border-gray my-4 py-3 flex flex-col justify-between">
            <div className="my-3 self-end">Graph</div>
              <div>
                <button className="font-semibold underline text-lg my-3" onClick={() => setShowTabe((prev) => !prev)}>{showTable? "Hide Table": "Show Table"}</button>
              {showTable? (
                <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-black  dark:text-gray-400">
                  <thead className="text-xs text-bg-color bg-black  uppercase ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Principal
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Interest
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Balance
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td
                        
                        className="px-6 py-4 font-medium text-gray-900 "
                      >
                        01/02/23
                      </td>
                      <td className="px-6 py-4">35 276 .00 USDC</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td
                       
                        className="px-6 py-4 font-medium text-gray-900 "
                      >
                        01/03/23
                      </td>
                      <td className="px-6 py-4">35 776 .00 USDC</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b border-black">
                      <td
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        01/04/23
                      </td>
                      <td className="px-6 py-4">36 283 .00 USDC</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b border-black">
                      <td
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        01/05/23
                      </td>
                      <td className="px-6 py-4">36 776 .00 USDC</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 border-b border-black">
                      <td
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        01/06/23
                      </td>
                      <td className="px-6 py-4">37 318 .00 USDC</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              ): null}
              
              </div>
             
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Amortizationloan;
