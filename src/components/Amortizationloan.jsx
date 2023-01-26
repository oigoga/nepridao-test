import React from "react";
import { useState } from "react";
import { BiRadioCircle } from "react-icons/bi";
import { IoRadioButtonOffOutline } from "react-icons/io5";

const Amortizationloan = () => {
    const [toggle, setToggle] = useState(false);
  return (
    
    <>
      <div className="border-dotted border-black border-2 rounder-sm p-5">
        <div className="flex flex-col">
          <div className="flex ">
          <button className="p-4 "  onClick={() => setToggle((prev) => !prev)}>
            <IoRadioButtonOffOutline className="text-teal h-5 w-5" />
          </button>
          <div>
            <h3 className="font-bold text-xl">Amortization Loan</h3>
            <p>Pay off a debt over time in equal installments</p>
          </div>
          </div>
          {toggle? (
            
            <div className="border-t-2 border-gray my-4 ">
                <div></div>
                <div><table>
                    <tr>
                        <td>rags</td>
                        <td>reagss</td>
                    </tr>
                </table>'</div>
                
            </div>
          ): null}
          
        </div>
      </div>
    </>
  );
};

export default Amortizationloan;
