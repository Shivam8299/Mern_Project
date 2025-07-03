import { createContext, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const baseUrl = 'http://localhost:3000'; // Fixed typo: added colon after http

  // Function to get all product data
  const ProductData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/product/all`);
      return response.data; // axios already returns parsed JSON
    } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
    }
  };

  useEffect(() => {
    ProductData().then(data => console.log(data)); // Proper async usage inside useEffect
  }, []);

  let currency = "$";
  const deliveryFee = 10;

  const value = {
    ProductData,
    currency,
    deliveryFee,
  };

  return (
    <ShopContext.Provider value={value}> {/* Added missing value prop */}
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
