import React from 'react'
import { CgProfile } from "react-icons/cg";
import {Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className=" absolute w-full flex items-center justify-between bg-gradient-to-b from-black px-5 py-3 ">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-2xl text-white font-bold">CINEVIBE</h1>
      </div>
      
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <CgProfile size={"24px"} className="text-white" />
        <h1 className="text-white">Prabht</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200">
          Logout
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200">
          Search Movies
        </button>
      </div>
    </div>
    <Outlet/>
  </>
  )
}

export default Navbar