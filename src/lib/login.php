<?php
include("./conn.php");
$username = $_REQUEST["username"];
$userpsd=$_REQUEST["userpsd"];

$sql="select * from users where user_name='$username'and user_password='$userpsd' or user_phone='$username' and user_password='$userpsd'";

$res=$mysqli->query($sql);

$json=array(
"has"=>true,
"username"=>$username
);
$json=json_encode($json);
if($res){
 echo $json;
}else{
    echo false;
};

$mysqli->close();
?>