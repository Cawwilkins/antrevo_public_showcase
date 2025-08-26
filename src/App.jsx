import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage.jsx';
import SignIn from './pages/SignIn.jsx'
import MainPage from './pages/MainPage.jsx';
import StrategyPage from './pages/StrategyPage.jsx'
import { Link, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path='/main-page' element={<MainPage />} />
      <Route path='/strategy-page' element={<StrategyPage />} />
    </Routes>
  );
}

export default App;
