import '../App.css'
import Searchbar from '../Components/Searchbar'
import Cards from '../Components/Cards'
import { NavLink, useLocation } from 'react-router-dom'

function Home() {
    return (
        <>
            <div style={{ backgroundImage: "url('https://www.heritagedaily.com/wp-content/uploads/2017/05/16279740174_9d932bdf6d_k-scaled.jpg')",backgroundSize: "cover",
        backgroundPosition: "center", }} className=" text-white rounded-l h-[80vh] md:h-screen bg-cover w-screen flexad flex-col gap-20 ">
                <div className='flexad flex-col '>
                    <p className='text-6xl font-bold text-center'>WELCOME TO SAFAR</p>
                    <p className='text-2xl font-bold text-center' >EXPLORE INDIA WITH NO SUFFER</p>
                </div>
                <Searchbar />
            </div>

            <div id='Tours' className='my-32 flexad w-full'>
                <div className='w-[90%] md:w-[80%] flexad flex-col gap-5'>
                    <div className='flex flex-col md:flex-rowitems-center justify-between'>
                        <p className='text-5xl font-bold md:w-1/2 md:pl-10'>Indian Tourism</p>
                        <p className='text-xl font-semibold md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod vero mollitia, optio quia obcaecati!</p>
                    </div>
                    <div className="images flexad flex-col w-full gap-5">

                        <div className="1 flex flex-col md:flex-row w-full gap-5">
                            <NavLink to='/HotelData' state={{ city: 'AGRA' }} className='bg-[url(https://storyateverycorner.com/wp-content/uploads/2023/12/Taj-Mahal-at-sunrise-4-1024x585-1024x585.jpeg)] bg-cover bg-no-repeat md:w-3/5 h-65 rounded-3xl flex flex-col justify-end items-end pr-5'>
                                <p className='text-3xl text-white font-bold pl-3'>Taj Mahal</p>
                                <p className='text-xl text-white font-bold pl-3'>Agra, Uttar Pradesh</p>
                            </NavLink>
                            <NavLink to='/HotelData' state={{ city: 'DELHI' }} className='bg-[url(https://vagatrip.com/storage/blogs/April2023/cover-10.jpg)] bg-cover bg-no-repeat md:w-2/5 h-65 rounded-3xl flex flex-col justify-end items-end pr-5'>
                                <p className='text-3xl text-white font-bold pl-3'>India Gate</p>
                                <p className='text-xl text-white font-bold pl-3'>Delhi</p>
                            </NavLink>
                        </div>

                        <div className="2 flex w-full flex-col md:flex-row gap-5">
                            <NavLink to='/HotelData' state={{ city: 'AMRITSAR' }} className='bg-[url(https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg)] bg-cover bg-no-repeat md:w-2/5 h-65 rounded-3xl flex flex-col justify-end'>
                                <p className='text-3xl text-white font-bold pl-3'>Golden Temple</p>
                                <p className='text-xl text-white font-bold pl-3'>Amritsar, Punjab</p>
                            </NavLink>
                            <NavLink to='/HotelData' state={{ city: 'HAMPI' }} className='bg-[url(https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg)] bg-cover md:w-3/5 h-65 rounded-3xl flex flex-col justify-end'>
                                <p className='text-3xl text-white font-bold pl-3'>Hampi</p>
                                <p className='text-xl text-white font-bold pl-3'>Karnataka</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div >

            <div id="Services" className='w-full flexad flex-col mb-20'>
                <p className='text-5xl font-bold ml-24 w-[80%]'>Our Services</p>
                <div className="w-[90%] flexad flex-col md:flex-row gap-10 mb-10">
                    <NavLink to="/HotelData" state={{ city: "'?'" }} className="md:w-2/5 flexad flex-col h-3/5 shadow rounded-2xl">
                        <Cards src="https://www.kayak.co.in/rimg/dimg/dynamic/76/2023/08/eef8369398e2d8ac1191ee20223f219f.webp" Title="Hotels" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
                    </NavLink>

                    <NavLink to="/TrainData" className="md:w-2/5 flexad flex-col h-3/5 shadow rounded-2xl">
                        <Cards src="https://etimg.etb2bimg.com/photo/111281165.cms" Title="TRAINS" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Home

