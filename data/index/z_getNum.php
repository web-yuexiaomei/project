<?php
//获取滚动数字
header("Content-Type:application/json;charset=utf-8");
require_once("init.php");
$sql="SELECT ftl_id,ftl_title,ftl_stitle,ftl_num FROM floor_three_l";
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($arr);