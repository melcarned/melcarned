import React, { Component } from "react";
import styled from "styled-components";
import Flash from "react-reveal/Flash";

const FooterContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  border-top: dashed 1px #fff;
  background-color: rgb(239, 80, 85, 1);
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
`;

const DownloadResume = styled.button`
  border: 2px #fff solid;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h6`
  font-family: "Roboto Mono", monospace;
`;

const HandshakeIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 4rem;
  margin-bottom: 4rem;
`;

const Footer = ({buttonText, subtitle, icon, copyright}) => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} {copyright}
    </FooterContainer>
  );
};

export default Footer;
