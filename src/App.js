import React, { Component } from "react";
import { Landing, Services, Experience, Contact } from "./containers/index";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import {
  Container,
  Jumbotron,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";
import scrollToComponent from "react-scroll-to-component";

const Page = styled.div`
  background-image: linear-gradient(
      rgba(100, 100, 100, 0.15) 0.05em,
      transparent 0.05em
    ),
    linear-gradient(90deg, rgba(100, 100, 100, 0.15) 0.05em, transparent 0.05em);
  background-size: 3em 3em;
  z-index: -2;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  scroller = c => {
    console.log("scroll");
    console.log(c);
    scrollToComponent(c, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "inCirc"
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
  };

  render() {
    return (
      <Page>
        <Navigation
          toggle={this.toggle}
          open={this.state.isOpen}
          scrollToLanding={() => this.scroller(this.landing)}
          scrollToServices={() => this.scroller(this.services)}
          scrollToExperience={() => this.scroller(this.experience)}
          scrollToContact={() => this.scroller(this.contact)}
        />
        <section
          ref={l => {
            this.landing = l;
          }}
        >
          <Landing scrollToServices={() => this.scroller(this.services)}/>
        </section>
        <section
          ref={s => {
            this.services = s;
          }}
        >
          <Services />
        </section>
        <section
          ref={e => {
            this.experience = e;
          }}
        >
          <Experience />
        </section>
        <section
          ref={c => {
            this.contact = c;
          }}
        >
          <Contact />
        </section>
        <Footer />
      </Page>
    );
  }
}

export default App;
