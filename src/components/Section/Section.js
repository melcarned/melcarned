import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

import SectionHeader from "./SectionHeader/SectionHeader";
import ApproachContent from "./SectionContent/ApproachContent";
import ToolkitContent from "./SectionContent/ToolkitContent";

/* ----- Styling ----- */

const Wrapper = styled.div`
  
`;

const ContainerStyled = styled(Container)`
  padding: 3rem 0;
  border-top: 1px dashed #aaa;
`;

/* ----- Section ----- */

const Section = ({ type, content }) => {
  const { subHeader, header, paragraph, display } = content;
  return (
    <Wrapper>
      <ContainerStyled>
        <SectionHeader
          subHeader={subHeader}
          header={header}
          paragraph={paragraph}
        />
        {type === "toolkit" ? (
          <ToolkitContent display={display} />
        ) : (
          <ApproachContent display={display} />
        )}
      </ContainerStyled>
    </Wrapper>
  );
};

export default Section;
