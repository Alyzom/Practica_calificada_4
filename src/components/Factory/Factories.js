// Factories.js
import React from 'react';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';

export const createComponent = (type) => {
  switch (type) {
    case 'login':
      return <Login />;
    case 'dashboard':
      return <Dashboard />;
    default:
      return null;
  }
};