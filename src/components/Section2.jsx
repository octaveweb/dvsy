import React from 'react'
import CardV1 from './CardV1'

const Section2 = () => {
    const features = [
        {
            id:1,
            title: "INDEPENDENCY",
            description: "Explore the creativity of independent designers from around the globe."
        },
        {
            id:2,
            title: "UNIQUITY",
            description: "Discover the charm of unique pieces that stand out effortlessly."
        },
        {
            id:3,
            title: "QUALITY",
            description: "Experience unparalleled craftsmanship and attention to detail."
        },
        {
            id:4,
            title: "SUSTAINABILITY",
            description: "Embrace eco-conscious fashion choices without compromising on style."
        }
    ];



    return (
        <div className='grid grid-cols-4  items-center gap-4 py-5 px-5'>
            {features.map((elm, idx) => {
               return <CardV1 key={idx} data={elm} />
            })}
        </div>
    )
}

export default Section2
