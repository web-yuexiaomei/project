/**
 * 楼层5的样式
 */
//楼层内容的加载

    $.get("data/index/floor5.php").then(data=>{
        var html="";
        for(let item of data){
            html+=` <li>
                        <a href="${item.bid}">
                            <div class="y_view y_view${item.bid}">
                                <div class="y_date">
                                    <big>${item.ad_day}</big>
                                    <span>${item.ad_date}</span>
                                </div>
                                <div class="y_img">
                                    <img src="${item.img_gif}" alt="">
                                    <h4>${item.ad_title}</h4>
                                </div>
                            </div>
                            <div class="y_mask y_mask${item.bid}">
                                <div>
                                    <img src="${item.img_png}" alt="">
                                </div>
                                <h4>${item.ad_title}</h4>
                                <hr>
                                <p>
                                    ${item.ad_des}
                                </p>
                            </div>
                        </a>
                    </li>`
        };
        $(".y_news_list").html(html);
        // 加载时，依次出现的代码模块
    })

