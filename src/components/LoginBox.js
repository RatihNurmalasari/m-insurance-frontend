import React, { Component } from 'react';
import * as Validator from './Validator.js';
import $ from 'jquery';

class LoginBox extends Component {

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleValidation=this.handleValidation.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();

        var emailElm = $("#email").val();
        var passwordElm = $("#password").val();
        var username = [
            {email:"michael@mail.com",password:"Welcome123"},
            {email:"clara@mail.com",password:"Welcome123"},
            {email:"john@mail.com",password:"Welcome123"}
        ];
        var isValid = this.handleValidation(emailElm,passwordElm,username);
        if(isValid){
            $(".loading").css("display","block");
            setTimeout(function(){ window.location.assign('/checkclaim'); }, 1000);
            
        }
    }

    handleValidation(email,password,username){
        var isValidEmail = this.validateEmail(email);
        var isValidPassword = this.validatePassword(password);
        var allValid = isValidEmail.isValid && isValidPassword.isValid ? true : false;
        if (!isValidEmail.isValid){
            $("input#email").addClass("input-error");
            $(".email-error").text(isValidEmail.errorMsg);
        } else {
            $("input#email").removeClass("input-error");
            $(".email-error").text("");
        }
        if (!isValidPassword.isValid){
            $("input#password").addClass("input-error");
            $(".password-error").text(isValidPassword.errorMsg);
            $(".password-watch").css("background-image","url(../../assets/images/show_error.png)");
        } else {
            $("input#password").removeClass("input-error");
            $(".password-error").text("");
            $(".password-watch").css("background-image","url(../../assets/images/show.png)");
        }
        if (allValid){
            var checkUserObj = this.checkUser(email,password,username);
            if(!checkUserObj.isValid){
                $("input#email").addClass("input-error");
                $(".email-error").text(checkUserObj.errorMsg);
                allValid = false;
            } else {
                $("input#email").removeClass("input-error");
                $(".email-error").text("");
                var checkUserPass = this.checkPassword(email,checkUserObj.password,username);
                if (!checkUserPass.isValid){
                    $("input#password").addClass("input-error");
                    $(".password-error").text(checkUserPass.errorMsg);
                    $(".password-watch").css("background-image","url(../../assets/images/show_error.png)");
                    allValid = false;
                } else {
                    $("input#password").removeClass("input-error");
                    $(".password-error").text("");
                    $(".password-watch").css("background-image","url(../../assets/images/show.png)");
                }
            }
        }
        return allValid;
    }

    validateEmail(email){
        var isValid=true;
        var errorMsg = "";
        if(email === ""){
            isValid = false;
            errorMsg = "Please enter your email address";
        }else {
            isValid = Validator.isEmailValid(email);
            errorMsg = isValid ? "" : "Please re-enter your email address. Remember, the valid format is “email@domain.com”";
        }
        return {isValid:isValid,errorMsg:errorMsg};
    }

    validatePassword(password){
        var isValid=true;
        var errorMsg = "";
        if(password === ""){
            isValid = false;
            errorMsg = "Please enter your email password";
        }else {
            isValid = Validator.isPasswordValid(password);
            errorMsg = isValid ? "" : "Please re-enter your password";
        }
        return {isValid:isValid,errorMsg:errorMsg};
    }

    checkUser(email,password,username){
        var isValid=false;
        var errorMsg = "This Email address is not registered.";
        for(var i=0; i<username.length; i++){
            if(email === username[i].email){
                isValid = true;
                errorMsg = "";
                break;
            }
        }
        return {isValid:isValid,errorMsg:errorMsg,password:password};
    }

    checkPassword(email,password,username){
        var isValid=false;
        var errorMsg = "Incorrect password or username";
        for(var i=0; i<username.length; i++){
            if(email === username[i].email && password === username[i].password){
                isValid = true;
                errorMsg = "";
                break;
            }
        }
        return {isValid:isValid,errorMsg:errorMsg};
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
        if (passwordElm.getAttribute("type") == "text"){
            $(".password-watch").css("background-image","url(../../assets/images/hide.png)");
        } else {
            $(".password-watch").css("background-image","url(../../assets/images/show.png)");
        }
    }

    render() {
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
            <div className="loading">Loading&#8230;</div>
            </div>
        );
    }
}

export default LoginBox;