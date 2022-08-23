import React from "react";
import About from "./about/About";
import Heading from "./heading";
import Hero from "./Hero/Hero";

const MainContent = () => {
  return (
    <div>
      <Hero />
      <Heading text="About Me" left={false} />
      <About />

      {/* <Heading text="Skills" left={true} /> */}
    </div>
  );
};

export default MainContent;
