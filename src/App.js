import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Common-Items/Footer";
import Header from "./Component/Common-Items/Header";
import NotFound from "./Component/Common-Items/NotFound";
import RequireAuth from "./Component/Common-Items/RequireAuth";
import About from "./Component/Pages/About/About";
import Blog from "./Component/Pages/Blog-Inventory/Blog";
import Inventory from "./Component/Pages/Blog-Inventory/Inventory";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login-Reg/Login";
import Register from "./Component/Pages/Login-Reg/Register";
import ManegeProduct from "./Component/Pages/PdAdd-Del/ManegeProduct";
import PdAdd from "./Component/Pages/PdAdd-Del/PdAdd";
import Stock from "./Component/Pages/StockProduct/Stock";
import StockDet from "./Component/Pages/StockProduct/StockDet";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function App() {
  useEffect(()=>{
    axios.get('https://warehouse-api-ser.herokuapp.com')
    // .then(response=>response.json())
    .then(data=>{
      // console.log(data.data);
      if(data.data !== "Server running Successfully"){
        window.location.reload();
      }
    })
  },[]);

  return (
    <div>
      <Header/>
      <div className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/inventory" element={<Stock/>} />
          <Route path="/inventory/:productId" element={<RequireAuth><StockDet/></RequireAuth>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/my-items" element={<RequireAuth><Inventory/></RequireAuth>} />
          <Route path="/add" element={<RequireAuth><PdAdd/></RequireAuth>} />
          <Route path="/del" element={<RequireAuth><ManegeProduct/></RequireAuth>} />
        </Routes>
        <ToastContainer hideProgressBar={true} />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
