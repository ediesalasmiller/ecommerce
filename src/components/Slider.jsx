import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100%;
height 100vh;
display: flex;
position: relative;
`;

const Arrow = styled.div`
width: 50px;
height 50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
`;
export const Slider = () => {
  return (
    <Container>
      <Arrow directon="left">
        <KeyboardArrowLeft />
      </Arrow>
      <Arrow direction="right">
        <KeyboardArrowRight />
      </Arrow>
    </Container>
  );
};
