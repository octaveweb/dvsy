import React from 'react'
import CardV2 from '../Cards/CardV2'

const Section3 = () => {

  const stats = [
    {
      label: "DESIGNERS",
      value: "150+"
    },
    {
      label: "CLIENTS",
      value: "500+"
    },
    {
      label: "MASTERPIECES",
      value: "20K+"
    },
    {
      label: "EVENTS",
      value: "50+"
    }
  ];

  return (
    <div className='section3'>
      {stats.map((elm, idx) => {
        return <CardV2 key={idx} data={elm} />
      })}

    </div>
  )
}

export default Section3
