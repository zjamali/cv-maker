import React from 'react'
import StyledHeader from './style/StyledHeader'

import styled from 'styled-components'

const Decoration = styled.div`
  width: 100%;
  height: 400px;
  background-color: #2DC46A;
  z-index: -60;
  position: absolute;
  top:0;
  left: 0;
  transform: skewY(-6deg);
`;

export default function Header() {
  return (
    <>
      <Decoration></Decoration>
      <StyledHeader>
        <h1>CV Maker</h1>
      </StyledHeader>
    </>
  )
}
