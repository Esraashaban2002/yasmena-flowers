import React, { useState } from 'react'
import products from '../data/products.json'
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LanguageContext';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart: addItem } = useCart();
  const { t, isAr } = useLang()

  const product = products.find((p) => p.id === Number(id));

  const displayName = isAr && product.name_ar ? product.name_ar : product.name
  const displayCategory = isAr && product.category_ar ? product.category_ar : product.category
  const displayDescription = isAr && product.description_ar ? product.description_ar : product.description

  function addToCart() {
    addItem(product, quantity);
  }

  return (
    <div className="container my-5">
      <div className="row gap-2">
        <div className="col-md-5">
          <img src={product.image} className="card-img" alt={displayName} />
        </div>
        <div className="col-md-5 my-auto ps-5 fs-3">
          <h2 className="card-title">{displayName}</h2>
          <p>{t('detail_category')}: <span className="category">{displayCategory}</span></p>
          <p>{t('detail_price')}: <span className="price">{product.price} {t('card_egp')}</span></p>
          <p className="card-text">{displayDescription}</p>
          <input
            type="number"
            name="number"
            value={quantity > 0 ? quantity : 1}
            min={1}
            className='w-25'
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button className="btn add-btn mx-5" onClick={addToCart}>
            {t('detail_add_cart')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail