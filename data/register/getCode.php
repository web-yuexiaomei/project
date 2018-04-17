<?php
	header("Content-Type:image/PNG");
	$num=4;$w=90;$h=34;
	$data="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789";
	$code="";
	for($i=0;$i<$num;$i++){
		$code.=substr($data,rand(0,strlen($data)-1),1);
	}
	session_start();
	$_SESSION["code"]=$code;
	$im=imagecreate($w,$h);
	$black=imagecolorallocate($im,122,52,149);
	$gray=imagecolorallocate($im,203,224,234);
	$bgcolor=imagecolorallocate($im,255,255,255);
	imagefill($im,0,0,$gray);
	imagerectangle($im,0,0,$w-1,$h-1,$black);
	for($i=0;$i<80;$i++){
		imagesetpixel($im,rand(0,$w),rand(0,$h),$black);
	}
	$strx=rand(12,20);
	for($i=0;$i<$num;$i++){
		$stry=rand(5,10);
		imagestring($im,5,$strx,$stry,substr($code,$i,1),$black);
		$strx+=rand(8,20);
	}
	imagepng($im);
	imagedestroy($im);
?>