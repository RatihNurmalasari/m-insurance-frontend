import React, { Component } from 'react';
import LoginView from './components/LoginView.js';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

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
        <div>
            <div className="main-background-login">
                <Header/>
                    <img src="assets/images/manulife-banner.png" alt="manulife-background"></img>
                <Footer/>
            </div>
            <div className="login-container">
                        <LoginView/>
            </div>
        </div>
    );
  }
}

export default Login;
