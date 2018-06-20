import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/* ----- Styling ----- */

const Wrapper = styled(Row)`
  padding: 3rem 0 3rem 0;
`;

const Skills = styled.ul`
  padding-left: 1rem;
  list-style: none;
  margin: 0;

  @media (max-width: 992px) {
    text-align: center;
    display: block;
  }
`;

const Skill = styled.li`
  line-height: 1.5;
  padding: 0.5rem 0;
  font-weight: bold;
  font-size: 0.8em;
  display: inline-block;
  width: 25%;

  p {
    text-align: center;
    ${(props) => props.theme.secondaryColor};
  }

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto;
  }
`;

const ImageStyled = styled.img`
  display: block;
  vertical-align: middle;
  width: 48px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  color: "#00caca";
  @media (max-width: 992px) {
    margin: 2rem auto;
  }
`;

/* ----- ToolkitContent ----- */

const ToolkitContent = ({ display }) => {
  return (
    <Wrapper>
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
      <Skills even>
        {display.map((e, i) => (
          <Skill even key={i}>
            <ImageStyled src={e.icon}/>
            <p>{e.name}</p>
          </Skill>
        ))}
      </Skills>
      </Col>
      </Wrapper>
  );
};

export default ToolkitContent;