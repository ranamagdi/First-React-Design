import React from "react";
import Navbar from "../HomePages/Navbar";
import Header from "../HomePages/Header";
import Age from "../HomePages/Age";
import { CartProvider } from "react-use-cart";


function DownloadPage(){//the same name of component
    return(//we should use one div
    <CartProvider>
      <Navbar/>
      <Age/> 
    </CartProvider>
    )
  }
  export default DownloadPage;