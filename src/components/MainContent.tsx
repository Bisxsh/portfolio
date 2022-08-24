import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Hero from "./Hero/Hero";
import Projects from "./projects/Projects";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Hero />
      <About />
      <Projects />
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  overflow: hidden;
`;

export default MainContent;
