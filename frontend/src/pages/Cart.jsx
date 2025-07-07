import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import Title from "../components/Title"
import {assets} from "../assets/assets"
import CartTotal from "../components/CartTotal";

function Cart() {
  const { productData, currency, cartItems,updateCartCount,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
// console.log(cartItems)
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]){
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    // console.log(tempData)
    setCartData(tempData)
  },[cartItems]);
  return cartData.length > 0 ? (
  <div className="border-t pt-14 ">
    <div className="text-2xl mb-3 ">
      <Title text1={'YOUR'} text2={'CART'}/>
    </div>
    <div>
      {cartData.map((item,index)=>{
        const product = productData.find(product => product._id === item._id)
        
        return (
          <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[1fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
            <div className="flex items-start gap-6">
              <img className="w-16 sm:w-20" src={product.images[0]} alt="" />
              <div>
                <p className="text-sm font-medium sm:text-lg">{product.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>{currency}{product.price}</p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                </div>
              </div>
            </div>
            <input 
            onChange={(e)=>e.target.value === " " || e.target.value === 0 ? null : updateCartCount(item._id, item.size, Number(e.target.value))} 
            className="max-w-10 border outline-none sm:max-w-20 px-1 sm:px-2 py-1 " min={1} type="number" defaultValue={item.quantity} />
            <img onClick={()=>updateCartCount(item._id, item.size,0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
          </div>
        )
      })}
    </div>
    <div className="flex justify-end my-20 ">
      <div className="w-full sm:w-[450px]">
        <CartTotal/>
        <div className='text-end w-full '>
        <button onClick={()=>navigate('/place-order')} className=' bg-black text-white text-sm px-8 py-3 my-8 cursor-pointer active:bg-gray-700'>PROCEED TO CHECKOUT</button>
      </div>
      </div>
    </div>
  </div>
  ) : 
  <div className="flex flex-col items-center justify-center px-6 py-10 max-w-xl mx-auto text-center">
  <img 
    className="w-40 md:w-32 mb-6"
    src="https://img.freepik.com/free-vector/shopping-cart-icon-isolated-illustration_18591-82226.jpg?semt=ais_hybrid&w=740" 
    alt="Cart image" 
  />
  <b className="text-2xl font-semibold text-gray-800">Your cart is empty</b>
  <p className="mt-3 text-gray-500 text-base font-medium">
    Just relax, let us help you find some first-class products.
  </p>
  <button 
  onClick={()=>navigate('/collection')}
  className="mt-6 px-8 py-2 bg-black text-white text-sm md:text-base font-semibold hover:bg-gray-800 active:bg-gray-600 transition duration-200 cursor-pointer">
    Start Shopping
  </button>
</div>

}

export default Cart;
