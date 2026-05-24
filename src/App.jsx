import Navbar from "./components/Navbar"
import About from "./components/About"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Project from "./components/Project"
import Contect from "./components/Contect"
import "./App.css"
import Footer from "./components/Footer"
import Resume from "./components/Resume"

function App() {
  return (
    <>
      <Navbar />
      <main className="bento-wrapper">
        <div className="bento-grid">
          <Hero/>
          <About/>
          <Skill/>
          <Resume/>
          <Project/>
          <Contect/>
        </div>
      </main>
      <Footer/>

      

      {/* <h1>Welcome</h1> */}
    </>
  )
}

export default App