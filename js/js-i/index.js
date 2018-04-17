//(()=>{
	//楼层一的背景图片功能模块
	let xx=0,yy=0;
    document.body.onmousemove=function(e){
        let $op=$(".floor_one");
        let xs=0,ys=0;
        xs=parseInt(e.offsetX)-xx;
        ys=parseInt(e.offsetY)-yy;
        xx=e.offsetX;  //相对于当前元素的左上角
        yy=e.offsetY;
        var x=0,y=0;
        x=xs>0?"-20px":x==0?"0px":"20px";
        y=ys>0?"-20px":y==0?"0px":"20px";
        $op.css("backgroundPosition",x+" "+y);
    }
	//楼层一的图片切换功能
	function slid(elem) {
		elem.animate(
			{opacity:1},{
				step:function (n) {
					s=1-n+1;
					o=1-n;
					elem.css("opacity",o);
					elem.css("transform", "scale("+s+")");
					elem.css("top", "0px");
				},
				duration: 1000
			}).delay(4000).promise().done(function(){
			move(elem);
		})
	}
	function move(elem) {
		elem.delay(100).animate(
			{opacity:0},{
				step:function (n) {
					s=1-n;
					$(this).css("opacity",0);
					$(this).css("top","200px");
				}
			})
	}
	function trigg1(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				slid($(".slide-item3"));
				open();
			},500)
		})
		return promise;
	}
	function trigg2(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				slid($(".slide-item1"));
				open();
			},5000)
		})
		return promise;
	}
	function trigg3(){
		var promise=new Promise(function(open){
			setTimeout(function(){
				slid($(".slide-item2"));
				open();
			},5000)
		})
		return promise;
	}
	trigg1().then(trigg2).then(trigg3);
	setInterval(function(){
		trigg1().then(trigg2).then(trigg3);
	},15200);

	//	楼层二获取
	$.getJSON("data/detail/floor02.php").then(data=>{
			var html=``;
			for(var item of data){	
				html+=`<div class="${item.class1}" >
				<div class="logobox">
					<img src="${item.logo}" alt="">
				</div> 
				<h3 class="ltitle">${item.title}</h3>
				<ul class="llogolist">
				   <li><img src="${item.list1}" alt=""></li>
				   <li><img src="${item.list2}" alt=""></li>
				   <li><img src="${item.list3}" alt=""></li>
				</ul>
				<p class="text">${item.text}</p>
				<div class="limagebox">
				  <img src="${item.limagebox}" alt="">
				</div>
				<div class="${item.class2}"></div>							
             </div>
				`;
			}
			$("#lfloor").html(html);
			//楼层二内部动画
			var ops=document.querySelectorAll(".lmain");			
			for (var i=0;i<ops.length ;i++ )
			{
				ops[i].onmouseover=function(){
					var opl=this.lastElementChild.previousElementSibling;
					var opls=this.lastElementChild;
					opl.className+=" active";
					opls.className+=" active";
				}
				ops[i].onmouseout=function(){
					var opl=this.lastElementChild.previousElementSibling;
					var opls=this.lastElementChild;
					var op=opl.className.indexOf(" active");
					var classnames;
					if(op!=-1){
						classnames=opl.className.substr(0,op);
						opl.className=classnames;
					}
					var ope=opls.className.indexOf(" active");
					var classnames;
						if(ope!=-1){
							classnames=opls.className.substr(0,ope);
							opls.className=classnames;
					}
				}
			}
		})

	//楼层六
	/*左侧图片*/
	$(()=>{
		$.getJSON("data/index/h_pic_lef.php")
		.then(data=>{
		//console.log(data);
		for(var i=0,html="";i<data.length;i++){
		var p=data[i];
		html+=`<div class="pic${i+1}">
					<img src="${p.img}">
					</div>`;
	}
	$(".pic_lef").html(html);
	})
	});

	/*中间文字简介*/
	$(()=>{
		$.getJSON("data/index/h_txt_mid.php").then(data=>{
		//console.log(data);
		for(var  i=0,html="";i<data.length;i++){
		var  p=data[i];
		html+=`<h2>${p.title1}</h2>
					<p>${p.title2}<br>
					   ${p.title3}<br>
					   ${p.title4}<br>
					   ${p.title5}<br>
					   ${p.title6}<br>
					   ${p.title7}
					</p>
					<p>${p.title8}<br>
					   ${p.title9}<br>
					  ${p.title10}<br>
					  ${p.title11}
					</p>`;
	}
	$(".txt_mid").html(html);
		})
	});

	/*右侧图片*/
	$(()=>{
		$.getJSON("data/index/h_pic_rig.php")
		.then(data=>{
		//console.log(data);
		for(var  i=0,html="";i<data.length;i++){
		var  p=data[i];
		html+=`<div class="rig${i+1}"><a href="#">
					<img src="${p.img}"></a></div>`;
	}
	$(".pic_rig").html(html);
		})
	});	


//})()