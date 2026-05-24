import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import leetcodeIcon from "../assets/leetcode.png";
import phoneIcon from "../assets/phone.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">
          Manmohan
        </h2>
        <p className="footer-text">
          Frontend & Flask Developer | DSA Enthusiast
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/manmohanfaraiya" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" className="social-icon" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/manmohan-faraiya-94768a325/" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" /> LinkedIn
          </a>
          <a href="https://leetcode.com/u/manmohan_6263/" target="_blank" rel="noreferrer">
            <img src={leetcodeIcon} alt="LeetCode" className="social-icon" /> LeetCode
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manmohandohare488@gmail.com" target="_blank" rel="noreferrer">
            <img src={emailIcon} alt="Email" className="social-icon" /> Email
          </a>
          <a href="tel:+916263613746">
            <img src={phoneIcon} alt="Phone" className="social-icon" /> 6263613746
          </a>
        </div>
        <p className="copyright">
          © 2026 Manmohan. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;