import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import Top from "./components/Top";
import Body from "./components/Body";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* top = navbar */}
      <Top />
      <Body>
        {/* home page "/" */}
        <Home />
      </Body>
      <Footer />
    </>
  );
}

export default App;
