import React from 'react'
import "./Projects.css"
import { projects } from './data'

function Projects() {
  return (
    <div className='section projects' id='projects'>
        <div className="projects-title">
            <p>Projects</p>
            <div className="title-underline"></div>
        </div>
        <div className="project-display">
            <h3>Project Title</h3>
        </div>
    </div>
  )
}

export default Projects