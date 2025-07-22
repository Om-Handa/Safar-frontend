import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function HotelDetail() {
    const { state } = useLocation();
    const detail = state?.hoteldetail;
    const reviewcal = Math.round((detail?.reviewScore) / 2);
    const getHighQualityImage = (url) => {
        return url.replace("square60", "max1024");
    };
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    return (
        <>
            <div className="h-[15vh] md:h-[20vh] text-white  w-screen flex justify-center items-end ">
                <Searchbar />
            </div>
            <div className=" my-10 md:h-auto w-full flexad">

                <div className="md:w-9/12 w-11/12 flex flex-col md:flex-row border-4 rounded-2xl">
                    <div style={{ backgroundImage: `url(${getHighQualityImage(detail?.photoUrls?.[0])})` }} className="md:w-100 md:h-100 w-full h-70 bg-cover bg-no-repeat md:border-r-4 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                    </div>
                    <div className="md:w-2/3 w-full">

                        <p className="h-1/2 w-full p-3 text-3xl font-bold flex items-center md:rounded-tr-2xl bg-[#bfbba9] line-clamp-4 leading-snug">{detail?.name}, {detail?.wishlistName}</p>

                        <div className="w-full h-2/6 flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <div className="h-1/2 p-3 w-full text-2xl font-bold">Gross Price: ₹ {detail?.priceBreakdown?.grossPrice?.value.toLocaleString()}</div>
                                <div className="h-1/2 p-3 w-full text-2xl font-bold">Rating: {detail.reviewScore}/10</div>
                            </div>
                            <div className="md:w-1/2 flexad">
                                <a href="https://www.trivago.com/" target="_blank" className="w-11/12 "><button className="bg-amber-900 text-white p-3 md:p-5 w-full rounded-full text-2xl font-bold">Book Room</button></a>
                            </div>
                        </div>
                        <div className="h-1/6 flexad">
                            <div className="flexad w-full h-full">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} className={index < reviewcal ? "text-yellow-400 text-4xl md:my-0 my-3" : "text-gray-300 text-4xl md:my-0 my-3"}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default HotelDetail