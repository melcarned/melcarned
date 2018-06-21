import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Typist from "react-typist";

/* ----- Styling ----- */

const CaptionText = styled.h5`
  display: inline-block;
  color: ${props => props.theme.secondaryColor};
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  font-family: "Roboto Mono", monospace;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* ----- Caption ----- */

const Caption = ({ text }) => {
  return (
    <React.Fragment>
      <CaptionText>
        <Typist cursor={{hideWhenDone: true}}>{text}</Typist>
      </CaptionText>
    </React.Fragment>
  );
};

export default Caption;
