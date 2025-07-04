import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const baseUrl = "http://localhost:3000";
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  // data will be fetch once when component render

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/product/all`);
        if (response.data.success) {
          setProductData(response.data.product);
        } else {
          console.error("Failed to fetch product data");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const currency = "$";
  const deliveryFee = 10;

  const value = {
    productData,
    currency,
    deliveryFee,
    showSearch,
    setShowSearch,
    search,
    setSearch,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
