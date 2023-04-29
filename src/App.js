import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colors } from './common/style';
import { Route, Routes } from 'react-router-dom';
import Cover from './sections/Cover';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.text};
`;

function LandingPage() {
  return (
    <>
      <Wrapper>
        <Cover/>
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


