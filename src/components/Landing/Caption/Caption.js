import React from "react";
import styled from "styled-components";
import Typing, { Cursor } from "react-typing-animation";
import Fade from "react-reveal/Fade";

import "./cursor.css";

/* ----- Styling ----- */

const CaptionText = styled.div`
  display: inline-block;
  color: #fff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  font-family: "Roboto Mono", monospace;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bracket = styled.div`
  display: inline-block;
  color: #fff;
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* ----- Caption ----- */

const Caption = ({ text }) => {
  return (
    <div>
      <Bracket>{"{"}</Bracket>
      <CaptionText>
        <Fade>
          <Typing speed={20}>
            {text}
            <Cursor />
          </Typing>
        </Fade>
      </CaptionText>
      <Bracket>{"}"}</Bracket>
    </div>
  );
};

export default Caption;
