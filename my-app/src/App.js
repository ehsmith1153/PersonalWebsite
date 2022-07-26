import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
