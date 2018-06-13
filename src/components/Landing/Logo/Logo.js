import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Bounce from "react-reveal/Bounce";

/* ----- Animations ----- */

const Highlight = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #228DFF, 0 0 17.5px #228DFF, 0 0 20px #228DFF, 0 0 25px #228DFF, 0 0 32.5px #228DFF;
  }
`;

const Bouncing = keyframes` 
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-0.8rem);
		-ms-transform:     translateY(-0.8rem);
		transform:         translateY(-0.8rem)
	}
	60% {
		-webkit-transform: translateY(-0.4rem);
		-ms-transform:     translateY(-0.4rem);
		transform:         translateY(-0.4rem)
	}
`;

/* ----- Styling ----- */

const LogoText = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 7.5rem;
  color: #fff;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  &:hover {
    -webkit-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bouncing} 1.5s ease-in-out infinite alternate;
    -moz-animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bouncing} 1.5s ease-in-out infinite alternate;
    animation: ${Highlight} 1.5s ease-in-out infinite alternate,
      ${Bouncing} 1.5s ease-in-out infinite alternate;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 5rem;
  }

  @media (max-width: 320px) {
    font-size: 3rem;
  }
`;

/* ----- Logo ----- */

const Logo = ({ scrollToExpertises, text }) => {
  return (
    <Bounce top>
      <LogoText onClick={scrollToExpertises}>{text}</LogoText>
    </Bounce>
  );
};

export default Logo;
