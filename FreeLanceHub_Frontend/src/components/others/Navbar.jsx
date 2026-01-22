import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-icon">FH</div>
        <span className="logo-text">FreelanceHub</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#">About us</a>

        {/* Freelancer */}
        <Link to="/discover">Discover</Link>
        <Link to="/freelancer/proposals">My Proposals</Link>

        {/* Client */}
        <Link to="/client/jobs">Client Jobs</Link>
        <Link to="/client/inbox">Client Inbox</Link>

        <a href="#">Blog</a>
      </div>

      <div className="nav-actions">
        <button className="btn-outline">Login</button>
        <button className="btn-primary">Sign up</button>
      </div>
    </nav>
  );
}
