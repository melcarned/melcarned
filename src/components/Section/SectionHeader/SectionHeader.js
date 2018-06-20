import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/* ----- Styling ----- */

const Wrapper = styled(Row)`
  margin-bottom: 1rem;
`;

const SubHeader = styled.h6`
  color: #aaa;
  margin-bottom: 0.3rem;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Header = styled.h2`
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;

  &:after {
    content: " ";
    display: block;
    width: 1em;
    height: 2px;
    background: #000;
    margin: 0.75em auto 0.75em;
  }

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  color: #000;
  line-height: 2;
  margin-bottom: 2rem;
  font-family: "Roboto Mono", monospace;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

/* ----- SectionHeader ----- */

const SectionHeader = ({ subHeader, header, paragraph }) => {
  return (
    <Wrapper>
      <Col xl={3} lg={3} md={12} sm={12} xs={12}>
        <Fade>
          <SubHeader>{subHeader}</SubHeader>
          <Header>{header}</Header>
        </Fade>
      </Col>
      <Col xl={9} lg={9} md={12} sm={12} xs={12}>
        <Slide right>
          <Paragraph>{paragraph}</Paragraph>
        </Slide>
      </Col>
    </Wrapper>
  );
};

export default SectionHeader;
