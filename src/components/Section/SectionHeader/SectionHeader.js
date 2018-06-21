import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/* ----- Styling ----- */

const Wrapper = styled(Row)`
  margin-bottom: 0rem;
`;

const SubHeader = styled.h6`
  color: ${props => props.theme.borderColor};
  margin-bottom: 0.3rem;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

const Header = styled.h2`
  color: ${props => props.theme.secondaryColor};
  font-weight: bold;
  margin-bottom: 1rem;

  &:after {
    content: " ";
    display: block;
    width: 1em;
    height: 2px;
    background: #000;
    margin: 0.75em 0 0.75em;
    text-align: left;
  }

  @media (max-width: 992px) {
    text-align: center;

    &:after {
      margin: 0.75em auto 0.75em;
    }
  }
`;

const Paragraph = styled.p`
  color: ${props => props.theme.secondaryColor};
  line-height: 2;
  margin-bottom: 2rem;
  font-family: "Roboto Mono", monospace;
  padding-left: 9%;

  @media (max-width: 992px) {
    padding-left: 0;
    text-align: center;
  }
`;

/* ----- SectionHeader ----- */

const SectionHeader = ({ subHeader, header, paragraph }) => {
  return (
    <Wrapper>
      <Col xl={2} lg={2} md={12} sm={12} xs={12}>
        <Fade>
          <SubHeader>{subHeader}</SubHeader>
          <Header>{header}</Header>
        </Fade>
      </Col>
      <Col xl={10} lg={10} md={12} sm={12} xs={12}>
        <Slide right>
          <Paragraph>{paragraph}</Paragraph>
        </Slide>
      </Col>
    </Wrapper>
  );
};

export default SectionHeader;
