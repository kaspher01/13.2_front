import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalculatorOperation from './components/CalculatorOperation';
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/:operation" element={<CalculatorOperation />} />
      </Routes>
    </div>
  );
}

export default App;
