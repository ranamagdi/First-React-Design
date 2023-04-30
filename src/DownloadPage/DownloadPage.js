import React from "react";
import Navbar from "../HomePages/Navbar";
import Header from "../HomePages/Header";
import Age from "../HomePages/Age";


function DownloadPage(){//the same name of component
    return(//we should use one div
    <div>
      <Navbar/>
      <Age/> 
    </div>
    )
  }
  export default DownloadPage;