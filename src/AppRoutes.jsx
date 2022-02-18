import React, { useContext } from 'react';
import {Routes, BrowserRouter as Router, Route, Navigate} from 'react-router-dom';
import { AuthContext } from './contexts/auth';
import Login from './pages/Login/index.jsx';
import Main from './pages/Main/index.jsx';
import AuthProvider from './contexts/auth';

const AppRoutes = () => {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);

    if(!authenticated) { return <Navigate to="/login" /> }
    if(loading) { return <div className="loading">Carregando...</div> }

    return children;
  }
  
  return (
    <Router>
      <AuthProvider>
        <Routes>      
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Private><Main /></Private>} />        
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
