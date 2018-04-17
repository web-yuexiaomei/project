(function($){
//	获取浏览器前缀
//判断某个元素的css样式中是否存在transition属性
//参数：dom元素
//返回值：boolean,有放着返回样式前缀，否则返回false；
	var _prefix=(function(tmp){
		var aPrefix=["Webkit","Moz","o","ms"];
		var props="";
		for (var i in aPrefix )
		{
			props=aPrefix[i]+"Transition";
			if(tmp.style[props]!==undefined){
				return "-"+aPrefix[i].toLowerCase()+"-";
			}
			props="";			
		}
		return false;
	})(document.createElement(PageSwitch));
	var PageSwitch=(function(){//pageSwitch对象定义
		function PageSwitch(element,options){
			this.settings=$.extend(true,$.fn.PageSwitch.defaults,options||{});
			//extend方法将用户自定义的插件参数与插件的默认参数加以合并
			//参数一：是否深拷贝
			//参数二：插件默认参数
			//参数三：用户参数
			this.element=element;
			this.init();
		}
		PageSwitch.prototype={//初始化插件
			init:function(){//初始化init方法,初始化dom解构，布局，分页及绑定事件
				var me=this;
				me.selectors=me.settings.selectors;
				me.sections=me.element.find(me.selectors.sections);
				me.section=me.sections.find(me.selectors.section);
				me.canScroll=true;
				
				me.direction=me.settings.direction=="vertical"?true:false;
				me.pagesCount=me.pagesCount();
				
				me.index=(me.settings.index>=0&&me.settings.index<me.pagesCount)?me.settings.index:0;
				
				if(!me.direction){//如果是横屏滑动就调用该私有方法
					me._initLayout();
					
				}
				if(me.settings.pagination){//如果分页为true就调用该私有方法
					me._initPaging();
				}
				me._initEvent();
			},
			pagesCount:function(){
				//this.pagesCount=this.section.length;
				return this.section.length;
			},//获取滑动页面数量
			switchLength:function(){
				return this.direction?this.element.height():this.element.width();
			},//获取滑动的宽度（横屏滑动）或高度（竖屏滑动
			prev:function(){
				var me=this;
				if(me.index>0)
					me.index--;
				else if(me.settings.loop)
					me.index=me.pagesCount-1;
				me._scrollPage();
			},//说明向前滑动即上一页
			next:function(){
				var me=this;
				if(me.index<me.pagesCount-1)
					me.index++;
				else if(me.settings.loop)
					me.index=0;
				me._scrollPage();
			},//先后滑动即下一页面
			_initLayout:function(){
				var me=this;
				var width=(me.pagesCount*100)+"%";
				var cellWidth=(100/me.pagesCount).toFixed(2)+"%";
				me.sections.width(width);
				for (var op of me.section )
				{
					$(op).width(cellWidth).css("float","left");
				}
				
			},//主要针对横屏情况进行页面布局
			_initPaging:function(){
				var me=this;
				var pagesClass=me.selectors.page.substring(1);
				me.activeClass=me.selectors.active.substring(1);
				
				var pageHtml=`<ul class="${pagesClass}">`;
				for (var i=0;i<me.pagesCount ;i++ )
				{
					pageHtml+=`<li></li>`;
				}
				pageHtml+=`</ul>`;
				me.element.append(pageHtml);
				var pages=me.element.find(me.selectors.page);
				
				me.pageItem=pages.find("li");
				me.pageItem.eq(me.index).addClass(me.activeClass);
				if(me.direction){
					pages.addClass("vertical");
				}
				else{
					pages.addClass("horizontal");
				}
			},//实现分页的dom结构及css样式
			_initEvent:function(){
				var me=this;				
				me.element.on("click",me.selectors.page+" li",function(){
					me.index=$(this).index();
					me._scrollPage();//私有方法
				});//鼠标点击事件
				me.element.on("mousewheel DOMMouseScroll",me,function(e){
					if(me.canScroll){	
					var delta=e.originalEvent.wheelDelta||-e.originalEvent.detail;
					if(delta>0&&(me.index&&!me.settings.loop||me.settings.loop))
						me.prev();						
					else if(delta<0&&(me.index<(me.pagesCount-1)&&!me.settings.loop||me.settings.loop))
						me.next();
					}
				});//鼠标滚轮事件
				if(me.settings.keyboard){
					$(window).on("keydown",function(e){
						var keyCode=e.keyCode;
						if(keyCode==37||keyCode==38)//方向上键和左键
							me.prev();
						else if(keyCode==39||keyCode==40)//方向下键和右键
							me.next();
					})//键盘切换事件
				}
				$(window).resize(function(){
					var currentLength=me.switchLength();//当前页面滑动的高度或宽度
					offset=me.settings.direction?me.section.eq(me.index).offset().top:me.section.eq(me.index).offset().left;
					if(Math.abs(offset)>currentLength/2&&me.index<(me.pagesCount-1)){//abs得绝对值
						me.index++;
					}
					if(me.index){
						me._scrollPage();
					}
				});
				me.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(){
					me.canScroll=true;
					if(me.settings.callback &&$.type(me.settings.callback)=="function")
					{
						me.settings.callback();						
					}
				})
			},//初始化插件事件
			_scrollPage:function(){
				var me=this;
				dest=me.section.eq(me.index).position();
				if(!dest)
					return;
				me.canScroll=false;
				if(_prefix){
					me.sections.css(_prefix+"transition","all "+me.settings.duration+"ms "+me.settings.easing)
					var translate=me.direction?`translateY(-${dest.top}px)`:`translateX(-${dest.left}px)`;
					me.sections.css(_prefix+"transform",translate);
					me.canScroll=true;
					
					var show_time=[floor2_show,floor3_show,floor4_show,floor5_show,floor6_show];
					var hidden_time=[floor2_hidden,floor3_hidden,floor4_hidden,floor5_hidden,floor6_hidden];
					if(me.index!=0){
						header_show();
					}
					else{
						header_hidden();
					}
					for (var i=0;i<show_time.length;i++ )
					{
						var op=parseInt(show_time[i].toString().split("floor")[1]);
						if (op==(me.index+1))
						{
							show_time[i]();
						}
						else
							hidden_time[i]();						
					}

				}
				else{
					var animateCss=me.direction?{top:-dest.top}:{left:-dest.left};					
					me.sections.animate(animateCss,me.settings.duration,function(){
						me.canScroll=true;
						if(me.settings.callback &&$.type(me.settings.callback)=="function")
						me.settings.callback();
					});
				}
				if(me.settings.pagination){
					me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
				}
				
			}
		}
		return PageSwitch;//返回对象
	})();
	$.fn.PageSwitch=function(options){//单例模式
		return this.each(function(){
			var me=$(this);
			instance=me.data("PageSwitch");//创建该对象的实例
			if(!instance){//判断实例是否为空
				instance=new PageSwitch(me,options);//赋值一个实例给他
				me.data("PageSwitch",instance);
			}
			if($.type(options)==="string")
				return instance[options]();
		})
	},
	$.fn.PageSwitch.defaults={//配置默认参数
		selectors:{
			sections:".sections",
			section:".section",
			page:".pages",//分页
			active:".active"//分页选中时添加的样式
		},
		index:0,
		easing:"ease",//动画效果
		duration:500,
		loop:false,//是否循环播放
		pagination:true,//是否进行很分页处理
		keyboard:true,//是否触发键盘时间
		direction:"vertical",//竖屏滑动
		callback:""//实现滑屏动画后所调用的回调函数
	}
})(jQuery);