import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
