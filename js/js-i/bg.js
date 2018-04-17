/**
 * canvas 注册页面背景的绘制
 */
    //获取画布
var c1=document.getElementById("y_register1");
var c2=document.getElementById("y_register2");
var c3=document.getElementById("y_register3");
//获取画笔
var ctx1=c1.getContext("2d");
var ctx2=c2.getContext("2d");
var ctx3=c3.getContext("2d");
//创建图片对象
var bg=new Image();
//下载图片
bg.src="../img/register/waveBg.png";
//绑定事件，必须等待图片下载结束之后才能触发事件
bg.onload=function(){
    //第一个画布
    var direction=-1;
    var x1=0;
    setInterval(function(){
        if(x1>=-1000){
            ctx1.clearRect(0,0,6000,500);
            ctx1.save();
            ctx1.drawImage(bg,x1,-436); //图片，画图片的位置
            ctx1.restore();
            x1+=10*direction;
        }else{
            x1=0;
        }
    },100)

    //第二个画布
    var x2=0;
    setInterval(function(){
        if(x2>=-1000){
            ctx2.clearRect(0,0,6000,300);
            ctx2.save();
            ctx2.drawImage(bg,x2,-232); //图片，画图片的位置
            ctx2.restore();
            x2+=10*direction;
        }else{
            x2=0;
        }
    },100)
      //第三个画布
    var x3=0 ;
    setInterval(function(){
        if(x3>=-1000){
            ctx3.clearRect(0,0,6000,110);
            ctx3.save();
            ctx3.drawImage(bg,x3,-20); //图片，画图片的位置
            ctx3.restore();
            x3+=10*direction;
        }else{
            x3=0;
        }
    },100)
}