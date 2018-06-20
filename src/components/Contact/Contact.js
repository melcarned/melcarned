import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import data from "./data";
import ContactInfo from "./ContactInfo/ContactInfo";

/* ----- Styles ---- */

const Center = styled.div`
  text-align: center;
`;

/* ----- Contact ---- */

const Contact = () => {
  const { info, footer, icons } = data;

  return (
      <Fade>
        <Center>
        <ContactInfo
          image={info.image}
          header={info.header}
          subtitle={footer.subtitle}
          email={info.email}
          icons={icons}
        />
        </Center>
      </Fade>
  );
};

export default Contact;
