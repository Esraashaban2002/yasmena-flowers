import React from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer mt-5 pt-5 pb-3 bg-light text-center">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="brand">Yasmena Flowers 🌸</h4>
            <p className="">
              Where flowers speak the language of beauty.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to={'/'} className="footer-link">Home</Link></li>
              <li><Link to={'/products'} className="footer-link">Products</Link></li>
              <li><Link to={'/cart'} className="footer-link">Cart</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>

            {/* Social */}
            <div className="social-icons">
                <a href="https://www.facebook.com" target='_blank'> <FaFacebook className='i m-3 text-primary'/></a>
                <a href="https://www.whatsapp.com" target='_blank'><FaWhatsapp className='i m-3 text-success' /></a> 
                 <a href="#" target='_blank'><FaTiktok  className='i m-3 text-dark'/></a>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center copy-right">
          <p className="mb-0">
            © {new Date().getFullYear()} Yasmena Flowers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer