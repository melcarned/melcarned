import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import styled, { keyframes } from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import Separator from "../Separator/Separator";

/* ----- Styling ----- */

const Image = styled.img`

  height: auto;
  width: auto;
  max-height: 300px;
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const Header = styled.h2`
  color: ${props => props.even ? '#4a8ae5' : '#ed3e44'};
  font-weight: bold;
  margin-bottom: 40px;
  font-family: "Roboto Mono", monospace;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  color: ${props => props.even ? '#000' : '#fff'};
  line-height: 2;
  margin-bottom: 2rem;
  font-family: "Roboto Mono", monospace;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Skills = styled.ul`
  padding-left: 1rem;
  list-style: none;
  margin: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Skill = styled.li`
  color: ${props => props.even ? '#4a8ae5' : '#ed3e44'};
  line-height: 1.5;
  padding: 0.5rem 0;
  font-weight: bold;
  font-size: 0.8em;
  display: inline-block;
  width: 50%;

  &:before {
    content: "•";
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

/* ----- Expertise ----- */

const Expertise = ({ index, image, header, paragraph, skills }) => {
  
  let sectionLeft = null;
  let sectionRight = null;

  if (index % 2 == 1) {
    sectionLeft = (
      <Slide left>
        <Image src={image} />
      </Slide>
    );
    sectionRight = (<Fade>
      <Header>{header}</Header>
      <Paragraph>{paragraph}</Paragraph>
      <Skills>
        {skills.map((e, i) => (
          <Skill key={i}>{e}</Skill>
        ))}
      </Skills>
    </Fade>);
  } else {
    sectionLeft = (<Fade>
      <Header even>{header}</Header>
      <Paragraph even>{paragraph}</Paragraph>
      <Skills even>
        {skills.map((e, i) => (
          <Skill even key={i}>{e}</Skill>
        ))}
      </Skills>
    </Fade>);
    sectionRight = (
      <Slide right>
        <Image src={image} />
      </Slide>
    );
  }

  return (
    <Row>
      <Col l={6} lg={6} md={6} sm={12} xs={12}>
        {sectionLeft}
      </Col>
      <Col l={6} lg={6} md={6} sm={12} xs={12}>
        {sectionRight}
      </Col>
    </Row>
  );
};

export default Expertise;
