import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection"
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from 'react-toastify';
import Admin from "./admin/Admin";
import Add from "./admin/Add";
import List from "./admin/List";
import OrderAdmin from "./admin/OrderAdmin";
function App() {
  return (
    <div className="px-4 sm:px-[5vh] md:px-[7vh] lg:px-[9vh]">
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/orders/admin" element={<OrderAdmin/>} />

        
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
