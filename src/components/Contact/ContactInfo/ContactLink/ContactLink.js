import React from "react";
import { Icon } from "react-icons-kit";
import { UncontrolledTooltip } from "reactstrap";
import styled, { keyframes } from "styled-components";

/* ----- Animations ----- */

const Highlight = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 75px #228DFF;
  }
  to {
    text-shadow: 0 0 2.5px #fff, 0 0 5px #fff, 0 0 7.5px #fff, 0 0 10px #228DFF, 0 0 17.5px #228DFF, 0 0 20px #228DFF, 0 0 25px #228DFF, 0 0 32.5px #228DFF;
  }
`;

/* ----- Styles ----- */

const IconLink = styled.a`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  line-height: 0;
  display: inline-block;
  vertical-align: middle;
  color: ${(props) => props.theme.secondaryColor};
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;

  &:hover {
    -webkit-animation: ${Highlight} 0.1s ease-in-out infinite alternate;
    -moz-animation: ${Highlight} 0.1s ease-in-out infinite alternate;
    animation: ${Highlight} 0.1s ease-in-out infinite alternate;
    cursor: pointer;
    color: ${(props) => props.theme.primaryColor};
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const ContactLink = ({ icon, target, link }) => {
  return (
    <React.Fragment>
      <IconLink id={target} href={link}>
        <Icon size={36} icon={icon} />
      </IconLink>
      <UncontrolledTooltip placement="top" target={target}>
        {target}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};

export default ContactLink;
