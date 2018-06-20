import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import data from "./data";
import ContactInfo from "./ContactInfo/ContactInfo";

/* ----- Styles ---- */

const Center = styled.div`
  height: 100vh;
  text-align: center;
`;

const Circle = styled.div`
  width: 75vh;
  height: 75vh;
  background-color: #fff;
  border: 3px black dashed;
`;

/* ----- Contact ---- */

const Contact = () => {
  const { info, footer, icons } = data;

  return (
      <Fade>
        <Center>
        <Circle>
        <ContactInfo
          image={info.image}
          header={info.header}
          subtitle={footer.subtitle}
          email={info.email}
          icons={icons}
        />
        </Circle>
        </Center>
      </Fade>
  );
};

export default Contact;
