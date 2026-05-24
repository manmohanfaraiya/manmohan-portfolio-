import "./Skill.css";

function Skill() {
  return (
    <section id="skills" className="bento-card span-2 skills-bento">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>
        <div className ="skill-item">
          <h3>Backend</h3>
          <p>Python, Flask, Basic SQL</p>
        </div>
        <div className="skill-item">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
        <div className="skill-item">
          <h3>Languages</h3>
          <p>C++, C, Python</p>
        </div>
      </div>
    </section>
  );
}

export default Skill;
