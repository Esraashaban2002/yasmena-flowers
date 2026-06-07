import React from 'react'
import { useLang } from '../context/LanguageContext'
import heroSection from '/images/logo.png'
function About() {
  const { t } = useLang()

  const whyItems = [
    { icon: '🎨', titleKey: 'about_why_2_title', descKey: 'about_why_2_desc' },
    { icon: '🚚', titleKey: 'about_why_3_title', descKey: 'about_why_3_desc' },
    { icon: '💝', titleKey: 'about_why_4_title', descKey: 'about_why_4_desc' },
  ]

  return (
    <div className="about-page">

      <div className="about-hero text-center py-5">
        <div className="container">
          <h1 className="about-title">{t('about_hero_title')}</h1>
          <p className="about-subtitle">{t('about_hero_sub')}</p>
        </div>
      </div>

      <section className="container my-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img src={heroSection} alt="Yasmena Flowers" className="img-fluid rounded-4 shadow" />
          </div>
          <div className="col-md-6">
            <h2 className="about-heading mb-4">{t('about_story_heading')}</h2>
            <p className="about-text">{t('about_story_p1')}</p>
            <p className="about-text">{t('about_story_p2')}</p>
          </div>
        </div>
      </section>

      <section className="about-vision py-5 my-4">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { icon: '🌹', titleKey: 'about_vision_title', textKey: 'about_vision_text' },
              { icon: '💐', titleKey: 'about_mission_title', textKey: 'about_mission_text' },
              { icon: '✨', titleKey: 'about_values_title', textKey: 'about_values_text' },
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="vision-card p-4">
                  <div className="vision-icon mb-3">{item.icon}</div>
                  <h4 className="vision-title">{t(item.titleKey)}</h4>
                  <p className="vision-text">{t(item.textKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container my-5 pb-5">
        <h2 className="text-center about-heading mb-5">{t('about_why_title')}</h2>
        <div className="row g-4 mx-auto">
          {whyItems.map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="why-card text-center p-4 h-100">
                <div className="why-icon mb-3">{item.icon}</div>
                <h5 className="why-title">{t(item.titleKey)}</h5>
                <p className="why-text">{t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default About
