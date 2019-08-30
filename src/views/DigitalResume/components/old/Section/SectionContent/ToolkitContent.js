import React from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

/* ----- ToolkitContent ----- */

const ToolkitContent = ({ display }) => {
  return (
    <Wrapper>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <Skills even>
          {display.map((e, i) => (
            <SkillWrapper>
              <Skill even key={i}>
                <ImageStyled src={e.icon} />
                <p>{e.name}</p>
              </Skill>
            </SkillWrapper>
          ))}
        </Skills>
      </Col>
    </Wrapper>
  )
}

export default ToolkitContent
