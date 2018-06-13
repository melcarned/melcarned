import React, { Component } from "react";
import { Landing, Expertises, Contact } from "./containers/index";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";

/* Base background for entire site */
const Page = styled.div`
  background-image: linear-gradient(
      rgba(100, 100, 100, 0.15) 0.05em,
      transparent 0.05em
    ),
    linear-gradient(90deg, rgba(100, 100, 100, 0.15) 0.05em, transparent 0.05em);
  background-size: 3em 3em;
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
    return (
      <Page>
        {/* <!--- Landing ---> */}
        <section
          ref={l => {
            this.landing = l;
          }}
        >
          <Landing scrollToExpertises={() => this.scrollToSection(this.expertises)} />
        </section>

        {/* <!--- Expertises ---> */}
        <section
          ref={s => {
            this.expertises = s;
          }}
        >
          <Expertises />
        </section>

        {/* <!--- Contact ---> */}
        <section
          ref={c => {
            this.contact = c;
          }}
        >
          <Contact />
        </section>
      </Page>
    );
  }
}

export default App;
