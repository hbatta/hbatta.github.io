import React, { Suspense, Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ScrollPortfolio from "./components/ScrollPortfolio";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import ScrollIndicator from "./components/ScrollIndicator";
import ScrollProgress from "./components/ScrollProgress";

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <main>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/">
                  <ScrollProgress />
                  <ScrollIndicator />
                  <ScrollPortfolio />
                </Route>
                <Route exact path="/blog">
                  <BlogList />
                </Route>
                <Route path="/blog/:slug">
                  <BlogPost />
                </Route>
              </Switch>
            </Suspense>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}
