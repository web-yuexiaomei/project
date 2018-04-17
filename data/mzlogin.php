<?php
@$uname=$_REQUEST['uname'];
@$upwd=$_REQUEST['upwd'];
require("innt.php");
$sql="select * from mz_user where uname='$uname'AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);

 if($result==false){
   echo"语句错误";
 }else{
    $row=mysqli_fetch_row($result); 
	if($row==null||$row==""){
	 echo"<script>
            alert('登录失败');
	        window.location.href='http://127.0.0.1/meizu/html/denglu/mzlogin.html'
         </script>";
	}else{
	 echo "<script>
            alert('登录成功');
	        window.location.href='http://127.0.0.1/meizu/index.html'
         </script>"; 
	}
 
 }