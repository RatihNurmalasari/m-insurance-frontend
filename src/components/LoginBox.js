import React, { Component } from 'react';
import $ from 'jquery';

class LoginBox extends Component {

    handleSubmit(event){
        event.preventDefault();
        // When the form is submitted, call the onSearch callback that is passed to the component
        
        var emailElm = document.getElementById("email").value;
        var passwordElm = document.getElementById("password").value;
        var username = {email:"michael@mail.com",password:"1234"};
        console.log($('#email').val());
        $('#email').addClass('success');
        if(emailElm===username.email && passwordElm===username.password){
            alert("SUCCESS LOGIN");
            window.location.assign('/checkclaim');
        } else {
            alert("FAILED LOGIN");
        }
    }
    
    handleWatch(event){
        event.preventDefault();
        var currAttr = document.getElementById("password").getAttribute("type");
        var passwordElm = document.getElementById("password");
        if(currAttr==="password"){
            passwordElm.setAttribute("type","text");
        } else {
            passwordElm.setAttribute("type","password");
        }        
    }
    
    render() {
        var backgroundImgShow = {
            backgroundImage: "url('../images/show.png')"
        }
        var backgroundImgHide = {
            backgroundImage: "url('../images/show.png')"
        }
        return (
            <div className="login">
                <img src="assets/images/manulife-background.png"></img>
                <div className="login-page">
                    <div className="loginHeader">Welcome!</div>
                    <div className="form">
                        <form className="login-form" >
                            <p>Sign in to your account.</p>
                            <p>Email Address*</p>
                            <p className="email-error"></p>
                            <input type="text" id="email"/>
                            <p>Password*</p>
                            <p className="password-error"></p>
                            <div className="password-container">
                                <input type="password" id="password"/>
                                <span className="password-watch" onMouseUp={this.handleWatch} onMouseDown={this.handleWatch}></span>
                            </div>
                            <input id="remember-me" name="rememberme" type="checkbox"></input>
                            <p>Remember me</p>
                            <button type="button" onClick={this.handleSubmit}><img src="assets/images/lock.png"/>SIGN IN</button>
                            <div className="forgotSection"><span><a id="forgotUsername">Forgot Password? </a></span>
                                <span><a id="signUp">Create Account</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBox;