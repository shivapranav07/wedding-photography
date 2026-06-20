import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  KANYARASI FILMS
  <span>Wedding Photography</span>
</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button className="book-btn">
        Book a Session
      </button>
    </nav>
  );
}

export default Navbar;