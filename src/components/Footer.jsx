import React from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer mt-5 pt-5 pb-3 bg-light text-center">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4">
            <h4 className="brand">{t('nav_logo')} 🌸</h4>
            <p>{t('footer_tagline')}</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>{t('footer_quick_links')}</h5>
            <ul className="list-unstyled">
              <li><Link to={'/'} className="footer-link">{t('nav_home')}</Link></li>
              <li><Link to={'/products'} className="footer-link">{t('nav_products')}</Link></li>
              <li><Link to={'/about'} className="footer-link">{t('nav_about')}</Link></li>
              <li><Link to={'/contact'} className="footer-link">{t('nav_contact')}</Link></li>
              <li><Link to={'/cart'} className="footer-link">{t('nav_cart')}</Link></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5>{t('footer_contact')}</h5>
            <p className="mb-1">📞+20 11 02324788</p>
            <p className="mb-1">📍 Cairo, Egypt</p>
          </div>

          <div className="col-md-3 mb-4">
            <h5>{t('footer_follow')}</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/1715goBwDp" target='_blank' rel="noreferrer"><FaFacebook className='i m-3 text-primary' /></a>
              <a href="https://chat.whatsapp.com/CoLXSiqhCGSCuDDecBDBol?mode=ems_copy_t" target='_blank' rel="noreferrer"><FaWhatsapp className='i m-3 text-success' /></a>
            </div>
          </div>

        </div>
        <hr />
        <div className="text-center copy-right">
          <p className="mb-0">© {new Date().getFullYear()} {t('nav_logo')} {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
