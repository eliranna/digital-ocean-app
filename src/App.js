import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentFailed from './pages/PaymentFailed';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/payment-success" element={<PaymentSuccess />}/>
      <Route path="/payment-failed" element={<PaymentFailed />}/>
    </Routes>
  )
}

export default App;


