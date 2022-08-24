import React from "react";
import styled from "styled-components";
import {
  DiscordIcon,
  DribbbleIcon,
  EmailIcon,
  FigmaIcon,
  GithubIcon,
  LinkedInIcon,
} from "../images/links/LinkImage";
import { motion } from "framer-motion";

export enum ButtonType {
  GITHUB,
  FIGMA,
  DRIBBLE,
  DISCORD,
  LINKED_IN,
  EMAIL,
}

const ProjectLink = (props: any) => {
  function openLink() {
    if (props.link) {
      window.open(props.link, "_blank")?.focus();
    }
  }

  let image: JSX.Element;

  switch (props.buttonType) {
    case ButtonType.GITHUB:
      image = GithubIcon;
      break;
    case ButtonType.FIGMA:
      image = FigmaIcon;
      break;
    case ButtonType.DRIBBLE:
      image = DribbbleIcon;
      break;
    case ButtonType.DISCORD:
      image = DiscordIcon;
      break;
    case ButtonType.LINKED_IN:
      image = LinkedInIcon;
      break;
    case ButtonType.EMAIL:
      image = EmailIcon;
      break;
    default:
      image = <></>;
      break;
  }

  return (
    <ButtonWrapper onClick={openLink}>
      <motion.div
        className={`button ${props.className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {image}
      </motion.div>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  .button {
    background-color: var(--color-primary);
    padding: 15px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 5px;
    cursor: pointer;
  }

  img {
    width: 24px;
    aspect-ratio: 1;
    margin: 0;
  }
`;

export default ProjectLink;
