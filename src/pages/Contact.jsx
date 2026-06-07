import React, { useState } from 'react'
import { FaFacebook, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useLang } from '../context/LanguageContext'

function Contact() {
  const { t } = useLang()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="contact-page">

      <div className="contact-hero text-center py-5">
        <div className="container">
          <h1 className="contact-title">{t('contact_hero_title')}</h1>
          <p className="contact-subtitle">{t('contact_hero_sub')}</p>
        </div>
      </div>

      <div className="container my-5 pb-5">
        <div className="row g-5">

          <div className="col-md-5">
            <h3 className="contact-heading mb-4">{t('contact_info_heading')}</h3>
            <div className="contact-info-list">
              {[
                { icon: <FaPhone className="contact-icon" />, label: t('contact_phone'), value: '+20 11 02324788' },
                { icon: <FaMapMarkerAlt className="contact-icon" />, label: t('contact_location'), value: 'Cairo, Egypt' },
              ].map((item, i) => (
                <div key={i} className="contact-info-item d-flex align-items-center gap-3 mb-4">
                  <div className="contact-icon-wrap">{item.icon}</div>
                  <div>
                    <p className="contact-label mb-0">{item.label}</p>
                    <p className="contact-value mb-0">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h5 className="contact-heading mb-3">{t('contact_follow')}</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com/share/1715goBwDp" target='_blank' rel="noreferrer"><FaFacebook className='i m-3 text-primary' /></a>
                <a href="https://chat.whatsapp.com/CoLXSiqhCGSCuDDecBDBol?mode=ems_copy_t" target='_blank' rel="noreferrer"><FaWhatsapp className='i m-3 text-success' /></a>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <div className="contact-form-card p-4 p-md-5 rounded-4">
              <h3 className="contact-heading mb-4">{t('contact_form_heading')}</h3>
              {submitted && (
                <div className="alert-success-custom mb-4 p-3 rounded-3 text-center">
                  {t('contact_success')}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label contact-label">{t('contact_form_name')}</label>
                    <input type="text" name="name" className="form-control contact-input" placeholder={t('contact_form_placeholder_name')} value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label contact-label">{t('contact_form_email')}</label>
                    <input type="email" name="email" className="form-control contact-input" placeholder={t('contact_form_placeholder_email')} value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label contact-label">{t('contact_form_phone')}</label>
                    <input type="tel" name="phone" className="form-control contact-input" placeholder={t('contact_form_placeholder_phone')} value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label className="form-label contact-label">{t('contact_form_message')}</label>
                    <textarea name="message" className="form-control contact-input" rows="5" placeholder={t('contact_form_placeholder_msg')} value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn contact-submit-btn w-100 py-3">
                      {t('contact_form_submit')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
