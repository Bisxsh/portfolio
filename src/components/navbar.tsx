import { StaticImage } from "gatsby-plugin-image"
import styled, { css } from "styled-components"
import React from "react"

const Navbar = () => (
  <NavbarContainer>
    <div>
      <StaticImage src="../images/logo.png" alt="logo" />
    </div>

    <NavContainer>
      <NavOption>Home</NavOption>
      <NavOption>About</NavOption>
      <NavOption>Projects</NavOption>
      <NavOption>Contact</NavOption>
    </NavContainer>
  </NavbarContainer>
)

export default Navbar

const NavbarContainer = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    aspect-ratio: 1;
    width: 30px;
  }
`

const NavOption = styled.li`
  background: transparent;
  margin-inline: 10px;
  margin-bottom: 0;
`
const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 0;

  font-weight: 400;
  font-size: 14px;

  color: #73777b;
`
