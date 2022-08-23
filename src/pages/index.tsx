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
  .content {
    padding: 0 10vw;

    @media screen and (max-width: 1500px) {
      padding: 0 5vw;
    }
  }

  .navbar-container {
    position: fixed;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    z-index: 999;
    background-color: var(--color-code-bg);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .hidden {
    transform: translateY(-200px);
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
