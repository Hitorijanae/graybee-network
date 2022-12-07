<?php
include "config.php";
$opcode = $_POST["opcode"];
$pword = $_POST["pword"];
$uname = $_POST["uname"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$classyear = $_POST["classyear"];
if($opcode == 0){
    login();
}
elseif($opcode == 1){
    register();
}
elseif($opcode == 2){
    
    uploadProfilePic();
}
elseif($opcode == 3){
    getClassYears();
}
else{
    echo "Invalid opcode";
}

function login(){
    global $con;
    global $uname;
    global $pword;
    if ($uname != "" && $pword != ""){

    $sql_query = "SELECT * FROM Members WHERE uname='$uname'";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);
    $verify = password_verify($pword,$row['pword']);
    $hashword = $row['pword'];
    if(password_verify($pword,$hashword)){
        $_SESSION['uname'] = $uname;
        echo 1;
    }
    else{
        echo 0;
    }

    }
}

function register(){
    global $uname;
    global $pword;
    global $fname;
    global $lname;
    global $email;
    global $classyear;
    global $con;

    $_SESSION['fname'] = $fname;
    $_SESSION['lname'] = $lname;
    $_SESSION['uname'] = $uname;
    $_SESSION['email'] = $email;
    $_SESSION['classyear'] = $classyear;
    $hashword = password_hash($pword,PASSWORD_BCRYPT);
    //echo $pword."\n".var_dump($hashword)."\n";
    $_SESSION['pword'] = $hashword;

}

function uploadProfilePic(){
    global $con;
    if(file_exists($_FILES["picPicker"]["tmp_name"])){
        $fname = $_SESSION['fname'];
        $lname = $_SESSION['lname'];
        $uname = $_SESSION['uname'];
        $email = $_SESSION['email'];
        $pword = $_SESSION['pword'];
        $classyear = $_SESSION['classyear'];
		$current_user = $_SESSION['uname'];
		$img = $_FILES["picPicker"]["name"];
		$tmp = $_FILES["picPicker"]["tmp_name"];
		$path = __DIR__.DIRECTORY_SEPARATOR."uploads".DIRECTORY_SEPARATOR;
		$final_image = rand(1000,1000000).$img;
		$path = $path.strtolower($final_image);
		move_uploaded_file($tmp,$path);
		$sql = "INSERT INTO Members (fname, lname, uname, email, pword, class, filepath) VALUES ('$fname', '$lname','$uname', '$email', '$pword', '$classyear', '$final_image')";
        if ($con->query($sql)===true){
			$_SESSION['uname'] = $uname;
            $sql_query = "SELECT * FROM Members WHERE uname='$uname'";
            $result = mysqli_query($con,$sql_query);
            $row = mysqli_fetch_array($result);
            $_SESSION['uid'] = $row['id'];
            echo 1;
		}
		else{
			echo "Error: " . $sql . "<br>" . $con->error;
		}
		$con->close();
	}
}

function getClassYears(){
    global $con;
    $sql_query = "SELECT * FROM classes";
    $result = mysqli_query($con,$sql_query);
    $arr = mysqli_fetch_all($result);
    echo json_encode($arr);
}