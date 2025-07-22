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

                    <NavLink to="/TrainData" className="bg-white h-1/4 text-black md:font-bold w-1/3 md:w-1/4 flexad w-1/2 ">
                        <button className="text-sm" onClick={()=>setShowRender(!showRender)}> SEARCH TRAINS</button>
                    </NavLink>
                </div>
            </nav>
            <main className="w-full min-h-[60vh] my-10 flexad flex-col gap-5 ">
                {!showRender?<p className="text-3xl font-bold text-red-600">"No Trains To Show"</p>: <Trains city1={city1} city2={city2} date={date}/>}
            </main>
        </div>

    )
}

export default TrainData;
