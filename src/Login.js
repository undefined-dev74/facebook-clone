import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
const Login = () => {
  const signIn = userId => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt="Facebook-logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="Facebook-logo-text"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
