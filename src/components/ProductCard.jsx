import React from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

function ProductCard({ product }) {
  const { t, isAr } = useLang()

  const displayName = isAr && product.name_ar ? product.name_ar : product.name
  const displayCategory = isAr && product.category_ar ? product.category_ar : product.category

  return (
    <>
      <div className="card product-card h-100">
        <img src={product.image} className="card-img-top" alt={displayName} />

        <div className="card-body text-center">
          <h5 className="card-title">{displayName}</h5>
          <p className="category">{displayCategory}</p>
          <p className="price">{product.price} {t('card_egp')}</p>

          <Link className="btn add-btn" to={`/product/${product.id}`}>
            {t('card_view')}
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductCard