
import './App.css'
import Navbar from './component/Navbar.jsx'
import Login from './component/Login.jsx'
import { Routes,Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './component/Home.jsx';
function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Route>
     </Routes>
     <Toaster/>
    </>
  )
}

export default App
