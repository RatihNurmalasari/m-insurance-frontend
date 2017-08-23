import React, { Component } from 'react';
import LoginBox from './components/LoginBox.js';

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
                <LoginBox/>
            </div>
        </div>
    );
  }
}

export default Login;
