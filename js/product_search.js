


/**
 * 产品搜索  product_search.js
 */
//15:20~15:35
//1:创建函数，发起ajax请求获取用户搜索内容

/**
 * 搜索指定商品的内容
 * @param lname   商品名称
 * @param low     商品价格下限
 * @param high    商品价格上限
 * @param pno     页码
 * @param pageSize码大小
 */
 var lname ="";
function loadProductSearch(lname,pno,pageSize){
   //1:如果网络繁忙，网页上会出现一片空白状态
   
   //2:发送AJAX请求
   $.ajax({
       type:"GET",
       url:"../data/detail/productsearch.php",
       data:{pno:pno,pageSize:pageSize,
          lname:lname},
       success:function(data){
         //  console.log(data.pageCount);
           //拼接当前页内容
           var html="";
          
           for(var item of data.data){
			   if(data.recordCount==0){html+="<p>您所查询的内容不正确,请检查</p>";}else{
              html+=`<div class="limagebox"><a href="${item.a}">
				  <div class="shadow"></div>
				  <img src="../img/y_product/timg.png" alt="" class="picone">
				  <img src="${item.img}" alt="" class="pictwo"></a></div>`;}
             
           }
           $("#imagearea").html(html);
		
			 $("#imagearea").children(".limagebox").animate({opacity:1,width:'24%'}, 1500);
            data.pno  = parseInt(data.pno);//当前页码
            data.pageCount = parseInt(data.pageCount);//总页数
			 var htmll=""; 
			if(data.pageCount>=4){
                    
            if(data.pageCount==data.pno){
            htmll = `<button class="lspan">${pno-3}</button>
				<button class="lspan">${pno-2}</button>
			   <button class="lspan">${pno-1}</button>
			   <button class="lspan">${pno}</button>`;
            }else
            //上一页
            if(data.pno==1){
           htmll = `<button class="lspan">1</button>
			   <button class="lspan">2</button>
			   <button class="lspan">3</button>
			   <button class="lspan">4</button>`;
            }else if(data.pno==2){
			       htmll = `<button class="lspan">1</button>
			   <button class="lspan">2</button>
			   <button class="lspan">3</button>
			   <button class="lspan">4</button>`;
			}else{
            //当前页
            htmll=`<button class="lspan">${pno-2}</button>
               <button class="lspan">${pno-1}</button>
			   <button class="lspan">${pno}</button>
			   <button class="lspan">${pno+1}</button>`;}
			}else{
			   $(".past").attr("disabled","false");
			    $(".next").attr("disabled","false");
			   for(var i=1;i<=data.pageCount;i++){
			    htmll+=`<button class="lspan">${i}</button>`;
			   }
			}
              $("#lpagelist").html(htmll);
               
			 $(`#lpagelist button:contains(${pno})`).addClass("active");
       },
       error:function(){
           //1:请求地址不正确 404 php地址不正确
           //2:json 拼写错
           //3:php语法，拼写，SQL错误
           alert("网络故障请检查")
       }
   });

  }
  $("#imagearea").on("mouseenter",".limagebox",function(){
	  var $atag= $(this).children("a");
	  $atag.children(".shadow").css("background","none");
      $atag.children(".picone").css("opacity",1);   
	 $(".shadow").css("opacity",0.5);
      
  });
   $("#imagearea").on("mouseleave",".limagebox",function(){
	  var $atag= $(this).children("a");
	   $atag.children(".shadow").css("background","black");
	    $atag.children(".picone").css("opacity",0);   
	   $(".shadow").css("opacity",0);
	   
  });
loadProductSearch(lname,1,8);

//$("#pagination").on("click","a",function(e){
//    e.preventDefault();
//    //2:获取参数
//    //3:pno low high lname
//    var pno =  $(this).html();
//   
//    //console.log(page);
//    //4:调用函数   0_2100000000_Think
//    var arr  = page.split("_");
//    var low  = parseInt(arr[0]);
//    var high = parseInt(arr[1]);
//    var lname = arr[2];
//    loadProductSearch(lname,pno,8);
//});
//3:为产品上限绑定键盘事件 13 获取用户输入调用函数1
//1:获取上限输入,并为其绑定键盘事件
 
$("#txtSearch").keyup(function(e){
    //2:获取下限 上限 关键字
    lname = $("#txtSearch").val();
    //console.log(lname+":"+low+":"+high);
    //3:如果当前用户按钮 回车 13
    if(e.keyCode == 13){
        //4:调用函数
       loadProductSearch(lname,1,8);
    }

});


	$("#lpagelist").on("click","button.lspan",function(){
       var pno = parseInt($(this).html());
	    loadProductSearch(lname,pno,8);
    });

$(".lpagelist").on("click","button",function(e){

       if($(this).hasClass("past") ){
	    var s=parseInt($("#lpagelist").children(".active").html());
		if(s>1){
		  loadProductSearch(lname,s-1,8);
		}
	   };

	    if($(this).hasClass("next") ){
	     var s=parseInt($("#lpagelist").children(".active").html());
		if(s<7){
		   loadProductSearch(lname,s+1,8);
		}
	   };
});

$(".sub_menu").on("click","li>a",function(e){
    e.preventDefault();
    lname=$(this).html();
	 loadProductSearch(lname,1,8);
	
});

var maxHeight = 400;

$(function(){

    $(".dropdown > li").hover(function() {
    
         var $container = $(this),
             $list = $container.find("ul"),
             $anchor = $container.find("a"),
             height = $list.height() * 1.1,       // make sure there is enough room at the bottom
             multiplier = height / maxHeight;     // needs to move faster if list is taller
        
        // need to save height here so it can revert on mouseout            
        $container.data("origHeight", $container.height());
        
        // so it can retain it's rollover color all the while the dropdown is open
        $anchor.addClass("hover");
        
        // make sure dropdown appears directly below parent list item    
        $list
            .show()
            .css({
                paddingTop: $container.data("origHeight")
            });
        
        // don't do any animation if list shorter than max
        if (multiplier > 1) {
            $container
                .css({
                    height: maxHeight,
                    overflow: "hidden"
                })
                .mousemove(function(e) {
                    var offset = $container.offset();
                    var relativeY = ((e.pageY - offset.top) * multiplier) - ($container.data("origHeight") * multiplier);
                    if (relativeY > $container.data("origHeight")) {
                        $list.css("top", -relativeY + $container.data("origHeight"));
                    };
                });
        }
        
    }, function() {
    
        var $el = $(this);
        
      
        $el
            .height($(this).data("origHeight"))
            .find("ul")
            .css({ top: 0 })
            .hide()
            .end()
            .find("a")
            .removeClass("hover");
    
    });   
});

 $.ajax({
       type:"GET",
       url:"../html/footer.html",
     
       success:function(data){
	       $("#footer").html(data);
	   },
	   error:function(){alert("网络错误请检查")}
 })

 $.ajax({
       type:"GET",
       url:"header.html",
     
       success:function(data){
	       $("#header").html(data);
		   
	   },
	   error:function(){alert("网络错误请检查")}
 })




