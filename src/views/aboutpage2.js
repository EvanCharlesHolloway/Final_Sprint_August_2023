import React from 'react'
import { Helmet } from 'react-helmet'
import './aboutpage2.css'

const Aboutpage2 = (props) => {
  return (
    <div className="aboutpage2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="aboutpage2-aboutpage2">
        <img
          alt="MoonlightFrost28719"
          src="/external/moonlightfrost28719-35c-1600w.png"
          className="aboutpage2-moonlight-frost2"
        />
        <div className="aboutpage2-text about-me">About me...</div>
        <div className="aboutpage2-text1">
          <p className="paragraph">
            I’m a UI-UX Designer with a creative yet logical approach to design.
            I went to Keyin College and studied in software development.
          </p>
        </div>
        <div className="aboutpage2-text6">
          <p className="aboutpage2-text7 personal-note">
            On a more personal note, I’m 19 years old and I graduated from
            Glovertown Academy with academic excellence (92% average).
          </p>
        </div>
        <img
          alt="Rectangle68718"
          src="/external/rectangle68718-lk07-200h.png"
          className="aboutpage2-rectangle6"
        />
      </div>
    </div>
  )
}

export default Aboutpage2
