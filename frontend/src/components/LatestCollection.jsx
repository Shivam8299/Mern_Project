import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

function LatestCollection() {
  const [products, setProducts] = useState([]);
  const { productData } = useContext(ShopContext);

  return( 
  <div className="my-10">
    <div className="text-center py-8 text-3xl">
         <Title text1={'LATEST'} text2={'COLLECTION'}/>
         <p className="w-3/4 m-auto text-xs sm:test-sm md:text-base text-gray-600">
         Lorem ipsum dolor sit ame odit, unde vel natus incidunt quas incidunt quas  non incidunt quas  non!
         </p>
    </div>
  </div>
)}

export default LatestCollection;
