import React from "react";
import { Container } from 'reactstrap';
import styled from "styled-components";

/* ----- Styles ----- */

const FooterContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  background-color: transparent;
  color: ${(props) => props.theme.secondaryColor};
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
  {/*  border-top: 1px dashed ${(props) => props.theme.borderColor}; */}
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
