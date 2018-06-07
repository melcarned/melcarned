import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Title from "../components/Title/Title";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  background: transparent;
  padding: 200px 0;
`;

const Bounce = keyframes` 
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-30px);
		-ms-transform:     translateY(-30px);
		transform:         translateY(-30px)
	}
	60% {
		-webkit-transform: translateY(-15px);
		-ms-transform:     translateY(-15px);
		transform:         translateY(-15px)
	}
`;

const StickyNotes = styled.div``;


const Tool = styled.div`
  -webkit-transition: all 1s;
  -moz-transition: all 1s;
  transition: all 1s;

  &:hover {
    -webkit-animation:
      ${Bounce} 0.5s ease-in-out infinite alternate;
    -moz-animation:
      ${Bounce} 0.5s ease-in-out infinite alternate;
    animation: 
      ${Bounce} 0.5s ease-in-out infinite alternate;
    cursor: pointer;
  }
`;

const BlueFont = styled.span`
  color: #4a8ae5;
  font-weight: bold;
`;

const ServiceSectionWrapper = styled.div`
  background: radial-gradient(#fff 50%, transparent);
  padding: 80px;
`;

const Service = styled.span`
  color: black;
  font-weight: bold;
`;

const Break = styled.div`
  padding: 20px 0;
`;

const Divider = styled.div`
  border-right: 1px solid #ddd;
`;

const ServiceSection = styled.div`
  text-align: center;
`;

const Spacing = styled.div`
  padding: 10px 0;
`;

const data = {
  services: [
    {
      icon: require("../assets/research-icon.png"),
      title: "Product Research",
      description: (
        <p>
          Defining user needs, what currently exists and how can we innovate to
          make a compleling application.
        </p>
      )
    },
    {
      icon: require("../assets/react-icon.png"),
      title: "React & Redux",
      description: (
        <p>
          Develop reusbale and scalable applicaitons using{" "}
          <Service>ReactJS</Service>. Maintain appllication state and
          performance using <Service>Redux</Service>.
        </p>
      )
    },
    {
      icon: require("../assets/bootstrap-logo.png"),
      title: "Interactive UI",
      description: (
        <p>
          Structure and style compoents with <Service>HTML5</Service> and{" "}
          <Service>CSS3</Service>
        </p>
      )
    },
    {
        icon: require("../assets/bootstrap-logo.png"),
        title: "Interactive UI",
        description: (
          <p>
            Structure and style compoents with <Service>HTML5</Service> and{" "}
            <Service>CSS3</Service>
          </p>
        )
      },
      {
        icon: require("../assets/bootstrap-logo.png"),
        title: "Interactive UI",
        description: (
          <p>
            Structure and style compoents with <Service>HTML5</Service> and{" "}
            <Service>CSS3</Service>
          </p>
        )
      },
      {
        icon: require("../assets/bootstrap-logo.png"),
        title: "Interactive UI",
        description: (
          <p>
            Structure and style compoents with <Service>HTML5</Service> and{" "}
            <Service>CSS3</Service>
          </p>
        )
      },
    {
      icon: require("../assets/electron-logo.png"),
      title: "Web, Mobile & Desktop",
      description: (
        <p>
          <Service>React Native</Service> to deploy mobile applications and{" "}
          <Service>ElectronJS</Service> for desktop applications.
        </p>
      )
    },
    {
      icon: require("../assets/electron-logo.png"),
      title: "Wireframing & Prototyping",
      description: (
        <p>
          Rapid iterative <Service>paper sketching</Service> for low cost design
          layouts. Tranlate wireframes directly to code using of popular react
          UI libraries like <Service>Bootstrap, Material, AntDesign</Service>{" "}
          and more.
        </p>
      )
    },
    {
      icon: require("../assets/electron-logo.png"),
      title: "Development Essentials",
      description: (
        <p>
          Trello for project management. Firebase for hosting and autherization.
          Git for version control
        </p>
      )
    },
    {
      icon: require("../assets/electron-logo.png"),
      title: "Usability Testing",
      description: (
        <p>
          <Service>Lean UX</Service> to deploy mobile applications and{" "}
          <Service>ElectronJS</Service> for next iteration.
        </p>
      )
    }
  ]
};

const Services = () => {
  return (
    <Wrapper>
      <Container>
        <ServiceSectionWrapper>
          <Row>
            <Col lg={7}>
              <h2>
                <BlueFont>Design with a purpose</BlueFont>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has{" "}
              </p>
              <Row>
                <Col lg={4}>
                  <ul>
                    <li>Market Research</li>
                    <li>Product Research</li>
                    <li>User Research</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <StickyNotes>
                <svg width={"100%"} height={300}>
                  <rect
                    x={150}
                    y={140}
                    rx={0}
                    ry={0}
                    width={60}
                    height={60}
                    fill="#4a8ae5"
                    stroke-width={1}
                    stroke="#4a8ae5"
                    transform="rotate(20 90 170)"
                  />
                  <rect
                    x={110}
                    y={120}
                    rx={0}
                    ry={0}
                    width={60}
                    height={60}
                    fill="#f0ee85"
                    stroke-width={1}
                    stroke="#f0ee85"
                  />

                  <rect
                    x={250}
                    y={140}
                    rx={0}
                    ry={0}
                    width={60}
                    height={60}
                    fill="#4a8ae5"
                    stroke-width={1}
                    stroke="#4a8ae5"
                    transform="rotate(5 125 70)"
                  />
                  <rect
                    x={250}
                    y={80}
                    rx={0}
                    ry={0}
                    width={60}
                    height={60}
                    fill="#4a8ae5"
                    stroke-width={1}
                    stroke="#4a8ae5"
                    transform="rotate(-5 125 40)"
                  />
                </svg>
              </StickyNotes>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <Row>
                {data.services.map((s, i) => (
                  <Tool>
                  <Col lg={3} style={{ paddingBottom: "40px" }}>
                    <img width="25" height="25" src={s.icon} />
                  </Col>
                  </Tool>
                ))}
              </Row>
            </Col>
            <Col lg={7}>
              <h2>
                <BlueFont>Build with the right tools</BlueFont>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has{" "}
              </p>
              <Row>
                <Col lg={4}>
                  <ul>
                    <li>Market Research</li>
                    <li>Product Research</li>
                    <li>User Research</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Usability Testing</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </ServiceSectionWrapper>
      </Container>
    </Wrapper>
  );
};

export default Services;
