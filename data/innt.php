<?php


#初始化页面  公共变量


 $sql="SET NAMES UTF8";
 $conn=mysqli_connect("127.0.0.1","root","","queen",3306);
 mysqli_query($conn,$sql);//设置php解释器连接数据库服务器的编码形式
