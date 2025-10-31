import React, { Component } from "react";
import displayPicture from "../images/displayPicture.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="home-grid">
          <div className="home-image">
            <img
              src={displayPicture}
              alt="Hari Narayana Batta (New York)"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="home-content">
            <h3>Hi! I'm Hari Narayana Batta.</h3>
            <hr />
            <h5>Software Engineer</h5>
            <hr />
            <p className="home-links">
              <a href="https://github.com/hbatta/" target="_blank" rel="noopener noreferrer">GitHub</a>
              {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
              <a href="https://www.linkedin.com/in/harinarayanabatta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
              <a href="mailto:harinarayanabatta@gmail.com">Email</a>
              {"\u00A0"} {"\u00A0"} | {"\u00A0"} {"\u00A0"}
              <a href="https://open.spotify.com/user/31zxiiotptio27svdqqazqb2znqi" target="_blank" rel="noopener noreferrer">Spotify</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
