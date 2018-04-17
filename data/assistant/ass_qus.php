<?php
header("Content-Type:application/json");
require_once("../init.php");
$sql="SELECT aid,ass_q_title,ass_q_stitleo,ass_q_stitlet,ass_q_stitles FROM ass_qus";
$result=mysqli_query($conn,$sql);

if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$row=mysqli_fetch_all($result,1);
echo json_encode($row);