import React from 'react'

function Navbar() {

  const displayUnderline = (event, index) => {
    const linksUnderliner = document.getElementsByClassName("title-underline nav")
    const linksUnderlinerArr = Array.from(linksUnderliner)
    linksUnderlinerArr.map((line) => {
      if(linksUnderlinerArr.indexOf(line) == index) {
        line.style.display = "block"
        event.target.style.color = "var(--btn-clr)"
      } else {
        line.style.display = "none"
        event.target.style.color = "white"
      }
    })
  }

  return (
    <div className='navbar'>
      <a href="#"><h3 className='name'>jasper</h3></a>
        <div className='navbar-links'>
          <div>
            <a href="#about" onClick={(event) => displayUnderline(event, 0)}><h3>About</h3></a>
            <div className="title-underline nav"></div>
          </div>
          <div>
            <a href="#projects" onClick={(event) => displayUnderline(event, 1)}><h3>Work</h3></a>
            <div className="title-underline nav"></div>
          </div>
          <div>
            <a href="#contact" onClick={(event) => displayUnderline(event, 2)}><h3>Hit me up!</h3></a>
            <div className="title-underline nav"></div>
          </div>
            
            
        </div>
    </div>
  )
}

export default Navbar

