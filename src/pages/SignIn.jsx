import { useEffect, useState } from "react"
import google from "../assets/google.png"
import facebook from "../assets/facebook.png"
import logo from "../assets/logotrans.png"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"

function SignIn() {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isSubmitted, isSubmitting },
    } = useForm()
    const password = watch("Password")
    const onSubmit = (data) => {
        if (isSubmitted) {
            reset();
            alert("Account Made")
        }
    }

    return (

        <div className="mt-18 h-[90vh] md:min-h-[100vh] flexad flex-col w-full bg-[#cbc7c1] cursor-default">
            <NavLink to="/login"><p className=" text-black font-semibold text-xl my-4 underline">Existing User? LogIn</p></NavLink>

            <div className="h-9/12 md:h-11/12 w-11/12 md:w-2/3 flex rounded-xl shadow-2xl md:mb-15">

                <div style={{ backgroundImage: `url(${logo})` }}className="bg-contain bg-no-repeat left w-1/2 h-full rounded-bl-xl rounded-tl-xl md:flex hidden justify-center items-center bg-amber-950">
                </div>
                <div className="right md:w-1/2 w-full h-full bg-[#f2ede6] rounded-xl md:rounded-tl-none md:rounded-bl-none flexad flex-col">

                    <form onSubmit={handleSubmit(onSubmit)} className="flexad flex-col h-8/12 w-full">
                        <p className="text-3xl underline font-bold mb-2">Register</p>

                        <input type="text" {...register("FullName", { required: "Name is Required" })} placeholder="Full Name" className="border p-2 w-3/4 rounded-xl my-1.5 " />
                        {errors.FullName && <span className="flexad text-red-700 ">{errors.FullName.message}</span>}

                        <input type="email" {...register("Email", { required: "Email is Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid Email" } })} placeholder="Email" className="border p-2 w-3/4 rounded-xl my-1.5 " />
                        {errors.Email && <span className="flexad text-red-700 ">{errors.Email.message}</span>}

                        <input type="password" {...register("Password", { required: "Password is Required", minLength: { value: 8, message: "Password must be atleast 8 chars long" } })} placeholder="Create Password" className="border p-2 w-3/4 rounded-xl my-1.5 " />
                        {errors.Password && <span className="flexad text-red-700 ">{errors.Password.message}</span>}

                        <input type="password" {...register("ConfirmPassword", { required: "Confirm Password Required", validate: value => value === password || "Passwords do not match" })} placeholder="Confirm Password" className="border p-2 w-3/4 rounded-xl my-1.5 " />
                        {errors.ConfirmPassword && <span className="flexad text-red-700 ">{errors.ConfirmPassword.message}</span>}

                        <button type="submit" className="border-2 p-2 w-2/3 text-xl mt-4 md:mt-2 mb-1 rounded-full font-bold " disabled={isSubmitting}>{isSubmitting ? "Submitting" : "Create Account"}</button>

                    </form>

                    <p className="text-lg font-bold">----------------------OR----------------------</p>

                    <div className="h-4/12 w-full flex items-center flex-col">
                        <p className="flexad text-xl font-bold my-5 md:my-3 underline">Register With Others</p>
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
            </div>
        </div>
    )
}

export default SignIn