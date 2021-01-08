import React, { Suspense, Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Tidbits from "./components/Tidbits";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/experience">
                  <br />
                  <Experience />
                </Route>
                <Route path="/projects">
                  <br />
                  <Projects />
                </Route>
                <Route path="/tidbits">
                  <br />
                  <Tidbits />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </main>
      </React.Fragment>
    );
  }
}
