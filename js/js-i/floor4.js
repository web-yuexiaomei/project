$.getJSON("data/index/cno_four.php").then(data=>{
			var html="";
			for(var p of data){
				html+=`<li>
							<div class="one">
							   <img src="${p.img}" alt="">
							</div>
							<div class="two">
							   <table></table>
							   <p>"${p.title}"</p>
							   <a href="#">more</a>
							</div>
						</li>`;
				$(".fk").html(html);
		}
			$(".fk li").css({"transform":"rotateY(0deg)","transition":"all .5s linear"}); 
			$(".fk li").mouseover(function( ){
				  var $a=$(this);
				  $a.children(".one").css("transform","translateY(-180px) scale(0.3,0.3)");
				  $a.children(".two").css({"transform":"translateY(-530px)","opacity":1 });
				  setTimeout(function(){
				  },1100)
			}).mouseout(function( ){
				  var $a=$(this);
				  $a.children(".one").css("transform","scale(1,1)");
				  $a.children(".two").css({"transform":"translateY(0px)" ,"opacity":1});
			});	   
		});
		