import React, { useState } from "react";

const NavBar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <a className="navbar-brand" href="/">
        <span className="">HNB</span>
      </a>
      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
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
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#/experience">
              Experience <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/projects">
              Projects <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/tidbits">
            Tidbits <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default NavBar;
