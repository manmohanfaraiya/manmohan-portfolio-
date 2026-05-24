import resumePdf from "../assets/manmohan.resume.pdf";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="bento-card resume-bento">
      <h2>Resume</h2>
      <p className="resume-desc">View my complete work experience and educational background.</p>
      <a href={resumePdf} download="Manmohan_Resume.pdf" className="btn resume-btn">Download CV</a>
    </section>
  );
}

export default Resume;