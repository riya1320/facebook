import React from 'react';
import "./Login.css";
import Button from '@mui/material/Button';

function Login() {
  const signIn = () => {

  };
  return (
    <div className="login">
        <div className="login__logo">
            <img 
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt=""
            />
            <img
                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019.jpg"
                alt=""
            />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
  </div>
  );
}

export default Login;
