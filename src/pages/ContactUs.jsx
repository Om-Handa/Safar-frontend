import React, {useEffect} from "react"
import { useForm } from "react-hook-form"
import Instagram from '../assets/instagram.png'
import Github from '../assets/github.png'
import LinkedIn from '../assets/linkedin.png'
import { NavLink } from 'react-router-dom'

function ContactUs() {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitted, isSubmitting },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    
    return (
        <div className="h-[90vh] md:h-[95vh] w-full flexad">
            <div className="mt-16 h-full w-1/2 hidden md:flex justify-center items-center">
                <img src="https://mfportfolio.in/resources/images/blogs/Incredible-India-Tourism-Growth-Hypothesis/Incredible-India-Tourism-Growth-Hypothesis.png" alt="" className="w-5/6 h-3/4 border-4 shadow-2xl " />
            </div>
            <div className=" md:w-1/2 h-3/4 mt-10">
                <p className="text-7xl font-bold mb-10 md:mb-0 md:h-1/4">Contact Us</p>
                <div className="md:h-3/4 h-1/2 md:flex border-t-4 md:border-l-4 border-b-4 md:border-b-0 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 justify-start h-5/6 md:h-full md:w-1/2 m-10">
                            <input type="text" {...register("Name", { required: "Name is required" })} placeholder="Full Name"  className="h-10 border-b-3 pb-3"/>
                            {errors.Name && <span className="flexad text-red-700">{errors.Name.message}</span>}

                            <input type="email" {...register("Email", { required: "Email is Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid Email" } })} placeholder="E-mail"  className="h-10 border-b-3 pb-3"/>
                            {errors.Email && <span className="flexad text-red-700 ">{errors.Email.message}</span>}

                            <textarea {...register("Message", { required: "Message is required", maxLength: { value: 500, message: "Message shouldn't exceed 500 chars" } })} placeholder="Message" className="flex justify-end border-b-3 "></textarea>
                            {errors.Message && <span className="flexad text-red-700 ">{errors.Message.message}</span>}

                            <button type="submit" className="bg-black text-white rounded-full p-2 self-start w-full mt-5" disabled={isSubmitting}>{isSubmitting ? "Sending" : "Send Message"}</button>
                            {isSubmitted && <span className="flexad text-green-600">Message Sent Successfully</span>}
                        </form>
                    <div>
                        <div className="flex md:items-start items-center justify-center flex-col md:h-1/2 mb-5">
                            <p className="text-3xl md:text-2xl font-bold" >Contact On</p>
                            <p className="text-2xl md:text-xl">OmHanda246@gmail.com</p>
                        </div>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://github.com/Om-Handa" target="_blank" className='flexad'>
                                <img src={Github} alt="" className='h-8 md:h-9' />
                            </a>

                            <a href="https://www.linkedin.com/in/om-handa-62451b301" target="_blank" className='flexad'>
                                <img src={LinkedIn} alt="" className='h-8 md:h-9' />
                            </a>

                            <a href="https://www.instagram.com/om_handa246/" target="_blank" className='flexad'><img src={Instagram} alt="" className='h-8 md:h-9' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs