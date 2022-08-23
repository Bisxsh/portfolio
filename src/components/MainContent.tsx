import React from "react";
import styled from "styled-components";
import About from "./about/About";
import Heading from "./heading";
import Hero from "./Hero/Hero";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Hero />
      <About />
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  overflow-y: hidden;
`;

export default MainContent;
