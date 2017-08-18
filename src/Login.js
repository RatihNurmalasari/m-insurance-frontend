import React, { Component } from 'react';
import LoginBox from './components/LoginBox.js';

class Login extends Component {
  render() {
    return (
        <div className="main-background">
                <img src="assets/images/manulife-background.png" alt="manulife-background"></img>
                <div className="login-container">
                <LoginBox/>
            </div>
        </div>
    );
  }
}

export default Login;
