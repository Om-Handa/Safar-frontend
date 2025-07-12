import {useState,useEffect} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/logo2.png'
import Searchbar from './Searchbar'

const Navbar = () => {
    const [isOpen, setisOpen]=useState(false)
    const location =useLocation()
    const isHome=location.pathname==='/'
    return (    
        <div>
            <header className={`absolute p-3 top-0 left-0 w-full z-50 text-white ${isHome?"": "bg-amber-950"}`}>
                <nav className="flex items-center justify-between px-3 md:px-10 ">
                    <button className=' md:hidden inline-block' onClick={()=>setisOpen(!isOpen)}><svg className="w-8 h-8" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{isOpen ? (<path d="M6 18L18 6M6 6l12 12" />) : (<path d="M3 12h18M3 6h18M3 18h18" />)} </svg></button>

                    <NavLink to="/"><img src={logo} className='h-12'></img></NavLink>
                    
                    <div className='flex space-x-10'>
                        <ul className={`md:rounded-full gap-6 px-6 md:py-2 flexad flex-col md:flex-row absolute md:static md:bg-white/10 md:backdrop-blur-md top-full left-0 bg-amber-950 md:shadow-md w-full transition-all duration-300 md:text-lg text-xl ease-in-out overflow-hidden ${isOpen?"max-h-96 py-4 ":"max-h-0 md:max-h-none py-0 opacity-0 md:py-0 md:opacity-100"}`}>
                            <NavLink to="/" onClick={()=>setisOpen(!isOpen)}><li>Home</li></NavLink>
                            <HashLink smooth to="/#Tours" onClick={()=>setisOpen(!isOpen)}><li>Tour</li></HashLink>
                            <HashLink smooth to="/#Services" onClick={()=>setisOpen(!isOpen)}><li>Services</li></HashLink>
                            <NavLink to="/About" onClick={()=>setisOpen(!isOpen)}><li>About</li></NavLink>
                            <NavLink to="/ContactUs" onClick={()=>setisOpen(!isOpen)}><li>Contact</li></NavLink>
                            <NavLink to="/HotelData" onClick={()=>setisOpen(!isOpen)} className="md:hidden"><li>Hotels</li></NavLink>
                            <NavLink to="/TrainData" onClick={()=>setisOpen(!isOpen)} className="md:hidden"><li>Trains</li></NavLink>
                        </ul>
                    </div>
                    <NavLink to="/Login" className="bg-white text-black text-xl font-bold px-6 py-2 rounded-full"> Login </NavLink>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
