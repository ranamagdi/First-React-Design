import React from "react";
import Navbar from "../HomePages/Navbar";
import Download from "../HomePages/Download";
import Footer from "../HomePages/Footer";
import { CartProvider } from "react-use-cart";



function Features(){//the same name of component
    return(//we should use one div
    <CartProvider>
      <Navbar/>
      <Download/>
      <Footer/> 
    </CartProvider>
    )
  }
  export default Features;