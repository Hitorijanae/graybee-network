<?php
include "config.php";
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$current_uname = $_POST["current_uname"];
$email = $_POST["email"];
$pword = $_POST["pword"];
$hashword = password_hash($pword,PASSWORD_DEFAULT);
$sql = "UPDATE Members SET fname=$fname, lname=$lname, uname=$uname, email=$email WHERE uname = $current_uname";
if ($con->query($sql)===true){
    echo "Success";
}
else{
    echo "Error: " . $sql . "<br>" . $con->error;
}
$con->close();
?>
<!DOCTYPE HTML>
<head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="css/updateProfile.css"/>
    <script type="text/javascript" src="src/registration.js"></script>
</head>
<div class="navbar">
	<div class="btnMenu" onclick="hamburgerMenu();">
		<span class="line menuLn1"></span>
		<span class="line menuLn2"></span>	
    	<span class="line menuLn3"></span>
	</div>
	<img id="logo" src="assets/Official_Alumni_Association_Logo_11-17-20.png">
	<div class="menu_items">
		<div class="menu" id="login" onclick="loadLogin();"><a href="#">Log In</a></div>
		<div class="menu" id="profile" onclick="loadProfile();"><a href="#">Profile</a></div>
		<div class="menu" id="messages" onclick="loadMessages();"><a href="#">Messages</a></div>
		<div class="menu" id="friends" onclick="loadFriends();"><a href="#">Friends</a></div>
	</div>
</div>
<div id="registration_pane">
    <div id="registration_box">
        <img id="logo" src="assets/Official_Alumni_Association_Logo_11-17-20.png">
        <form id="registration_form">
            <input type="text" id="fname" placeholder="First Name" autocomplete="given-name"/>
            <input type="text" id="lname" placeholder="Last Name" autocomplete="family-name"/>
            <input type="email" id="email" placeholder="Email Address" autocomplete="email"/>
            <input type="email" id="confirm_email" placeholder="Confirm Email Address" autocomplete="email"/>
            <input type="text" id="uname" placeholder="Username" autocomplete="current-user"/>
            <input type="password" id="password" placeholder="Password" autocomplete="current-password"/>
            <input type="password" id="confirm_password" placeholder="Confirm Password"/>
            <input type="submit" placeholder="Update Login Information" id="btnRegister"/>
        </form>
    </div>  
</div>