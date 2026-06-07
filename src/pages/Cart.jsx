import React from 'react'
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { useLang } from '../context/LanguageContext';

function Cart() {
  const { cartItems, cartCount, total } = useCart();
  const navigate = useNavigate()
  const { t, isAr } = useLang()

  if (cartItems.length === 0) {
    return (
      <div className="container my-5">
        <div className="card shadow-lg border-0 p-5 text-center">
          <h3 className="mb-3 fw-bold">{t('cart_empty_title')}</h3>
          <p className="text-muted mb-4">{t('cart_empty_sub')}</p>
          <button
            className="btn btn-danger px-4 py-2 d-inline-flex align-items-center gap-2 mx-auto"
            onClick={() => navigate('/products')}
          >
            {isAr ? <FaArrowRight /> : <FaArrowLeft />}
            {t('cart_back_products')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className="col-md-4">
          <div className="card p-5 shadow">
            <h4 className='category'>{t('cart_summary')}</h4>
            {cartItems.map((item) => (
              <h5 key={item.id}>
                {item.name} x <span className='price'>{item.quantity}</span>
              </h5>
            ))}
            <hr />
            <h5>{t('cart_total_items')}: <span className='price'>{cartCount}</span></h5>
            <h5>{t('cart_total_price')}: <span className='price'>{total} {t('card_egp')}</span></h5>
            <div className='mt-3 text-center'>
              <button className='btn btn-danger' onClick={() => navigate('/checkout')}>
                {t('cart_checkout')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
