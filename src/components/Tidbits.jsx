import React, { Component } from "react";

export default class Tidbits extends Component {
  render() {
    return (
      <div className="container">
        <h1>Tidbits</h1>
        <ul>
          <li>
            <h5><a href="https://humanparts.medium.com/aristotles-timeless-advice-on-what-real-friendship-is-and-why-it-matters-c0878418343f">
              Aristotle’s Philosophy of Friendship Still Matters Today
            </a></h5>
          </li>
          <li>
            <h5><a href="https://medium.com/kaizen-habits/the-daily-habits-of-great-minds-lessons-from-nietzsche-kant-tesla-darwin-einstein-and-c1d72eb46841">
              The Daily Habits of Great Minds: Lessons From Nietzsche, Kant,
              Tesla, Darwin, Einstein And Hemingway
            </a></h5>
          </li>
        </ul>
      </div>
    );
  }
}
