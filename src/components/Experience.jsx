import React, { Component } from "react";
import "../App.css";

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
        <h1>Experience</h1>
        <p style={{ fontSize: "16px", marginBottom: "20px", marginTop: "20px" }}>
          <strong>Skills:</strong> Java, Python, TypeScript, JavaScript • AWS (Lambda, DynamoDB, S3, API Gateway, CloudFormation, Glue) • Machine Learning, Distributed Systems • React, Django, Flask • Docker, CI/CD
        </p>
        <hr />
        <div className="container">
          <p className="designation">Software Development Engineer II</p>
          <a href="https://aws.amazon.com/" className="organization" target="_blank" rel="noopener noreferrer">
            Amazon Web Services (AWS)
          </a>
          <p className="date">Jul '21 – Present | Seattle WA</p>
          <ul>
            <li>
              <strong>AWS Glue</strong> (Aug '25 – Present): Building scalable distributed systems for serverless data integration, ETL workloads, and data catalog services.
            </li>
            <li>
              <strong>Amazon Q Developer (KIRO)</strong> (Aug '24 – Aug '25): Developed features for AI-powered coding assistant including code generation, inline suggestions, security scanning, and chat-based assistance. Improved AI models and infrastructure for developer productivity tools.
            </li>
            <li>
              <strong>AWS AppFabric</strong> (Jul '21 – Jul '24): Started as SDE I, promoted to SDE II. Designed and implemented APIs, data ingestion pipelines, and integration frameworks for SaaS application connectivity. Led initiatives to improve service reliability and customer experience.
            </li>
            <li>Technologies: Java, Python, TypeScript, AWS Services (Lambda, DynamoDB, S3, API Gateway), Machine Learning, Distributed Systems</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation">Python Developer</p>
          <a href="https://www2.gmu.edu/" className="organization" target="_blank" rel="noopener noreferrer">
            George Mason University
          </a>
          <p className="date">Aug '20 – Dec '20 | Fairfax VA</p>
          <ul>
            <li>
              Contributed to the <a href="https://github.com/hapi-server" target="_blank" rel="noopener noreferrer">Heliophysics Application Programmer's Interface (HAPI)</a> by building parallelization and caching pipelines which significantly reduced the download time.
            </li>
            <li>Technologies: Python 3, Joblib, pytest, Travis CI</li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation">Web Developer</p>
          <a href="http://neuromorpho.org/" className="organization" target="_blank" rel="noopener noreferrer">
            NeuroMorpho.Org
          </a>
          <p className="date">Oct '19 – Aug '20 | Fairfax VA</p>
          <ul>
            <li>
              Developed the next version of NeuroMorpho.org and significantly reduced query-and-fetch time from their neuron reconstruction database, the world's largest collection of neuron data.
            </li>
            <li>
              Technologies: Django, Django REST framework, CI/CD, Docker, MySQL, ElasticSearch, React, Redux, Highcharts
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation">Software Engineer Intern</p>
          <a href="https://kore.ai/" className="organization" target="_blank" rel="noopener noreferrer">
            Machine Learning R&D Team, Kore.ai
          </a>
          <p className="date">Nov '18 – May '19 | Hyderabad India</p>
          <ul>
            <li>
              Developed an end-to-end pipeline to generate dialogue flows from chat transcripts using SOTA models and clustering techniques for sparse high-dimensional data.
            </li>
            <li>
              Performed Named Entity Recognition, sentiment analysis, semantic analysis, and synthetic text generation using SOTA models including GloVe, fastText, Word2vec, ELMo, RNN, GRUs, LSTM, BiLSTM, and Transformers.
            </li>
            <li>
              Technologies: Python, PyTorch, TensorFlow, NumPy, Stanford CoreNLP, MySQL, Flask, spaCy, NLTK, scikit-learn, matplotlib
            </li>
          </ul>
        </div>
        <hr />
        <div className="container">
          <p className="designation">Web Developer</p>
          <a href="https://anurag.edu.in/" className="organization" target="_blank" rel="noopener noreferrer">
            Anurag Group of Institutions
          </a>
          <p className="date">Jul '18 – Jul '19 | Hyderabad India</p>
          <ul>
            <li>
              Led development of end-to-end college examination and placement-cell websites scaled to handle data of thousands of students with no performance drops.
            </li>
            <li>Technologies: Django, Pandas, MySQL, HTML, JavaScript, CSS</li>
          </ul>
        </div>
        <hr />
      </div>
    );
  }
}
