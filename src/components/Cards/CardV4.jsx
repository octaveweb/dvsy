import React from 'react'

const CardV4 = ({data}) => {
  return (
       <div className="card-v1">
    <span>  <h3>{data.title}</h3>
      <p>{data.description}</p></span>

      <button>
        <div className="btn-inner">
          <i className="ri-arrow-right-up-line btn-c"></i>
          <span>EXPLORE</span>
        </div>
      </button>
    </div>
  )
}

export default CardV4
