import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import Main from './main';  
import Login from './components/login';
import Rent from './components/rent';
import { useSelector } from 'react-redux';
import './style.css';

function App() {
  const token = useSelector((state) => state.token);

  return (
    <Router>
      <Routes>
        {token !== null && token !== undefined ? (
          <>
            <Route path="/rent" element={<Rent />} />
            <Route path="/" element={<Main />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login/>} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}


export default App;
