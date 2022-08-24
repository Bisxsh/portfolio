import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export function Button(props: any) {
  return (
    <ButtonBase>
      <motion.button
        className={`button ${props.setClassName}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {props.text}
      </motion.button>
    </ButtonBase>
  );
}

const ButtonBase = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 10px;
    cursor: pointer;

    font-weight: 400;
    font-size: var(--font-sm);
    color: var(--color-primary);

    width: 70px;
    height: 30px;

    border: 2px solid #457b9d;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;
    transition-property: all;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    -webkit-transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-code-bg);
    }
  }
`;

export function LargeButton(props: any) {
  return (
    <LargeButtonComponent>
      <motion.button
        className={`button large ${props.setClassName}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {props.text}
      </motion.button>
    </LargeButtonComponent>
  );
}

const LargeButtonComponent = styled(ButtonBase)`
  .large {
    width: 320px;
    height: 60px;
    border-radius: 20px;
    font-size: var(--font-xxl);
    margin: 0;
  }
`;
