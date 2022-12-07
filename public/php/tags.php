<?php
include "config.php";
$jsonStr = $_POST['json'];
$json = json_decode($jsonStr);
$uid = $_SESSION['uid'];
//var_dump($json);
//var_dump($_SESSION);

foreach($json as $key => $value) {
    
    $getTagSql = "SELECT * FROM Tags WHERE tag='$key'";
    $result = mysqli_query($con,$getTagSql);
    $row = mysqli_fetch_array($result);
    $tagID=$row['id'];
    $sql = "INSERT INTO Relationships (ID, tag) VALUES ('$uid', '$tagID')";
    $con -> query($sql);
}
?>

<head>
    <link rel="stylesheet" type="text/css" href="../src/css/registration.css">
    <script src="../src/registration.js"></script>
</head>
<body>
    <div class="tagHeader">
        <div id="done">Done</div>
        <h1>Choose What You're Interested In!</h1>
    </div>
    <div class = 'tags'>
        <?php
        $host="127.0.0.1"; // Host name
        $username="jl675"; // Mysql username
        $password="Alph@sig1845"; // Mysql password
        $db_name="jl675"; // Database name
        $con = mysqli_connect("$host", "$username", "$password", "$db_name")or die("cannot connect"); // Connect to server and select databse.
        $query = "SELECT * FROM tags";
        $result = mysqli_query($con,$query);

        while($row = mysqli_fetch_array($result)){
            $tag = $row['tag'];
            echo "<div class='tag' id=" . "". $tag . "".">" .$row['desc']. "</div>";
        }
        ?>
    </div>
    
</body>