import React, { Component } from "react";
import { Landing, Section, Contact, Footer } from "./containers/index";
import styled, { ThemeProvider } from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import data from "./data";

/* Base background for entire site */
const theme = {
  primaryColor: "#00caca",
  secondaryColor: "#000",
  borderColor: "#ccc",
  bg: "#fff",
};

const MasterWrapper = styled.div`
  background-color: #fff;
  z-index: -1;
`;

class App extends Component {
  /* Scroll to section based on ref tag */
  scrollToSection = c => {
    scrollToComponent(c, {
      offset: -100,
      align: "top",
      duration: 700,
      ease: "inCirc"
    });
  };

  render() {
    const { approachContent, toolkitContent, contact, footer } = data;
    return (
      <ThemeProvider theme={theme}>
        <MasterWrapper>
          {/* <!--- Landing ---> */}
          <section
            ref={l => {
              this.landing = l;
            }}
          >
            <Landing
              scrollToExpertises={() => this.scrollToSection(this.expertises)}
            />
          </section>
          {/* <!--- Approach ---> */}
          <section
            ref={s => {
              this.expertises = s;
            }}
          >
            <Section type="approach" content={approachContent} />
          </section>

          {/* <!--- Toolkit ---> */}
          <section
            ref={s => {
              this.expertises = s;
            }}
          >
            <Section type="toolkit" content={toolkitContent} />
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
