import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors } from './common/style';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Admin from './components/Admin';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.text};
`;

function LandingPage() {
  return (
    <>
      <Wrapper>
        <Navbar/>
        <Homepage/>
      </Wrapper>
    </>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/admin" element={<Admin />}/>
    </Routes>
  )
}

export default App;
