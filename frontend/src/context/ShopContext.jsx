import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const baseUrl = "http://localhost:3000";
  const navigate = useNavigate()
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems,setCartItems] =useState({})

  const addToCart = async (itemId, size)=>{
    if(!size){
      toast.error("Please select the product size")
      return
    }
    const cartData = structuredClone(cartItems)
    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] +=1;
      }
      else{
        cartData[itemId][size] = 1; 
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1
    }
    toast.success("product added in cart")
    setCartItems(cartData)
  }
  
  const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItems){
      for( const item in cartItems[items]){
        try {
          if(cartItems[items][item]>0){
            totalCount+=cartItems[items][item];
          }
        } catch (error) {
          
        }

      }
    }
    return totalCount;
  }
  // for updating items count on cart page
  const updateCartCount = async(itemId, size, quantity)=>{
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity;
    setCartItems(cartData)

  }
  // geting total cart ammount 
  const getCartAmount = ()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = productData.find(product => product._id === items)
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item]>0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }
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
    addToCart,
    cartItems,
    getCartCount,
    updateCartCount,
    getCartAmount,
    navigate
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
