import React, { Component } from "react";
import "./Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-header">
          <h1>Hari Narayana Batta</h1>
          <p className="resume-contact">
            <a href="mailto:harinarayanabatta@gmail.com">harinarayanabatta@gmail.com</a> •
            <a href="https://www.linkedin.com/in/harinarayanabatta/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> •
            <a href="https://github.com/hbatta/" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </div>

        <div className="resume-section">
          <h2>SUMMARY</h2>
          <p>Software Development Engineer with 4+ years of experience at Amazon Web Services, specializing in distributed systems, serverless architectures, and AI-powered developer tools. Strong technical background in Java, Python, and AWS services with a track record of building scalable solutions and leading cross-team initiatives.</p>
        </div>

        <div className="resume-section">
          <h2>SKILLS</h2>
          <p><strong>Languages:</strong> Java, Python, TypeScript, JavaScript</p>
          <p><strong>AWS Services:</strong> Lambda, DynamoDB, S3, API Gateway, CloudFormation, Glue</p>
          <p><strong>Technologies:</strong> Machine Learning, Distributed Systems, React, Django, Flask, Docker, CI/CD</p>
        </div>

        <div className="resume-section">
          <h2>EXPERIENCE</h2>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Software Development Engineer II</strong>
                <span className="resume-company"> - Amazon Web Services (AWS)</span>
              </div>
              <div className="resume-date">Jul 2021 – Present</div>
            </div>

            <div className="resume-role">
              <strong>AWS Glue</strong> <em>(Aug 2025 – Present)</em>
              <ul>
                <li>Building scalable distributed systems for serverless data integration, ETL workloads, and data catalog services.</li>
              </ul>
            </div>

            <div className="resume-role">
              <strong>Amazon Q Developer (KIRO)</strong> <em>(Aug 2024 – Aug 2025)</em>
              <ul>
                <li>Developed features for AI-powered coding assistant including code generation, inline suggestions, security scanning, and chat-based assistance.</li>
                <li>Improved AI models and infrastructure for developer productivity tools.</li>
              </ul>
            </div>

            <div className="resume-role">
              <strong>AWS AppFabric</strong> <em>(Jul 2021 – Jul 2024)</em>
              <ul>
                <li>Started as SDE I, promoted to SDE II.</li>
                <li>Designed and implemented APIs, data ingestion pipelines, and integration frameworks for SaaS application connectivity.</li>
                <li>Led initiatives to improve service reliability and customer experience.</li>
              </ul>
            </div>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Python Developer</strong>
                <span className="resume-company"> - George Mason University</span>
              </div>
              <div className="resume-date">Aug 2020 – Dec 2020</div>
            </div>
            <ul>
              <li>Contributed to the Heliophysics Application Programmer's Interface (HAPI) by building parallelization and caching pipelines which significantly reduced the download time.</li>
              <li>Technologies: Python 3, Joblib, pytest, Travis CI</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Web Developer</strong>
                <span className="resume-company"> - NeuroMorpho.Org</span>
              </div>
              <div className="resume-date">Oct 2019 – Aug 2020</div>
            </div>
            <ul>
              <li>Developed the next version of NeuroMorpho.org and significantly reduced query-and-fetch time from their neuron reconstruction database, the world's largest collection of neuron data.</li>
              <li>Technologies: Django, Django REST framework, CI/CD, Docker, MySQL, ElasticSearch, React, Redux, Highcharts</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Software Engineer Intern</strong>
                <span className="resume-company"> - Machine Learning R&D Team, Kore.ai</span>
              </div>
              <div className="resume-date">Nov 2018 – May 2019</div>
            </div>
            <ul>
              <li>Developed an end-to-end pipeline to generate dialogue flows from chat transcripts using SOTA models and clustering techniques for sparse high-dimensional data.</li>
              <li>Performed Named Entity Recognition, sentiment analysis, semantic analysis, and synthetic text generation using SOTA models including GloVe, fastText, Word2vec, ELMo, RNN, GRUs, LSTM, BiLSTM, and Transformers.</li>
              <li>Technologies: Python, PyTorch, TensorFlow, NumPy, Stanford CoreNLP, MySQL, Flask, spaCy, NLTK, scikit-learn, matplotlib</li>
            </ul>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Web Developer</strong>
                <span className="resume-company"> - Anurag Group of Institutions</span>
              </div>
              <div className="resume-date">Jul 2018 – Jul 2019</div>
            </div>
            <ul>
              <li>Led development of end-to-end college examination and placement-cell websites scaled to handle data of thousands of students with no performance drops.</li>
              <li>Technologies: Django, Pandas, MySQL, HTML, JavaScript, CSS</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2>EDUCATION</h2>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Master of Science in Engineering Management</strong>
                <span className="resume-company"> - Trine University</span>
              </div>
              <div className="resume-date">2024 – Present</div>
            </div>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Master of Science in Computer Science</strong>
                <span className="resume-company"> - George Mason University</span>
              </div>
              <div className="resume-date">2019 – 2021</div>
            </div>
          </div>

          <div className="resume-job">
            <div className="resume-job-header">
              <div>
                <strong>Bachelor of Technology in Computer Science</strong>
                <span className="resume-company"> - Anurag University</span>
              </div>
              <div className="resume-date">2014 – 2018</div>
            </div>
          </div>
        </div>

        <div className="resume-print-button">
          <button onClick={() => window.print()} className="btn btn-primary">Download as PDF</button>
        </div>
      </div>
    );
  }
}
