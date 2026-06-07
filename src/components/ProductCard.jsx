import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {
    return (
        <>
            <div className="card product-card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />

              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="category">{product.category}</p>
                <p className="price">{product.price} EGP</p>
                {/* <p className="card-text">{product.description}</p> */}

                {/* <button className="btn add-btn">
                  Add To Cart
                </button> */}
                <Link className="btn add-btn" to={`/product/${product.id}`}>
  View Details
</Link>

              </div>
            </div>
        </>
    )
}

export default ProductCard
