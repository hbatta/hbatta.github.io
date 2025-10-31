import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <div className="container">
          <p className="project">
            <a href="https://github.com/hbatta/morphological-nmt" target="_blank" rel="noopener noreferrer">
              Morphological NMT
            </a>
          </p>
          <ul>
            <li>
              Built a Hindi to English neural machine translation model using
              morphological rich information of the source language that
              produces results comparable to that of the state of the art model.
            </li>
            <li>
              Technologies: Python, PyTorch, Stanza, OpenNMT-py, sentencepiece,
              fairseq.
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="project">One Social Network</p>
          <ul>
            <li>
              Developing a novel containerized web application that shows
              consolidated user homepages of social-networks like Twitter,
              Reddit, LinkedIn, Facebook and Instagram at one source.
            </li>
            <li>Technologies: Python, Flask, React.js.</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="project">Toxic Comment Classification</p>
          <ul>
            <li>
              Built a model that allows users to filter or customize the type of
              toxicity they are looking for while also offering better results
              than Perspective API.
            </li>
            <li>Technologies: Python, Flask, React.js, Sklearn.</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="project">MRND Projects</p>
          <ul>
            <li>
              Built a C-based custom-compiler that compiles and executes any
              given code as per the syntax and semantics defined.
            </li>
            <li>
              Built a Database using B+ Trees that takes a text file as input
              and performs join, union and aggregation.
            </li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
