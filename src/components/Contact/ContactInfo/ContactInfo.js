import React, { Component } from "react";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Icon } from "react-icons-kit";
import { linkedin, code, documentInverted } from "react-icons-kit/entypo/";
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

`;

const CenterItems = styled.div`
  text-align: center;
  padding-bottom: 4rem;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
`;

const NYCIcon = styled.img`
  margin-bottom: 2rem;
  height: auto;
  width: auto;
  max-height: 300px;
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
`;

const Subtitle = styled.h6`
  font-family: "Roboto Mono", monospace;
  margin-top: 0.8rem;
  display: block;
  text-align: center;
`;

const LinkedInIcon = styled.a`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  line-height: 0;
  display: inline-block;
  vertical-align: middle;
  color: #fff;
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;


  &:hover {
    -webkit-animation: ${Highlight} 0.5s ease-in-out infinite alternate
    -moz-animation: ${Highlight} 0.5s ease-in-out infinite alternate
    animation: ${Highlight} 0.5s ease-in-out infinite alternate
    cursor: pointer;
    color: #343a40;
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const Spacer = styled.p`
  font-size: 4rem;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Email = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-left: 1rem;
  padding: 20px;
  color: inherit;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    margin: 0.5rem 0 0 0;
  }
`;

const HandshakeIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 2rem;
  margin-bottom: 4rem;
`;

const ContactInfo = ({ header, subtitle, link, email }) => {
  return (
    <React.Fragment>
      <CenterItems>
        <Container>
          <Zoom>
            <NYCIcon
              src={require("../../../assets/empire_state_building.svg")}
            />
            <Title>{header}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <HandshakeIcon src={require("../../../assets/handshake.svg")} />
            <Row>
              <Col lg={12}>
            <ContactSection>
              <LinkedInIcon id="linkedIn" href={link}>
                <Icon size={36} icon={linkedin} />
              </LinkedInIcon>
              <UncontrolledTooltip placement="top" target="linkedIn">
                Linkedin
              </UncontrolledTooltip>
              <LinkedInIcon id="resume" href={link}>
                <Icon size={36} icon={documentInverted} />
              </LinkedInIcon>
              <UncontrolledTooltip placement="top" target="resume">
                Resume
              </UncontrolledTooltip>
              <LinkedInIcon id="code" href={link}>
                <Icon size={36} icon={code} />
              </LinkedInIcon>
              <UncontrolledTooltip placement="top" target="code">
                Source
              </UncontrolledTooltip>
              <Spacer> | </Spacer>
              <Email>{email}</Email>
            </ContactSection>
            </Col>
            </Row>
          </Zoom>
        </Container>
      </CenterItems>
    </React.Fragment>
  );
};

export default ContactInfo;
