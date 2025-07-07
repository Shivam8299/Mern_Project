import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

function Orders() {
  const { productData, currency, navigate } = useContext(ShopContext);

  let orders = productData.slice(0, 0);

  return orders.length > 0 ? (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {productData.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t  text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.images[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p> Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">07, July 2025 </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2 ">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="text-3xl font-semibold text-center mb-4">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="bg-gray-50 rounded-xl p-8 shadow-md w-full max-w-md text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Orders"
          className="w-24 mx-auto mb-6 opacity-80"
        />
        <p className="text-lg font-medium text-gray-700 mb-2">
          Your order list is empty
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Looks like you haven’t placed any orders yet.
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="bg-black text-white px-6 py-3 rounded-sm cursor-pointer hover:bg-gray-800 transition"
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
}

export default Orders;
