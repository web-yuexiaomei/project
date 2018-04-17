<?php
	@$uname=$_REQUEST["uname"];
	if($uname==null||$uname==""){
		die("用户名不能为空！");
	}
	@$upwd=$_REQUEST["upwd"];
	if($upwd==null||$upwd==""){
		die("密码不能为空！");
	}
	require("../init.php");
	$sql="INSERT INTO queen_user(uname,upwd) VALUES('$uname','$upwd')";
	$result=mysqli_query($conn,$sql);
	if($result==false){
		echo 0;
	}else{
		$url="../index.html";
		echo "<script language='javascript' type='text/javascript'>";
		echo "window.location.href='$url'";
		echo "</script>";
	}
?>