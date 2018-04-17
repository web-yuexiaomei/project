<?php
//轮播图文查询
header("Content-Type:application/json;charset=utf-8");
require_once("init.php");
$sql="SELECT ftb_id,ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff FROM floor_three_b";
$result=mysqli_query($conn,$sql);
if(mysqli_error($conn)){
    echo mysqli_error($conn);
}
$arr=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($arr);