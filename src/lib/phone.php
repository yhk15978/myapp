<?php
include("./conn.php");
$userphone = $_REQUEST["userphone"];

$sql="select * from users where user_phone='$userphone'";

$res=$mysqli->query($sql);

if($res->num_rows>0){
echo false;
}else{
    echo true;
};

$mysqli->close();
?>