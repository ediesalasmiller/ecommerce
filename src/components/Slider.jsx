import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Arrow = styled.div`
  width: 50px;
  height: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  padding: 10px;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  z-index: 2;
`;

// display flex is what makes them horizontal
const Wrapper = styled.div`
  height: 100%;
  padding: 30px 20px;
  align-items: center;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

//where images will be
const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: fill;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
display: flex
  height: 80%;
  width: 100%;
  cursor: pointer;
  justify-content: center
  padding: 10px;

`;
const InfoContainer = styled.div`
  flex: 1;
  padding 50px;
`;

const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: transparent;
  color: black;
  cursor: pointer;
`;

export const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2);
    } else {
      setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow directon="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeft />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderItems.map((item) => (
          <Slide>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>buy me</Button>
            </InfoContainer>
          </Slide>
        ))}
        {/* FIRST SLIDE */}
        <Slide>
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/white-tote-bag-isolated_125540-757.jpg?w=360" />
          </ImgContainer>
          <InfoContainer>
            <Title>custom canvas totes</Title>
            <Desc> $10 </Desc>
            <Button>buy me</Button>
          </InfoContainer>
        </Slide>
        {/* SECOND SLIDE */}
        <Slide>
          <InfoContainer>
            <Title>custom canvas totes</Title>
            <Desc> $10 </Desc>
            <Button>buy me</Button>
          </InfoContainer>
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/white-tote-bag-isolated_125540-757.jpg?w=360" />
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRight />
      </Arrow>
    </Container>
  );
};
