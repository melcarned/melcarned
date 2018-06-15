import React from "react";
import styled from "styled-components";

/* ----- Styling ----- */

const ColorCurve = styled.path`
  fill: rgb(98, 154, 232, 1);
  stroke: rgb(98, 154, 232, 1);
`;

/* ----- Separator ----- */

const Separator = () => {
  return (
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <ColorCurve d="M0 0 C 70 120 80 100 100 0 Z" />
      </svg>
  );
};

export default Separator;