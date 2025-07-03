import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function BestSeller() {
    const {productData} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    useEffect(()=>{
        const bestSeller = productData.filter(itemd=>itemd.bestSeller)
        setBestSeller(bestSeller.slice(0,5))
    })
  return ( 
    <div className='my-10'>
      <div className='text-3xl text-center py-8'>
        <Title text1={'BEST'} text2={'SELLER'}/>
        <p className='w-3/4 text-sx sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde repudiandae vero Unde repudiandae vero
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6 ">
        {bestSeller.map((item)=>(
            <ProductItem id={item._id} image={item.images} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller