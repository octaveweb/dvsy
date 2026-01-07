import React from 'react'
import Img from '../Custome/Img'
import CardV4 from '../Cards/CardV4'

const Section6 = () => {
    const features = [
  {
    title: "HIGH QUALITY",
    description:
      "Embrace superior craftsmanship with our meticulously curated, enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials, promising longevity and timeless style.",
    cta: "EXPLORE",
  },
  {
    title: "ECO-FRIENDLY",
    description:
      "Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices.",
    cta: "EXPLORE",
  },
];

    return (
        <div className="section5 section6">
            <div className="card-c ">
                {features.map((elm, idx) => {
                    return <CardV4 key={idx} data={elm} />
                })}
            </div>
            <Img url="https://i.ibb.co/rRBtMF4S/image-47af45ff.png" />
        </div>
    )
}

export default Section6
