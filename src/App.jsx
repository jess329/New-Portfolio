import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'

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
        <Projects/>
      </main>

      <footer>
        
      </footer>
    </body>
  )
}

export default App
