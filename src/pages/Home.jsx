import React from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

function Home() {
  const navigate = useNavigate()
  const { t, isAr } = useLang()

  return (
    <>
      <main>
        <div className="hero-section">
          <div className="content text-center">
            <h1>{t('home_hero_title')}</h1>
            <p className='fs-4 py-3'>{t('home_hero_subtitle')}</p>
            <button className='btn btn-outline-dark py-2 px-3 fs-4' onClick={() => navigate('/products')}>
              {t('home_hero_btn')}
            </button>
          </div>
        </div>
      </main>

      <section>
        <div className="container mx-auto my-5">
          <h2 className="text-center mb-4">{t('home_section_title')}</h2>
          <div className="row">
            {products.slice(0, 8).map((p) => (
              <div key={p.id} className="col-md-3 mb-4">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <button
            className='btn btn-outline-danger d-flex mx-auto my-3 align-items-center gap-2 p-2 fs-5'
            onClick={() => navigate('/products')}
          >
            {t('home_show_more')} {isAr ? <FaArrowLeft /> : <FaArrowRight />}
          </button>
        </div>
      </section>
    </>
  )
}

export default Home

