<?php 
   #1.接收uname
   @$uname=$_REQUEST["uname"];
   if($uname==null||$uname==""){
	   die("用户名不能为空!");
   }
   #2.连接数据库
   require("../init.php");
   #3.拼sql语句，并查询uname是否存在
   $sql="select * from queen_user where uname='$uname'";
   $result=mysqli_query($conn,$sql);
   #4.根据查询结果给出响应
   $row=mysqli_fetch_row($result);
   if($row==null){
      echo 1;// 通过
   }else{
      echo 0;//已经存在
   }  
?>