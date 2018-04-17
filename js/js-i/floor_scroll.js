//	全屏切换动画
//		楼层二
		function floor2_show(){
			var ops=document.querySelectorAll(".lmain");
			for (var i=0;i<ops.length ;i++ )
				{
					ops[i].className+=" active";
				}
		}
		
		function floor2_hidden(){
			var ops=document.querySelectorAll(".lmain");
			for (var i=0;i<ops.length ;i++ )
				{
					var op=ops[i].className.indexOf(" active");
					var classnames;
					if(op!=-1){
						classnames=ops[i].className.substr(0,op);
						ops[i].className=classnames;
					}
				}
		}

//		楼层三
function floor3_show() {
        let span1=$(".ad")[0];
        let num1=$(span1).find("span")[0];
        let item=setInterval(function() {
            let num11=parseInt($(num1).html());
           // console.log(span1+num1+item+num11);
            if(num11<15596625){
                num11+=111111;
                $(num1).html(num11);
            }else{
                clearInterval(item);
            }
        },8);
       // debugger;
        let span2=$(".ad")[1];
        let num2=$(span2).find("span")[0];
        let item1=setInterval(function() {
            let num11=parseInt($(num2).html());
           // console.log(span2+num2+item1+num11);
            if(num11<2714){
                num11+=11;
                $(num2).html(num11);
                //debugger;
            }else{
                clearInterval(item1);
            }
        },8);
       // debugger;
        let span3=$(".ad")[2];
        let num3=$(span3).find("span")[0];
        let item2=setInterval(function() {
            let num11=parseInt($(num3).html());
            if(num11<100){
                num11++;
                $(num3).html(num11);
            }else{
                clearInterval(item2);
            }
        },10);
       // debugger;
        let span4=$(".ad")[3];
        let num4=$(span4).find("span")[0];
        let item3=setInterval(function() {
           // debugger;
            let num11=parseInt($(num4).html());
            //debugger;
            if(num11<7){
                num11++;
                $(num4).html(num11);
               // debugger;
            }else{
                clearInterval(item3);
            }
        },150);
    }

function floor3_hidden() {
        let span1=$(".ad")[0];
        let num1=$(span1).find("span")[0];
 
            
                $(num1).html(6625);
       // debugger;
        let span2=$(".ad")[1];
        let num2=$(span2).find("span")[0];
        
            
                $(num2).html(1717);
                //debugger;
       // debugger;
        let span3=$(".ad")[2];
        let num3=$(span3).find("span")[0];
           
                $(num3).html(0);
       // debugger;
        let span4=$(".ad")[3];
        let num4=$(span4).find("span")[0];
       
           // debugger;
            
                $(num4).html(0);
       
    }

//		楼层四
function floor4_show(){
	$(".gg").css("transform","translateX(450px)");
}
function floor4_hidden(){
	$(".gg").css("transform","translateX(-10px)");
}
//楼层五
function floor5_show(){
        function show1(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    // $(".y_view1").css("height","250px");
                    $(".y_view1").css({
                        top:0,
                        left:0,
                        opacity:1
                    });
                    open();
                },100)
            })
            return promise;
        }
        function show2(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    $(".y_view2").css({
                        top:0,
                        left:0,
                        opacity:1
                    });
                    open();
                },500)
            })
            return promise;
        }
        function show3(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    // $(".y_view3").css("height","250px");
                    $(".y_view3").css({
                        top:0,
                        left:0,
                        opacity:1
                    });
                    open();
                },500)
            })
            return promise;
        }
        function show4(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    $(".y_view4").css({
                        top:0,
                        left:0,
                        opacity:1
                    });
                    open();
                },500)
            })
            return promise;
        }
        $(".y_title_img").css("left", 0);
        show1().then(show2).then(show3).then(show4);
		}

function floor5_hidden(){
			function hidden1(){
				var promise=new Promise(function(open){
					setTimeout(function(){
                    // $(".y_view1").css("height","250px");
						$(".y_view1").css({
							top:90,
							left:60,
							opacity:0
						});
                    open();
					},100)
				})
            return promise;
        }
        function hidden2(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    $(".y_view2").css({
                        top:100,
                        left:60,
                        opacity:0
                    });
                    open();
                },500)
            })
            return promise;
        }
        function hidden3(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    // $(".y_view3").css("height","250px");
                    $(".y_view3").css({
                        top:150,
                        left:60,
                        opacity:0
                    });
                    open();
                },500)
            })
            return promise;
        }
        function hidden4(){
            var promise=new Promise(function(open){
                setTimeout(function(){
                    $(".y_view4").css({
                        top:200,
                        left:60,
                        opacity:0
                    });
                    open();
                },500)
            })
            return promise;
        }
        $(".y_title_img").css("left", 0);
        hidden1().then(hidden2).then(hidden3).then(hidden4);
		}
//楼层六
function floor6_show(){
		$(".pic_lef").css("opacity",1);
		$(".pic_lef").css("margin-top",250);
		$(".txt_mid").css("margin-top",250);
		$(".txt_mid").css("opacity",1);
		$(".pic_rig").css("margin-top",250);
		$(".pic_rig").css("opacity",1);
		$(".pic1").css("transform",1);
		$(".pic2").css("left",-20);
		$(".pic3").css("left",-50);
		$(".pic4").css("right",20);
		$(".rig2").css("top",200);
	}
	function floor6_hidden(){
		$(".pic_lef").css("opacity",0.6);
		$(".txt_mid").css("margin-top",420);
		$(".txt_mid").css("opacity",0.7);
		$(".pic_rig").css("margin-top",-200);
		$(".pic_rig").css("opacity",0.5);
		$(".pic1").css("transform",1);
		$(".pic2").css("left",-20);
		$(".pic3").css("left",-50);
		$(".pic4").css("right",20);
		$(".rig2").css("top",200);
	}