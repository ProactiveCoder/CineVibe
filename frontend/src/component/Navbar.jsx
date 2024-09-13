import React from 'react'
import { CgProfile } from "react-icons/cg";
import {Outlet, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';

function Navbar() {
  const user= useSelector((store)=>store.user.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const logoutHandler= async()=>{
    try {
      const res=await axios.get(`${API_END_POINT}/logout`);
      console.log(res);
      dispatch(setUser(null))
      navigate("/")
      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.data.message)
      console.log(error)
      
    }
  }
  return (
    <>
    <div className=" absolute w-full flex items-center justify-between bg-gradient-to-b from-black px-5 py-3 ">
      {/* Logo Section */}
      <div className="flex items-center">
        <h1 className="text-2xl text-white font-bold">CINEVIBE</h1>
      </div>
      
      {/* Profile Section */}
      {
        user && (
          <div className="flex items-center space-x-4">
          <CgProfile size={"24px"} className="text-white" />
          <h1 className="text-white">{user.name}</h1>
          <button onClick={logoutHandler} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200">
            Logout
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-200">
            Search Movies
          </button>
        </div>
      )
      }
    </div>
    <Outlet/>
  </>
  )
}

export default Navbar