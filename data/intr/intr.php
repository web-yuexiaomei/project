<?php
    header("Content-Type:application/json;charset=utf-8");
    require("../init.php");
    $sql="SELECT name,titleself,titleteam,imgself,option,htmls FROM queen_intr";
    $result=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($result,1);
    echo json_encode($row);
?>