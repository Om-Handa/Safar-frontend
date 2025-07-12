import React from 'react'

const Trains = (props) => {
  const trainData = [
    { Name: "BME RKSH EXP (14888)", time1: "01:34", time2: "01:49", time: "00:15" },
    { Name: "SGNR RKSH EXP (14815)", time1: "08:45", time2: "09:03", time: "00:18" },
    { Name: "UMB INTCITY EXP (14526)", time1: "19:16", time2: "19:38", time: "00:22" },
    { Name: "FKA DLI EXP (14508)", time1: "07:05", time2: "07:29", time: "00:24" },
    { Name: "ASR CSMT EXP (11058)", time1: "14:08", time2: "14:33", time: "00:25" }
  ]

  return (
    <>
      {trainData.map((train, index) => {
        return (
          <div key={index} className="md:w-3/4 w-full h-72 border rounded-xl">

            <div className="px-5 w-full h-1/6 flex items-center bg-[#bfbba9] rounded-t-xl">
              <p className="md:w-5/12 text-2xl font-bold">{train.Name}</p>
              <p className="w-1/2 font-semibold text-xl hidden md:flex">Runs On: M T W T F S S</p>
            </div>

            <div className="w-full h-1/5 flex items-center justify-between px-5">
              <p className="md:text-xl font-semibold flex flex-col">
                <span className="font-bold text-xl md:text-2xl md:mt-0 mt-2 md:border-r-2">{train.time1} </span>
                <span className='md:px-1.5 md:border-r-2'>{props.city1.toUpperCase()}</span>
                <span className='md:pl-1.5'>{props.date}</span>
              </p>

              <p className="md:text-xl self-start">----{train.time}----</p>

              <p className="md:text-xl font-semibold flex flex-col">
                <span className="font-bold text-xl md:text-2xl md:mt-0 mt-2 md:border-r-2">{train.time2} </span>
                <span className='md:px-1.5 md:border-r-2'>{props.city2.toUpperCase()}</span>
                <span className='md:pl-1.5'>{props.date}</span>
              </p>
            </div>
            <div className="w-full h-5/12 flex items-center px-5 gap-2 font-semibold ">
              <div className="border h-9/12 md:text-lg shadow p-1.5 md:px-3 rounded-xl bg-[#bfbba9]">
                <p>Sleeper (SL)</p>
                <p className="text-red-500 md:text-base text-sm">Get Availability</p>
                <p>₹ 150</p>
              </div>

              <div className="border h-9/12 md:text-lg shadow p-1.5 md:px-3 rounded-xl bg-[#bfbba9]">
                <p>AC 3 Tier (3A)</p>
                <p className="text-red-500 md:text-base text-sm ">Get Availability</p>
                <p>₹ 515</p>
              </div>

              <div className="border h-9/12 md:text-lg shadow p-1.5 px-2 md:px-3 rounded-xl bg-[#bfbba9]">
                <p>AC 2 Tier (2A)</p>
                <p className="text-red-500 md:text-base text-sm ">Get Availability</p>
                <p>₹ 720</p>
              </div>

            </div>

            <div className="w-full h-1/5 px-5 flex items-center">
              <button className="border p-3 rounded-xl bg-red-900 text-white  ">Book Now</button>
            </div>

          </div>
        )
      })}
    </>
  )
}

export default Trains
