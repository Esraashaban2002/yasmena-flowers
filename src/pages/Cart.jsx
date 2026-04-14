import React from 'react'
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';


function Cart() {
    const { cartItems, cartCount } = useCart();
    const navigate = useNavigate()
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
    }, 0)
    if (cartItems == '') {
        return (
            <>
                <div className="container my-5">
                    <div className="card shadow-lg border-0 p-5 text-center">
                        <h3 className="mb-3 fw-bold">
                            Your cart is empty 🛒
                        </h3>
                        <p className="text-muted mb-4">
                            Looks like you haven't added any flowers yet 🌸
                        </p>
                        <button
                            className="btn btn-danger px-4 py-2 d-inline-flex align-items-center gap-2 mx-auto"
                            onClick={() => navigate('/products')}
                        >
                            <FaArrowLeft />
                            Back to Products
                        </button>

                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="container my-5">
                    <div className="row">

                        <div className="col-md-8">
                            {cartItems.map((item) => (
                                <CartItem key={item.id} product={item} />
                            ))}
                        </div>

                        <div className="col-md-4">
                            <div className="card p-5 shadow ">
                                <h4 className='category'>Cart Summary</h4>

                                {cartItems.map((item) => (
                                    <h5 key={item.id}>
                                        {item.name} x <span className='price'>{item.quantity}</span>
                                    </h5>
                                ))}

                                <hr />

                                <h5>Total Items : <span className='price'>{cartCount}</span></h5>
                                <h5>Total Price : <span className='price'>{total} EGP</span></h5>
                            <div className='mt-3 text-center'>
                                <button className='btn btn-danger' onClick={()=>{
                                    navigate('/checkout')
                                }}>Check out</button>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
export default Cart
