import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='section about' id='about'>
        <div>
            <div className="about-title">
                <p>About Me</p>
                <div className="title-underline"></div>
            </div>
            <div className="about-text">
                <p>
                    I'm a <b>Frontend Web Developer</b>, building the client-side of websites and web applications.
                    Check out some of my work in the <b>Projects</b> section.
                </p>
                <p>
                    To tell you a bit more about myself, I'm 19 years old, living in Berlin, Germany
                    and currently studying computer science. Also I'm freelancing in <b>web development</b> on the side.
                </p>
                <p>
                    I'm always open for freelance work especially in JavaScript and React. 
                    Don't hesitate to <b>contact</b> me for work offers or just to send me a message.
                </p>
                <a href="#contact">
                    <div className="btn contact">
                        Contact
                    </div>
                </a>
            </div> 
        </div>
        
        <div className="skills-section">
            <div className="skills-title">
                <p>My Skills</p>
                <div className="title-underline"></div>
            </div>
            <div className="skills">
                <div className="skill">
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <p>React</p>
                </div>
                <div className="skill">
                    <p>SASS</p>
                </div>
                <div className="skill">
                    <p>Responsive Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About