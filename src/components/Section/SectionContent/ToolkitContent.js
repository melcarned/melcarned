import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/* ----- Styling ----- */

const Wrapper = styled(Row)`
  padding: 0 0 3rem 0;
`;

const Skills = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 992px) {
    text-align: center;
    display: block;
  }
`;

const Skill = styled.li`
  line-height: 1.5;
  font-weight: bold;
  font-size: 0.8em;


  p {
    text-align: center;
  }
`;

const SkillWrapper = styled.div`
  font-weight: bold;
  font-size: 0.8em;
  display: inline-block;
  width: 25%;
  border: 1px solid black;
`;

const ImageStyled = styled.img`
  margin: 2rem auto;
  vertical-align: middle;
  width: 48px;
  margin-bottom: 1.5rem;
  color: "#00caca";

    display: block;

  @media (max-width: 992px) {
    margin: 2rem auto;
    display: block;
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
          <SkillWrapper >
          <Skill even key={i}>
            <ImageStyled src={e.icon}/>
            <p>{e.name}</p>
          </Skill>
          </SkillWrapper>
        ))}
      </Skills>
      </Col>
      </Wrapper>
  );
};

export default ToolkitContent;