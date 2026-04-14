import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, setCartItems, cartCount, total } = useCart();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email || !formData.address) {
      setError("Please fill all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setError("");
    setSuccess(true);

    // clear cart
    setCartItems([]);
  };

  return (
    <div className="container my-5 ">
      {!success ? (
        <div className="row">
          <form onSubmit={handleSubmit} className="card p-4 shadow-lg col-md-6 mx-auto">
            <h3 className="mb-4 text-center">Checkout 🛍️</h3>

            {error && <p className="text-danger">{error}</p>}

            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <textarea
              name="address"
              value={formData.address}
              placeholder="Shipping Address"
              className="form-control mb-3"
              onChange={handleChange}
            />

            <button className="btn btn-danger">
              Place Order
            </button>
          </form>
          <div className="col-md-4">
            <div className="card p-5 shadow ">
              <h4 className='category'>Cart Summary</h4>

              <h5>Total Items : <span className='price'>{cartCount}</span></h5>
              <h5>Total Price : <span className='price'>{total} EGP</span></h5>

            </div>
          </div>
        </div>
      ) : (
        <div className="card p-5 text-center shadow-lg">
          <h2 className="text-success mb-3">
            Order Placed Successfully! ✅
          </h2>
          <p>Thank you for your purchase 🌸</p>
          <div>
            <button className="btn btn-success" onClick={() => {
              navigate('/')
            }}><FaArrowLeft /> Back home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;