import React, { useState } from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import Navbar from "../components/navbar/Navbar";

const IndexPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    setShowNavbar(prevScrollpos > currentScrollPos);
    prevScrollpos = currentScrollPos;
  };

  return (
    <PageContainer>
      <div className={`navbar-container ${showNavbar ? "" : "hidden"}`}>
        <Navbar />
      </div>

      <div className="content">
        <MainContent />
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 10vw 1fr 10vw;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-x: hidden;

  .content {
    grid-area: 1 / 2 / 2 / 3;
  }

  .navbar-container {
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: var(--color-code-bg);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hidden {
    transform: translateY(-100px);
  }

  @media only screen and (max-width: 600px) {
    display: block;
    padding: 10px;
    padding-left: 30px;
  }

  @media only screen and (min-width: 16000px) {
    grid-template-columns: 15vw 1fr 15vw;
  }

  @media only screen and (min-width: 2000px) {
    grid-template-columns: 20vw 1fr 20vw;
  } ;
`;

export default IndexPage;
