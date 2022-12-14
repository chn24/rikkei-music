import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import './App.css';

import LandingPage from './pages/landingPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path=':officeId' element={<LandingPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
