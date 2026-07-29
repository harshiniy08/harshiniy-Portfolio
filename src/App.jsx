import { useState } from 'react'
import Navbar from "./componants/Navbar/Navbar";
import Hero from "./componants/Hero/Hero";
import About from "./componants/About/About";
import Skills from "./componants/Skills/Skills";
import Contact from "./componants/Contact/Contact";
import Projects from "./componants/Projects/Projects";
import Footer from "./componants/Footer/Footer";
 
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}
 
export default App