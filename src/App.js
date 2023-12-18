import React from 'react';
import { connect } from 'react-redux';
import { createComponent } from './components/Factory/Factories';
import './App.css';

const App = ({ isAuthenticated }) => {
  // Usa el Factory Method para crear el componente adecuado según el estado de autenticación
  const dynamicComponent = createComponent(isAuthenticated ? 'dashboard' : 'login');

  return (
    <div>
      {dynamicComponent}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
});

export default connect(mapStateToProps)(App);
