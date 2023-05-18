
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between bg-[#d2f9ff40]'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
