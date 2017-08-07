import React, { Component } from 'react';

class LoginBox extends Component {

    handleSubmit(event){
        event.preventDefault();
        // When the form is submitted, call the onSearch callback that is passed to the component
        var emailElm = document.getElementById("email").value;
        var passwordElm = document.getElementById("password").value;
        var username = {email:"michael@mail.com",password:"1234"};
        if(emailElm==username.email && passwordElm==username.password){
            alert("SUCCESS LOGIN");
        } else {
            alert("FAILED LOGIN");
        }
    }

    render() {
        return (
            <div className="login">
            <img src="assets/images/manulife-background.png"></img>
                <div className="login-page">
                <div className="form">

                <form className="login-form" >
                <p className="loginHeader">Welcome</p>

                <input type="text" placeholder="Email ID" id="email"/>
                <input type="password" placeholder="Password" id="password" />

                <input id="remember-me" name="rememberme" type="checkbox"></input>
                <label htmlFor="remeber-me">Remember me</label>
                <button type="button" onClick={this.handleSubmit}>LOG ON</button>
                <a id="forgotUsername">Forgot username / password </a>
                <br></br>
                <a id="signUp">Not enrolled? Sign up now</a>
                </form>
                </div>
                </div>
            </div>
        );
    }
}

export default LoginBox;