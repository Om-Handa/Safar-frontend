import React from 'react'
import { NavLink } from 'react-router-dom'
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
    return (
        <div className='bg-black py-8 flexad md:flex-row flex-col w-full gap-10 md:gap-5'>
            <div className=" text-white md:w-1/3 flexad flex-col">
                <p className='text-xl font-bold underline pb-3'>Links</p>
                <div className='flexad gap-7 w-full list-none md:list-disc'>
                    <div className='flex flex-col text-xl'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><HashLink smooth to="/#Tours">Tours</HashLink></li>
                        <li><HashLink smooth to="/#Services">Services</HashLink></li>
                    </div>
                    <div className='flex flex-col text-xl'>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/HotelData" state={{ city: "''" }}>Hotels</NavLink></li>
                        <li><NavLink to="/TrainData">Trains</NavLink></li>
                    </div>
                </div>
            </div>
            <div className="py-5 text-white w-full md:w-1/3 flexad flex-col gap-2 border-y md:border-y-0 md:border-x">
                <p className='text-2xl font-bold underline pb-3'>Our Socials</p>
                <div className='flexad md:flex-col md:gap-2 gap-10 list-none md:list-disc'>
                    <li className='md:flex'><a href="https://github.com/Om-Handa" target="_blank" className='flexad '>
                        <img src={Github} alt="" className='h-7 invert-100' />

                        <div className='hidden md:inline-block px-3 pt-3 w-1/2'>Github</div></a>
                    </li>

                    <li className='md:flex'><a href="https://www.linkedin.com/in/om-handa-62451b301" target="_blank" className='flexad'>
                        <img src={LinkedIn} alt="" className='h-7 invert-100' />

                        <div className='hidden md:inline-block px-3 pt-3 w-1/2'>LinkedIn</div></a>
                    </li>

                    <li className='md:flex'><a href="https://www.instagram.com/om_handa246/" target="_blank" className='flexad'><img src={Instagram} alt="" className='h-7 invert-100' />

                        <div className='hidden md:inline-block px-3 pt-3 w-1/2'>Instagram</div></a>
                    </li>
                </div>
            </div >
            <div className="md:w-1/3 w-full flexad flex-col gap-5 ">
                <NavLink to="/ContactUs" className="text-2xl bg-white flexad p-2 rounded-full font-bold md:w-1/2 w-3/4 ">Contact Us
                    <span className="material-symbols-outlined pl-3">open_in_new</span></NavLink>
                <NavLink to="/Login" className="text-2xl bg-white flexad p-2 rounded-full font-bold md:w-1/2 w-3/4 ">Login
                    <span className="material-symbols-outlined pl-3">open_in_new</span></NavLink>
            </div>
        </div >
    )
}

export default Footer
