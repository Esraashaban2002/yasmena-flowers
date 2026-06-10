import React from 'react'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LanguageContext'

function CartItem({ product }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart()
  const { t, isAr } = useLang()

  const displayName = isAr && product.name_ar ? product.name_ar : product.name

  // تصحيح مسار الصورة — نشيل الـ slash الزيادة لو موجودة
  const imageSrc = import.meta.env.BASE_URL.replace(/\/$/, '') + product.image

  return (
    <>
      <div className="card shadow mb-3">
        <div className="row">
          <div className="col-6">
            <img
              src={imageSrc}
              className="card-img-top"
              height={'250px'}
              alt={displayName}
              onError={(e) => { e.target.src = product.image }}
            />
          </div>

          <div className="col-6 my-auto">
            <h5>{displayName}</h5>
            <p className='price'>{product.price} {t('card_egp')}</p>
            <p>{t('detail_quantity')} : <span className='category fs-4'>{product.quantity}</span></p>

            <button className="btn btn-sm btn-success mx-1" onClick={() => increaseQuantity(product.id)}>+</button>
            <button className="btn btn-sm btn-warning mx-1" onClick={() => decreaseQuantity(product.id)}>-</button>
            <button className="btn btn-sm btn-danger mx-1" onClick={() => removeItem(product.id)}>{t('detail_remove')}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem