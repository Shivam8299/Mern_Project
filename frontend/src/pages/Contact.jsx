import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function Contact() {
  return (
    <div className='text-2xl pt-10 text-center border-t'>
      <div>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10  flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='text-xl text-gray-600 font-semibold '>Our Store</p>
          <p className='text-gray-500 text-lg'>Gomti Nagar Lucknow, <br />Utter Pradesh </p>
          <p className='text-gray-500 text-lg'>phone: (91) 8533285211 <br /> email:trend@gmail.com</p>
          <p className='text-xl font-semibold text-gray-600'> Careers at trendyfy</p>
          <p className='text-gray-500 text-lg'> Learn more our teams and job openings</p>
          <button className='  border border-black px-8 py-4 text-sm hover:bg-black cursor-pointer hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default Contact