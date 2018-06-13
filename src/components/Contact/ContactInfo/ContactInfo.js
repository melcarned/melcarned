import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/entypo/";
import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";

/* ----- Animations ----- */

const Highlight = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #228DFF, 0 0 17.5px #228DFF, 0 0 20px #228DFF, 0 0 25px #228DFF, 0 0 32.5px #228DFF;
  }
`;

/* ----- Styles ----- */

const Wrapper = styled.div`
  height: 80vh;
  background: linear-gradient(rgb(237, 62, 68) 50%, rgb(245, 46, 77, 1));
  color: white;
`;

const ContactSection = styled.div`
  display: inline-block;
  vertical-align: bottom;
`;

const CenterItems = styled.div`
  text-align: center;
  padding-bottom: 4rem;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
`;

const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 2rem;
  font-family: "Roboto Mono", monospace;
`;

const NYCIcon = styled.img`
  width: 30%;
  margin-bottom: 2rem;
`;

const LinkedInIcon = styled.a`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  border: 2px #fff solid;

  &:hover {
    -webkit-animation: ${Highlight} 1.5s ease-in-out infinite alternate
    -moz-animation: ${Highlight} 1.5s ease-in-out infinite alternate
    animation: ${Highlight} 1.5s ease-in-out infinite alternate
    cursor: pointer;
    color: #444;
    border: 2px #444 solid;
  }
`;

const Spacer = styled.p`
  font-size: 4rem;
  display: inline-block;
  vertical-align: middle;
`;

const Email = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-left: 1rem;
  padding: 20px;
  color: inherit;
`;

const ContactInfo = ({ header, link, email }) => {
  return (
    <React.Fragment>
      <CenterItems>
        <Container>
          <Zoom>
            <NYCIcon src={require('../../../assets/empire_state_building.svg')} />
            <Title>{header}</Title>
            <ContactSection>
              <LinkedInIcon href={link}>
                <Icon size={36} icon={linkedin} />
              </LinkedInIcon>
              <Spacer> | </Spacer>
              <Email>{email}</Email>
            </ContactSection>
          </Zoom>
        </Container>
      </CenterItems>
    </React.Fragment>
  );
};

export default ContactInfo;
