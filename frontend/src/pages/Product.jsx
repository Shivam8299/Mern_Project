import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";
import { assets } from "../assets/assets";
import ReletedProduct from "../components/ReletedProduct";

function Product() {
  const { productId } = useParams();
  const { productData, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    productData.map((item) => {
      if (item._id === productId) {
        setProduct(item);
        setImage(item.images[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [product]);
  return product ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.images.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                key={index}
                src={img}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{product.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(111)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">
            {currency}
            {product.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-3/4">{product.description} </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2 ">
              {product.sizes.map((data, index) => (
                <button
                  onClick={() => setSize(data)}
                  key={index}
                  className={`border py-2 px-4 bg-gray-100 ${
                    data === size ? "border-orange-500" : ""
                  }`}
                >
                  {data}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 ">
            <p>100% Original product</p>
            <p> Case on delivery available on this product.</p>
            <p> Easy to exchange policy within 7 woking days.</p>
          </div>
        </div>
      </div>
      {/* description and review system */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (111)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            sunt in exercitationem suscipit iusto nisi quam sint, obcaecati
            reiciendis earum fugiat voluptatum unde culpa nobis ipsa corrupti
            tempora. Labore, enim!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            sunt in exercitationem suscipit iusto nisi quam sint,
          </p>
        </div>
      </div>
      {/* releted product */}
      <ReletedProduct category={product.category} subCategory={product.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
