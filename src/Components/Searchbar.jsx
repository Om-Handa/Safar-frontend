import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'


const Searchbar = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    const [city, setcity] = useState("")
    const [cities, setCities] = useState([])
    const [suggestions, setsuggestions] = useState([])

    useEffect(() => {
        fetch("/indian_tourist_locations.json")
            .then((res) => res.json())
            .then((data) => {
                const allcities = data.flatMap(item => item.cities);
                setCities(allcities)
            })
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setcity(value);

        if (value.length > 1) {
            const filtered = cities.filter(loc => {
                return loc.toLowerCase().includes(value.toLowerCase())
            })
            setsuggestions(filtered.slice(0, 10));
        }
        else {
            setsuggestions([]);
        }
    }

    return (
        <div className={`w-full flexad ${isHome ? "" : "h-1/2 py-7 bg-amber-950"}`}>
            <div className="flex relative items-center justify-center gap-3 md:justify-around rounded-full backdrop-blur-md shadow-md h-10 bg-white/10 w-11/12 md:w-2/4">

                <div className="flex items-center justify-center md:justify-around w-full h-full relative">
                    <input type="text" className="md:w-4/5 w-full border h-4/5 px-2" placeholder="Search Hotels - Enter City Name" value={city} onChange={handleChange} />

                    {suggestions.length > 0 && (
                        <ul className="absolute top-full left-0 max-h-40 overflow-y-auto z-10 bg-white text-black w-full border">
                            {suggestions.map((loc, index) => (
                                <li key={index} className="p-2 border-b w-full text-center cursor-pointer hover:bg-gray-100" onClick={() => { setcity(loc); setsuggestions([]); }}>{loc}</li>
                            ))}
                        </ul>)}
                </div>

                <NavLink to="/HotelData" state={{ city }} className="bg-white text-black font-bold h-[90%] md:w-2/5 w-1/2 flexad rounded-full">
                    <button disabled={city.length <= 2} className="px-6 py-2 text-sm disabled:opacity-50 flexad">{isHome ? "SEARCH HOTELS" : "SEARCH"}</button>
                </NavLink>

            </div>
        </div>

    )
}

export default Searchbar
