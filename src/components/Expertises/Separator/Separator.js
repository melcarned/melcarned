import React from "react";
import styled from "styled-components";

// ----- Styling -----

const CurveWrapper = styled.div`
  position: relative;
  bottom: -70px;
`;

const ColorCurve = styled.path`
  fill: #ed3e44;
  stroke: #ed3e44;
`;

const Separator = () => {
  return (
    <CurveWrapper>
      <svg
        width="100%"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <ColorCurve d="M0 100 C 20 0 35 0 100 100 Z" />
      </svg>
    </CurveWrapper>
  );
};

export default Separator;
