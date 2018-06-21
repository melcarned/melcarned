import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

import SectionHeader from "./SectionHeader/SectionHeader";
import ApproachContent from "./SectionContent/ApproachContent";
import PortfolioContent from "./SectionContent/PortfolioContent";
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

  let sectionContent = <ApproachContent display={display} />
  
  if(type === "toolkit") {
    sectionContent = <ToolkitContent display={display} />;
  } else if(type === "portfolio")  {
    sectionContent = <PortfolioContent display={display} />;
  } 
  
  // else if(type === "Contact")  {
  //   sectionContent = null;
  // }

  return (
    <Wrapper>
      <ContainerStyled>
        <SectionHeader
          subHeader={subHeader}
          header={header}
          paragraph={paragraph}
        />
        <Slide right>
          {sectionContent}
        </Slide>
      </ContainerStyled>
    </Wrapper>
  );
};

export default Section;
