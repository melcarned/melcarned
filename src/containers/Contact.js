import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Title from '../components/Title/Title';
import { Icon } from 'react-icons-kit';
import {linkedin} from 'react-icons-kit/entypo/'
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
`;

const ContactSection = styled.div`
  display: inline-block;
`;

const CenterItems = styled.div`
  text-align: center;
  position: relative;
  top: 50%;
  transform: perspective(1px) translateY(-50%);
`;

const Contact = () => {
  return (
      <Wrapper>
    <CenterItems>
        <Container>
        <Title title="Located in the East Village, NYC" />
        <h2>Let's work together</h2>
        <ContactSection>
            <Icon size={64} icon={linkedin}/>
            <p>|</p>
            <h3>melcarned@gmail.com</h3>
        </ContactSection>
        <Row>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Icon size={64} icon={linkedin}/>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
            <Col>
            <Icon size={64} icon={linkedin}/>
            </Col>
        </Row>
        </Container>
    </CenterItems>
    </Wrapper>
  );
};

export default Contact;