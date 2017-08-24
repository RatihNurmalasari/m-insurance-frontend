import React, { Component } from 'react';
import * as LoginController from '../controller/LoginViewController.js'


/**
 * Class representing Login Box.
 * @extends Component
 */

class LoginView extends Component {
    
    /**
    * Handle watch password event
    * @param {object} event contains native functions to be used on widget
    */
    onWatchPasswordClicked(event){
        LoginController.onWatchPasswordClicked(event);
    }

    /**
    * Handle sign in event event
    * @param {object} event contains native functions to be used on widget
    */
    onSignInClicked(event){
        LoginController.onSignInClicked(event);
    }

    /**
    * Render is a function to return HTML tags to be rendered
    * @returns {HTML} HTML tags to be rendered 
    */
    render() {
        return (
            <div className="login">
            <div className="login-page">
            <div className="loginHeader">Welcome!</div>
            <div className="form">
            <form className="login-form" >
            <p>Sign in to your account.</p>
            <p className="loginbox-error"></p>
            <p>Email Address*</p>
            <input type="text" id="email"/>
            <p>Password*</p>
            <div className="password-container">
            <input type="password" id="password" maxLength="50"/>
            <span className="password-watch" onMouseUp={this.onWatchPasswordClicked} onMouseDown={this.onWatchPasswordClicked}></span>
            </div>
            <input id="remember-me" name="rememberme" type="checkbox"></input>
            <p>Remember me</p>
            <button type="button" onClick={this.onSignInClicked}><img src="assets/images/lock.png" alt="lock"/>SIGN IN</button>
            <div className="forgotSection"><span><a id="forgotUsername">Forgot Password? </a></span>
            <span><a id="signUp">Create Account</a></span>
            </div>
            </form>
            </div>
            </div>
            <div className="loading">Loading&#8230;</div>
            </div>
        );
    }
}

export default LoginView;