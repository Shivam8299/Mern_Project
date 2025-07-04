import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

function Collection() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')
  const { productData, search, showSearch } = useContext(ShopContext);
  

  const categoryItem = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const subCategoryItem = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const sortProduct = ()=>{
    const filterProductCopy = filterProducts.slice()
    switch(sortType){
      case "low-high" :
        setFilterProducts(filterProductCopy.sort((a,b) =>(a.price- b.price)))
        break;
      case "high-low" :
        setFilterProducts(filterProductCopy.sort((a,b) =>(b.price- a.price)))
        break;
      default:
        applyFilter()
        break;
    }
  }
  const applyFilter = () => {
    let copyProduct = productData.slice();

    if(showSearch && search){
      copyProduct = copyProduct.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
    copyProduct = copyProduct.filter(item => subCategory.includes(item.subCategory));
    // console.log(copyProduct)
  }
  setFilterProducts(copyProduct);
  };

  useEffect(() => {
    applyFilter();
  },[category, subCategory,search,showSearch]);

  useEffect(()=>{
    sortProduct()
  },[sortType])


  // console.log(filterProducts.map(item =>item.category))

  // useEffect(()=>{
  //   console.log(category)
  //   console.log(subCategory)
  // },[category,subCategory])

// console.log(filterProducts)


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : " "}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"men"}
                type="checkbox"
                onChange={categoryItem}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"women"}
                type="checkbox"
                onChange={categoryItem}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"kids"}
                type="checkbox"
                onChange={categoryItem}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        {/* Sub Category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"topwear"}
                type="checkbox"
                onChange={subCategoryItem}
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"bottomwear"}
                type="checkbox"
                onChange={subCategoryItem}
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                value={"winterwear"}
                type="checkbox"
                onChange={subCategoryItem}
              />{" "}
              winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sorting */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* maping products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6 ">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.images}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
