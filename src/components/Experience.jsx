import React, { Component } from "react";
import "../App.css";

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
        <h1>Experience</h1>
        <div className="container">
          <p className="designation">Python Developer</p>
          <span className="organization">George Mason University</span>
          <p className="date">Aug ’20 – Present | Fairfax VA</p>
          <ul>
            <li>
              Working on the Heliophysics Application Programmer’s Interface
              (HAPI).
            </li>
            <li>
              Developing a software to efficiently download a large amount of
              data from the HAPI servers.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation"> Web Developer </p>
          <p className="organization">NeuroMorpho.Org</p>
          <p className="date">Oct ’19 – Aug ’20 | Fairfax VA </p>
          <ul>
            <li>
              Worked on building the next version of neuromorpho website using
              Django and React.js.
            </li>
            <li>
              Built a micro service architecture along with the CI-CD pipeline.
            </li>
            <li>
              Technologies: Python, Django, JavaScript, React.js, Docker,
              Docker-Compose, Django-rest-framework.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation"> Software Engineer Intern </p>
          <p className="organization">Kore.ai</p>
          <p className="date">Nov ’18 – May ’19 | Hyderabad India</p>
          <ul>
            <li>
              Developed an end-to-end pipeline to generate dialogue flows from
              chat transcripts using several state of the art models and
              clustering sparse high-dimensional data.
            </li>
            <li>
              Technologies: python, sklearn, pandas, numpy, node.js, flask,
              react.js, mongodb.
            </li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
