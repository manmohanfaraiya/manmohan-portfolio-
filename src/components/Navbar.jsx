import { useState } from "react";
import manmohanLogo from "../assets/manmohan_logo.png";
import "./Navbar.css";

import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={manmohanLogo} alt="Logo" className="logo-icon"/>
      </div>

      <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => setIsMenuOpen(false)}><a href="#"><Home size={18}/> Home</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#about"><User size={18}/> About</a></li>
          {/* <li onClick={() => setIsMenuOpen(false)}><a href="#skills"><Code size={18}/> Skills</a></li> */}
          {/* <li onClick={() => setIsMenuOpen(false)}><a href="#projects"><Briefcase size={18}/> Projects</a></li> */}
          {/* <li onClick={() => setIsMenuOpen(false)}><a href="#resume"><FileText size={18}/> Resume</a></li> */}
          <li onClick={() => setIsMenuOpen(false)}><a href="#contact"><Mail size={18}/> Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;