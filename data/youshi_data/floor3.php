<?php
header("Content-Type:application/json");
require("init.php");
$sql="select * from queen_detail_f3";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));


