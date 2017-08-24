import React, { Component } from 'react';
import LoginView from './components/view/LoginView.js';
import HeaderView from './components/view/common/HeaderView.js';
import FooterView from './components/view/common/FooterView.js';

/**
 * Class representing Login Page.
 * @extends Component
 */
class Login extends Component {
/**
 * Render is a function to return html tags to be rendered
 * @returns {HTML} HTML tags to be rendered 
 */
  render() {
    return (
        <div>
            <div className="main-background-login">
                <HeaderView/>
                    <img src="assets/images/manulife-banner.png" alt="manulife-background"></img>
                <FooterView/>
            </div>
            <div className="login-container">
                <LoginView/>
            </div>
        </div>
    );
  }
}

export default Login;
