<?php
session_start();
$host = "127.0.0.1"; /* Host name */$user = "jl675"; /* User */$password = "Alph@sig1845"; /* Password */$dbname = "jl675"; /* Database name */
$con = mysqli_connect($host, $user, $password,$dbname);
$path = __DIR__.DIRECTORY_SEPARATOR."php-error.log";
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
ini_set("error_log", $path);
ini_set("display_errors",1);
ini_set("error_reporting",E_ALL & ~E_NOTICE);

$dir = __DIR__.DIRECTORY_SEPARATOR.'phpuploads';

// create new directory with 744 permissions if it does not exist yet
// owner will be the user/group the PHP script is run under
if ( !file_exists($dir) ) {
    mkdir ($dir, 0744);
}
?>