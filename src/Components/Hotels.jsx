import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Hotels = ({ city }) => {
    const [hotelData, sethotelData] = useState([])
    const cityName = typeof city === "string" ? city : city?.name || "";
    const getHighQualityImage = (url) => {
        return url.replace("square60", "max1024");
    };

    useEffect(() => {
        if (!cityName) return;
        const cached = sessionStorage.getItem(`hotels_${cityName}`);
        if (cached) {
            sethotelData(JSON.parse(cached));
            return;
        }
        const baseURL = import.meta.env.VITE_API_BASE_URL;
        async function gethotels() {
            try {
                const res = await fetch(`${baseURL}/api/hotels?city=${encodeURIComponent(cityName)}`)
                if (!res.ok) {
                    const txt = await res.text();
                    console.error("backend status:", res.status, txt);
                    sethotelData([])
                    return;
                }
                const resdata = await res.json()
                const hotels = resdata.data ?? [];
                sethotelData(hotels)
                sessionStorage.setItem(`hotels_${cityName}`, JSON.stringify(hotels));
            } catch (err) {
                console.log("fetch error:", err);
                sethotelData([]);
            }
        }
        sethotelData(null)
        gethotels();
    }, [cityName])

    if (hotelData == null) {
        return <p className='text-3xl mt-15 text-red-700 flex justify-center font-bold min-h-[50vh]'>Loading...</p>
    }
    if (hotelData.length === 0) {
        return <p className='text-3xl mt-15 text-red-700 flex justify-center font-bold min-h-[50vh]'>No Hotels To Show</p>
    }

    return (
        <div className='flexad flex-col md:flex-row md:flex-wrap mt-6 mb-16 gap-5'>
            {hotelData.map((h, i) => (
                <NavLink to="/HotelDetail" key={i} className=' w-[90%] md:w-[30%] bg-white rounded-xl shadow' state={{ hoteldetail: h }}>
                    <img src={getHighQualityImage(h?.photoUrls[0])} alt="" className='h-48 w-full object-cover rounded-t-xl' />
                    <p className='mx-2 mt-2 text-xl font-semibold min-h-[3rem] line-clamp-2 leading-snug'>{h?.name}</p>
                    <p className='mx-2 mb-3 text-lg flex justify-between'><span>{h?.wishlistName}</span><span>₹ {h?.priceBreakdown?.grossPrice?.value.toLocaleString()}</span></p>
                </NavLink>
            ))}
        </div>
    )
}

export default Hotels


