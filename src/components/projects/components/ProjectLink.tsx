import React from "react";
import styled from "styled-components";
import { DribbbleIcon, FigmaIcon, GithubIcon } from "../images/links/LinkImage";
import { motion } from "framer-motion";

export enum ButtonType {
  GITHUB,
  FIGMA,
  DRIBBLE,
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
    default:
      image = <></>;
      break;
  }

  return (
    <ButtonWrapper onClick={openLink}>
      <motion.div
        className={`button`}
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
    margin-inline: 5px;
    cursor: pointer;
  }

  img {
    width: 24px;
    margin: 0;
  }
`;

export default ProjectLink;
