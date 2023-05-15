import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Device from "./Device";
import Age from "./Age";
import Download from "./Download"
import Appsection from "./Appsection";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from "react-use-cart";


function HomePage(){//the same name of component
  return(//we should use one div
  <CartProvider>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Appsection/>
    <Footer/>
    <ScrollToTop smooth viewBox="0 0 24 24" svgPath="M14.9348 13.1725C15.3654 13.3446 15.5817 13.8402 15.3237 14.2255C15.0294 14.665 14.6493 15.0442 14.2032 15.3386C13.522 15.7881 12.7196 16.0185 11.9037 15.9988C11.0878 15.9792 10.2975 15.7104 9.6387 15.2287C9.20726 14.9131 8.8458 14.5161 8.573 14.0629C8.33384 13.6656 8.57376 13.181 9.01216 13.0299C9.45056 12.8788 9.91919 13.1274 10.2157 13.4839C10.3367 13.6294 10.4756 13.7603 10.63 13.8732C11.0122 14.1527 11.4708 14.3087 11.9441 14.3201C12.4175 14.3315 12.883 14.1978 13.2782 13.937C13.4379 13.8316 13.583 13.7076 13.7108 13.5681C14.0241 13.2262 14.5042 13.0005 14.9348 13.1725Z
    M10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9V10C8 10.5523 8.44772 11 9 11C9.55228 11 10 10.5523 10 10V9Z
    M16 9C16 8.44772 15.5523 8 15 8C14.4477 8 14 8.44772 14 9V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9Z"
    component="return to top"/>
  </CartProvider>
  )
}
export default HomePage;