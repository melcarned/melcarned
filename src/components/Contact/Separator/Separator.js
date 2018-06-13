import React, { Component } from "react";
import styled from "styled-components";

/* ----- Styling ----- */

const CurveWrapper = styled.div`
  margin-top: 70px;
  position: relative;
  top: 8px;
`;

const ColorCurve = styled.path`
  fill: #333;
  stroke: #333;
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
        <ColorCurve d="M0 100 C 20 0 80 0 100 100 Z" />
      </svg>
    </CurveWrapper>
  );
};

export default Separator;
