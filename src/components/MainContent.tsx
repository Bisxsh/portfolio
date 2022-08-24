import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Hero from "./Hero/Hero";
import Projects from "./projects/Projects";
import { Element } from "react-scroll";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Hero />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  overflow: hidden;
`;

export default MainContent;
