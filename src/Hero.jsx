import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero-section'>
      <div className="hello-section">
        <p>Hi,</p>
        <p>I'm <b>J</b>asper,</p>  
        <p>Web developer.</p>
      </div>  
      <div className="job">
        <p>Frontend Developer, mostly working with React</p>
      </div>
      <a href="#projects" >
        <div className="projects-link">See Projects</div>
      </a>
    </div>
  )
}

export default Hero