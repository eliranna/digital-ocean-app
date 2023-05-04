import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing'
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';

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


