import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="container">
        <h1>Projects</h1>
        <div className="container">
          <p className="project">Morphological NMT</p>
          <ul>
            <li>
              Built a Hindi to English neural machine trans- lation model using
              morphological rich infor- mation of the source language that
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
          <p className="project">OneSocialNetwork</p>
          <ul>
            <li>
              Developing a novel containerized web- application that shows
              consolidated User homepages of social-networks like Twitter,
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
              than Perspec- tive API.
            </li>
            <li>Technologies: Python, Flask, React.js, Sklearn, PySpark.</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="project"> College Placement Cell Website</p>
          <ul>
            <li>
              Developed a website for our college placement cell and the
              activities taken up by that branch.
            </li>
            <li>Technologies: Django, Django Rest Frame- work, MySQL.</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="project">College Examination Branch Website</p>
          <ul>
            <li>
              Built a fully-functioning end-to-end website for the daily-use of
              our college examination branch. Scaled the application to handle
              the data of thousands of students with no perfor- mance drops.
            </li>
            <li>Technologies: PHP, MySQL, HTML, CSS, Boot- strap 4.</li>
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
