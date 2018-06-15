import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import Logo from "./Logo/Logo";
import Caption from "./Caption/Caption";
import Separator from "./Separator/Separator";

/* ----- Styling ----- */

/* Defines size and background for Landing page. 
Does not include curved separator. */

const Wrapper = styled.div`
  height: 90vh;
  background: linear-gradient(rgb(32, 110, 220, 1) 50%, rgb(98, 154, 232, 1));
`;

/* Centers Title and Caption based on screen size */

const CenterContent = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
`;

/* ----- Landing ----- */

const Landing = ({ scrollToExpertises }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <CenterContent>
          <Container>
            <Row>
              <Col lg={12}>
                <Logo
                  scrollToExpertises={scrollToExpertises}
                  text="melcarned"
                />
                <Caption text="User-centered application design and development." />
              </Col>
            </Row>
          </Container>
        </CenterContent>
      </Wrapper>
      <Separator />
    </React.Fragment>
  );
};

export default Landing;
