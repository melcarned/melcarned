import React from "react";
import styled from "styled-components";

import data from "./data";
import ContactInfo from "./ContactInfo/ContactInfo";
import Footer from "./Footer/Footer";

/* ----- Styles ---- */

const Wrapper = styled.div`
  height: 90vh;
  background: linear-gradient(rgb(237, 62, 68, 1) 50%, rgb(239, 80, 85, 1));
  color: white;
`;

/* ----- Contact ---- */

const Contact = () => {
  const { info, footer, icons } = data;

  return (
    <React.Fragment>
      <Wrapper>
        <ContactInfo
          image={info.image}
          header={info.header}
          subtitle={footer.subtitle}
          email={info.email}
          icons={icons}
        />
      </Wrapper>
      <Footer
        copyright={footer.copyright}
      />
    </React.Fragment>
  );
};

export default Contact;
