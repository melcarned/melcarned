import React, { Component } from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
  padding: 40px 0;
`;

const BreakLine = styled.div`
  margin: auto;
  border: 1px solid black;
  width: 30px;
`;

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <h1>{title}</h1>
      <BreakLine />
    </TitleContainer>
  );
};

export default Title;
