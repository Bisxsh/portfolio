import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div>
        <small>Hi my name is</small>
        <h2>Bisesh Sitaula</h2>
        <p>I'm a student who likes to design and build things for the web</p>
      </div>
      <StaticImage src="../../images/hero_image.svg" alt="person coding" />
    </div>
  );
};

export default Hero;
