import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          KANYARASI FILMS
          <span>Wedding Photography</span>
        </div>

        <div className="nav-links">
          <Link
            to="/"
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
          >
            Home
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Services</Link>
          <a href="#contact">Contact</a>
        </div>

        <button className="book-btn">
          Book a Session
        </button>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
          Portfolio
        </Link>

        <Link to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <button className="mobile-book-btn">
          Book a Session
        </button>
      </div>
    </>
  );
}

export default Navbar;