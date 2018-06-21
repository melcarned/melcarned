import React, { Component } from "react";
import { SideDrawer, Landing, Section, Contact, Footer } from "./containers/index";
import styled, { ThemeProvider } from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import data from "./data";

/* App theme */

const theme = {
  primaryColor: "#00caca",
  secondaryColor: "#000",
  borderColor: "#ccc",
  bg: "#fff",
};

/* Base background for entire site */

const MasterWrapper = styled.div`
  background-color: #fff;
  margin-left: 4rem;

  @media (max-width: 576px) {
    margin-left: 0px;
  }
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
    const { approachContent, toolkitContent, portfolioContent, contact, footer } = data;
    return (
      <ThemeProvider theme={theme}>
        <MasterWrapper>
          {/* <!--- SideDrawer ---> */}
          <SideDrawer scrollToLanding={() => this.scrollToSection(this.landing)}
          content={contact} />

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
            <Section content={portfolioContent} />
          </section>

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
