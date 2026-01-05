import React from 'react'
import CardV2 from './CardV2'

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
    <div className=' w-full flex items-center gap-4 py-10 px-5'>
      {stats.map((elm, idx) => {
        return <CardV2 key={idx} data={elm} />
      })}

    </div>
  )
}

export default Section3
