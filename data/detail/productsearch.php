<?php
//功能模块：完成产品搜索
//1:获取文件init
require("init.php");
//2:获取参数 lname;low;high;pno;pageSize
@$lname = $_REQUEST["lname"];       //搜索产品关键字
      //价格上限
@$pno = $_REQUEST["pno"];           //页码
@$pageSize = $_REQUEST["pageSize"]; //页大小
//3:设置默认值
if(!$lname){
  $lname = "";
}
if(!$pno){
  $pno = 1;
}
if(!$pageSize){
  $pageSize = 8;
}
//4:正则表达式验证所有验参数

//5:创建sql获取总页数
$sql  = " SELECT count(lid) FROM queen_detail";
$sql .= " WHERE des LIKE '%$lname%'";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
   echo mysqli_error($conn);
}
$row = mysqli_fetch_row($result);
$recordCount =  $row[0];
//6:创建sql获取当前页内容
$offset = ($pno-1)*$pageSize;
$sql  = " SELECT a,img";
$sql .= " FROM queen_detail";
$sql .= " WHERE des LIKE '%$lname%'";
$sql .= " LIMIT $offset,$pageSize";
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//7:发送数据json
$output = [
 "pno"=>$pno,
 "pageSize"=>$pageSize,
 "pageCount"=>ceil($recordCount/$pageSize),
 "recordCount"=>$recordCount,
 "data"=>$rows
 ];
echo json_encode($output);