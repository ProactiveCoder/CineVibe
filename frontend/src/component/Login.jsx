import React from "react";
import { useState } from "react";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Login() {
    const[isLogin,setLogin]=useState(true);
    const[name, setName]=useState("")
    const[email,setEmail]=useState("")
    const[password, setPassword]=useState("")
    const navigate=useNavigate()
    const loginhandler=()=>{
        setLogin(!isLogin)
    }
    const getInput =async (e)=>{
      e.preventDefault();
      
        if(isLogin){
          try {
            const user={email, password}
            const res=await axios.post(`${API_END_POINT}/login`,user)
            console.log(res);
            if(res.data.success){
              toast.success(res.data.message)
            }
            navigate("/home")
          } catch (error) {
            toast.error(error.response?.data?.message || "Login failed")
            console.log(error)
          }
          
        }else{
          try {
            const user={name,email, password}
            const res=await axios.post(`${API_END_POINT}/register`,user)
            console.log(res);
            if(res.data.success){
              toast.success(res.data.message)
            }
            setLogin(true)
          } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed")
            console.log(error)
            
          }
        }
      setName("")
      setEmail("")
      setPassword("")
      
    }
  return (
    <>
      <div
        className=" bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                   bg-cover bg-center h-screen w-screen   ">
        
        <div className="h-[100vh] w-[100vw]  flex items-center justify-center ">
          <form onSubmit={getInput} action="" className="  bg-black opacity-90 p-12 rounded">
            <div className="flex flex-col">
              <h1 className="text-center">{isLogin? "LogIn":"SigIn"}</h1>
              {
                !isLogin?<input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className=" m-1 p-2 bg-gray-800 text-white rounded"
                placeholder="Name"
              />:''
              }
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className=" m-1 p-2 bg-gray-800 text-white rounded"
                placeholder="Email"
              />
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="m-1 p-2 bg-gray-800 text-white rounded"
                placeholder="Password"
              />
              <button className="bg-red-500 w-20  p-2 rounded-lg ">{isLogin?"Login":"SignIN"}</button>
              <p className="mt-5">{isLogin ?"Create an account ?":"Already have an account ?"} <span className="text-blue-500 cursor-pointer" onClick={loginhandler}>{isLogin? "SignUp":"LogIN"}</span></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
