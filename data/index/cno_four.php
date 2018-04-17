<?php
header("Content-Type:application/json");
require_once("init.php");
$sql="select * from angli";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));