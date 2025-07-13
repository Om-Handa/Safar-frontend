import React, { useEffect, useState } from "react";
import Searchbar from "../Components/Searchbar.jsx";
import { useLocation } from "react-router-dom";
import star1 from "../assets/star1.png"
import star2 from "../assets/star2.png"
import star3 from "../assets/star3.png"
import star4 from "../assets/star4.png"
import star5 from "../assets/star5.png"

function HotelDetail() {
    const { state } = useLocation();
    const detail = state?.hoteldetail;
    const handleReview = () => {
        const reviewcal = Math.round((detail?.reviewScore || 1) / 2);
        switch (reviewcal) {
            case 1:
                return <img src={star1} alt="1 star" className="h-auto w-1/2" />;
            case 2:
                return <img src={star2} alt="1 star" className="h-auto w-1/2" />;
            case 3:
                return <img src={star3} alt="1 star" className="h-auto w-1/2" />;
            case 4:
                return <img src={star4} alt="1 star" className="h-auto w-1/2" />;
            case 5:
                return <img src={star5} alt="1 star" className="h-auto w-1/2" />;
            default:
                return "No Rating"
        }
    }
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
                                <div className="h-1/2 p-3 w-full text-2xl font-bold">Rating: {detail.reviewScore}</div>
                            </div>
                            <div className="md:w-1/2 flexad">
                                <button className="bg-amber-950 w-3/4 md:w-auto text-white p-5 rounded-full text-2xl font-bold">Book Room</button>
                            </div>
                        </div>

                        <div className=" h-1/6 md:h-1/6 p-3 w-full text-2xl font-bold flexad">{handleReview()}</div>

                    </div>
                </div>

            </div>

        </>
    )
}

export default HotelDetail