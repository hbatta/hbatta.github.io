import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsNavCollapsed(true); // Collapse navbar on mobile after click
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        {isHomePage ? (
          <a
            className="navbar-brand"
            href="#home"
            style={{ fontSize: '1rem', fontWeight: 'normal', cursor: 'pointer' }}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
        ) : (
          <Link className="navbar-brand" to="/" style={{ fontSize: '1rem', fontWeight: 'normal' }}>
            Home
          </Link>
        )}
        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbar"
        >
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            {isHomePage ? (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#experience"
                    onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#education"
                    onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}
                    style={{ cursor: 'pointer' }}
                  >
                    Education
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Education
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
