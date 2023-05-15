import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { CartProvider, useCart } from "react-use-cart";

function Navbar(){
  var {totalItems}=useCart();
    return(
        <CartProvider>
            <nav className="navbar navbar-expand-lg navbar-light  p-2">
        <div className="container">
        <NavLink className="navbar-brand" to="/">StartBootstrap</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/features">Features <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/download">Download</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="device_id" spy={true} smooth={true} offset={-100} duration={500}>Device</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product" spy={true} smooth={true} offset={-100} duration={500}>Product</NavLink>
            </li>

        
            <li className="nav-item">
                <a className="nav-link" href="#"> 
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa-solid fa-comment"></i> Send Feedback
                    </button>
                    
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div></a>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/cart" >Cart{totalItems}</NavLink>
            </li>
         
           </ul>
            
         
        </div>
    </div>
      </nav>
        </CartProvider>
    )
}

export default Navbar;