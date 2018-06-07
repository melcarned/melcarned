import React, { Component } from "react";
import { Container, Jumbotron, Button, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";
import bg from "../assets/wireframe-bg-logo.jpg";
import { Icon } from "react-icons-kit";
import { angleDoubleDown } from "react-icons-kit/fa/angleDoubleDown";

const Wrapper = styled.div`
  height: 90vh;
  background: linear-gradient(rgb(32, 110, 220) 10%, rgb(74, 138, 229, 1));
`;

const CenterContent = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
  padding: 80px 0;
`;

const Highlight = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #228DFF, 0 0 17.5px #228DFF, 0 0 20px #228DFF, 0 0 25px #228DFF, 0 0 32.5px #228DFF;
  }
`;

const Bounce = keyframes` 
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-30px);
		-ms-transform:     translateY(-30px);
		transform:         translateY(-30px)
	}
	60% {
		-webkit-transform: translateY(-15px);
		-ms-transform:     translateY(-15px);
		transform:         translateY(-15px)
	}
`;

const FadeIn = keyframes`
  from { 
    opacity:0; 
  } 
  to { 
    opacity:1; 
  }
`;

const TitleFont = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 7.5rem;
  color: #fff;
  padding-top: 3vh;
  text-decoration: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -webkit-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bounce} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bounce} 1.5s ease-in-out infinite alternate;
    animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bounce} 1.5s ease-in-out infinite alternate;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
`;

const Caption = styled.h4`
  color: #fff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-animation: ${FadeIn} 1s ease-in forwards;
  -moz-animation: ${FadeIn} 1s ease-in forwards;
  animation: ${FadeIn} 1s ease-in forwards;
`;

const ScrollButton = styled.div`
  padding-top: 10vh;
`;

const ColorCurve = styled.path`
  fill: rgb(74, 138, 229, 1);
  stroke: rgb(74, 138, 229, 1);
`;

const Landing = ({ scrollToServices }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <CenterContent>
          <Container>
            <Row>
              <Col lg={4}>
                <img
                  width={"400px"}
                  src={require("../assets/melcarned_flowchart.svg")}
                />
              </Col>
              <Col lg={8}>
                <TitleFont onClick={scrollToServices}>melcarned</TitleFont>
                <Caption>
                  User-centered application design and development.
                </Caption>
              </Col>
            </Row>
          </Container>
        </CenterContent>
      </Wrapper>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <ColorCurve d="M0 0 C 70 120 80 100 100 0 Z" />
      </svg>
    </React.Fragment>
  );
};

export default Landing;
