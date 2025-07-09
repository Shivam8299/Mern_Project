import React from "react";
import { useState } from "react";

function Add() {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice]=useState("")
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestseller, SetBestseller] = useState(false)
  const [sizes, setSizes] = useState([])
  return (
    <form className="flex flex-col items-start gap-3 mt-6 ml-4 w-[500px]">
      <div>
        <p className="mb-2 text-gray-600">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
               src={image1 ? URL.createObjectURL(image1) : "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg"}
              className="w-20 h-20 text-gray-400 cursor-pointer"
            />
            <input onChange={(e)=>setImage1(e.target.files[0])}  type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img
               src={image2 ? URL.createObjectURL(image2) : "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg"}
              className="w-20 h-20 text-gray-400 cursor-pointer"
            />
            <input onChange={(e)=>setImage2(e.target.files[0])}   type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img
              src={image3 ? URL.createObjectURL(image3) : "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg"}
              className="w-20 h-20 text-gray-400 cursor-pointer"
            />
            <input onChange={(e)=>setImage3(e.target.files[0])}   type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img
               src={image4 ? URL.createObjectURL(image4) : "https://png.pngtree.com/png-vector/20191129/ourmid/pngtree-image-upload-icon-photo-upload-icon-png-image_2047545.jpg"}
              className="w-20 h-20 text-gray-400 cursor-pointer"
            />
            <input onChange={(e)=>setImage4(e.target.files[0])}   type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2 text-gray-600">Product Name</p>
        <input
          onChange={(e)=>setName(e.target.value)} value={name}
          className="border px-3 py-2 max-w-[700px] w-full rounded-xs outline-none"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="w-full">
        onChange={(e)=>setDescription(e.target.value)} value={description}
        <p className="mb-2 text-gray-600">Description</p>
        <textarea
          className="border px-3 py-2 max-w-[700px] w-full rounded-xs outline-none"
          type="text"
          placeholder="write here"
        />
      </div>
      <div className="w-full sm:justify-between flex flex-col sm:flex-row gap-2">
        <div>
          <p className="mb-2">Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-3 py-2 border rounded-xs outline-none">
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className="w-full px-3 py-2 border rounded-xs outline-none">
            <option defaultChecked value="topwear">
              Topwear
            </option>
            <option value="bottomwear">Bottomwear</option>
            <option value="winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Price</p>
          <input
            onChange={(e)=>setName(e.target.value)} value={price}
            className="w-full sm:w-[120px] px-3 py-2 border rounded-xs outline-none"
            defaultValue={20}
            type="number"
          />
        </div>
      </div>
      <div>
        <p className="mb-3">Product Sizes</p>
        <div className="flex gap-3">
          <div>
            <p className="px-3 py-1 bg-slate-200 cursor-pointer">S</p>
          </div>
          <div>
            <p className="px-3 py-1 bg-slate-200 cursor-pointer">M</p>
          </div>
          <div>
            <p className="px-3 py-1 bg-slate-200 cursor-pointer">L</p>
          </div>
          <div>
            <p className="px-3 py-1 bg-slate-200 cursor-pointer">XL</p>
          </div>
          <div>
            <p className="px-3 py-1 bg-slate-200 cursor-pointer">XXL</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input className="cursor-pointer" type="checkbox" id="bestseller" />
        <label className=" text-gray-600" htmlFor="bestseller">Add to bestseller</label>
      </div>
      <button className="py-3 w-44 stext-sm bg-black text-white mt-4 cursor-pointer">Add Product</button>
    </form>
  );
} 

export default Add;

