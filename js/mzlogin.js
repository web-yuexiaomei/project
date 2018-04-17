 
//模块一:管理员登录
//功能:获取用户输入用户名和密码通过ajax发送
//     php并且获取返回结果，显示在网页上
//1:获取登录按钮并且绑定点击事件
$("#btn").click(function(e) {
    //阻止事件默认行为 事件绑定 a submit
    e.preventDefault();
    console.log(1);
//2:获取用户输入用户名和密码
    var u = $("#uname").val();
    var p = $("#upwd").val();
    var yzm = $("#yzm").val();
    console.log(2);
    console.log(u+"_"+p+"_"+yzm);
//3:创建二个正则表达式验证
   var reg = /^[a-zA-Z0-9]{3,12}$/;
//    if(!reg.test(u)){
//       alert("用户名格式不正确，请检查"); //显示错误
//       return;                             //停止执行
//    }
    if(!reg.test(p)){
        alert("密码格式不正确，请检查");   //显示错误
        return;                             //停止执行
    }
   //创建正则表达式验证用户输入验证码
   var regYzm = /^[a-z]{4}$/i;           //验证码正则
   if(!regYzm.test(yzm)){                //如果验证不成功
      alert("验证码格式不正确，请检查");//提示出错
      return;
                               //停止后续代码
   }

//4:如果验证通过发送ajax请求 02_login.php
    $.ajax({
      type:"GET",             //提交方式 GET【php select】 POST
      url:"../data/02_login.php", //提交路径
      data:{uname:u,upwd:p,yzm:yzm},   //提交参数
      success:function(data){
         console.log(3);
         console.log(data);    //data php返回数据 js obj
         if(data.code>0){
			 // alert(data.msg);
            location.href = "http://127.0.0.1/bigteam/index.html";//自动跳转主程序
         }else{
            alert(data.msg);
         }
      },//请求成功data返回数据
      error:function(){
          //错误:请求地址url错,参数,php header php语法
          alert("网络故障请检查");
      }
    });
//5:获取返回结果
//6:判断是否登陆成功
//7:失败显示出错消息
//8:成功跳转main.html 网页
});//点击事件结束


$("#setYzm").click(function(e){ //看不清验证码，请换一张
        
        $(e.target).attr({
            "src":"../data/01_code.php"
            
        });
        $(e.target).css("opacity",1)
        console.log("更换图片");
    })