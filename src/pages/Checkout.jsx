import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

function Checkout() {
  const { cartItems, setCartItems, cartCount, total } = useCart();
  const navigate = useNavigate()
  const { t, isAr } = useLang()

  const [formData, setFormData] = useState({ name: "", email: "", address: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      setError(t('checkout_fill_all'));
      return;
    }
    if (!formData.email.includes("@")) {
      setError(t('checkout_invalid_email'));
      return;
    }
    setError("");
    setSuccess(true);
    setCartItems([]);
  };

  return (
    <div className="container my-5">
      {!success ? (
        <div className="row">
          <form onSubmit={handleSubmit} className="card p-4 shadow-lg col-md-6 mx-auto">
            <h3 className="mb-4 text-center">{t('checkout_title')}</h3>
            {error && <p className="text-danger">{error}</p>}
            <input type="text" name="name" value={formData.name} placeholder={t('checkout_name')} className="form-control mb-3" onChange={handleChange} />
            <input type="email" name="email" value={formData.email} placeholder={t('checkout_email')} className="form-control mb-3" onChange={handleChange} />
            <textarea name="address" value={formData.address} placeholder={t('checkout_address')} className="form-control mb-3" onChange={handleChange} />
            <button className="btn btn-danger">{t('checkout_place_order')}</button>
          </form>
          <div className="col-md-4">
            <div className="card p-5 shadow">
              <h4 className='category'>{t('cart_summary')}</h4>
              <h5>{t('cart_total_items')}: <span className='price'>{cartCount}</span></h5>
              <h5>{t('cart_total_price')}: <span className='price'>{total} {t('card_egp')}</span></h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="card p-5 text-center shadow-lg">
          <h2 className="text-success mb-3">{t('checkout_success_title')}</h2>
          <p>{t('checkout_success_sub')}</p>
          <div>
            <button className="btn btn-success" onClick={() => navigate('/')}>
              {isAr ? <FaArrowRight /> : <FaArrowLeft />} {t('checkout_back_home')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
