<?php
include("./conn.php");
$username = $_REQUEST["username"];
$userpsd=$_REQUEST["userpsd"];
$userphone =$_REQUEST["userphone"];
$insertSql="insert into users(user_name,user_phone,user_password)values('$username','$userphone','$userpsd')";

$res=$mysqli->query($insertSql);

if($res){
 echo true;
}else{
    echo false;
};

$mysqli->close();
?>