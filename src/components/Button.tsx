import React from "react";
import styled from "styled-components";

export function Button(props: any) {
  return <ButtonBase>{props.text}</ButtonBase>;
}

const ButtonBase = styled.div`
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

  -webkit-transition: background-color 1s ease;
  transition: background-color 1s ease;
  -webkit-transition: color 1s ease;
  transition: color 1s ease;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

export function LargeButton(props: any) {
  return <LargeButtonComponent>{props.text}</LargeButtonComponent>;
}

const LargeButtonComponent = styled(ButtonBase)`
  width: 320px;
  height: 60px;
  border-radius: 20px;
  font-size: var(--font-lg);
  margin: 0;
`;
