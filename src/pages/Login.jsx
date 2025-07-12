import { useEffect, useState } from "react"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import logo from "../assets/logotrans.png"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {
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

        <div className="mt-10 h-[90vh] md:h-[100vh] flexad flex-col w-full bg-[#cbc7c1] cursor-default">
            <NavLink to="/SignIn"><p className="text-black font-semibold text-xl mb-3 underline">New To Safar? Create An Account</p></NavLink>
            <div className="h-3/5 md:h-3/4 w-11/12 md:w-2/3 flex rounded-xl shadow-2xl">
                <div className="left md:w-1/2 w-full h-full bg-[#f2ede6] rounded-xl md:rounded-tr-none md:rounded-br-none flexad flex-col">

                    <form onSubmit={handleSubmit(onSubmit)} className="flexad flex-col h-3/5 w-full">
                        <p className="text-3xl underline font-bold ">LOGIN</p>

                        <input type="E-mail" {...register("Email", { required: "Email is Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid Email" } })} placeholder="Enter Email" className="border p-2 w-3/4 rounded-xl my-2 mt-4" />
                        {errors.Email && <span className="flexad text-red-700 ">{errors.Email.message}</span>}

                        <input type="password" {...register("Password", {required:"Password is required"})} placeholder="Enter Password" className="border p-2 w-3/4 rounded-xl" />
                        {errors.Password && <span className="flexad text-red-700 ">{errors.Password.message}</span>}

                        <button type="submit" className="border-2 p-1 w-1/3 text-xl mt-6 md:mt-4 rounded-full font-bold " >Log-In</button>
                    </form>

                    <p className="text-lg font-bold">----------------------OR----------------------</p>
                    <div className="h-2/5 w-full flex items-center flex-col">
                        <p className="flexad text-xl font-bold my-5 md:my-3 underline">Login With Others</p>
                        <div className="flexad border-2 md:w-1/2 mb-3 p-2 rounded-full">
                            <img src={google} alt="" className="h-6" />
                            <p className="px-2 font-semibold text-md">Login With Google</p>
                        </div>
                        <div className="flexad border-2 md:w-1/2 p-2 rounded-full">
                            <img src={facebook} alt="" className="h-6" />
                            <p className="px-2 font-semibold text-md">Login With Facebook</p>
                        </div>
                    </div>

                </div>
                <div className="hidden right w-1/2 h-full rounded-br-xl rounded-tr-xl md:flex justify-center items-center bg-amber-950">
                    <div style={{ backgroundImage: `url(${logo})` }} className=" w-5/6 h-5/6 bg-contain bg-no-repeat rounded-xl">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login