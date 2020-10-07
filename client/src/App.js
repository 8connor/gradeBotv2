import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/App.scss";
import "./assets/css/index.css";

import Top from "./components/Header";
import Body from "./components/Body";
import Home from "./components/Home";
import Help from "./components/Help";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* top = navbar */}
      <Top />
      <Router>
        <Body>
          {/* home page "/" */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
          </Switch>
        </Body>
      </Router>
      <Footer />
    </>
  );
}

export default App;
