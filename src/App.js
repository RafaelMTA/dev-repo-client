import React from 'react';
import AppRoutes from '../src/AppRoutes';
import AuthProvider from './contexts/auth';

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
