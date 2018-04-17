/**
 * Created by web-01 on 2018/3/9.
 */
// 楼层三轮播图文导入
$.ajax({
    type:"GET",
    url:"data/index/z_getbanner.php",
    success:function (data) {
        let html="";
        for(let p of data){
            html+=`<li>
                        <div class="z_item">
                            <img src="${p.ftb_img}" alt="">
                        </div>
                        <h2>${p.ftb_titleo}</h2>
                        <h3>${p.ftb_titlet}</h3>
                        <p>${p.ftb_text}</p>
                        <div class="z_imgss">
                            <img src="${p.ftb_imgs}" alt="">
                        </div>
                        <div class="z_bf">
                            ${p.ftb_texto} <span>${p.ftb_textoo}</span><br>
                            ${p.ftb_textt} <span>${p.ftb_texttt}</span><br>
                            ${p.ftb_texts} <span>${p.ftb_textss}</span><br>
                            ${p.ftb_textf} <span>${p.ftb_textff}</span>
                        </div>
                    </li>`;
        }
        $(".z_banner_img").html(html);
        $(function() {
                $(window).scroll(function () {
                    var scrollTop = document.body.scrollTop
                        || document.documentElement.scrollTop;
                    var floor3 = $("#z_f3").offset().top;
                    var viewBottom = scrollTop + innerHeight/2;
                   if(floor3<=viewBottom){
                       $('.z_banner_img>li:first,.z_banner_img>li:first .z_item, .z_banner_img>li:first h2, .z_banner_img>li:first h3, .z_banner_img>li:first p, .z_banner_img>li:first .z_imgss, .z_banner_img>li:first .z_bf>em, .z_banner_img>li:first .z_bf>span').addClass('active');
                        $(".z_floor3").css({"position":"relative","top":0});
                   }
                });
            //console.log( $('.z_banner_img>li:last .z_item, .z_banner_img>li:last h2'));
            let index = 0,
                len = $('.z_banner_img>li').length;
            // 轮播动效函数

            function dongtai() {
                if(index>=0&&index<=5){
                // 注意：index++是指执行完后再自增1，所以index=0时，eq(index++)最开始是eq(0);
                // 背景
                $('.z_banner_img>li').removeClass('active').eq(index).addClass('active');
                // 大图片
                $('.z_banner_img>li').children(".z_item").removeClass('active').eq(index).addClass('active');
                // 大标题
                $('.z_banner_img>li').children("h2").removeClass('active').eq(index).addClass('active');
                // 小标题
                $('.z_banner_img>li').children("h3").removeClass('active').eq(index).addClass('active');
                // 短文
                $('.z_banner_img>li').children("p").removeClass('active').eq(index).addClass('active');
                // 小图片
                $('.z_banner_img>li').children(".z_imgss").removeClass('active').eq(index).addClass('active');
                // 百分比
                $('.z_banner_img>li').children(".z_bf").children("em").removeClass('active');
                $('.z_banner_img>li').children(".z_bf").eq(index).children("em").addClass('active');
                // 名称
                $('.z_banner_img>li').children(".z_bf").children("span").removeClass('active');
                $('.z_banner_img>li').children(".z_bf").eq(index).children("span").addClass('active');
                }else{
                    index=0;
                    dongtai();
                }
            }
            function autoPlay() {
                //console.log(index,2)
                index++;
               // console.log(index);
                dongtai();
                 // 当index自增到len,也就是超出图片的数量时，归零.
                if (index == len) {
                    index = 0;
                }
            }
            $(".z_btn_l").on("click","",function (e) {
                e.preventDefault();
                //console.log(index);
                if(index<len&&index>0){
                    index--;
                    dongtai();
                }else if(index<=0){
                    index = 5;
                    dongtai();
                }
            });
            $(".z_btn_r").on("click","",function (e) {
                e.preventDefault();
               // console.log(index);
                if(index<len&&index>=0){
                index++;
                dongtai();
                }else if(index>=len){
                    index = 0;
                    dongtai();
                }
            });
            // 定时器会循环触发函数autoPlay
			autoPlay();
            loop = setInterval(autoPlay, 3500);
        });

    },
    error:function () {
        alert("网络故障请检查！")
    }
});


// 楼层三数字滚动导入
$.ajax({
   type:"GET",
    url:"data/index/z_getNum.php",
    success:function (data) {
        let html="";
        for(let p of data){
            html+=`<li class="ad">
                    <span>${p.ftl_num}</span>
                    <p>${p.ftl_title}</p>
                    <span>${p.ftl_stitle}</span>
                </li>`;
        }
        $(".z_numl").html(html);   
    },
    error:function () {
        alert("网络故障请检查！");
    }
});


