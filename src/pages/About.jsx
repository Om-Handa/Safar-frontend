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
                    <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A perspiciatis dignissimos animi laboriosam totam temporibus eveniet aut doloremque exercitationem tempora, nemo, error ratione veniam aspernatur possimus. Commodi, ducimus sint veniam nam voluptas praesentium in eos dicta quo eaque minima officia eveniet tenetur accusamus! Sunt mollitia reprehenderit porro libero ducimus eaque?
                    </p>
                </div>
            </div>

            <div className="w-5/6 border-2 mt-10"></div>

            <div className="min-h-60 w-[90%] flexad my-10">
                <div className="text-2xl font-semibold h-full flexad flex-col w-full md:w-3/4">
                    <p className=" text-5xl text-center md:text-7xl w-full font-bold flex justify-center md:justify-start items-center mb-10 underline">About Developer</p>
                    <img src={me} alt="" className="h-60 md:hidden border-4 shadow-2xl rounded-full mr-3 float-right " />
                    <p className="text-justify"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. A perspiciatis dignissimos animi laboriosam totam temporibus eveniet aut doloremque exercitationem tempora, nemo, error ratione veniam aspernatur possimus. Commodi, ducimus sint veniam nam voluptas praesentium in eos dicta quo eaque minima officia eveniet tenetur accusamus! Sunt mollitia reprehenderit porro libero ducimus eaque?
                    </p>
                </div>
                <img src={me} alt="" className="max-h-96 border-4 hidden md:block shadow-2xl rounded-full mr-3 float-right " />
            </div>

            <div className="w-5/6 border-2 mt-10"></div>

            <div className="flexad flex-col mb-15 w-[95%]">
                <p className="text-5xl md:text-7xl text-center font-bold py-10 underline flexad">Upcoming Features</p>
                <div className="flexad flex-col md:flex-row w-[90%] md:w-full gap-8">
                    <div className="md:w-1/4 shadow">
                        <Cards src="https://www.travelandleisure.com/thmb/iSGDtdvKHv2zyJ3UBZ1mp7KV66E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/flight-landing-INBNDCHECK1117-bbcbdbdd91f7480693283cd88393b3ff.jpg" Title="Flight Booking" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
                    </div>

                    <div className="md:w-1/4 shadow">
                        <Cards src="https://rentbuyit.com.au/wp-content/uploads/2024/01/cars-in-a-sunset-1.jpg" Title="Cab Rentals" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
                    </div>

                    <div className="md:w-1/4 shadow">
                        <Cards src="https://images.squarespace-cdn.com/content/v1/5e72c4abfceb530ec90accd8/1671224010081-DA5ZBYJMKQD3KQKKIXR7/AdobeStock_386078374.jpeg" Title="AI Helpbot" Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est inventore? Incidunt ipsum nobis accusamus." />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About