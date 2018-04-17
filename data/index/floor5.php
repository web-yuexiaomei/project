<?php
    header("Content-Type:application/json;charset=utf-8");
    require("init.php");
    $sql="SELECT bid,ad_title,img_gif,img_png,ad_des,ad_day,ad_date FROM queen_public";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,1);
    echo json_encode($row);
?>