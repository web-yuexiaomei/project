$(()=> {
    $.ajax({
        type: "GET",
        url: "../data/assistant/ass_list.php",
        success: function (data) {
            var html="";
            for(var tem of data){
                html+=` <li><a href="#ewrw">
                    <div class="z_img"></div>
                    <h3>${tem.ass_title}</h3>
                </a></li>`
            }
            $("#zz_list").html(html);



            $("#zz_list>li>a").mouseover(
                function () {
                    $(this).css({
                        "border-radius":"50%"
                        });

                }
                );
            $("#zz_list>li>a").mouseout(
                function () {
                    $(this).css({"border-radius":"10%"});
                }

            );
        },
        error: function () {
            alert("程序故障请检查");
        }
    });
});


$(()=> {
    $.ajax({
        type: "GET",
        url: "../data/assistant/ass_qus.php",
        success: function (data) {
            var html="";
            for(var tem of data){
                html+=` <div>
                    <h5>${tem.ass_q_title}</h5>
                    <ul>
                        <li><a href="#">${tem.ass_q_stitleo}</a></li>
                        <li><a href="#">${tem.ass_q_stitlet}</a></li>
                        <li><a href="#">${tem.ass_q_stitles}</a></li>
                    </ul>
                </div>`
            }
            $("#zz_que").html(html);


            if($(window).width()<=770){
                $("#zz_que>div").find("h5").on("click",function () {
                    $("#zz_que>div").find("h5").next("ul").removeClass("show").addClass("hid");
                   $(this).next("ul").removeClass("hid").addClass("show");
                    // $(this).next("ul").css("background","rgba(51,51,51,.3)");
                    $("#zz_que>div").find("h5").css("background","#7CABE3");
                    $(this).css("background","rgba(51,51,51,.3)");
                    let li0=$(this).next("ul").children("li")[0];
                    let li1=$(this).next("ul").children("li")[1];
                    let li2=$(this).next("ul").children("li")[2];

                    let il=$("#zz_que>div").find("h5").next("ul").children("li");
                    if($("#zz_que>div").find("h5").next("ul").hasClass("hid")){
                        $(il).css("left","190px");
                    }

                    if($(this).next("ul").hasClass("show")){
                        $(li0).css("left","10px");
                        $(li1).css("left","10px");
                        $(li2).css("left","10px");
                    }


                });


            }

            if($(window).width()>770) {
                    $(window).scroll(function () {
                        let scrollTop=document.body.scrollTop||
                        document.documentElement.scrollTop;

                        let floor=$("#zz_que").offset().top;
                        let vewBottom=scrollTop+innerHeight-500;

                        if(floor>vewBottom){
                            function lis1() {
                                let promise=new Promise((open)=>{
                                    setTimeout(function () {
                                        let ldiv=$("#zz_que").find("div")[1];
                                            $(ldiv).css({"left":0,"opacity":1});
                                        open();
                                    },100);

                                });
                                return promise;
                            }

                            function lis2() {
                                let promise=new Promise((open)=>{
                                    setTimeout(function () {
                                       let  ldiv=$("#zz_que").find("div")[2];
                                           $(ldiv).css({"left":0,"opacity":1});
                                        open();
                                    },500);

                                });
                                return promise;
                            }

                            lis1().then(lis2);
                        }
                    })



            }



        },
        error: function () {
            alert("程序故障请检查");
        }
    });
});


$(()=> {
    $.ajax({
        type: "GET",
        url: "../data/assistant/ass_tool.php",
        success: function (data) {
            var html="";
            for(var tem of data){
                html+=`<div>
                    <a href="#">
                        <span class="z_img"></span>
                        <span>${tem.ass_t_title}</span>
                    </a>
                </div>`
            }
            $("#ass_tool").html(html);
        },
        error: function () {
            alert("程序故障请检查");
        }
    });
});




$(".z_inputo").focus(function () {
    if($(".z_input>ul").html()!=""||$(".z_input>ul").html()!=null){
    $(".z_input>ul").css("display","block");
    }
});
$(".z_inputo").blur(function () {
    // debugger
    $(".z_input>ul").css("display","block");
    if($(".z_input>input").val()=="")
    $(".z_input>ul").html("");
});
$(".z_input>input").on("input",function () {
  let val=$(".z_input>input").val();

    $.ajax({
        type: "GET",
        url: "../data/assistant/ass_lists.php",
        data:{val:val},
        success: function (data) {
            console.log(data);
             var html="";
             for(var tem of data){
                 html+=`<li title="404.html">${tem.ass_li_title}</li>`
             }
             $("#z_li_input").html(html);
        $("#z_li_input").mouseover(function (e) {
            if(e.target.nodeName=="LI"){
                var lili=e.target;
                $(lili).css({"background":"rgba(131,131,131,.5)","border-bottom":"1px solid #000","color":"#fff"})
            }
        })

            $("#z_li_input").mouseout(function (e) {
                if(e.target.nodeName=="LI"){
                    var lili=e.target;
                    $(lili).css({"background":"#F5F5DC","border-bottom":"0px solid #000","color":"#000"})
                }
            })


            // $(".z_img").click(function () {
            //  let htp=$(".z_input>input").attr("title");
            //     location.href=htp;
            // });

        },
        // error: function () {
        //      alert("程序故障请检查");
        //  }
    });
});

console.log($("#z_li_input>li"));



$("#z_li_input").click(function (e) {
if(e.target.nodeName=="LI"){
    var lili=e.target;
    console.log(lili+123);
    let v_lick=$(lili).html();
    $(".z_input>input").val(v_lick);
    $(".z_input>ul").css("display","none");

    let titles=$(lili).attr("title");
    console.log(titles);
    $(".z_input>input").attr("title",titles);
    console.log($(".z_input>input").attr("title"));
}

});

//跳转
$(".z_img").click(function () {
    let val=$(".z_input>input").val();

    $.ajax({
        type: "GET",
        url: "../data/assistant/ass_lists.php",
        data: {val: val},
        success: function (data) {
            if(data.length>0) {
            var html="";
            for(var tem of data){
                html+=`<li><a href="504.html">${tem.ass_li_title}</a></li>`
            }
            $("#repeat").html(html);
            console.log(data.length);

                $("#repeat").css("display", "block");
                $("#zz_que").css("display", "none");
            }else{
                $("#repeat").css("display","none");
                $("#zz_que").css("display","block");
            }

        },
    });
});


$(".z_que>h3").click(function () {
    $("#repeat").css("display","none");
    $("#zz_que").css("display","block");
});










$(document).ready(function()
    {
        // alert($(window).height()); //浏览器时下窗口可视区域高度
        // alert($(document).height()); //浏览器时下窗口文档的高度
        // alert($(document.body).height());//浏览器时下窗口文档body的高度
        // alert($(document.body).outerHeight(true));//浏览器时下窗口文档body的总高度 包括border padding margin
        console.log($(window).width());
    //     alert($(document).width());//浏览器时下窗口文档对于象宽度
    //     alert($(document.body).width());//浏览器时下窗口文档body的高度
    //     alert($(document.body).outerWidth(true));//浏览器时下窗口文档body的总宽度 包括border padding margin
     }
);