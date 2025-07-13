import React from 'react'

const Cards = (props) => {
    return (
        <div className=' rounded-2xl overflow-hidden'>
            <img src={props.src} className="h-60 w-full" alt="" />
            <p className='mt-5 text-2xl font-bold flexad underline'>{props.Title}</p>
            <p className='text-xl font-semibold px-3'>{props.Desc}</p>
        </div>
    )
}

export default Cards
    