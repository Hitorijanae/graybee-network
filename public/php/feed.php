<?php
include "config.php";
$uname = $_SESSION['uname'];
$sql = "SELECT filepath from Members WHERE uname = '$uname'";
$result = mysqli_query($con,$sql);
$row = mysqli_fetch_array($result);
$_SESSION['filepath'] = $row['filepath'];

// Check user login or not
if(!isset($_SESSION['uname'])){
   header('Location: index.html');
}
if($_POST['opcode'] == 'get'){
   echo json_encode($_SESSION);
}

?>
