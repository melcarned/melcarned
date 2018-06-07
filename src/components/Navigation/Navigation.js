import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Headroom from "react-headroom";
import scrollToComponent from "react-scroll-to-component";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "reactstrap";

const NavWrapper = styled.div`
  background-color: rgb(32, 110, 220);
  z-index: 999;
  vertical-align: middle;
`;

const Highlight = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #228DFF, 0 0 17.5px #228DFF, 0 0 20px #228DFF, 0 0 25px #228DFF, 0 0 32.5px #228DFF;
  }
`;

const Rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Logo = styled.h6`
  font-family: "Pacifico", cursive;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -webkit-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Rotate} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Rotate} 1.5s ease-in-out infinite alternate;
    animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Rotate} 1.5s ease-in-out infinite alternate;
    cursor: pointer;
  }
`;

const NavLinkStyle = styled.div`
  color: #fff;
  font-size: 0.8rem;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -webkit-animation: ${Highlight} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${Highlight} 1.5s ease-in-out infinite alternate;
    animation: ${Highlight} 1.5s ease-in-out infinite alternate;
    cursor: pointer;
  }
`;

const DownloadCSV = styled.div`
  color: rgb(240, 238, 133);
  font-size: 0.8rem;
  text-decoration: underline;
`;

const Navigation = ({
  toggle,
  open,
  scrollToLanding,
  scrollToServices,
  scrollToExperience,
  scrollToContact
}) => {
  return (
    <Headroom
      style={{
        webkitTransition: "all .2s ease-in-out",
        mozTransition: "all .2s ease-in-out",
        oTransition: "all .2s ease-in-out",
        transition: "all .2s ease-in-out"
      }}
      wrapperStyle={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "100"
      }}
    >
      <div>
        <NavWrapper>
          <Navbar expand="md">
            <NavbarBrand>
                <Logo onClick={scrollToLanding}>{"{ d }"}</Logo>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={open} navbar>
              <Nav className="ml-auto" navbar>
                <span onClick={scrollToLanding}>
                  <NavItem>
                    <NavLink>
                      <NavLinkStyle>Home</NavLinkStyle>
                    </NavLink>
                  </NavItem>
                </span>
                <span onClick={scrollToServices}>
                  <NavItem>
                    <NavLink>
                      <NavLinkStyle>Services</NavLinkStyle>
                    </NavLink>
                  </NavItem>
                </span>
                <span onClick={scrollToExperience}>
                  <NavItem>
                    <NavLink>
                      <NavLinkStyle>Work</NavLinkStyle>
                    </NavLink>
                  </NavItem>
                </span>
                <span onClick={scrollToContact}>
                  <NavItem>
                    <NavLink>
                      <NavLinkStyle>Contact</NavLinkStyle>
                    </NavLink>
                  </NavItem>
                </span>
                <NavItem>
                  <NavLink
                    href={require("../../assets/Damiano_Melcarne_Resume.pdf")}
                  >
                    <DownloadCSV>View Resume</DownloadCSV>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </NavWrapper>
      </div>
    </Headroom>
  );
};

export default Navigation;
