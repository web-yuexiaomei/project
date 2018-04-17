
	$.ajax({
	type:"GET",
    url:"../data/intr/intr.php",
    success:function(datas){
		var html=``;
		for (var i=0;i<datas.length ;i++ )
		{
			var str=["one","two","three","four","five","six"];
			html+=`<div class="${str[i]}_y">	
		 <div class="left">
			<div class="l_top">
				<img src="${datas[i].imgself}" alt="">
			</div>
			<div class="l_bottom">
				<h3>${datas[i].name}</h3>
				<div class="title1">
					${datas[i].titleself}
				</div>
				<div class="title1">
					${datas[i].titleteam}
				</div>
			</div>
		 </div>
		  <div class="right">
			<div class="r_top">
				<div class="title1">
					项目组成页面
				</div>
				<div class="show1">
					${datas[i].option}
				</div>
			</div>
			<div class="r_bottom">
				<div class="title1">
				项目功能部分
				</div>
				<div class="show1">
					${datas[i].htmls}
				</div>
			</div>
		 </div>
	</div>`;
		}
		console.log(html);
		$(".ys").html(html);
	}
	})
	var deg=0;
	function fun(){
		var op=document.querySelector(".midden");
		op.style.transform=`rotateY(${deg}deg) rotateX(30deg)`;
		deg+=0.5;
	}
	var timer=setInterval(fun,15);
	document.querySelector(".midden").onmouseover=function(e){
		clearInterval(timer);		
	}
	document.querySelector(".midden").onmouseout=function(){
		timer=setInterval(fun,15);
	}
	document.querySelector(".midden").style.transform=`rotateY(0deg) rotateX(30deg)`;
	$(".midden").on("click","",function(e){
		var op=$(e.target);	
		var opl=$("[data-class='tu']");
		//tu动画显现
		opl.removeClass("tu_hidden");
		opl.addClass("tu_show");
		//组员信息块呈现
		var eg=op.attr("class").split(" ")[1];
		var mg_left;
		switch(eg){
			case "one":mg_left="0px";break;
			case "two":mg_left="-650px";break;
			case "three":mg_left="-1300px";break;
			case "four":mg_left="-1950px";break;
			case "five":mg_left="-2600px";break;
			case "six":mg_left="-3250px";break;
		}
		if(eg!="one"){
		$(".ys").css({"opacity":"1","marginLeft":mg_left,"transition":"all 3s ease 1s"});

		$(".right").css({"marginLeft":"0px","transition":"all 3s ease 4s"});//右边介绍块出现

		$(".right>div.r_bottom>div.title1").css({"marginTop":"-10%","transition":"all 3s ease 5s"});//右标题下来

		$(".right>div.r_top>div.show1").css({"height":"200px","transition":"all 1.5s ease-out 6s"});//右上内容

		$(".right>div.r_bottom>div.show1").css({"height":"350px","transition":"all 1.5s ease-out 7s"});//右下内容
		}
		else{
			$(".ys").css({"opacity":"1","marginLeft":0,"transition":"all 0s ease 1s"});

			$(".right").css({"marginLeft":"0px","transition":"all 3s ease 1s"});//右边介绍块出现

			$(".right>div.r_bottom>div.title1").css({"marginTop":"-10%","transition":"all 5s ease 5s"});//右标题下来

			$(".right>div.r_top>div.show1").css({"height":"200px","transition":"all 1.5s ease-out 6s"});//右上内容

			$(".right>div.r_bottom>div.show1").css({"height":"200px","transition":"all 1.5s ease-out 7s"});//右下内容
		}

		
	});
		$("[data-class=tu]").on("click","",function(){
			//tu动画退出
			var opl=$(this);
			opl.removeClass("tu_show");
			opl.addClass("tu_hidden");
			
			//组员信息块恢复初始位
			$(".ys").css({"opacity":"0","marginLeft":"0px","transition":"all 0s ease"});
			$(".right").css({"marginLeft":"-300px","transition":"all 0s ease"});
			$(".right>div.r_bottom>div.title1").css({"marginTop":"-70%","transition":"all 0s ease"});
			$(".right>div.r_top>div.show1").css({"height":"0","transition":"all 0s ease-out"});
			$(".right>div.r_bottom>div.show1").css({"height":"0","transition":"all 0s ease-out"});
		
		});


	var canMove=false,offsetX=0,offsetY=0;
	document.querySelector(".midden").onmousedown=function(e){
    canMove=true;
    offsetX=e.offsetX;
    offsetY=e.offsetY;
  }
  document.querySelector(".midden").onmouseup=function(){
    canMove=false;
  }