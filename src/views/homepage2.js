import React from 'react'

import { Helmet } from 'react-helmet'

import './homepage2.css'

const Homepage2 = (props) => {
  return (
    <div className="homepage2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="homepage2-homepage2">
        <img
          alt="MoonlightFrost18711"
          src="/external/moonlightfrost18711-l17p-1100h.png"
          className="homepage2-moonlight-frost1"
        />
        <img
          alt="Ellipse2876"
          src="/external/ellipse2876-34n5-700h.png"
          className="homepage2-ellipse2"
        />
        <img
          alt="Ellipse1877"
          src="/external/ellipse1877-jb1i-500w.png"
          className="homepage2-ellipse1"
        />
        <span className="homepage2-text">Evan Holloway</span>
        <span className="homepage2-text1">
          <span>UI -UX Designer</span>
          <br></br>
          <span>A creative designer with a great work ethic</span>
        </span>
        <img
          alt="Rectangle68710"
          src="/external/rectangle68710-x1bq-200h.png"
          className="homepage2-rectangle6"
        />
      </div>
    </div>
  )
}

export default Homepage2
