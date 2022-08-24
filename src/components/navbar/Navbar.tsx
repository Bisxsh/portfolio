import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Squash as Hamburger } from "hamburger-react";
import { EnterWithFade } from "../MotionProp";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  if (typeof window === `undefined`) {
    return <></>;
  }

  const { height, width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState((width || 0) > 600 ? true : false);

  useEffect(() => {
    setMenuOpen((width || 0) > 600 ? true : false);
  }, [width]);

  function scrollToTop() {
    scroll.scrollToTop();
  }

  return (
    <NavbarContainer>
      <div className="image-container">
        <StaticImage src="../../images/logo.png" alt="logo" />
      </div>

      <nav>
        {menuOpen && (
          <NavContainer>
            <motion.li {...EnterWithFade({})} onClick={scrollToTop}>
              Home
            </motion.li>
            <motion.li {...EnterWithFade({ delay: 0.2 })}>
              <Link
                activeClass="active"
                className="link"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </motion.li>
            <motion.li {...EnterWithFade({ delay: 0.4 })}>
              <Link
                activeClass="active"
                className="link"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </motion.li>
            <motion.li {...EnterWithFade({ delay: 0.6 })}>
              <Link
                activeClass="active"
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </motion.li>
            {(width || 0) > 600 && (
              <motion.div {...EnterWithFade({ delay: 0.8 })}>
                <Button text="CV" setClassName="nav--button" />
              </motion.div>
            )}
          </NavContainer>
        )}
        {(width || 0) < 600 && (
          <motion.div className="nav--menu-button" {...EnterWithFade({})}>
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </motion.div>
        )}
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: transparent;
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    padding: 10px 10px;
  }

  .image-container {
    aspect-ratio: 1;
    width: 40px;
    cursor: pointer;
  }

  .nav--menu-button {
    margin-right: 20px;
    cursor: pointer;
    z-index: 2;
  }
  @media screen and (min-width: 2600px) {
    .image-container {
      width: 80px;
    }
    .nav--button {
      margin-inline: 20px;
      font-size: 48px;
      width: 200px;
      padding: 40px;
    }
  }
`;

const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 0;

  font-weight: 400;
  font-size: var(--font-sm);

  color: #73777b;

  @media screen and (max-width: 600px) {
    margin: 10px 10px 0 0;
    position: fixed;
    inset: 0 0 70% 40%;
    border-radius: 20px;
    background-color: var(--color-primary);
    color: white;

    padding: 10px;
    flex-direction: column;
    z-index: 0;
    justify-content: space-around;
    align-items: flex-start;
  }

  li {
    background: transparent;
    margin-inline: 10px;
    margin-bottom: 0;
    cursor: pointer;

    .link {
      color: inherit;
      text-decoration: none;
    }

    -webkit-transition: color 0.2s ease-in;
    transition: color 0.2s ease-in;

    &:hover {
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 600px) {
    margin-block: 15px;
    font-size: 20px;
  }
  @media screen and (min-width: 2600px) {
    margin-inline: 20px;
  }
`;
