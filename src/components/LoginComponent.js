import React from 'react';
import $ from 'jquery';
import '../css/login.css';
var uname, pword;
$(document).ready(function(){
    console.log("Login Page Loaded!");


    $('#Login').on("click", function(){
        validate();
        loginRequest();
    });
});

function validate(){
    if($("#uname").val() < 1 || $("#pword").val < 1){
        alert("Please enter a username and password!");
    }
    else{
        uname=$("#uname").val();
        pword=$("#pword").val();

    }
}

function loginRequest(){
    $.ajax({
        url: 'login.php',
        type: 'post',
        data: {uname:uname, pword:pword},
        success: function(response){
            console.log(response);
            if(response==1){
                alert("Logged in!");
                localStorage.setItem("username",uname);
            }
            else{
                alert("Please check your username and/or password.");
            }
        }
    });
}
class LoginComponent extends React.Component{
    render(){
        return(
            <div id="login_pane">
                <img id="loginLogo" src="/assets/Official_Alumni_Association_Logo_11-17-20.png" alt="Alumni Association Logo" />
                <h1>Welcome! Please log in.</h1>
                <h2 id="registration">Don't have an Account? <a id="register" href="register.htm">Make one!</a></h2>
                <form>
                    <input type="text" placeholder="username" id="uname" autoComplete="username" className="credentials"/>
                    <input type="password" placeholder="password" id="pword" autoComplete="current-password" className="credentials"/>
                    <input type="submit" id="Login"/>
                </form>

            </div>
        )
    }
}
export default LoginComponent;