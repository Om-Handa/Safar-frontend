import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Trains from "../Components/Trains"

function TrainData() {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    const [showRender, setShowRender] = useState(false)
    const [city1, setcity1] = useState("")
    const [city2, setcity2] = useState("")
    const [date, setdate] = useState("")

    const handleChangecity1 = (e) => {
        setcity1(e.target.value)
    }
    const handleChangecity2 = (e) => {
        setcity2(e.target.value)
    }
    const handleChangedate = (e) => {
        setdate(e.target.value)
    }

    return (
        <div>
            <nav className="h-[15vh] md:h-[20vh] bg-amber-950 text-white rounded-l w-screen flexad pb-5">
                <div className='flex justify-center items-end md:w-1/2 w-11/12 h-full'>
                
                    <input type="text" className="w-1/5 md:w-1/4 border h-1/4 px-2 " placeholder='From' value={city1} onChange={handleChangecity1} />

                    <input type="text" className="w-1/5 md:w-1/4 border h-1/4 px-2 " placeholder='To' value={city2} onChange={handleChangecity2} />

                    <input type="date" placeholder='Date' className="w-1/3 md:w-1/4 border-black border h-1/4 px-2 text-[#5c737f] invert-100" onChange={handleChangedate} />

                    <NavLink to="/TrainData" className="bg-white h-1/4 text-black font-bold w-1/3 md:w-1/4 flexad w-1/2 ">
                        <button className="text-sm" onClick={()=>setShowRender(!showRender)}> SEARCH TRAINS</button>
                    </NavLink>
                </div>
            </nav>
            <main className="w-full h-auto my-10 flexad flex-col gap-5 ">
                {!showRender?<p className="text-3xl font-bold text-red-600">"No Trains To Show"</p>: <Trains city1={city1} city2={city2} date={date}/>}
            </main>
        </div>

    )
}

export default TrainData;


            // <div style={{
            //     backgroundImage: "url('https://www.heritagedaily.com/wp-content/uploads/2017/05/16279740174_9d932bdf6d_k-scaled.jpg')", backgroundSize: "cover",
            //     backgroundPosition: "center",
            // }} className=" text-white rounded-l h-[80vh] md:h-screen bg-cover w-screen flexad flex-col gap-20 ">
            //     <div className='flexad flex-col '>
            //         <p className='text-6xl font-bold text-center'>WELCOME TO SAFAR</p>
            //         <p className='text-2xl font-bold text-center' >EXPLORE INDIA WITH NO SUFFER</p>
            //     </div>
            //     <Searchbar />
            // </div>

            // <div id='Tours' className='my-32 flexad w-full'>
            //     <div className='w-[90%] md:w-[80%] flexad flex-col gap-5'>
            //         <div className='flex flex-col md:flex-rowitems-center justify-between'>
            //             <p className='text-5xl font-bold md:w-1/2 md:pl-10'>Indian Tourism</p>
            //             <p className='text-xl font-semibold md:w-1/2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quod vero mollitia, optio quia obcaecati!</p>
            //         </div>
            //         <div className="images flexad flex-col w-full gap-5">

            //             <div className=" flex flex-col md:flex-row w-full gap-5">
            //                 <NavLink to='/HotelData' state={{ city: 'AGRA' }} style={{
            //                     backgroundImage: "url('https://storyateverycorner.com/wp-content/uploads/2023/12/Taj-Mahal-at-sunrise-4-1024x585-1024x585.jpeg')", backgroundSize: "cover",
            //                     backgroundPosition: "center",
            //                 }} className='bg-no-repeat md:w-3/5 h-64 rounded-3xl flex flex-col justify-end items-end pr-5'>
            //                     <p className='text-3xl text-white font-bold pl-3'>Taj Mahal</p>
            //                     <p className='text-xl text-white font-bold pl-3'>Agra, Uttar Pradesh</p>
            //                 </NavLink>
            //                 <NavLink to='/HotelData' state={{ city: 'DELHI' }} style={{
            //                     backgroundImage: "url('https://vagatrip.com/storage/blogs/April2023/cover-10.jpg')", backgroundSize: "cover",
            //                     backgroundPosition: "center",
            //                 }} className=' bg-no-repeat md:w-2/5 h-64 rounded-3xl flex flex-col justify-end items-end pr-5'>
            //                     <p className='text-3xl text-white font-bold pl-3'>India Gate</p>
            //                     <p className='text-xl text-white font-bold pl-3'>Delhi</p>
            //                 </NavLink>
            //             </div>

            //             <div className=" flex w-full flex-col md:flex-row gap-5">
            //                 <NavLink to='/HotelData' state={{ city: 'AMRITSAR' }} style={{
            //                     backgroundImage: "url('https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg')", backgroundSize: "cover",
            //                     backgroundPosition: "center",
            //                 }} className=' bg-no-repeat md:w-2/5 h-64 rounded-3xl flex flex-col justify-end'>
            //                     <p className='text-3xl text-white font-bold pl-3'>Golden Temple</p>
            //                     <p className='text-xl text-white font-bold pl-3'>Amritsar, Punjab</p>
            //                 </NavLink>
            //                 <NavLink to='/HotelData' state={{ city: 'HAMPI' }} style={{
            //                     backgroundImage: "url('https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg')", backgroundSize: "cover",
            //                     backgroundPosition: "center",
            //                 }} className=' md:w-3/5 h-64 rounded-3xl flex flex-col justify-end'>
            //                     <p className='text-3xl text-white font-bold pl-3'>Hampi</p>
            //                     <p className='text-xl text-white font-bold pl-3'>Karnataka</p>
            //                 </NavLink>
            //             </div>
            //         </div>
            //     </div>
            // </div >

            // <div id="Services" className='w-full flexad flex-col mb-20'>
            //     <p className='text-5xl font-bold ml-24 w-[80%]'>Our Services</p>
            //     <div className="w-[90%] flexad flex-col md:flex-row gap-10 mb-10">
            //         <NavLink to="/HotelData" state={{ city: "'?'" }} className="md:w-2/5 flexad flex-col h-3/5 shadow rounded-2xl">
            //             <Cards src="https://www.kayak.co.in/rimg/dimg/dynamic/76/2023/08/eef8369398e2d8ac1191ee20223f219f.webp" Title="Hotels" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
            //         </NavLink>

            //         <NavLink to="/TrainData" className="md:w-2/5 flexad flex-col h-3/5 shadow rounded-2xl">
            //             <Cards src="https://etimg.etb2bimg.com/photo/111281165.cms" Title="TRAINS" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
            //         </NavLink>
            //     </div>
            // </div>