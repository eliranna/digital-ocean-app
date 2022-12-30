import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components/macro"

import Topbar from './ob-components/Topbar';
import Explore from './ob-pages/Explore'
import Liked from './ob-pages/Liked';

const Wrapper = styled.div``

const TopbarWrapper = styled.div`
    width: 100%;
    box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
    height: 80px;
    z-index: 1;
`

function Otoboto() {

  return (
    <Wrapper>
        <TopbarWrapper>
            <Topbar/>
        </TopbarWrapper>
        <Routes>
            <Route path="/" element={<Explore />}/>
            <Route path="/liked" element={<Liked />}/>
        </Routes>
    </Wrapper>
  )
}

export default Otoboto;