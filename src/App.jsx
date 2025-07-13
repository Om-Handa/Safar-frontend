import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

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