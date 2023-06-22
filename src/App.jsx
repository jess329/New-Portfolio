import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import "./Responsive.css"
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <header>
        <Navbar/>
      </header>

      <main>
        <Hero/>
        <About/>
      </main>

      <footer>
        
      </footer>
    </body>
  )
}

export default App
