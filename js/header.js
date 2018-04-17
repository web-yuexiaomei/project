
$(()=> {	//加载tou
    $.ajax({
        type: "get",
        url: "../html/header.html"
    }).then(html => {
        $("#header").html(html);

        $("#btn").click(function () {
            $(".big_hidden").css({"transform": "translateY(1000px)", "opacity": 1});
            console.log(1)
        });
        $(".close").click(function () {
            $(".big_hidden").css({"transform": "translateY(-1000px)", "opacity": 0});
        });
    });
});






 window.onscroll= function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop >= 60) {
            var add = $(".common");
            add.css({"marginTop": -90});
        }

        if (scrollTop < 60) {
            var add = $(".common");
            add.css({"marginTop": 0});
        }
        if (scrollTop >=50) {
            var ddd = $(".t_hidden");
            ddd.css("transform", "translateY(86px)");
        }
        if (scrollTop < 50) {
            var add = $(".t_hidden");
            add.css("transform", "translateY(-86px)");
        }

    }

//    		document.getElementById("btn").addEventListener("click", function(){
    // $(".big_hidden").css({"opacity":1,"marginTop":1086})

    //	})
//		function add(){
//		  $(".big_hidden").css({"opacity":1,"transform":"translateY(0px)","transition": "all 1.9s ease-in-out"})
//		  }
//		   
//		$("#btn").click(e=>{
//      $(".big_hidden")
//       .toggle(add());
//	  
//		});





