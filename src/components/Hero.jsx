import heroImage from "../assets/manu.jpeg";
import "./Hero.css";

function Hero() {
  return (
     <section className="bento-card span-2 hero-bento">
            <div className="hero-text">
                <h1 className="hero-title font-mono">Manmohan</h1>
                <p className="subtitle">Software Engineer & Full-Stack Developer</p>
                <p className="description">
                    I architect and build scalable, high-performance web applications 
                    using modern Frontend technologies and Python/Flask. With a strong 
                    foundation in Data Structures and Algorithms, I excel at solving 
                    complex technical challenges and delivering seamless user experiences.
                </p>
                <a href="#contact" className="btn">Hire Me</a>
            </div>

            <div className="hero-image">
                <img src={heroImage} alt="Manmohan"/>
            </div>
        </section>
  );
}

export default Hero;