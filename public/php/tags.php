<?php
include "config.php";
$jsonStr = $_POST['json'];
$json = json_decode($jsonStr);
$uid = $_SESSION['uid'];
$opcode = $_POST['opcode'];
//var_dump($json);
//var_dump($_SESSION);

if($opcode == 1) {
    foreach($json as $key => $value) {
        
        $getTagSql = "SELECT * FROM Tags WHERE tag='$key'";
        $result = mysqli_query($con,$getTagSql);
        $row = mysqli_fetch_array($result);
        $tagID=$row['id'];
        $sql = "INSERT INTO Relationships (ID, tag) VALUES ('$uid', '$tagID')";
        $con -> query($sql);
    }
    echo 1;
}
else{
        $host="127.0.0.1"; // Host name
        $username="jl675"; // Mysql username
        $password="Alph@sig1845"; // Mysql password
        $db_name="jl675"; // Database name
        $con = mysqli_connect("$host", "$username", "$password", "$db_name")or die("cannot connect"); // Connect to server and select databse.
        $query = "SELECT * FROM tags";
        $result = mysqli_query($con,$query);

        /*while($row = mysqli_fetch_array($result)){
            $tag = $row['tag'];
            echo "<div class='tag' id=" . "". $tag . "".">" .$row['desc']. "</div>";
        }*/
        $arr = mysqli_fetch_all($result);
        echo json_encode($arr);
        
}?>