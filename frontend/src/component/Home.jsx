import React, { useEffect,  } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  const user= useSelector((store)=>store.user.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!user){
      navigate("/")

  }
  },[]
    
  )
  return (
    <div>
      {/* <Navbar/> */}
      <h1>Home</h1>
      
    </div>
  )
}

export default Home