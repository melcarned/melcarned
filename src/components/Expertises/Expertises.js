import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

import data from "./data";
import Separator from "./Separator/Separator";
import Expertise from "./Expertise/Expertise";

/* ----- Styling ----- */

function drawGrid() {
  return `
    background-image: linear-gradient(
      rgba(100, 100, 100, 0.15) 0.05em,
      transparent 0.05em
    ),
    linear-gradient(90deg, rgba(100, 100, 100, 0.15) 0.05em, transparent 0.05em);
    background-size: 3em 3em;
  `;
}

const Wrapper = styled.div`
  background: ${props => (props.even ? "transparent" : "#343a40")};
  ${props => (props.even ? null : drawGrid())} padding: 4rem 0;
  min-height: 45vh;
  border-bottom: ${props => (props.even ? '3px solid #111' : null)};
`;

/* ----- Expertises ----- */

const Expertises = () => {
  return (
    <React.Fragment>
      {data.expertise.map((e, i) => {
        return (
          <Wrapper even={i % 2 == 0}>
            <Container>
              <Expertise
                key={i}
                index={i}
                image={e.image}
                header={e.header}
                paragraph={e.paragraph}
                skills={e.skills}
              />
            </Container>
            {i % 2 == 1 ? <Separator /> : null}
          </Wrapper>
        );
      })}
    </React.Fragment>
  );
};

export default Expertises;
