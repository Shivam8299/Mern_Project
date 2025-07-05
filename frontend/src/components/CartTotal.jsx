// 

import React, { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';

function CartTotal() {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="w-full max-w-md mx-auto rounded-xl p-4 bg-white">
      <div className="text-2xl mb-4">
        <Title text1="CART" text2="TOTAL" />
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-800">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency}{subtotal}.00</p>
        </div>

        <hr />

        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency}{deliveryFee}.00</p>
        </div>

        <hr />

        <div className="flex justify-between font-semibold text-base">
          <p>Total</p>
          <p>{currency}{total}.00</p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
