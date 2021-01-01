
import React, { Suspense, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Random from './components/Random'
import Experience from './components/Experience'
import Projects from './components/Projects'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <Suspense fallback={<div>Loading...</div>} >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/#experience" >
                <Experience />
              </Route>
              <Route exact path="/#projects" >
                <Projects />
              </Route>
              <Route exact path="/#random" >
                <Random />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </React.Fragment>

      // <React.Fragment>
      //   <Home />
      //   <Experience />
      //   <Projects />
      //   <Random />
      // </React.Fragment>
    )
  }
}
