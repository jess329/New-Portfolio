import React from 'react'

function Navbar() {

  const displayUnderline = (index) => {
    const linksUnderliner = document.getElementsByClassName("title-underline nav")
    const linksUnderlinerArr = Array.from(linksUnderliner)
    console.log(linksUnderliner);
    linksUnderlinerArr.map((line) => {
      if(linksUnderlinerArr.indexOf(line) == index) {
        line.style.display = "block"
      } else {
        line.style.display = "none"
      }
    })
  }

  return (
    <div className='navbar'>
      <a href="#"><h3 className='name'>jasper</h3></a>
        <div className='navbar-links'>
          <div>
            <a href="#about" onClick={() => displayUnderline(0)}><h3>About</h3></a>
            <div className="title-underline nav"></div>
          </div>
          <div>
            <a href="#projects" onClick={() => displayUnderline(1)}><h3>Work</h3></a>
            <div className="title-underline nav"></div>
          </div>
          <div>
            <a href="#contact" onClick={() => displayUnderline(2)}><h3>Hit me up!</h3></a>
            <div className="title-underline nav"></div>
          </div>
            
            
        </div>
    </div>
  )
}

export default Navbar

