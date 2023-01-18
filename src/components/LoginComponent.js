import React from 'react';
import $ from 'jquery';
import '../css/login.css';
import axios from 'axios';
var uname, pword;
$(document).ready(function(){
    console.log("Login Page Loaded!");


    /*$('#Login').on("click", function(){
        validate();
        loginRequest();
    });*/
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
    /*$.ajax({
        url: 'http://localhost/login.php',
        type: 'post',
        data: {uname:uname, pword:pword},
        success: function(response){
            console.log(response);
            if(response.includes("DONE")){
                /*const opcode = new FormData();
                opcode.append("opcode", 4);
                opcode.append("uname",uname);
                axios.post("http://localhost/login.php", opcode, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(
                    response => {
                        sessionStorage.setItem("avatar",response);
                        console.log(response.data);
                        alert("Logged in!");
                        sessionStorage.setItem("username",uname);
                        window.location.href = "feed.htm";
                    });
                
                alert("Logged in!");
                sessionStorage.setItem("username",uname);
                window.location.href = "feed.htm";
            }
            else{
                alert("Please check your username and/or password.");
            }
        }
    });*/
    let credentials = new FormData();
    credentials.append("uname",uname);
    credentials.append("pword",pword);
    credentials.append("opcode",0);
    axios.post("http://localhost/login.php", credentials, {
        headers: {
            'Content-Type': 'multipart/form-data'
            },
        timeout: 10000
        }).then(
            response => {
                console.log(response.data);
                sessionStorage.setItem("username", uname);
                if(response.data.includes("DONE")){
                    alert("Logged in!");
                    let url = response.data.substring(5);
                    sessionStorage.setItem("avatar",url);
                    window.location.href = "feed.htm";
                }
            }
        )
}
class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login = e => {
        e.preventDefault();
        validate();
        loginRequest();
    }
    render(){
        return(
            <div id="login_pane">
                <img id="loginLogo" src="/assets/Official_Alumni_Association_Logo_11-17-20.png" alt="Alumni Association Logo" />
                <h1>Welcome! Please log in.</h1>
                <h2 id="registration">Don't have an Account? <a id="register" href="register.htm">Make one!</a></h2>
                <form onSubmit={this.login}>
                    <input type="text" placeholder="username" id="uname" autoComplete="username" className="credentials"/>
                    <input type="password" placeholder="password" id="pword" autoComplete="current-password" className="credentials"/>
                    <input type="submit" id="Login"/>
                </form>

            </div>
        )
    }
}
export default LoginComponent;