import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled  from "styled-components";
import Zoom from "react-reveal/Zoom";

import ContactLink from "./ContactLink/ContactLink";

/* ----- Styles ----- */

const ContainerStyled = styled(Container)`
  text-align: center;
  padding: 3rem 0;
  border-top: 1px dashed ${(props) => props.theme.borderColor};
`;

const NYCIcon = styled.img`
  margin-bottom: 2rem;
  height: auto;
  width: auto;
  max-height: 300px;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
`;

const Subtitle = styled.h6`
  font-family: "Roboto Mono", monospace;
  margin-top: 0.8rem;
  display: block;
  text-align: center;
`;

const Spacer = styled.p`
  font-size: 4rem;
  display: inline-block;
  vertical-align: middle;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Email = styled.h2`
  display: inline-block;
  vertical-align: middle;
  margin-left: 1rem;
  padding: 20px;
  color: inherit;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1rem;
    display: block;
    margin: 0;
  }
`;

const HandshakeIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 4rem;
  margin-bottom: 4rem;
`;

const ContactInfo = ({ header, subtitle, link, email, icons }) => {
  return (
      <ContainerStyled>
          <NYCIcon src={require("../../../assets/empire_state_building.svg")} />
          <Title>{header}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {/* <HandshakeIcon src={require("../../../assets/handshake.svg")} /> */}
          {/* <Row>
            <Col lg={12}>
              {icons.map((e, i) => (
                <ContactLink key={i} icon={e.icon} target={e.target} link={e.link} />
              ))}
              <Spacer> | </Spacer>
              <Email>{email}</Email> 
            </Col>
          </Row> */}
      </ContainerStyled>
  );
};

export default ContactInfo;
