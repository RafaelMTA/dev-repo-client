import React from 'react';
import {Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './pages/Login/index.jsx';
import Main from './pages/Main/index.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
