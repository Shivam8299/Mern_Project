import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from "../components/NewsLetter"

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to our Trendydy store, where quality meets convenience. We believe shopping should be simple, enjoyable, and trustworthy. Our mission is to bring you premium products at affordable prices, all from the comfort of your home. Whether you're looking for daily essentials or something special, we’ve got you covered. With fast delivery, secure payments, and excellent customer support, we aim to give you a seamless online shopping experience every time you visit our store.</p>

          <p>At our store, we’re more than just a marketplace—we’re a community of shoppers who value quality and service. Our team carefully curates every product to ensure it meets the highest standards. From fashion to lifestyle items, we provide a wide range of options to suit your taste and budget. We’re committed to making your shopping experience smooth, secure, and satisfying. Thank you for choosing us—we’re excited to serve you and be a part of your daily life</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to make online shopping easy, reliable, and affordable for everyone. We aim to provide high-quality products, fast delivery, and excellent customer service. By focusing on customer satisfaction and continuous improvement, we strive to build a trusted platform where shoppers can find everything they need with confidence and convenience—all in one place.
          </p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 '>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Quality Asssurance:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur fugit obcaecati omnis. Perferendis libero asperiores quasi fugiat quibusdam, omnis facere, qui consequatur assumenda eum mollitia praesentium at enim obcaecati.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi tenetur fugit obcaecati omnis. Perferendis libero asperiores quasi fugiat quibusdam, omnis facere, qui consequatur assumenda eum mollitia praesentium at enim obcaecati.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priorit</p>
        </div>
      </div>
      <NewsLetter/>
    </div> 
  )
}

export default About