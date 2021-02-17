import React, { Component } from "react";
import "../App.css";

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
        <h1>Experience</h1>
        <div className="container">
          <p className="designation">Python Developer</p>
          <a href="https://www2.gmu.edu/" className="organization">
            George Mason University
          </a>
          <p className="date">Aug ’20 – Dec '20' | Fairfax VA</p>
          <ul>
            <li>
              <span> Contributed to the </span>
              <a href="https://github.com/hapi-server">
                Heliophysics Application Programmer’s Interface (HAPI).
              </a>
              <span>
                {" "}
                (open-source, python) by building their parallelization &
                caching pipelines which significantly reduced the download time.
              </span>
            </li>
            <li>Technologies: Python 3, Joblib, pytest, Travis CI</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation"> Web Developer </p>
          <a href="http://neuromorpho.org/" className="organization">
            NeuroMorpho.Org
          </a>
          <p className="date">Oct ’19 – Aug ’20 | Fairfax VA </p>
          <ul>
            <li>
              Played a pivotal role in developing the next version of
              NeuroMorpho.org and significantly reduced the query-and-fetch time
              from their neuron reconstruction database, the world's largest
              collection of neuron-data.
            </li>
            <li>
              Technologies: Django, Django REST framework, CI/CD, Docker, MySQL,
              ElasticSearch, React, Redux, Highcharts
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation">Software Engineer Intern,</p>
          <a href="https://kore.ai/" className="organization">
            Machine Learning R{"&"}D Team, Kore.ai
          </a>
          <p className="date">Nov ’18 – May ’19 | Hyderabad India</p>
          <ul>
            <li>
              Developed an end-to-end pipeline to generate dialogue flows from
              chat transcripts using several SOTA (including novel,
              custom-built) models and clustering sparse high-dimensional data.
            </li>
            <li>
              Performed Named Entity Recognition, sentiment analysis, semantic
              analysis, and synthetic-text-generation using SOTA models while
              working with GloVe, fastText, Word2vec, ELMo, RNN, GRUs, LSTM,
              BiLSTM, and Transformers.
            </li>
            <li>
              Technologies: Python, PyTorch, TensorFlow, NumPy, Stanford
              CoreNLP, MySQL, Flask, spaCy, NLTK, scikit-learn, matplotlib
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation"> Web Developer </p>
          <a href="https://anurag.edu.in/" className="organization">
            Anurag Group of Institutions
          </a>
          <p className="date">Jul '18 – Jul '19 | Hyderabad India</p>
          <ul>
            <li>
              Team-Lead in developing end-to-end college examination branch and
              placement-cell websites scaled to handle data of thousands of
              students with no performance drops.
            </li>
            <li>Django, Pandas, MySQL, HTML, JavaScript, CSS</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
