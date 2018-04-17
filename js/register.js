/**
 * 注册页面的验证
 */
//获取uname,upwd,code
let uname=$("[name=uname]");
let upwd=$("[name=upwd]");
let code=$("[name=code]");
let checkbox=$(".checkbox");
//手机号码的正则验证
let reg_p=/^(\+86|0086)?\s*1[34578]\d{9}$/;
//邮箱的正则验证
let reg_em=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
//密码的正则验证
let reg_up=/^\w{4,20}$/;
uname.blur(function(){
    //如果用户输入的是手机号码
    if(reg_p.test(uname.val())){
        //显示用户输入的是手机号码,隐藏“账号”和“邮箱”和错误提示
        $(".y_number").addClass("y_font_show");//隐藏账号
        $(".y_email").addClass("y_font_show"); //显示邮箱
        $(".y_msg_number").addClass("y_font_show");
        $(".y1").removeClass("y_fail_show");
        $(".y1").removeClass("y_success_show");
        $(".y_msg_number").html("");
        $(".y_phone").removeClass("y_font_show");//显示手机
        $.get("../data/register/check_uname.php",{uname:(uname.val())}).then(data=>{
            if(data>0){
                $(".y1").removeClass("y_fail_show");
                $(".y1").addClass("y_success_show");
        }else{
                $(".y1").addClass("y_fail_show");
                $(".y_msg_number").removeClass("y_font_show");
                $(".y_msg_number").html("该手机已注册");
        }
        })
}else if(reg_em.test(uname.val())){
        //显示用户输入的是邮箱,隐藏“账号”“手机”和错误提示
        $(".y_number").addClass("y_font_show");//隐藏账号
        $(".y_phone").addClass("y_font_show");//隐藏手机
        $(".y_msg_number").addClass("y_font_show");
        $(".y1").removeClass("y_fail_show");
        $(".y1").removeClass("y_success_show");
        $(".y_msg_number").html("");
        $(".y_email").removeClass("y_font_show"); //显示邮箱
        $.get("../data/register/check_uname.php",{uname:(uname.val())}).then(data=>{
            if(data>0){
                $(".y1").removeClass("y_fail_show");
                $(".y1").addClass("y_success_show");
        }else{
                $(".y_msg_number").removeClass("y_font_show");
                $(".y1").addClass("y_fail_show");
                $(".y_msg_number").html("该邮箱已注册");
        }
    })
    }else{
        //显示错误消息
        $(".y_msg_number").removeClass("y_font_show");
        $(".y1").removeClass("y_success_show");
        $(".y1").addClass("y_fail_show");
        $(".y_msg_number").html("请输入正确的手机号码或邮箱");
    }
})
//失去焦点验证密码
upwd.blur(function(){
    if(reg_up.test(upwd.val())){
        $(".y_msg_upwd").addClass("y_font_show");
        $(".y2").removeClass("y_fail_show");
        $(".y2").addClass("y_success_show");
    }else{
        $(".y_msg_upwd").removeClass("y_font_show");
        $(".y2").removeClass("y_success_show");
        $(".y2").addClass("y_fail_show");
    }
})
//验证码的验证
$(".y_test").click(function(){
    $(".y3").removeClass("y_fail_show");
    $(".y3").removeClass("y_success_show");
    $(".y_msg_code").addClass("y_font_show");
    $(".y_code").css("opacity",1);//显示验证码
    $(".y_code>img").hover(function(e){
        $(e.target).css("cursor","pointer");
    }).click(function(e){ //看不清验证码，请换一张
        $(e.target).attr({
            "src":"../data/register/getCode.php"
        });
    })
})
code.blur(function(){
    $.get("../data/register/check_code.php",{code:(code.val())}).then(data=>{
        if(data>0){
            //验证成功，增加绿色小图标，其他都清除
            $(".y3").removeClass("y_fail_show");
            $(".y_msg_code").addClass("y_font_show");
            $(".y3").addClass("y_success_show");
        }else{
                //验证失败
                $(".y3").removeClass("y_success_show");
                $(".y_msg_code").removeClass("y_font_show");
                $(".y3").addClass("y_fail_show");
        }
    })
})
//免费注册
$(".y_btn").click(function(e){
    let span1=!$(".y1").is(".y_fail_show");//账号有错误提示为true
    $(".agree").css("color","#738299");
    e.preventDefault();
    if( span1 && reg_up.test(upwd.val()) && checkbox.prop("checked") ){
    let u_name=uname.val();
    let u_pwd=upwd.val();
    $.post("../data/register/register.php",{uname:u_name,upwd:u_pwd}).then(data=>{
        if(data==0){
            alert("注册失败，请重新注册");
        }else{
            var url="mzlogin.html";
            alert("恭喜注册成功！请登录");
            window.open(url,"_self");//在当前页面打开跳转到登录页面，可以后退到
        }
    });
}else if(!span1){//账号验证
        uname.focus();
        console.log(33);
        //return false;
    }else if(!reg_up.test(upwd.val())){//密码
    upwd.focus();
    console.log(11);
}else if(!checkbox.prop("checked")){
        $(".agree").css("color","red");
    }
})