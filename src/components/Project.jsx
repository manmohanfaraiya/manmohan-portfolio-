import portfolioImg from "../assets/portfolio_mockup.png";
import financeImg from "../assets/finance_tracker_mockup.png";
import attendanceImg from "../assets/attendance_system_mockup.png";
import "./Project.css";

function Project() {
  return (
    <section id="projects" className="bento-card span-3 projects-bento">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={portfolioImg} alt="Personal Portfolio" className="project-image" />
          <h3>Personal Portfolio</h3>
          <p>A sleek, modern portfolio website built with React to showcase my projects.</p>
          <div className="project-links">
            <a href="https://github.com/manmohanfaraiya/port-folio" target="_blank" rel="noreferrer" className="project-link">GitHub Repo 🔗</a>
            <a href="#" className="project-link">View Demo ↗</a>
          </div>
        </div>
        <div className="project-card">
          <img src={financeImg} alt="Personal Finance Tracker" className="project-image" />
          <h3>Personal Finance Tracker</h3>
          <p>A full-stack application to track expenses, income, and manage personal budgets effectively.</p>
          <div className="project-links">
            <a href="https://github.com/manmohanfaraiya/finacetracker.git" target="_blank" rel="noreferrer" className="project-link">GitHub Repo 🔗</a>
            <a href="#" className="project-link">View Demo ↗</a>
          </div>
        </div>
        <div className="project-card">
          <img src={attendanceImg} alt="Student Attendance System" className="project-image" />
          <h3>Student Attendance Management System</h3>
          <p>A comprehensive system to track student attendance with detailed analytics and reporting.</p>
          <div className="project-links">
            <a href="https://github.com/manmohanfaraiya/student_attendece_system.git" target="_blank" rel="noreferrer" className="project-link">GitHub Repo 🔗</a>
            <a href="#" className="project-link">View Demo ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;