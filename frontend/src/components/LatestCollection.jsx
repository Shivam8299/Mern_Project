import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function LatestCollection() {
    const {ProductData} = useContext(ShopContext)
    console.log( ProductData)
  return (
    <div>
        {ProductData.map()}
    </div>
  )
}

export default LatestCollection