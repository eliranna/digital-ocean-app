import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors } from './common/style';
import { Route, Routes } from 'react-router-dom';
import Cover from './sections/Cover';
import Intro from './sections/Intro';
import Features from './sections/Features';
import Heighlights from './sections/Heighlights';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.text};
    overflow-y: hidden;
`;

function LandingPage() {
  return (
    <>
      <Wrapper>
        <Cover/>
        <Intro/>
        <Features/>
        <Heighlights/>
      </Wrapper>
    </>
  )
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/payment-success" element={<PaymentSuccess />}/>
      <Route path="/payment-failed" element={<PaymentFailed />}/>
    </Routes>
  )
}

export default App;


