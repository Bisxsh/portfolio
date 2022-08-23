import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Heading = (props: any) => {
  let initial: any = {
    opacity: 0,
    x: props.left ? -200 : 200,
  };

  return (
    <HeadingWrapper
      isLeft={props.left}
      className={`${props.left ? "left" : ""}`}
    >
      <div className={`heading ${props.left ? "left" : "right"}`}>
        <motion.h1
          className={`heading ${props.left ? "left" : ""}`}
          initial={initial}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            default: {
              duration: 0.7,
            },
          }}
        >
          {props.text}
        </motion.h1>
      </div>
    </HeadingWrapper>
  );
};

const HeadingWrapper: any = styled.div`
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  .heading {
    font-size: 128px;
    line-height: 192px;
    margin-bottom: 0;

    color: rgba(29, 53, 87, 0.25);
  }

  .left {
    justify-content: start;
  }

  .right {
    justify-content: end;
  }
`;

export default Heading;
