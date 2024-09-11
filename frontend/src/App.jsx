
import './App.css'
import Navbar from './component/Navbar.jsx'
import Login from './component/Login.jsx'
import { Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
     <Routes>
        <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Login/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default App
