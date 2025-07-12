import React from 'react'

const Cards = (props) => {
    return (
        <div className=''>
            <img src={props.src} className="h-60 w-full rounded-t-2xl" alt="" />
            <p className='mt-5 text-2xl font-bold flexad underline'>{props.Title}</p>
            <p className='text-xl font-semibold mb-3 px-3'>{props.Desc}</p>
        </div>
    )
}

export default Cards
    