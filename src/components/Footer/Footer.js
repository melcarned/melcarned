import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #3d3e44;
  color: #ffffff;
  text-align: center;
  padding: 40px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {(new Date().getFullYear())} melcarned.com
    </FooterContainer>
  );
};

export default Footer;