import React from "react";
import Heading from "./heading";
import Hero from "./Hero/Hero";

const MainContent = () => {
  return (
    <div>
      <Hero />
      <Heading text="About Me" left={true} />
      <Heading text="Skills" left={false} />
    </div>
  );
};

export default MainContent;
