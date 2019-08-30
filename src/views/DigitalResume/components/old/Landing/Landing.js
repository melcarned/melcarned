import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import Logo from "./Logo/Logo";
import Caption from "./Caption/Caption";

/* ----- Styling ----- */

/* Defines size and background for Landing page. 
Does not include curved separator. */

const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

/* Centers Title and Caption based on screen size */

const Circle = styled.div`
  width: 45vh;
  height: 45vh;
  background: 
  linear-gradient(135deg, ${(props) => props.theme.secondaryColor} 25%, transparent 25%) -50px 0,
  linear-gradient(225deg, ${(props) => props.theme.primaryColor} 25%, transparent 25%) -50px 0,
  linear-gradient(315deg, ${(props) => props.theme.primaryColor} 25%, transparent 25%),
  linear-gradient(45deg, ${(props) => props.theme.primaryColor} 25%, transparent 25%);	
  background-size: 100px 100px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

/* ----- Landing ----- */

const Landing = ({ scrollToExpertises }) => {
  return (
    <Fade>
      <Wrapper>
        <Circle />
        <Logo firstName="Damiano Melcarne" lastName="Melcarne" />
        <Caption text="{ User-centered application development }" />
      </Wrapper>
    </Fade>
  );
};

export default Landing;
