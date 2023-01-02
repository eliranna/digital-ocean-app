import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components/macro"
import { useLocation } from 'react-router-dom'

import {useViewport, ViewportProvider} from './ViewportProvider'

import Topbar from './ob-components/Topbar';
import MobileFooter from './ob-components/MobileFooter';

import Explore from './ob-pages/Explore'
import Liked from './ob-pages/Liked';

const Wrapper = styled.div``

function Otoboto() {

  const location = useLocation();
  const isInSearchMode = location.pathname === '/';

  return (
    <ViewportProvider>
      <Wrapper>
          <Topbar allowSearch={isInSearchMode} showTopbarOnMobile={isInSearchMode}/>
          <Routes>
              <Route path="/" element={<Explore />}/>
              <Route path="/liked" element={<Liked />}/>
          </Routes>
          <MobileFooter/>
      </Wrapper>
    </ViewportProvider>
  )
}

export default Otoboto;