import React, { useEffect } from "react";
import Searchbar from "../Components/Searchbar";
import { useLocation } from "react-router-dom";
import Hotels from '../Components/Hotels'

function HotelData() {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    const { state } = useLocation();
    const city = state?.city;
    return (
        <>
            <div className="h-[15vh] md:h-[20vh] text-white rounded-l w-screen flex justify-center items-end ">
                <Searchbar />
            </div>
            <div className="border-b-3">
                <p className='text-4xl mt-15 mb-5 text-black flexad font-bold'>Hotels in {city}</p>
            </div>
            <Hotels city={city} />
        </>
    )
}

export default HotelData               