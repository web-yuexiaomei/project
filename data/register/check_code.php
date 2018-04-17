<?php
	@$code=$_REQUEST["code"];
	session_start();
	$code1=strtolower($_SESSION["code"]);
	if(strtolower($code)==$code1){
		echo 1;
	}else{
		echo 0;
	}

?>