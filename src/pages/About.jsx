import logo from "../assets/LOGO.png"
import me from "../assets/me.png"
import Cards from '../Components/Cards'
import { useEffect } from "react"

function About() {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    return (
        <div className="flexad flex-col mt-20">

            <div className=" min-h-[70vh] md:w-[90%] flexad flex-col md:flex-row ">
                <img src={logo} alt="" className="max-h-96 hidden md:inline-block border-4 shadow-2xl rounded-full mr-3 float-right" />
                <div className="text-2xl font-semibold h-full flexad flex-col w-11/12 md:w-3/4 mt-10 md:mt-0">
                    <p className="md:text-7xl text-5xl w-full font-bold flex justify-center md:justify-end items-center mb-5 md:mb-10 underline">About Safar</p>
                    <img src={logo} alt="" className="h-60 md:hidden border-4 shadow-2xl rounded-full mb-3 float-right " />
                    <p className="text-justify"> Safar is an all-in-one travel booking platform designed to make your journeys across India seamless and stress-free. Whether you're planning a relaxing vacation, a quick getaway, or a business trip, Safar lets you book hotels and train tickets effortlessly with real-time availability, smart filters, and secure payments. Our user-friendly interface, reliable listings, and travel-focused features ensure that every part of your journey – from planning to booking – is smooth, personalized, and trustworthy. With Safar, travel becomes more than a destination – it becomes a delightful experience.


                    </p>
                </div>
            </div>

            <div className="w-5/6 border-2 mt-10"></div>

            <div className="min-h-60 w-[90%] flexad my-10">
                <div className="text-2xl font-semibold h-full flexad flex-col w-full md:w-3/4">
                    <p className=" text-5xl text-center md:text-7xl w-full font-bold flex justify-center md:justify-start items-center mb-10 underline">Words by Developer</p>
                    <img src={me} alt="" className="h-60 md:hidden border-4 shadow-2xl rounded-full float-right" />
                    <p className="text-justify pr-2"> I’m Om Handa, a passionate web developer and travel enthusiast who believes technology can make exploring the world easier and more enjoyable. I created Safar to blend my love for code with my love for travel – aiming to simplify the way people plan their journeys across India. From designing intuitive interfaces to building robust backend systems, I focus on creating smooth, user-friendly experiences that help people discover, book, and travel with confidence. Safar is not just a project; it’s a reflection of my journey, curiosity, and dedication to solving real-world problems through tech.
                    </p>
                </div>
                <img src={me} alt="" className="max-h-96 border-4 hidden md:block shadow-2xl rounded-full mr-3 float-right " />
            </div>

            <div className="w-5/6 border-2 mt-10"></div>

            <div className="flexad flex-col mb-15 w-[95%]">
                <p className="text-5xl md:text-7xl text-center font-bold py-10 underline flexad">Upcoming Features</p>
                <div className="flexad flex-col md:flex-row w-[90%] md:w-full gap-8">
                    <div className="md:w-1/4 shadow">
                        <Cards src="https://www.travelandleisure.com/thmb/iSGDtdvKHv2zyJ3UBZ1mp7KV66E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flight-landing-INBNDCHECK1117-bbcbdbdd91f7480693283cd88393b3ff.jpg" Title="Flight Booking" Desc="Coming soon! We’re building a seamless flight booking system that will let you search, compare, and book domestic and international flights with real-time pricing, seat availability, and smooth checkout." />
                    </div>

                    <div className="md:w-1/4 shadow">
                        <Cards src="https://rentbuyit.com.au/wp-content/uploads/2024/01/cars-in-a-sunset-1.jpg" Title="Cab Rentals" Desc="We’re working on bringing you a convenient cab booking service right within Safar. Whether you need a ride to the airport, or a full-day rental for sightseeing, with reliable drivers and clean, comfortable vehicles, making travel easy." />
                    </div>

                    <div className="md:w-1/4 shadow">
                        <Cards src="https://images.squarespace-cdn.com/content/v1/5e72c4abfceb530ec90accd8/1671224010081-DA5ZBYJMKQD3KQKKIXR7/AdobeStock_386078374.jpeg" Title="AI Helpbot" Desc="We’re working on an intelligent AI-powered travel assistant that will help you plan your trips, suggest destinations, answer your questions, and guide you through the booking process – all with speed and a personal touch." />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About