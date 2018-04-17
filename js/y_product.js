/**
 * 皇室科技详情页功能模块
 */
$(()=>{
    /*图片位置数据*/
    var imgs=[
        '../img/y_product/b1.png','../img/y_product/b2.png',
        '../img/y_product/b3.png','../img/y_product/b4.png',
        '../img/y_product/b5.png','../img/y_product/b6.png',
    ]
    let html='';
    for(let img of imgs){
        html+=`
             <li> 
                <img src=${img} class="img-responsive"> 
             </li>
        `;
    }
    $(".y_banner_show").html(html);
    let datas = [
        {'z-index': 6, opacity: 1, width: 960, height: 460, top: 10, left: -100},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top:80, left: -225},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203, top: -10, left: -170},
        {'z-index': 2, opacity: 0.2, width: 620, height: 269, top: -30, left: 110},
        {'z-index': 3, opacity: 0.4, width: 480, height: 203,  top: -10, left: 430},
        {'z-index': 4, opacity: 0.6, width: 560, height: 243, top: 80, left: 420},
    ]
    move();
    function move() {
        /*图片分布*/
        for (var i = 0; i < datas.length; i++) {
            var data = datas[i];
            $('#slide ul li').eq(i).css('z-index',data['z-index']);
            $('#slide ul li').eq(i).stop().animate(data, 1200);
        }
    }
    /*左箭头事件*/
    $('.prev').on('click', function () {
        var last = datas.pop();
        datas.unshift(last);
        move();
    })

    /*右箭头事件处理函数*/
    function nextYewu(){
        var first = datas.shift();
        datas.push(first);
        move();
    }
    /*右箭头事件*/
    $('.next').on('click', nextYewu);

    /*自动播放*/
    var timer = setInterval(function(){
        nextYewu();
    },3000);
    /*鼠标进入slide显示箭头,清除自动播放*/
    $('#slide').on({
        mouseenter: function () {
            $('.arrow').css('display', 'block');
            clearInterval(timer);
        }, mouseleave: function () {
            $('.arrow').css('display', 'none');
            /*鼠标离开时自动播放*/
            clearInterval(timer);
            timer = setInterval(function(){
                nextYewu();
            },5000)
        }
    })
})
//轮播下面的动态数据变化模块
$(()=>{
    //注册用户的数字动态变化
    let span1=$(".y_num")[0]; //所有需要显示的数字的span 元素
    let num=$(span1).html().split(","); //里面的数字用，切割
    let num1=parseInt(num[0]);
    let num2=parseInt(num[1]);
    let num3=parseInt(num[2]);
    let timer1=setInterval(function () {
        if(num3<=196||num2<=644||num1<=15){
            num1+=1;
            num2+=44;
            num3+=13;
            $(span1).html(num1+','+num2+','+num3);
        }
       else{
            clearInterval(timer1);
        }
    },100)
    //安全运行的数字动态变化
    let span2=$(".y_num")[1];
    let num4=parseInt($(span2).html());
    let timer2=setInterval(function () {
        if(num4<=2721){
            num4+=111;
            $(span2).html(num4);
        }else {
            clearInterval(timer2);
        }
    },80)
    //覆盖行业的数字动态变化
    let span3=$(".y_num")[2];
    let num5=parseInt($(span3).html());
    let timer3=setInterval(function () {
        if(num5<=96){
            num5+=4;
            $(span3).html(num5);
        }else {
            clearInterval(timer3);
        }
    },50)
});
//楼层三的hover事件
$(".y_content").on('mouseenter','.y_img',e=>{
    $img=$(e.target);
    let i=parseInt($img.attr("src").split("-")[2]); //找到该图片标签对应的下标
    $img.attr("src","../img/y_product/fa-window-"+i+".gif");
});
//增加楼层的滚动事件
$(()=>{//楼层滚动
    let $floors=$(".y_floor");
    $(window).scroll(function(){
        var scrollTop=document.body.scrollTop
            ||document.documentElement.scrollTop;
        //鼠标滚动的距离
        var viewBottom=scrollTop+innerHeight-80;//看到的底部
        //增加滚动事件触发的特效
        var floor1=$(".y_floor1");//<!--楼层一 建站-->
        var floor2=$(".y_floor2");//<!--楼层二 微传单-->
        var floor3=$(".y_floor3");//<!--楼层三 轻站小程序-->
        var floor4=$(".y_floor4");//<!--楼层四 公众号助手-->
        if(floor1.offset().top<=viewBottom){
            let count=6;
            var topNum=0;
            let timer=setInterval(function(){
                if(count>0){
                    count--;
                    topNum+=5;
                    $(".y_info_wrap").css("top",topNum+"px");
                }else{
                    clearInterval(timer);
                    timer=null;
                }
            },300);
            // 右侧浮动的联系方式里面的返回顶部按钮显示出来
            $(".y_tool_item3").css("opacity",1);
        }
        if(floor2.offset().top<=viewBottom-250){
            leaflet();
        }
        if(floor3.offset().top<=viewBottom){
            $(".y_content_item").css("left",0);
        }
        if(floor4.offset().top<=viewBottom){
            $(".y_moudle_hidden").css("height","308px");
        }
    });
})