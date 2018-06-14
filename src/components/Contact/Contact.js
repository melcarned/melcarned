import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/entypo/";
import styled, { keyframes } from "styled-components";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";

import data from "./data";
import ContactInfo from "./ContactInfo/ContactInfo";
import Separator from "./Separator/Separator";
import Footer from "./Footer/Footer";

/* ----- Styles ---- */

const Wrapper = styled.div`
  height: 90vh;
  background: linear-gradient(rgb(237, 62, 68, 1) 50%, rgb(239, 80, 85, 1));
  color: white;
`;

const DownloadResume = styled.button`
  border: 2px #fff solid;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
`;

const SubSection = styled.div`
  margin: 100px 0;
`;

const HandshakeIcon = styled.img`
  display: block;
  margin: 0 auto;
  width: 4rem;
  margin-bottom: 4rem;
`;

/* ----- Contact ---- */

const Contact = () => {
  const { info, footer, icons } = data;

  return (
    <React.Fragment>
      <Wrapper>
        <ContactInfo
          image={info.image}
          header={info.header}
          subtitle={footer.subtitle}
          email={info.email}
          icons={icons}
        />
      </Wrapper>
      <Footer
        copyright={footer.copyright}
      />
    </React.Fragment>
  );
};

export default Contact;
