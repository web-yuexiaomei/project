<?php
//功能:获取参数pno pageSize,依据参数获取数据库中数据
//     并且返回json格式数据
require("init.php");
//4:创建空数组（保存查询结果）
$output = [];
//4.1:获取参数 pno pageSize
@$pno = $_REQUEST["pno"];            //pno 页码0-9
@$pageSize = $_REQUEST["pageSize"];  //pageSize 页大小
//echo "1".$pno."_".$pageSize;
//4.2:创建正则表达式验证

$reg = '/^[0-9]{1,}$/';
$rs = preg_match($reg,$pno);
if(!$rs){
  die('{"code":-1,"msg":"页码格式不正确"}');
}
//echo 2;
$rs = preg_match($reg,$pageSize);
if(!$rs){
  die('{"code":-1,"msg":"页行数格式不正确"}');
}
//echo 3;
//5:创建一条sql 计算当前表中记录数
//一定小心大小写
$sql = "SELECT count(lid) FROM detail";
//6:发送sql语句获取返回结果
$result = mysqli_query($conn,$sql); //发送sql 语句
$row = mysqli_fetch_row($result);   //抓取一行记录
//echo "|".$row[0]."|";
$pageCount = ceil($row[0]/$pageSize);
//echo $pageCount;
//7:创建一条sql 获取当前页内容
$start = ($pno-1)*$pageSize;
$sql =  " SELECT a,img FROM detail LIMIT $start,$pageSize";

//8:发送sql语句获取返回结果
$result = mysqli_query($conn,$sql);
if(mysqli_error($conn)){
  echo mysqli_error($conn);
}
$rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
//9:将结果保存空数组中转换json数据发送

$output = [
          "pno"=>$pno,               //当前页码
          "pageSize"=>$pageSize,     //页大小
          "pageCount"=>$pageCount,   //总页数
          "data"=>$rows              //当前页内容
          ];
echo json_encode($output);