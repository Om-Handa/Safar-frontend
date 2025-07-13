import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#f2ede6]'>
      <Navbar />

      <div className='flex-grow'>
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default App
// #f2ede6