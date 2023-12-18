import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import './style.css';

const Login = ({ isAuthenticated, loginSuccess, loginFailure }) => {

  const handleLogin = () => {
    const apiResponse = { status: 200 };

    if (apiResponse.status === 200) {
      loginSuccess();
    } else {
      loginFailure();
    }
  };
  
    return (
      <div className='contenedor'>
        <h1>Hamburguesa</h1>
        <button onClick={handleLogin} className='comenzar'>Comenzar</button>
      </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});
  
export default connect(mapStateToProps, { loginSuccess, loginFailure })(Login);