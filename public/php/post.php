<?php 
include 'config.php';
$login = false;
/*print_r($_SESSION);
print_r($_POST);

// Check user login or not
/*if(!isset($_SESSION['uname'])){
    $login = false;
}*/
$opcode = $_POST['opcode'];
function postText(){
    global $con;
    $query = "INSERT INTO posts (textContent, postDate, username, postType, postTitle) VALUES ('".$_POST['postText']."', NOW(), '".$_SESSION['uname']."', 'text', '".$_POST['postTitle']."')";
    $con -> query($query);

}
function returnPosts(){
    global $con;
    $query = "SELECT * FROM posts";
    $result = $con -> query($query);
    $posts = array();
    while($row = $result -> fetch_assoc()){
        $posts[] = $row;
    }
    echo json_encode($posts);
}
if($opcode == 0){
    returnPosts();
}
else
if($opcode == 1){
    postText();

}
?>