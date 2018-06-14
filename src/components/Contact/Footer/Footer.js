import React from "react";
import styled from "styled-components";

/* ----- Styles ----- */

const FooterContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  border-top: dashed 1px #fff;
  background-color: rgb(239, 80, 85, 1);
  color: #ffffff;
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
`;

/* ----- Footer -----*/

const Footer = ({ copyright }) => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} {copyright}
    </FooterContainer>
  );
};

export default Footer;
