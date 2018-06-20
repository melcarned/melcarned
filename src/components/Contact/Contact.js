import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import ContactInfo from "./ContactInfo/ContactInfo";

/* ----- Contact ---- */

const Contact = ({ content }) => {
  const { info, icons } = content;

  return (
    <Fade>
      <ContactInfo
        image={info.image}
        header={info.header}
        subtitle={info.subtitle}
        email={info.email}
        icons={icons}
      />
    </Fade>
  );
};

export default Contact;
