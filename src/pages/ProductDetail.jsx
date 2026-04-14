import React, { useState } from 'react'
import products from '../data/products.json'
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
function ProductDetail() {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { addToCart: addItem } = useCart();

    function getQuantity(e) {
        setQuantity(Number(e.target.value))
    }
    function addToCart() {
        addItem(product, quantity);

    }
    const product = products.find((p) => p.id === Number(id));

    return (
        <>
            <div className="container my-5">
                <div className=" row gap-2">
                    <div className="col-md-5 ">
                        <img src={import.meta.env.BASE_URL + product.image} className="card-img" alt={product.name} />
                    </div>

                    <div className="col-md-5 my-auto ps-5 fs-3">
                        <h2 className="card-title">{product.name}</h2>
                        <p >Category : <span className="category">{product.category}</span> </p>
                        <p >Price :<span className="price">{product.price}EGP</span></p>
                        <p className="card-text">{product.description}</p>

                        <input type="number" name="number" value={quantity} min={1} className='w-25' onChange={getQuantity} />
                        <button className="btn add-btn mx-5" onClick={addToCart}>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
