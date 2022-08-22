import styled from "styled-components";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => (
  <NavbarContainer>
    <div className="image-container">
      <StaticImage src="../../images/logo.png" alt="logo" />
    </div>

    <NavContainer>
      <NavOption>Home</NavOption>
      <NavOption>About</NavOption>
      <NavOption>Projects</NavOption>
      <NavOption>Contact</NavOption>
      <NavButton>CV</NavButton>
    </NavContainer>
  </NavbarContainer>
);

export default Navbar;

const NavbarContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .image-container {
    aspect-ratio: 1;
    width: 40px;
    cursor: pointer;
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
`;

const NavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 10px;
  cursor: pointer;

  font-weight: 400;
  font-size: var(--font-sm);
  color: var(--color-primary);

  width: 70px;
  height: 25px;

  border: 2px solid #457b9d;
  border-radius: 15px;

  -webkit-transition: background-color 0.5s ease-in;
  transition: background-color 0.5s ease-in;
  -webkit-transition: color 0.2s ease-in;
  transition: color 0.2s ease-in;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;
