<?php
include("./conn.php");
$username = $_REQUEST["username"];

$sql="select * from users where user_name='$username'";

$res=$mysqli->query($sql);

if($res->num_rows>0){
echo false;
}else{
    echo true;
};

$mysqli->close();
?>