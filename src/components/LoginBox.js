import React, { Component } from 'react';
import * as Validator from '../util/Validator.js';
import $ from 'jquery';
import * as API from '../util/API.js';

class LoginBox extends Component {

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var emailElm = $("#email").val();
        var passwordElm = $("#password").val();
        var isValid = this.handleValidation(emailElm,passwordElm);
        if(isValid){
            $(".loading").css("display","block");

            var url = "http://manulife-claim-dockermgmt.centralus.cloudapp.azure.com:6060/user/login";
            var postBody = {
                email:emailElm,
                password:passwordElm
            };
            API.ajaxRequest(url,postBody,'POST',function(response){
                //success
                var responseString = JSON.stringify(response)
                window.sessionStorage.setItem("dataProfile",responseString)
                $("input#email").removeClass("input-error");
                $("input#password").removeClass("input-error");
                $(".password-watch").css("background-image","url(../../assets/images/show.png)");
                $(".loginbox-error").text("");
                window.location.assign('/checkclaim');
            }, function(error){
                //error
                $("input#password").addClass("input-error");
                $("input#email").addClass("input-error");
                $(".loginbox-error").text(error.responseJSON.errorMessage);
                $(".password-watch").css("background-image","url(../../assets/images/show_error.png)");
                $(".loading").css("display","none");
            });
        }
    }

    handleValidation(email,password){
        var isValidEmail = this.validateEmail(email);
        var isValidPassword = this.validatePassword(password);
        var allValid = isValidEmail.isValid && isValidPassword.isValid ? true : false;
        if (!isValidEmail.isValid){
            $("input#email").addClass("input-error");
            $(".loginbox-error").text(isValidEmail.errorMsg);
        } else {
            $("input#email").removeClass("input-error");
            $(".loginbox-error").text("");
        }
        if (!isValidPassword.isValid){
            $("input#password").addClass("input-error");
            $(".loginbox-error").text(isValidPassword.errorMsg);
            $(".password-watch").css("background-image","url(../../assets/images/show_error.png)");
        } else {
            $("input#password").removeClass("input-error");
            $(".password-watch").css("background-image","url(../../assets/images/show.png)");
        }
        return allValid;
    }

    validateEmail(email){
        var isValid=true;
        var errorMsg = "";
        if(email === ""){
            isValid = false;
            errorMsg = "Please enter your email address and your password.";
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
            errorMsg = "Please enter your email address and your password.";
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
        if (passwordElm.getAttribute("type") === "text"){
            $(".password-watch").css("background-image","url(../../assets/images/hide.png)");
        } else {
            $(".password-watch").css("background-image","url(../../assets/images/show.png)");
        }
    }

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
            <span className="password-watch" onMouseUp={this.handleWatch} onMouseDown={this.handleWatch}></span>
            </div>
            <input id="remember-me" name="rememberme" type="checkbox"></input>
            <p>Remember me</p>
            <button type="button" onClick={this.handleSubmit}><img src="assets/images/lock.png" alt="lock"/>SIGN IN</button>
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