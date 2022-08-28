import React, { useState } from "react";
import styled from "styled-components";
import Email from "../components/email/Email";
import Footer from "../components/footer/Footer";
import MainContent from "../components/MainContent";
import Navbar from "../components/navbar/Navbar";
//@ts-ignore
import FooterImage from "../images/footer.svg";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { EnterWithFade } from "../components/MotionProp";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  const [showNavbar, setShowNavbar] = useState(true);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset;
    setShowNavbar(prevScrollpos > currentScrollPos);
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <Helmet>
        <title>Bisesh Sitaula</title>
      </Helmet>
      <PageContainer>
        <div className={`navbar-container ${showNavbar ? "" : "hidden"}`}>
          <Navbar />
        </div>
        <div className="content-pusher" />

        <div className="content">
          <MainContent />
        </div>

        <Element name="contact" className="email">
          <motion.div className="container" {...EnterWithFade({})}>
            <Email />
          </motion.div>
        </Element>

        <div className="footer-container">
          <Footer />
        </div>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  overflow: hidden;

  @media screen and (max-height: 750px) {
    .content-pusher {
      height: 100px;
    }
  }

  .footer-container {
    width: 100vw;
    height: 60vh;
    background: url(${FooterImage});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: end;
    z-index: -1;

    @media screen and (max-width: 700px) {
      transform: translate(-30px, 30px);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: 100vw;
    padding: 0 20vw;
    z-index: 999;
    background-color: var(--color-code-bg);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 10px;
    box-shadow: var(--standard-shadow);
    max-height: 15vh;
  }

  .email {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hidden {
    transform: translateY(-200px);
  }

  @media only screen and (max-width: 600px) {
    display: block;
    padding: 10px;
    padding-left: 30px;
  }

  @media only screen and (max-width: 1200px) {
    .navbar-container {
      padding: 0;
    }
  }

  @media only screen and (min-width: 16000px) {
    margin: 0 15vw;
    .footer-image {
      margin: 0;
    }
    grid-template-columns: 15vw 1fr 15vw;
  }

  @media only screen and (min-width: 2000px) {
    padding: 0 10vw;
    .footer-image {
      padding: 0;
    }
  } ;
`;

export default IndexPage;
