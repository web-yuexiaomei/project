 window.onscroll=function(){
          var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
   		  	if(scrollTop>200){
   		 	 	var add=$(".common");
				    add.css("marginTop",-90); 
			 }
            if(scrollTop<200){
   		 	 	var add=$(".common");
				    add.css("marginTop",0); 
   		  	  }
   		  	if(scrollTop>200){
 				var ddd=$(".y_hidden");
				    ddd.css("transform","translateY(86px)") ;
   		  	 }
   		  	 if(scrollTop<200){
   		 	 	var add=$(".y_hidden");
				    add.css("transform","translateY(-86px)");
   		  	  }
    
 }
     $("#btn").click(function(){
         $(".big_hidden").css({"transform":"translateY(1000px)","opacity":1});
	 });
	 $(".close").click(function(){
	  $(".big_hidden").css({"transform":"translateY(-1000px)","opacity":0});
	 })
	$.get("html/header.html").then(data=>{
		console.log("header");
		$("#header").html(data);
	});


      