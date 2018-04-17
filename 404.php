<?php
@header("http/1.1 404 not found");
@header("status: 404 not found");
include("html/404.html");//跳转到某一个页面，推荐使用这种方法
exit();
?>