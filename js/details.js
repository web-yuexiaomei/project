//优势详情页  hf

//楼层滚动
$(()=>{
	var $lift=$("#lift"),
		$ulLift=$("#lift>ul"),
		$floors=$(".floor");
	$(window).scroll(function(){
		var scrollTop=document.body.scrollTop
									||document.documentElement.scrollTop;
		var offsetTop1=$(".h_floor3").offset().top;
		//console.log(scrollTop, offsetTop1);
		if(offsetTop1<=scrollTop+innerHeight/2)
			$lift.show();
		else
			$lift.hide();

		$floors.each(function(i,floor){
			var $floor=$(floor);
			var offsetTop=$floor.offset().top;
			if(offsetTop<=scrollTop+innerHeight/2){
				$ulLift.children(":eq("+i+")").addClass("hover")
					.siblings().removeClass("hover");
			}
		})
			var viewBottom=scrollTop+innerHeight-80;//看到的底部
        //增加滚动事件触发的特效

        var floor2=$("div.h_floor2");
        var floor3=$("div.h_floor3");
        var floor4=$("div.h_floor4");
        var floor5=$("div.h_floor5");



        if(floor2.offset().top<=viewBottom){
            $("div.h_floor2 li img").css({"top":0});
            $("div.h_floor2 .f2_p").css({"top":210});
            $("div.h_floor2 .f2_h3").css({"top":180});
        }

        if(floor3.offset().top<viewBottom){
            $("div.h_floor3 .f3_title1").css({"top":-160,"opacity":1});
        }

        if(floor4.offset().top<=viewBottom){
			$("div.h_floor4 li img").css({"top":0});
            $("div.h_floor4 .f4_p").css({"top":205});
            $("div.h_floor4 .f4_h3").css({"top":150});
            $("div.h_floor4 .f4_title1").css({"top":-90,"opacity":1});
        }

        if(floor5.offset().top<=viewBottom){
            $("div.h_floor5 .f5_title1").css({"top":-70,"opacity":1});
        }

	});
	$ulLift.children().click(function(){
		var $li=$(this);
		var i=$li.index();
		var offsetTop=$(".floor:eq("+i+")").offset().top;
		$("html").stop(true).animate({
			scrollTop:offsetTop
		},500);
	})
});



//楼层1 图片
$(()=>{
	$.ajax({
		type:"get",
		url:"../data/youshi_data/floor1.php",
		success:function(data){
			//console.log(data);
			var html="";
			for(var i=0;i<data.length;i++){
				var p=data[i];
				html+=`<img src="${p.img}" class="f1_pic">`;
			}
			$(".h_floor1").html(html);
		},
		error:function(){
			alert("网络故障");
		}
	})
});

//楼层1 页面加载进来放大

$(window).load(function(){
    $(".h_floor1").css({"transform":"scale(1)","opacity":1});
});



//楼层2  建站流水
$(()=>{
    $.ajax({
        type:"get",
        url:"../data/youshi_data/floor2.php",
        success:function(data){
            //console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                var p=data[i];
                html+=`<li>
						<div>
                            <img src="${p.img}">
                        </div>
                      <h3 class="f2_h3">${p.title1}</h3>
                      <p class="f2_p">${p.title2}</p>
                  </li>`;
            }
            $(".f2_ul").html(html);
        },
        error:function(){
            alert("网络故障");
        }
    })
});


//楼层3 定制套餐
$(()=>{
    $.ajax({
        type:"get",
        url:"../data/youshi_data/floor3.php",
        success:function(data){
            //console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                var p=data[i];
                html+=`<img src="${p.img}">`;
            }
            $(".f3_img").html(html);
        },
        error:function(){
            alert("网络故障");
        }
    })
});


//楼层4  优质服务
$(()=>{
    $.ajax({
        type:"get",
        url:"../data/youshi_data/floor4.php",
        success:function(data){
            //console.log(data);
            var html="";
            for(var i=0;i<data.length;i++){
                var p=data[i];
                html+=`<li>
					  <div><img src="${p.img}"></div>
                          <h3 class="f4_h3">${p.title1}</h3>
                         <p class="f4_p">${p.title2}</p>
                      </li>`;
            }
            $(".f4_pic").html(html);
        },
        error:function(){
            alert("网络故障");
        }
    })
});


/*楼层5  轮播图片*/

$(()=>{//广告轮播
    $.getJSON("../data/youshi_data/floor5.php")
        .then(data=>{
            //console.log(data);
            var html="";
            for(var p of data){
                html+=`<li>
              
                <img src="${p.img}">
              </a>
            </li>`;
            }
            html+=`<li>
                <img src="${data[0].img}">
              </a>
            </li>`;
            var LIWIDTH=960,moved=0,interval=500,wait=3000,timer=null;
            var $ul=$("[data-load=bannerImgs]");
            $ul.html(html).css("width",(data.length+1)*LIWIDTH);
            var $ulIdx=$("[data-load=bannerInds]");
            $("[data-load=bannerInds]")//四个小圆点
                .html("<li></li>".repeat(data.length))
                .children().first().addClass("hover");

            function move(dir=1){
                if(moved==0&&dir==-1){
                    moved=data.length;
                    $ul.css("left",-LIWIDTH*data.length);
                }
                moved+=dir;
                $ul.animate({
                    left:-LIWIDTH*moved
                },interval,function(){
                    if(moved==data.length){
                        moved=0;
                        $ul.css("left",0);
                    }
                    $ulIdx.children(":eq("+moved+")").addClass("hover")
                        .siblings().removeClass("hover");
                });
            }
            //setInterval(move,wait+interval);
            timer=setInterval(move,wait+interval);
            $("#banner").hover(
                function(){
                    clearInterval(timer);
                    timer=null;
                },
                function(){
                    timer=setInterval(move,wait+interval);
                }
            )

            $ulIdx.on("click","li:not(.hover)",function(){
                var i=$(this).index();
                moved=i;
                $ul.stop(true).animate({
                    left:-LIWIDTH*moved
                },interval,function(){
                    $ulIdx.children(":eq("+moved+")").addClass("hover")
                        .siblings().removeClass("hover");
                })
            })

            $("[data-move=right]").click(function(){//右边按钮
                if(!$ul.is(":animated"))
                    move();
            })

            $("[data-move=left]").click(function(){//右边按钮
                if(!$ul.is(":animated"))
                    move(-1);
            })
        });
});




