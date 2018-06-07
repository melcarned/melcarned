import React, { Component } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Title from "../components/Title/Title";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #343a40;
  padding: 200px 0 100px 0;
`;

const BlueFont = styled.span`
 color: #4a8ae5;
 font-weight: bold;
`;

const Paper = styled.div`
background-color: #fff;
padding: 40px;
border-radius: 10px;
-webkit-box-shadow: -5px 16px 17px 0px rgba(0,0,0,0.49);
-moz-box-shadow: -5px 16px 17px 0px rgba(0,0,0,0.49);
box-shadow: -5px 16px 17px 0px rgba(0,0,0,0.49);
`;

const WireframeImgPlaceholder = styled.div`
  height: 100vh;
`;

const Experience = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <Col lg={{size: 10, offset: 1}}>
          <Paper>
          <h2><BlueFont>Design with a purpose</BlueFont></h2>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
            <Media>
              <Media left href="#">
                <Media
                  object
                  data-src="holder.js/64x64"
                  alt="Generic placeholder image"
                />
              </Media>
              <Media body>
                <Media heading>Media heading</Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </Media>
            </Media>
            </Paper>
          </Col>
        </Row>
        
      </Wrapper>
    </React.Fragment>
  );
};

export default Experience;
