import React from "react";
import {NavLink } from "react-router-dom";
import logo from '/images/logo.png'
import { useCart } from "../context/CartContext";

export default function Navbar() {
     const { cartCount } = useCart();
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
      <div className="container">
        
        {/* Logo */}
      <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" style={{color: '#b4002d'}} to="/">
  <img src={logo} alt="Flower Shop" style={{ width: "60px" }} />
  Yasmena Flowers
</NavLink>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>

           <li className="nav-item position-relative">
              <NavLink className="nav-link" to="/cart">
                🛒 Cart
              </NavLink>

              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </li>

            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li> */}

          </ul>
        </div>

      </div>
    </nav>
   </>
  );
}