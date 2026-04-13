import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, setCartItems } = useCart();
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

    setError("");
    setSuccess(true);

    // clear cart
    setCartItems([]);
  };

  return (
    <div className="container my-5 ">
      {!success ? (
        <div className="row">
        <form onSubmit={handleSubmit} className="card p-4 shadow-lg col-6 mx-auto">
          <h3 className="mb-4 text-center">Checkout 🛍️</h3>

          {error && <p className="text-danger">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Shipping Address"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-danger">
            Place Order
          </button>
        </form>
        </div>
      ) : (
        <div className="card p-5 text-center shadow-lg">
          <h2 className="text-success mb-3">
            Order Placed Successfully! ✅
          </h2>
          <p>Thank you for your purchase 🌸</p>
          <div>
            <button className="btn btn-success" onClick={()=>{
                navigate('/')
            }}><FaArrowLeft /> Back home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;