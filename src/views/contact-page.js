import React from 'react'

import { Helmet } from 'react-helmet'

import './contact-page.css'

const ContactPage = (props) => {
  return (
    <div className="contact-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="contact-page-contact-page">
        <img
          alt="MoonlightFrost48740"
          src="/external/moonlightfrost48740-jjqu8-1600w.png"
          className="contact-page-moonlight-frost4"
        />
        <img
          alt="Rectangle58732"
          src="/external/rectangle58732-vxkn.svg"
          className="contact-page-rectangle5"
        />
        <span className="contact-page-text">
          <span>1(709)533-8845</span>
        </span>
        <span className="contact-page-text2">
          <span>evan.holloway@keyin.com</span>
        </span>
        <img
          alt="Vector8735"
          src="/external/vector8735-qaym.svg"
          className="contact-page-vector"
        />
        <img
          alt="firrenvelope8736"
          src="/external/firrenvelope8736-or6i.svg"
          className="contact-page-firrenvelope"
        />
        <span className="contact-page-text4">Contact Me</span>
        <img
          alt="Rectangle68738"
          src="/external/rectangle68738-oq0e-200h.png"
          className="contact-page-rectangle6"
        />
      </div>
    </div>
  )
}

export default ContactPage
