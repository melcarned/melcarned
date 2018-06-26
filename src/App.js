import React, { Component } from "react";
import {
  SideDrawer,
  Landing,
  Section,
  Contact,
  Footer
} from "./containers/index";
import Icon from "react-icons-kit";
import { thumbsup } from "react-icons-kit/oct/thumbsup";
import styled, { ThemeProvider } from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import data from "./data";

/* App theme */

const theme = {
  primaryColor: "#00caca",
  secondaryColor: "#000",
  borderColor: "#ccc",
  bg: "#fff"
};

/* Base background for entire site */

const MasterWrapper = styled.div`
  background-color: #fff;
  margin-left: 5rem;

  @media (max-width: 576px) {
    margin-left: 0rem;
  }
`;

const ConstructionSign = styled.div`
  position: fixed;
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.primaryColor};
  z-index: 100;
  background-color: #000;
`;

class App extends Component {
  /* Scroll to section based on ref tag */
  scrollToSection = c => {
    scrollToComponent(c, {
      align: "top",
      duration: 500,
      ease: "inCirc"
    });
  };

  render() {
    const {
      approachContent,
      toolkitContent,
      portfolioContent,
      contact,
      footer
    } = data;
    return (
      <ThemeProvider theme={theme}>
        <MasterWrapper>
          <ConstructionSign>
            *** Site is under development. Enjoy the preview. ***<Icon icon={thumbsup} />
          </ConstructionSign>
          {/* <!--- SideDrawer ---> */}
          <SideDrawer
            scrollToLanding={() => this.scrollToSection(this.landing)}
            content={contact}
          />

          {/* <!--- Landing ---> */}
          <section
            ref={l => {
              this.landing = l;
            }}
          >
            <Landing />
          </section>
          {/* <!--- Approach ---> */}
          <section
            ref={s => {
              this.approach = s;
            }}
          >
            <Section type="approach" content={approachContent} />
          </section>

          {/* <!--- Toolkit ---> */}
          <section
            ref={s => {
              this.toolkit = s;
            }}
          >
            <Section type="toolkit" content={toolkitContent} />
          </section>

          {/* <!--- Portfolio ---> */}
          <section
            ref={s => {
              this.portfolio = s;
            }}
          >
            <Section type="portfolio" content={portfolioContent} />
          </section>

          {/* <!--- Contact Form --->
          <section
            ref={s => {
              this.portfolio = s;
            }}
          >
            <Section type="contact" content={contactContent} />
          </section> */}

          {/* <!--- Contact ---> */}
          <section
            ref={c => {
              this.contact = c;
            }}
          >
            <Contact content={contact} />
          </section>
          <Footer copyright={footer.copyright} />
        </MasterWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
