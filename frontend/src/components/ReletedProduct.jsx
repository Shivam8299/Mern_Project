import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./ProductItem";

function ReletedProduct({ category, subCategory }) {
  const { productData } = useContext(ShopContext);
  const [releted, setReleted] = useState([]);

  useEffect(() => {
    if (productData.length > 0) {
      let product = productData.slice();
      product = product.filter((item) => category === item.category);
      product = product.filter((item) => subCategory === item.subCategory);

      setReleted(product.slice(0, 5));
    }
  }, [productData]);

//   console.log(releted)

  return (
    <div className="my-5">
      <div className="text-3xl text-center py-2">
        <Title text1={"RELATED"} text2={"PRODUCT"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6 ">
        {releted.map(item => (
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
  );
}

export default ReletedProduct;
