import React from "react";
import { Icon } from "react-icons-kit";
import { UncontrolledTooltip } from "reactstrap";
import styled from "styled-components";

/* ----- Styles ----- */

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  width: 4rem;
  background-color: ${props => props.theme.bgColor};
  border-right: 1px dashed ${props => props.theme.borderColor};

  ul {
    position: absolute;
    bottom: 0;
    padding: 0;

    @media screen and (max-height: 476px) {
      position: relative;
      bottom: 0;
      padding: 0;
    }
  }

  li {
    text-decoration: none;
    list-style-type: none;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const NavLogo = styled.div`
  img {
    display: block;
    margin: 1rem auto 2rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const IconLink = styled.a`
  width: 100%;
  line-height: 0;
  display: inline-block;
  color: ${props => props.theme.secondaryColor};
  -webkit-transition: all 0.1s;
  -moz-transition: all 0.1s;
  transition: all 0.1s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.primaryColor};
  }
`;

const Links = styled.ul`
  width: 100%;

  &:before {
    content: " ";
    display: block;
    width: 1em;
    height: 2px;
    background: ${props => props.theme.secondaryColor};
    margin: 0.75em auto 0.75em;
  }
`;

const LinkItem = styled.li`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`;

/* ----- SideDrawer -----*/

const SideDrawer = ({ content, scrollToLanding }) => {
  const { icons } = content;

  return (
    <Wrapper>
      <NavLogo onClick={scrollToLanding}>
        <img width={32} src={require("../../assets/logo/Logo.svg")} />
      </NavLogo>
      <Links>
        {icons.map((icon, i) => (
          <LinkItem key={i}>
            <IconLink id={icon.target} href={icon.link}>
              <Icon size={20} icon={icon.icon} />
            </IconLink>
            <UncontrolledTooltip placement="right" target={icon.target}>
              {icon.target === "Email" ? "melcarned@gmail.com" : icon.target}
            </UncontrolledTooltip>
          </LinkItem>
        ))}
      </Links>
    </Wrapper>
  );
};

export default SideDrawer;
