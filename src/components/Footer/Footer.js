import React from "react";
import { Container } from 'reactstrap';
import styled from "styled-components";

/* ----- Styles ----- */

const FooterContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  background-color: #fff;
  color: #000;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
  border-top: 1px dashed #aaa;
  border-left: 1px dashed #aaa;
  border-right: 1px dashed #aaa;
`;

/* ----- Footer -----*/

const Footer = ({ copyright }) => {
  return (
    <Container>
    <FooterContainer>

      &copy; {new Date().getFullYear()} {copyright}

      
    </FooterContainer>
    </Container>
  );
};

export default Footer;
