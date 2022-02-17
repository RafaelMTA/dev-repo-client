import React from 'react';import Login from './pages/Login/index.jsx';
import AppRoutes from '../src/AppRoutes.jsx';
import AuthProvider from './contexts/auth.jsx';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
