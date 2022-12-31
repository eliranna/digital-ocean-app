import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components/macro"

import Topbar from './ob-components/Topbar';
import Explore from './ob-pages/Explore'
import Liked from './ob-pages/Liked';

const Wrapper = styled.div``

function Otoboto() {

  return (
    <Wrapper>
        <Topbar/>
        <Routes>
            <Route path="/" element={<Explore />}/>
            <Route path="/liked" element={<Liked />}/>
        </Routes>
    </Wrapper>
  )
}

export default Otoboto;