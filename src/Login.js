import React, { Component } from 'react';
import LoginView from './components/LoginView.js';

/**
 * Class representing Login Page.
 * @extends Component
 */
class Login extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {html} Html tags to be rendered 
 */
  render() {
    return (
        <div className="main-background">
                <img src="assets/images/manulife-background.png" alt="manulife-background"></img>
                <div className="login-container">
                <LoginView/>
            </div>
        </div>
    );
  }
}

export default Login;
