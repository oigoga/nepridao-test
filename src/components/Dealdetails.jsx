import React from "react";
import Amortizationloan from "./Amortizationloan";
import Bulletloan from "./Bulletloan";

const Dealdetails = () => {
  return (
    <>
      <div className="py-5 font-Montserrat font-light">
        <p>Please fill in all information needed to submit a new deal</p>
        
     <form className="flex justify-between mt-4">
     <div className="w-1/2 mr-5">
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deal Name</label>
            <input type="text" id="deal-name" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="FinLend - Deal 1" required/>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Borrower Key</label>
            <input type="text" id="borrower key" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="CRDx2YkdtYtghavsGslSHSHDNHVSGCyydsdk" required/>
        </div>
        <div className="mb-6 ">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">More Details</label>
            <textarea type="text" id="more-details" rows={6} className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="Type more information" required/>
        </div>
        
        
        </div>
        <div className="w-1/2 ml-5">
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-black ">Principal</label>
            <input type="number" id="principal" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="1000000" required/>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-black ">Financing Fee</label>
            <input type="number" id="financing-fee" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="17" required/>
        </div>
        <div className="mb-6">
            <label  className="block mb-2 text-sm font-medium text-black   ">Time To Maturity</label>
            <input type="number" id="maturity-time" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="720" required/>
        </div>
        <div className ="mb-6">
            <label  className="block mb-2 text-sm font-medium text-gray ">Repayment period</label>
            <input type="text" id="repayment-period" className="shadow-sm bg-transparent border border-grey text-black text-sm rounded-lg focus:ring-teal focus:border-teal block w-full p-2.5 placeholder:text-black " placeholder="30 days" required/>
        </div>
        
       
        </div>
     </form>
     <Amortizationloan/>
     <Bulletloan/>

    </div>
   
    </>
  );
};

export default Dealdetails;
