
$(()=> {	//加载tou
    $.ajax({
        type: "get",
        url: "html/i_header.html"
    }).then(html => {
        $("#i_header").html(html);

        $("#btn").click(function () {
            $(".big_hidden").css({"transform": "translateY(1000px)", "opacity": 1});
        });
        $(".close").click(function () {
            $(".big_hidden").css({"transform": "translateY(-1000px)", "opacity": 0});
        });

    });
});
