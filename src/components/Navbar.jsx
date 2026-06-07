import React from "react";
import { NavLink } from "react-router-dom";
import logo from '/images/logo.png'
import { useCart } from "../context/CartContext";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const { t, toggleLang, lang, isAr } = useLang();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="container">

        <NavLink className="navbar-brand fw-bold d-flex align-items-center gap-2" style={{ color: '#b4002d' }} to="/">
          <img src={logo} alt="Flower Shop" style={{ width: "60px" }} />
           {t('nav_logo')}
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${isAr ? 'me-auto' : 'ms-auto'} align-items-center`}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">{t('nav_home')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">{t('nav_products')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{t('nav_about')}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">{t('nav_contact')}</NavLink>
            </li>
            <li className="nav-item position-relative">
              <NavLink className="nav-link" to="/cart">
                🛒 {t('nav_cart')}
              </NavLink>
              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </li>

            {/* Language Toggle */}
            <li className="nav-item ms-2">
              <button onClick={toggleLang} className="lang-toggle-btn">
                {lang === 'en' ? '🇪🇬 عربي' : '🇬🇧 English'}
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
