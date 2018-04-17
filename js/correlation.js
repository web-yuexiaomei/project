// canvas背景
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame(){

    if(animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}

function initializeStars(){
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for(i = 0; i < numStars; i++){
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.'+Math.floor(Math.random() * 99) + 1
        };
        stars.push(star);
    }
}

function moveStars(){
    for(i = 0; i < numStars; i++){
        star = stars[i];
        star.z--;

        if(star.z <= 0){
            star.z = canvas.width;
        }
    }
}

function drawStars(){
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }
    if(warp==0)
    {c.fillStyle = "rgba(0,10,20,1)";
        c.fillRect(0,0, canvas.width, canvas.height);}
    c.fillStyle = "rgba(209, 255, 255, "+radius+")";
    for(i = 0; i < numStars; i++){
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = 1 * (focalLength / star.z);

        c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
        c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
        //c.fill();
    }
}

document.getElementById('warp').addEventListener("click",function(e){
    window.c.beginPath();
    window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
    window.warp = warp ? 0 : 1;
    executeFrame();
});

executeFrame();


// 轮播

function lun(){
    var show=
        document.querySelector(".right .show");
    show.className="";
    if(show.nextElementSibling!=null)
        show.nextElementSibling.className="show";
    else
        show.parentNode.children[0].className="show"
}
setInterval(lun,4100);



// 滚轮监听
$(document).ready(function () {
    $(".one>.left").css("marginLeft", 700);
    $(".one>.right").css("marginLeft",-800)
});








// 按钮呼吸灯
(function(){
    var i=0.5;
    setInterval(function(){
        if(i>=1){
            i=0.5;
        }else {
            i++;
        }
        $(".two .vr span").css("opacity",i);
    },300);
})();



 // 当点击图片时 弹出视频框
$(".two .vr span.click").click(function () {
     $(" .vv").css({"display":"block","z-index":999});

});
// 点击按钮退出

 

  
 $("#v3").mouseover(function(){
    $(".play").css("opacity",1)
 });
 $("#v3").mouseout(function(){
    $(".play").css("opacity",0)
 });

 // 点击按钮退出
 $(".vv span").click(function () {
       $(" .vv").css("display","none");
       $("#v3").trigger("pause");
});

 // 鼠标出入视频区 播放按钮样式切换 
   (function(){
    var ctrlImg = document.querySelector(".vv img");
    var ctrl= document.querySelector(".play");
        ctrl.onclick = function(e){
            e.preventDefault();
            if(v3.paused){ //当前处理暂停状态
                v3.play();  //播放
                ctrlImg.src = "../img/gy/pause.png";
            }else{
                v3.pause();//暂停
                ctrlImg.src = "../img/gy/play.png";
            }
        }
  
})();


$(".four .cont div").mouseover(function(){
   $(this).css({"height":420,"transform":"translateY(-120px)","background":"#4C96C9"})
   $(this).children("span").css("opacity",1)
})
$(".four .cont div").mouseout(function(){
   $(this).css({"height":300,"transform":"translateY(0)","background":"#082940"})
   $(this).children("span").css("opacity",0)
});



 (()=>{
    function G(id) {
        return document.getElementById(id);
    }
     
    var map = new BMap.Map("l-map");
    var point = new BMap.Point(120.163849,30.24567);//地理坐标
    var marker = new BMap.Marker(point); 
    map.centerAndZoom(point,14); // 初始化地图,设置城市和地图级别。
    map.enableScrollWheelZoom(); //滚轮放大和缩小
    map.addOverlay(marker);      //自定义坐标
    // 定义一个控件类,即function
    function ZoomControl() {
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
    }

    // 通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMap.Control();

    // 自定义控件必须实现自己的initialize方法,并且将控件的DOM元素返回
    // 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
    ZoomControl.prototype.initialize = function(map){
        // 创建一个DOM元素
        var div = document.createElement("div");
        div.innerHTML = '<div id="r-result">' +
            '搜索地址:<input type="text" id="suggestId" size="20" value="百度" ' +
            'style="width:150px;height: 25px;" /></div>' +
            '<div id="searchResultPanel" ' +
            'style="border:1px solid #C0C0C0;width:150px;height:auto; display:none;">' +
            '</div>';

        // 添加DOM元素到地图中
        map.getContainer().appendChild(div);
        // 将DOM元素返回
        return div;
    }

    // 创建控件
    var myZoomCtrl = new ZoomControl();
    // 添加到地图当中
    map.addControl(myZoomCtrl);


    var ac = new BMap.Autocomplete( //建立一个自动完成的对象
        {"input" : "suggestId"
            ,"location" : map
        });

    ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
        var str = "";
        var _value = e.fromitem.value;
        var value = "";
        if (e.fromitem.index > -1) {
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

        value = "";
        if (e.toitem.index > -1) {
            _value = e.toitem.value;
            value = _value.province + _value.city + _value.district + _value.street + _value.business;
        }
        str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
        G("searchResultPanel").innerHTML = str;
    });

    var myValue;
    ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;

        setPlace();
    });

    function setPlace(){
        map.clearOverlays(); //清除地图上所有覆盖物
        function myFun(){
            var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            map.centerAndZoom(pp, 14);
            map.addOverlay(new BMap.Marker(pp)); //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun
        });
        local.search(myValue);
    }




    var navigationControl = new BMap.NavigationControl();//创建平移缩放控件
    map.addControl(navigationControl);//添加到地图
    var scaleControl = new BMap.ScaleControl();//这里创建比例尺控件
    map.addControl(scaleControl);//添加到地图
    var overviewMapControl = new BMap.OverviewMapControl();//创建缩略图控件，注意这个控件默认是在地图右下角，并且是缩着的
    map.addControl(overviewMapControl);//添加到地图
    var mapTypeControl = new BMap.MapTypeControl();//创建地图类型控件
    map.addControl(mapTypeControl);
})()
 