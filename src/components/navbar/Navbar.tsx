import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const { height, width } = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(width > 600 ? true : false);

  useEffect(() => {
    setMenuOpen(width > 600 ? true : false);
  }, [width]);

  function toggleMenu() {
    setMenuOpen(o => !o);
  }

  return (
    <NavbarContainer>
      <div className="image-container">
        <StaticImage src="../../images/logo.png" alt="logo" />
      </div>

      <nav>
        {menuOpen && (
          <NavContainer>
            <NavOption>Home</NavOption>
            <NavOption>About</NavOption>
            <NavOption>Projects</NavOption>
            <NavOption>Contact</NavOption>
            {width > 600 && <Button text="CV" setClassName="nav--button" />}
          </NavContainer>
        )}
        {width < 600 && (
          <div className="nav--menu-button">
            <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
          </div>
        )}
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  margin-block: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

const NavOption = styled.li`
  background: transparent;
  margin-inline: 10px;
  margin-bottom: 0;
  cursor: pointer;

  -webkit-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;

  &:hover {
    color: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    margin-block: 15px;
    font-size: 20px;
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
    background-color: var(--color-accent);

    padding: min(20vh, 10rem) 2em;
    flex-direction: column;
    z-index: 0;
    justify-content: center;
    align-items: flex-start;
  }
`;
