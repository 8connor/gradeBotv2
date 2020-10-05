import React, { useEffect } from "react";
import Features from "./Features";
import Parallax from "./Parallax";
import "animate.css";

function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty("--animate-duration", "3s");
  });

  return (
    <>
      {/* This is a parallax at the top of home page. It has the about and login section inside of it. */}
      <Parallax />
      {/* This is a different container holding the features. It is separate from the parallax. */}
      <Features />
    </>
  );
}

export default Home;
