import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Device from "./Device";
import Age from "./Age";
import Download from "./Download"
import Appsection from "./Appsection";
import Footer from "./Footer";


function HomePage(){//the same name of component
  return(//we should use one div
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Device/>
    <Age/>
    <Download/>
    <Appsection/>
    <Footer/>
  </div>
  )
}
export default HomePage;