import React from "react";
import displayPicture from "../images/displayPicture.jpg";
import "../App.css";

const ScrollPortfolio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="scroll-section hero-section">
        <div className="container">
          <div className="home-grid">
            <div className="home-image">
              <img
                src={displayPicture}
                alt="Hari Narayana Batta (New York)"
              />
            </div>
            <div className="home-content">
              <h3>Hi! I'm Hari Narayana Batta.</h3>
              <h5>Software Engineer</h5>
              <p className="home-tagline">Building scalable systems and crafting elegant solutions at AWS. Passionate about distributed systems, AI, and clean code.</p>
              <div className="home-links">
                <a href="https://github.com/hbatta/" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span>|</span>
                <a href="https://www.linkedin.com/in/harinarayanabatta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span>|</span>
                <a href="mailto:harinarayanabatta@gmail.com">Email</a>
                <span>|</span>
                <a href="https://open.spotify.com/user/31zxiiotptio27svdqqazqb2znqi" target="_blank" rel="noopener noreferrer">Spotify</a>
                <span>|</span>
                <a href="/resume.pdf" download="Hari_Batta_Resume.pdf">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-section">
        <div className="container">
          <h1>Experience</h1>
          <p style={{ fontSize: "16px", marginBottom: "40px", marginTop: "20px" }}>
            <strong>Skills:</strong> Java, Python, TypeScript, JavaScript • AWS (Lambda, DynamoDB, S3, API Gateway, CloudFormation, Glue) • Machine Learning, Distributed Systems • React, Django, Flask • Docker, CI/CD
          </p>
          <div className="experience-card">
            <div className="card-header">
              <p className="designation">Software Development Engineer II</p>
              <p className="date">Jul '21 – Present | Seattle WA</p>
            </div>
            <a href="https://aws.amazon.com/" className="organization" target="_blank" rel="noopener noreferrer">
              Amazon Web Services (AWS)
            </a>
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
          <div className="experience-card">
            <div className="card-header">
              <p className="designation">Python Developer</p>
              <p className="date">Aug '20 – Dec '20 | Fairfax VA</p>
            </div>
            <a href="https://www2.gmu.edu/" className="organization" target="_blank" rel="noopener noreferrer">
              George Mason University
            </a>
            <ul>
              <li>
                Contributed to the <a href="https://github.com/hapi-server" target="_blank" rel="noopener noreferrer">Heliophysics Application Programmer's Interface (HAPI)</a> by building parallelization and caching pipelines which significantly reduced the download time.
              </li>
              <li>Technologies: Python 3, Joblib, pytest, Travis CI</li>
            </ul>
          </div>
          <div className="experience-card">
            <div className="card-header">
              <p className="designation">Web Developer</p>
              <p className="date">Oct '19 – Aug '20 | Fairfax VA</p>
            </div>
            <a href="http://neuromorpho.org/" className="organization" target="_blank" rel="noopener noreferrer">
              NeuroMorpho.Org
            </a>
            <ul>
              <li>
                Developed the next version of NeuroMorpho.org and significantly reduced query-and-fetch time from their neuron reconstruction database, the world's largest collection of neuron data.
              </li>
              <li>
                Technologies: Django, Django REST framework, CI/CD, Docker, MySQL, ElasticSearch, React, Redux, Highcharts
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <div className="card-header">
              <p className="designation">Software Engineer Intern</p>
              <p className="date">Nov '18 – May '19 | Hyderabad India</p>
            </div>
            <a href="https://kore.ai/" className="organization" target="_blank" rel="noopener noreferrer">
              Machine Learning R&D Team, Kore.ai
            </a>
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
          <div className="experience-card">
            <div className="card-header">
              <p className="designation">Web Developer</p>
              <p className="date">Jul '18 – Jul '19 | Hyderabad India</p>
            </div>
            <a href="https://anurag.edu.in/" className="organization" target="_blank" rel="noopener noreferrer">
              Anurag Group of Institutions
            </a>
            <ul>
              <li>
                Led development of end-to-end college examination and placement-cell websites scaled to handle data of thousands of students with no performance drops.
              </li>
              <li>Technologies: Django, Pandas, MySQL, HTML, JavaScript, CSS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="scroll-section">
        <div className="container">
          <h1>Education</h1>
          <p style={{ marginBottom: "40px", fontSize: "16px" }}>
            Building a foundation from computer science fundamentals to engineering management -
            combining deep technical expertise with strategic leadership skills to grow into senior technical and management roles.
          </p>
          <div className="education-card">
            <div className="card-header">
              <p className="designation">Master of Science in Engineering Management</p>
              <p className="date">2024 – Present | Reston VA</p>
            </div>
            <a href="https://www.trine.edu/" className="organization" target="_blank" rel="noopener noreferrer">
              Trine University
            </a>
          </div>
          <div className="education-card">
            <div className="card-header">
              <p className="designation">Master of Science in Computer Science</p>
              <p className="date">2019 – 2021 | Fairfax VA</p>
            </div>
            <a href="https://www2.gmu.edu/" className="organization" target="_blank" rel="noopener noreferrer">
              George Mason University
            </a>
          </div>
          <div className="education-card">
            <div className="card-header">
              <p className="designation">Bachelor of Technology in Computer Science</p>
              <p className="date">2015 – 2019 | Hyderabad India</p>
            </div>
            <a href="https://anurag.edu.in/" className="organization" target="_blank" rel="noopener noreferrer">
              Anurag University
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollPortfolio;
