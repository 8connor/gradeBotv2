import React from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/index.css";

function App() {
  return (
    <Router>
      <Nav />
      {/* this is where we will put components obviously. Ill leave it blank for now */}
      <Footer />
    </Router>
  );
}

export default App;
