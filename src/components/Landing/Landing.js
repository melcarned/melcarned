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
  height: 100vh;
`;

/* Centers Title and Caption based on screen size */

const Circle = styled.div`
  width: 75vh;
  height: 75vh;
  background-color: #00caca;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`;

const Center = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/* ----- Landing ----- */

const Landing = ({ scrollToExpertises }) => {
  return (
    <Fade>
      <Wrapper>
        <Container>
        <Center>
          <Circle>
            <Logo firstName="Damiano" lastName="Melcarne" />
            <Caption text="{ User-centered front-end development. }" />
          </Circle>
        </Center>
        </Container>
      </Wrapper>
    </Fade>
  );
};

export default Landing;
