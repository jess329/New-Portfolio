import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='section about'>
        <div className="about-title">
            <p>About Me</p>
            <div className="title-underline"></div>
        </div>
        <div className="about-text">
            <p>
                I'm a Frontend Web Developer, building the client-side of websites and web applications.
                Check out some of my work in the Projects section.
            </p>
            <p>
                To tell you a bit more about myself, I'm 19 years old, living in Berlin, Germany
                and currently studying computer science. Also I'm freelancing in web development on the side.
            </p>
            <p>
                I'm open to job oppertunities where I can contribute, learn and grow. 
                If you have a good opportunity or just want to send me a message, don't hesitate to contact me.
            </p>
        </div>
    </div>
  )
}

export default About