import React, { Component } from "react";
import { Landing, Section, Contact, Footer } from "./containers/index";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";
import data from './data';

/* Base background for entire site */
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
    const { approachContent, toolkitContent, footer } = data;
    return (
      <MasterWrapper>
        {/* <!--- Landing ---> */}
        <section
          ref={l => {
            this.landing = l;
          }}
        >
          <Landing scrollToExpertises={() => this.scrollToSection(this.expertises)} />
        </section>

        {/* <!--- Approach ---> */}
        <section
          ref={s => {
            this.expertises = s;
          }}
        >
          <Section type="approach" content={approachContent}/>
        </section>

        {/* <!--- Toolkit ---> */}
        <section
          ref={s => {
            this.expertises = s;
          }}
        >
          <Section type="toolkit" content={toolkitContent}/>
        </section>

        {/* <!--- Contact ---> */}
        <section
          ref={c => {
            this.contact = c;
          }}
        >
          <Contact />
        </section>
        <Footer copyright={footer.copyright}/>
      </MasterWrapper>
    );
  }
}

export default App;
