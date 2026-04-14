import React from 'react'
import { useCart } from '../context/CartContext'

function CartItem({ product }) {

    const {increaseQuantity , decreaseQuantity , removeItem} = useCart()
    return (
        <>
            <div className="card shadow mb-3">
                <div className="row ">
                <div className="col-6">
                    <img src={import.meta.env.BASE_URL + product.image} className="card-img-top" height={'250px'} alt={product.name} />
                </div>

                <div className="col-6 my-auto">
                    <h5>{product.name}</h5>
                    <p className='price'>{product.price} EGP</p>
                    <p>Quantity : <span  className='category fs-4'>{product.quantity}</span></p>

                    <button className="btn btn-sm btn-success mx-1" onClick={() => increaseQuantity(product.id)}>+</button>
                    <button className="btn btn-sm btn-warning mx-1" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <button className="btn btn-sm btn-danger mx-1" onClick={() => removeItem(product.id)}>Remove</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default CartItem
