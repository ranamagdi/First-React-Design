import React from "react";
import Navbar from "../HomePages/Navbar";
import Download from "../HomePages/Download";
import Footer from "../HomePages/Footer";



function Features(){//the same name of component
    return(//we should use one div
    <div>
      <Navbar/>
      <Download/>
      <Footer/> 
    </div>
    )
  }
  export default Features;