import React from 'react'
import Img from './Img'
import CardV3 from './CardV3'

const Section4 = () => {
  return (
    <div className=' w-full grid grid-cols-2 p-5 gap-4'>
      <CardV3 />
      <Img url="https://images.unsplash.com/photo-1767487018495-d08b6e32ecc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      
    </div>
  )
}

export default Section4
