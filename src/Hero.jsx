import React from 'react'
import "./Hero.css"
import heroimg from "./assets/hero-img.png"

function Hero() {
  return (
    <div className='section hero'>
      <div className="hero-top">
        <div className="hello-section">
          <p>Hi,</p>
          <p>I'm <b>J</b>asper,</p>  
          <p>Web developer.</p>
        </div>
        <div className="hero-img">
          <img src={heroimg} alt="Hero" />
        </div>
      </div>
        <div className="job">
          <p>Frontend Developer, mostly working with React</p>
        </div>
      
      <a href="#projects" >
        <div className="btn projects">See Projects</div>
      </a>
      
    </div>
  )
}

export default Hero