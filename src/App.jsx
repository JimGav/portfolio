import './App.css'
import {Navbar, Hero, About, Education, Portfolio, Contact, TechStack, Footer} from "./components/export_components.js"

function App() {

  return (
    <div className ='App'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <TechStack/>
      <Portfolio/>
      <Contact/>  
      <Footer/>
    </div>
  )
}

export default App
