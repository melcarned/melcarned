import React from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";
import Icon from "react-icons-kit";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/* ----- Styling ----- */

const Wrapper = styled(Row)`
  padding: 1rem 0 1rem 0;
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
    font-weight: bold;
    font-size: 0.8em;
  }

  @media (max-width: 576px) {
    display: block;
    margin: 0 auto;
  }
`;

const IconStyled = styled(Icon)`
  display: block;
  vertical-align: middle;
  width: 100%;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.primaryColor};

  @media (max-width: 992px) {
    margin: 2rem auto;
  }
`;

/* ----- ApproachContent ----- */

const ApproachContent = ({ display }) => {
  return (
    <Wrapper>
      <Col
        xl={{ size: 10, offset: 2 }}
        lg={{ size: 10, offset: 2 }}
        md={12}
        sm={12}
        xs={12}
      >
        <Skills>
          {display.map((e, i) => (
            <Skill key={i}>
              <IconStyled size={48} icon={e.icon} name={e.name}/>
              <p>{e.name}</p>
            </Skill>
          ))}
        </Skills>
      </Col>
    </Wrapper>
  );
};

export default ApproachContent;
