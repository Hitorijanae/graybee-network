<?php
include "config.php";

// Check user login or not
$uname = $_GET["uname"];
$sql = "SELECT * FROM Members WHERE uname='$uname'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);
$profile_info = array(
    "fname" => $row['fname'],
    "lname" => $row['lname'],
    "uname" => $row['uname'],
    "email" => $row['email']
);
echo json_encode($profile_info);
?>
