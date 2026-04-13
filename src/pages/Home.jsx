import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    return (
        <>
        <main>
            <div className="hero-section">
                <div className="content text-center">
                    <h1>Welcome To Yasmena Flowers Boutique</h1>
                    <p className='fs-4 py-3'>Where flowers speak the language of beauty</p>
                    <button className='btn btn-outline-dark py-2 px-3 fs-4' onClick={()=>{
                        navigate('/products')
                    }}>Go Start</button>
                </div>
            </div>
        </main>

        <section>
             <div className="container mx-auto my-5">

      {/* Title */}
      <h2 className="text-center mb-4">Our Flowers 🌸</h2>

                <div className="row">
        {products.slice(0,8).map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

<button className='btn btn-outline-danger d-flex mx-auto my-3  align-items-center gap-2 p-2 fs-5' onClick={()=>{
    navigate('/products')
}}>Show More <FaArrowRight /> </button>
            </div>
        </section>
        </>
    )
}

export default Home
