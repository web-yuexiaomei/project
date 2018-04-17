<?php
header("Content-Type:application/json");
@$val = $_REQUEST["val"];
require_once("../init.php");
  if($val==""||$val==null){
            $val="a";
        }
$sql="SELECT * FROM ass_lists where ass_li_title LIKE '%$val%'";
$result=mysqli_query($conn,$sql);

if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$row=mysqli_fetch_all($result,1);
echo json_encode($row);