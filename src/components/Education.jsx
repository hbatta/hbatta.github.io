import React, { Component } from 'react'
import "../App.css";

export default class Education extends Component {
    render() {
        return (
            <div className="container">
                <h1>Education</h1>
                <p style={{ marginBottom: "30px", fontSize: "16px" }}>
                    Building a foundation from computer science fundamentals to engineering management -
                    combining deep technical expertise with strategic leadership skills to grow into senior technical and management roles.
                </p>
                <div className="container">
                    <p className="designation">Master of Science in Engineering Management</p>
                    <a href="https://www.trine.edu/" className="organization" target="_blank" rel="noopener noreferrer">
                        Trine University
                    </a>
                    <p className="date">2024 – Present</p>
                </div>
                <hr />
                <div className="container">
                    <p className="designation">Master of Science in Computer Science</p>
                    <a href="https://www2.gmu.edu/" className="organization" target="_blank" rel="noopener noreferrer">
                        George Mason University
                    </a>
                    <p className="date">2019 – 2021 | Fairfax VA</p>
                </div>
                <hr />
                <div className="container">
                    <p className="designation">Bachelor of Technology in Computer Science</p>
                    <a href="https://anurag.edu.in/" className="organization" target="_blank" rel="noopener noreferrer">
                        Anurag University
                    </a>
                    <p className="date">2014 – 2018 | Hyderabad India</p>
                </div>
            </div>
        )
    }
}
