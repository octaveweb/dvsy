import React from 'react'

const CardV2 = ({data}) => {
  return (
      <div className='card-v2 rounded'>
      <div className="center">
        <p>{data.label}</p>
      <h2>{data.value}</h2>
      </div>
    </div>
  )
}

export default CardV2
