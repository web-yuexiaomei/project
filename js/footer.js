/**
 * Created by web-01 on 2018/3/20.
 */

$(()=> {	//加载尾巴
    $.ajax({
        type: "get",
        url: "../html/footer.html"
    }).then(html => {
        $("#footer").html(html);


        if($(window).width()<=500){
            $(".fi_link").css("display","none");
          // $(".fi_link").find("li").css("margin-right",0);
        }

    });
});


