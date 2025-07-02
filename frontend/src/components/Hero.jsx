import React from 'react'
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/* Hero left side*/}
       <div className=''>

       </div>
        <img className='h-96 w-96' src={assets.hero_img} alt="" />

         
    </div>
  )
}

export default Hero