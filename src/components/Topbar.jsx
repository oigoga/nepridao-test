import React from 'react'
import {NavLink} from 'react-router-dom'


const Topbar = () => {
  return (
    <>
      <div className="flex text-base font-semibold text-grey border-b-2 border-black py-8 ">
              <NavLink to={'/deal'} className="text-grey border-b-4 w-1/3 mr-2" >
              <button >
                <div className="text-left">1. Deal  details</div>
              </button>

              </NavLink>
              <NavLink to={'/tranche'} className="text-grey border-b-4 w-1/3 mx-2  " activeClassName='text-black'>
              <button >
                <div className="text-left">2. Tranche Structure</div>
              </button>

              </NavLink>
              <NavLink to={'/review'} className="text-grey border-b-4 w-1/3 ml-2" activeClassName='text-black' >
              <button >
                <div className="text-left">3. Review</div>
              </button>

              </NavLink>
              
            </div>
    </>
  )
}

export default Topbar
