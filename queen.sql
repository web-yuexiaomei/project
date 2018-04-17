#创建king库
SET NAMES UTF8;
DROP DATABASE IF EXISTS queen;
CREATE DATABASE queen CHARSET=UTF8;
USE queen;


#楼层三建表--banners
#CREATE TABLE floor_three_b(
 #   ftb_id       INT PRIMARY KEY AUTO_INCREMENT,   #楼层三轮播自增长id
 #   ftb_img      VARCHAR(128),                      #楼层三轮播图片
#    ftb_imgs     VARCHAR(128),                      #楼层三轮播小图片
 #   ftb_titleo   VARCHAR(128),                      #楼层三轮播大标题
 #   ftb_titlet   VARCHAR(128),                      #楼层三轮播小标题
 #   ftb_text     VARCHAR(128),                       #楼层三轮播短文
  #  ftb_texto    VARCHAR(64),                        #楼层三百分比文字1行
 #   ftb_textt    VARCHAR(64),                         #楼层三百分比文字2行
 #   ftb_texts    VARCHAR(64),                         #楼层三百分比文字3行
 #   ftb_textf    VARCHAR(64),                          #楼层三百分比文字4行
# #   ftb_textoo    VARCHAR(64),                        #楼层三百分比1行
 #   ftb_texttt    VARCHAR(64),                         #楼层三百分比2行
 #   ftb_textss    VARCHAR(64),                         #楼层三百分比3行
#    ftb_textff    VARCHAR(64)                          #楼层三百分比4行
#);





#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y1.png','img/index/z_f1.png','分期付款合作模式','Installment cooperation model','侧重以结果为服务导向<br>最大限度降低客户的合作风险<br>皇室科技从不青睐于向您虚夸我们的设计能力<br>如果量身设计的作品让您满意<br>我们有理由相信合作的基础会更加夯实<br>这也是皇室科技自信的最佳体现！'
#,'<em>10%</em>','<em>40%</em>','<em>50%</em>','',' Prepayments',' Two Models','Balance Due','');
#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y2.png','img/index/z_f2.png','坚持设计至上的服务核心','Adhere to the design of the core services','皇室科技自创建起来<br>始终坚持以设计为核心的发展方向<br>我们深知设计不仅仅是满足于视觉上的审美依赖<br>更多是基于信息传播与用户行为的思考<br>设计应是有目标的创作行为<br>精于设计<br>更擅长于您品牌的传播之道！'
#,'<em>20%</em>','<em>30%</em>','<em>50%</em>','',' Planning',' Color',' Creative ','');
#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y3.png','img/index/z_f3.png','强调用户感受的交互动效','Emphasize the user feel interact effect','皇室科技坚信精细而恰当的交互动效<br>可以使信息的传达更具魅力、印象更加深刻<br>将精美的设计页面与HTML5等动效技术进行融合<br>会带来更愉悦地用户体验<br>使网站流露出独有的品牌特性'
#,'<em>20%</em>','<em>20%</em>','<em>30%</em>','<em>30%</em>',' Javascript',' JQuery',' CSS3',' Html5 ');
#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y4.png','img/index/z_f4.png','完善的售后服务','Perfect after-sales service','皇室科技承诺为用户提供完善的网站售后服务<br>在网站交付的那一刻起，即有专人跟进！<br>'
#,'<em>50%</em>','<em>50%</em>','','',' Writing',' Graph &amp; Table ','','');
#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y5.png','img/index/z_f5.png','网站前期规划方案如此重要','Site early planning is so important','皇室科技在了解客户需求的前提下<br>会将客户需求进行细致的分析与挖掘<br>根据不同需求将网站的各个层面进行全面规划说明<br>皇室科技坚持不做"10分钟搞定的无营养样板方案"<br>确保每一份方案都是量身定制<br>'
#,'<em>100%</em>','','','',' Exclusive Custom ','','','');
#INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
#VALUES('img/index/z_y6.png','img/index/z_f6.png','分享时代的最大化传播','Share the maximum transmission of The Times','无论是传统互联网<br>还是新兴的移动互联时代<br>分享概念已经悄然改变了网站的传播模式<br>皇室科技将通过技术方法改变用户行为<br>使内容信息实现快速的分享与移动终端应用<br>从而提升网站价值<br>分享时代已来临<br>你还在无动于衷吗？'
#,'<em>40%</em>','<em>30%</em>','<em>30%</em>','',' Win',' IOS',' Android ','');






#楼层三动态数字滚动列表建表
#CREATE TABLE floor_three_l(
#    ftl_id          INT PRIMARY KEY AUTO_INCREMENT,     #楼层三数字滚动自增长id
 #   ftl_title       VARCHAR(36),                          #楼层三数字滚动标题
#    ftl_stitle      VARCHAR(36),                         #楼层三数字滚动小数字
#    ftl_num         INT
#);

#INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('网站服务','+',6625);
#INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('安全运行','天',1100);
#INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('覆盖行业','+',0);
#INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('无条件退款','天',0);




#帮助页面
#帮助页面列表项
CREATE TABLE ass_list(
    aid             INT PRIMARY KEY AUTO_INCREMENT,
    ass_title       VARCHAR(32)
);
INSERT INTO ass_list (ass_title) VALUES('产品介绍');
INSERT INTO ass_list (ass_title) VALUES('功能特效');
INSERT INTO ass_list (ass_title) VALUES('域名使用');
INSERT INTO ass_list (ass_title) VALUES('手机网站');
INSERT INTO ass_list (ass_title) VALUES('功能更新');
INSERT INTO ass_list (ass_title) VALUES('网站监测');


#帮助页面常见问题
CREATE TABLE ass_qus(
    aid             INT PRIMARY KEY AUTO_INCREMENT,
    ass_q_title       VARCHAR(32),
    ass_q_stitleo     VARCHAR(32),
    ass_q_stitlet     VARCHAR(32),
    ass_q_stitles     VARCHAR(32)
);
INSERT INTO ass_qus (ass_q_title,ass_q_stitleo,ass_q_stitlet,ass_q_stitles) VALUES('页面设计','如何使用极速建站功能','如何更换网站主题','如何设置网站横幅');
INSERT INTO ass_qus (ass_q_title,ass_q_stitleo,ass_q_stitlet,ass_q_stitles) VALUES('模块排版','如何使用产品导航模块','如何把视频转码为MP4格式','视频转换为flv格式');
INSERT INTO ass_qus (ass_q_title,ass_q_stitleo,ass_q_stitlet,ass_q_stitles) VALUES('其他','各大搜索引擎收录指引','收录排名低的原因','如何在百度站长平台验证网站');



#常见工具
CREATE TABLE ass_tool(
    aid             INT PRIMARY KEY AUTO_INCREMENT,
    ass_t_title       VARCHAR(32)
);

INSERT INTO ass_tool (ass_t_title) VALUES('找回密码');
INSERT INTO ass_tool (ass_t_title) VALUES('域名查询');
INSERT INTO ass_tool (ass_t_title) VALUES('我要反馈');

#智能查询框
CREATE TABLE ass_lists(
    aid             INT PRIMARY KEY AUTO_INCREMENT,
    ass_li_title       VARCHAR(256)
);

INSERT INTO ass_lists (ass_li_title) VALUES('网站建设怎样做才达到最佳的效果');
INSERT INTO ass_lists (ass_li_title) VALUES('企业建站时要考虑哪些要素');
INSERT INTO ass_lists (ass_li_title) VALUES('做运动类型的网站有哪些技巧和经验呢');
INSERT INTO ass_lists (ass_li_title) VALUES('如何设计出一个优质的营销网站模板');
INSERT INTO ass_lists (ass_li_title) VALUES('网页制作设置字体的几个小技巧');
INSERT INTO ass_lists (ass_li_title) VALUES('自助建站怎样做可以更贴近企业的特色');
INSERT INTO ass_lists (ass_li_title) VALUES('移动网站建设的四大问题');
INSERT INTO ass_lists (ass_li_title) VALUES('企业网站上线前要做好什么准备');
INSERT INTO ass_lists (ass_li_title) VALUES('网站建设的改版方案需考虑五大因素');
INSERT INTO ass_lists (ass_li_title) VALUES('中小企业为什么要选择自助建站？');
INSERT INTO ass_lists (ass_li_title) VALUES('高质量的网站需要如何创建');
INSERT INTO ass_lists (ass_li_title) VALUES('网站模板建设要考虑哪些设计问题');
INSERT INTO ass_lists (ass_li_title) VALUES('网站制作避免哪些问题可以提升用户体验');
INSERT INTO ass_lists (ass_li_title) VALUES('如何建设一个成功的手机网站');
INSERT INTO ass_lists (ass_li_title) VALUES('营销类型的网站建站要考虑三个问题');




#用户表
CREATE TABLE queen_user(
  `uid` int(11)   PRIMARY KEY auto_increment,
  `uname` varchar(64) default NULL,
   `upwd` varchar(32) default NULL
);
INSERT INTO `queen_user` VALUES ('1', 'ding@qq.com','123456');
INSERT INTO `queen_user` VALUES ('2', 'dang@qq.com','1234');
INSERT INTO `queen_user` VALUES ('3', 'yue@qq.com','123');
INSERT INTO `queen_user` VALUES ('4', 'xiao@qq.com','3456');
INSERT INTO `queen_user` VALUES ('5', 'yuehd@qq.com','1456');
INSERT INTO `queen_user` VALUES ('6', 'dhidn@qq.com','1456');
INSERT INTO `queen_user` VALUES ('7','15067108707','1256');
INSERT INTO `queen_user` VALUES ('8', '15011108707','1256');
INSERT INTO `queen_user` VALUES ('9', '1897108707','1256');
INSERT INTO `queen_user` VALUES ('10','15067108708','1456');
INSERT INTO `queen_user` VALUES ('11','15067108807','1256');
INSERT INTO `queen_user` VALUES ('12','15067109707','1256');
INSERT INTO `queen_user` VALUES ('13','15067107707','1256');
INSERT INTO `queen_user` VALUES ('14','15067106707','1256');


CREATE TABLE queen_detail(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  a VARCHAR(32),
  img VARCHAR(64),
   des VARCHAR(64)
  );
  INSERT INTO queen_detail VALUES
  (1,"#","../img/y_product/d1.jpg","广告 文化 设计"),
   (null,"#","../img/y_product/d2.jpg","广告 文化 设计"),
    (null,"#","../img/y_product/d3.jpg","广告 文化 设计"),
     (null,"#","../img/y_product/d4.jpg","广告 文化 设计"),
      (null,"#","../img/y_product/d5.jpg","广告 文化 设计"),
       (null,"#","../img/y_product/d6.jpg","广告 文化 设计"),
       (null,"#","../img/y_product/d7.jpg","广告 文化 设计"),
       (null,"#","../img/y_product/d8.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d9.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d10.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d11.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d12.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d13.jpg","学校 教育 培训机构"),
       (null,"#","../img/y_product/d14.jpg","学校 教育 培训机构"),
        (null,"#","../img/y_product/d15.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d16.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d17.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d18.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d19.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d20.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d21.jpg","门窗 卫浴 灯光照明"),
        (null,"#","../img/y_product/d22.jpg","IT 软件 互联网"),
       (null,"#","../img/y_product/d23.jpg","IT 软件 互联网"),
       (null,"#","../img/y_product/d24.jpg","IT 软件 互联网"),
        (null,"#","../img/y_product/d2.jpg","金融 投资 理财保险"),
        (null,"#","../img/y_product/d2.jpg","金融 投资 理财保险"),
       (null,"#","../img/y_product/d3.jpg","金融 投资 理财保险"),
       (null,"#","../img/y_product/d4.jpg","金融 投资 理财保险"),
       (null,"#","../img/y_product/d5.jpg","金融 投资 理财保险"),
       (null,"#","../img/y_product/d6.jpg","医疗 保险 医药器械"),
       (null,"#","../img/y_product/d7.jpg","医疗 保险 医药器械"),
       (null,"#","../img/y_product/d8.jpg","医疗 保险 医药器械"),
       (null,"#","../img/y_product/d9.jpg","医疗 保险 医药器械"),
       (null,"#","../img/y_product/d10.jpg","餐饮 酒店 旅游服务"),
       (null,"#","../img/y_product/d11.jpg","餐饮 酒店 旅游服务"),
       (null,"#","../img/y_product/d12.jpg","餐饮 酒店 旅游服务"),
       (null,"#","../img/y_product/d13.jpg","餐饮 酒店 旅游服务"),
       (null,"#","../img/y_product/d14.jpg","餐饮 酒店 旅游服务"),
        (null,"#","../img/y_product/d15.jpg","工商 法律 知识产权"),
       (null,"#","../img/y_product/d16.jpg","工商 法律 知识产权"),
       (null,"#","../img/y_product/d17.jpg","工商 法律 知识产权"),
       (null,"#","../img/y_product/d18.jpg","工商 法律 知识产权"),
       (null,"#","../img/y_product/d19.jpg","工商 法律 知识产权"),
       (null,"#","../img/y_product/d20.jpg","门窗 卫浴 灯光照明"),
       (null,"#","../img/y_product/d21.jpg","门窗 卫浴 灯光照明"),
        (null,"#","../img/y_product/d22.jpg","生活服务 家政 美业 "),
       (null,"#","../img/y_product/d23.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d24.jpg","化工 原材料 环保"),
         (null,"#","../img/y_product/d15.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d16.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d17.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d18.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d19.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d20.jpg","化工 原材料 环保"),
       (null,"#","../img/y_product/d21.jpg","化工 原材料 环保");
           

#楼层6-关于    左边图片
CREATE TABLE queen_produce_lef(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_produce_lef VALUES
(1,"img/index/img51.png"),
(2,"img/index/img52.png"),
(3,"img/index/img53.png"),
(4,"img/index/img54.png");


#楼层6-关于    中间简介
CREATE TABLE queen_produce_mid(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	title1 VARCHAR(64) NOT NULL DEFAULT '',
	title2 VARCHAR(64) NOT NULL DEFAULT '',
	title3 VARCHAR(64) NOT NULL DEFAULT '',
	title4 VARCHAR(64) NOT NULL DEFAULT '',
	title5 VARCHAR(64) NOT NULL DEFAULT '',
	title6 VARCHAR(64) NOT NULL DEFAULT '',
	title7 VARCHAR(64) NOT NULL DEFAULT '',
	title8 VARCHAR(64) NOT NULL DEFAULT '',
	title9 VARCHAR(64) NOT NULL DEFAULT '',
	title10 VARCHAR(64) NOT NULL DEFAULT '',
	title11 VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_produce_mid VALUES
(1,"简介","皇室科技创立于香港","后随创始人团队一起移师深圳",
"以网站建设移动互联网服务为核心业务","专注于创意设计和传播应用",
"探索并实现商业价值最大化","为所有谋求长远发展的企业机构贡献全力",
"皇室科技注重专业探索","在更深远的认知中","不断修正服务导向完善创作品格",
"以探求精品塑造与理念升华");



#楼层6-关于    右边图片
CREATE TABLE queen_produce_rig(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_produce_rig VALUES
(1,"img/index/img34.png"),
(2,"img/index/img35.png");



#详情页 优势 hf

#楼层1
CREATE TABLE queen_detail_f1(
	did INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_detail_f1 VALUES
(1,"../img/youshi/banner.png");


#楼层2
CREATE TABLE queen_detail_f2(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT '',
	title1 VARCHAR(64) NOT NULL DEFAULT '',
	title2 VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_detail_f2 VALUES
(1,"../img/youshi/1.jpg","购买服务","您与凡科确认合作意向并购买服务"),
(2,"../img/youshi/2.png","设计初稿","确认需求后，设计师提供优质设计稿"),
(3,"../img/youshi/3.png","网站搭建","确认设计后，按照设计图搭建网站"),
(4,"../img/youshi/4.png","确认验收","网站搭建确认后，完成项目验收");


#楼层3
CREATE TABLE queen_detail_f3(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_detail_f3 VALUES
(1,"../img/youshi/table.png");



#楼层4
CREATE TABLE queen_detail_f4(
	hid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT '',
	title1 VARCHAR(64) NOT NULL DEFAULT '',
	title2 VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_detail_f4 VALUES
(1,"../img/youshi/5.png","1V1跟踪设计","设计师1V1量身定制设计，制作过程营销顾问全程跟进"),
(2,"../img/youshi/6.png","免费快速备案","付费版本用户免费提供备案服务，努力缩短备案时间"),
(3,"../img/youshi/7.png","全程网站监控","浏览次数PV、独立访客UV、栏目统计、概况及时掌握"),
(4,"../img/youshi/8.png","7*8小时售后服务","我们专业的售后团队将为您提供7*8小时不间断的服务");




#楼层5 轮播图片
CREATE TABLE queen_detail_f5(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(64) NOT NULL DEFAULT ''
);
INSERT INTO queen_detail_f5 VALUES
(1,"../img/youshi/c1.png"),
(2,"../img/youshi/c2.png"),
(3,"../img/youshi/c3.png"),
(4,"../img/youshi/c4.png");

       
							 
#楼层二
CREATE TABLE queen_floor02(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  class1 VARCHAR(32),
  logo VARCHAR(32),
  title VARCHAR(32),
  list1 VARCHAR(64),
  list2 VARCHAR(64),
  list3 VARCHAR(64),
  text VARCHAR(192),
  limagebox VARCHAR(32),
  class2 VARCHAR(32)
);
INSERT INTO queen_floor02 VALUES
(01,'lmain lmain01','img/y_product/img5.png','建站','img/y_product/img9(1).png','img/y_product/img10.png','img/y_product/img11(1).png',
 '企业官网专属的高端定制化解决方案，全面满足建设核心与运行管理并提升企业品牌的有效传播.','img/y_product/img2-1.jpg',
 'lback01 lback'
 ),

(null,'lmain lmain02','img/y_product/img6.png','微传单','img/y_product/img12.png','img/y_product/img13.png','img/y_product/img14.png',
 '企业官网专属的高端定制化解决方案，全面满足建设核心与运行管理并提升企业品牌的有效传播.','img/y_product/img2-4(1).jpg','lback02 lback'),

 (null,'lmain lmain03','img/y_product/img7.png','轻站小程序','img/y_product/img15.png','img/y_product/img16.png','img/y_product/img17.png',
 '企业官网专属的高端定制化解决方案，全面满足建设核心与运行管理并提升企业品牌的有效传播.','img/y_product/img2-2(1).jpg','lback03 lback'),

 (null,'lmain lmain04','img/y_product/img8.png','公众号助手','img/y_product/img18.png','img/y_product/img19.png','img/y_product/img20.png',
 '企业官网专属的高端定制化解决方案，全面满足建设核心与运行管理并提升企业品牌的有效传播.','img/y_product/img2-3(1).jpg','lback04 lback');
#楼层三
#楼层三建表--banners
CREATE TABLE floor_three_b(
    ftb_id       INT PRIMARY KEY AUTO_INCREMENT,   #楼层三轮播自增长id
    ftb_img      VARCHAR(128),                      #楼层三轮播图片
    ftb_imgs     VARCHAR(128),                      #楼层三轮播小图片
    ftb_titleo   VARCHAR(128),                      #楼层三轮播大标题
    ftb_titlet   VARCHAR(128),                      #楼层三轮播小标题
    ftb_text     VARCHAR(128),                       #楼层三轮播短文
    ftb_texto    VARCHAR(64),                        #楼层三百分比文字1行
    ftb_textt    VARCHAR(64),                         #楼层三百分比文字2行
    ftb_texts    VARCHAR(64),                         #楼层三百分比文字3行
    ftb_textf    VARCHAR(64),                          #楼层三百分比文字4行
    ftb_textoo    VARCHAR(64),                        #楼层三百分比1行
    ftb_texttt    VARCHAR(64),                         #楼层三百分比2行
    ftb_textss    VARCHAR(64),                         #楼层三百分比3行
    ftb_textff    VARCHAR(64)                          #楼层三百分比4行
);
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y1.png','img/index/z_f1.png','分期付款合作模式','Installment cooperation model','侧重以结果为服务导向<br>最大限度降低客户的合作风险<br>皇室科技从不青睐于向您虚夸我们的设计能力<br>如果量身设计的作品让您满意<br>我们有理由相信合作的基础会更加夯实<br>这也是皇室科技自信的最佳体现！'
,'<em>10%</em>','<em>40%</em>','<em>50%</em>','',' Prepayments',' Two Models','Balance Due','');
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y2.png','img/index/z_f2.png','坚持设计至上的服务核心','Adhere to the design of the core services','皇室科技自创建起来<br>始终坚持以设计为核心的发展方向<br>我们深知设计不仅仅是满足于视觉上的审美依赖<br>更多是基于信息传播与用户行为的思考<br>设计应是有目标的创作行为<br>精于设计<br>更擅长于您品牌的传播之道！'
,'<em>20%</em>','<em>30%</em>','<em>50%</em>','',' Planning',' Color',' Creative ','');
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y3.png','img/index/z_f3.png','强调用户感受的交互动效','Emphasize the user feel interact effect','皇室科技坚信精细而恰当的交互动效<br>可以使信息的传达更具魅力、印象更加深刻<br>将精美的设计页面与HTML5等动效技术进行融合<br>会带来更愉悦地用户体验<br>使网站流露出独有的品牌特性'
,'<em>20%</em>','<em>20%</em>','<em>30%</em>','<em>30%</em>',' Javascript',' JQuery',' CSS3',' Html5 ');
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y4.png','img/index/z_f4.png','完善的售后服务','Perfect after-sales service','皇室科技承诺为用户提供完善的网站售后服务<br>在网站交付的那一刻起，即有专人跟进！<br>'
,'<em>50%</em>','<em>50%</em>','','',' Writing',' Graph &amp; Table ','','');
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y5.png','img/index/z_f5.png','网站前期规划方案如此重要','Site early planning is so important','皇室科技在了解客户需求的前提下<br>会将客户需求进行细致的分析与挖掘<br>根据不同需求将网站的各个层面进行全面规划说明<br>皇室科技坚持不做"10分钟搞定的无营养样板方案"<br>确保每一份方案都是量身定制<br>'
,'<em>100%</em>','','','',' Exclusive Custom ','','','');
INSERT INTO floor_three_b (ftb_img,ftb_imgs,ftb_titleo,ftb_titlet,ftb_text,ftb_texto,ftb_textt,ftb_texts,ftb_textf,ftb_textoo,ftb_texttt,ftb_textss,ftb_textff)
VALUES('img/index/z_y6.png','img/index/z_f6.png','分享时代的最大化传播','Share the maximum transmission of The Times','无论是传统互联网<br>还是新兴的移动互联时代<br>分享概念已经悄然改变了网站的传播模式<br>皇室科技将通过技术方法改变用户行为<br>使内容信息实现快速的分享与移动终端应用<br>从而提升网站价值<br>分享时代已来临<br>你还在无动于衷吗？'
,'<em>40%</em>','<em>30%</em>','<em>30%</em>','',' Win',' IOS',' Android ','');
#楼层三动态数字滚动列表建表
CREATE TABLE floor_three_l(
    ftl_id          INT PRIMARY KEY AUTO_INCREMENT,     #楼层三数字滚动自增长id
    ftl_title       VARCHAR(36),                          #楼层三数字滚动标题
    ftl_stitle      VARCHAR(36),                         #楼层三数字滚动小数字
    ftl_num         INT
);
INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('网站服务','+',6625);
INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('安全运行','天',1100);
INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('覆盖行业','+',0);
INSERT INTO floor_three_l (ftl_title,ftl_stitle,ftl_num) VALUES('无条件退款','天',0);
#楼层四

CREATE TABLE user(
uid int(11) PRIMARY KEY auto_increment,
uname varchar(64) default NULL,  
upwd varchar(64) default NULL
); 

CREATE TABLE angli (
aid  int(11) PRIMARY KEY auto_increment, 
img  varchar(128) default NULL,
title varchar(128) default NULL 
);     
INSERT INTO angli VALUES (null,'img/index/a.jpg','果然新鲜');
INSERT INTO angli VALUES (null,'img/index/b.jpg','北京中友投资管理有限公司');
INSERT INTO angli VALUES (null,'img/index/c.jpg','派瑞宠物医院');
INSERT INTO angli VALUES (null,'img/index/e.jpg','爱乐途旅游');



#楼层五
#皇室公告模块
CREATE TABLE queen_public(
    bid INT(11) PRIMARY KEY auto_increment, #主键
    ad_title VARCHAR(128) DEFAULT NULL,   #公告标题
    img_gif VARCHAR(64) DEFAULT NULL,  #公告有颜色的图片
    img_png VARCHAR(64) DEFAULT NULL,   #公告透明底的图片
    ad_des VARCHAR(128) DEFAULT NULL,    #公告的详细描述
    ad_day INT DEFAULT NULL,    #公告日期的几号
    ad_date VARCHAR(64) DEFAULT NULL   #公告日期的年月
);
INSERT INTO queen_public(bid,ad_title,img_gif,img_png,ad_des,ad_day,ad_date) VALUES('1','签约路客出行，旅游租房出行门户平台','img/index/look-xf.gif','img/index/look-ef.png','路客出行-集合房屋短租，司机及交通工具租用以及社交为一体的平台 ','25','2017-12');
INSERT INTO queen_public(bid,ad_title,img_gif,img_png,ad_des,ad_day,ad_date) VALUES('2','签约Baiyiled lighting America Inc','img/index/baiyi-xf.gif','img/index/baiyi-ef.png',' BaiyiLED lighting America Inc will be  a leading Northern America manufacturer in the LED lighting industry.','27','2016-10');
INSERT INTO queen_public(bid,ad_title,img_gif,img_png,ad_des,ad_day,ad_date) VALUES('3','签约My training group','img/index/mtg-xf.gif','img/index/mtg-ef.png','My training group是专业为VCE学生提供补习服务的教育机构','13','2017-9');
INSERT INTO queen_public(bid,ad_title,img_gif,img_png,ad_des,ad_day,ad_date) VALUES('4','签约Open House','img/index/open-xf.gif','img/index/open-ef.png','Open House 网站的目的是为了房主有一个更专业的、范围更广泛的Open House 宣传舞台和机会','29','2018-1');
#楼层六


#成员介绍   
CREATE TABLE queen_intr(
	pid INT PRIMARY KEY AUTO_INCREMENT,	
	name VARCHAR(64) NOT NULL DEFAULT '',
	titleself VARCHAR(64) NOT NULL DEFAULT '',
	titleteam VARCHAR(64) NOT NULL DEFAULT '',
	imgself VARCHAR(64) NOT NULL DEFAULT '',
	option VARCHAR(256) NOT NULL DEFAULT '',
	htmls VARCHAR(256) NOT NULL DEFAULT ''
);
INSERT INTO queen_intr VALUES
(1,"鲁洋洋","个人标签：小洋洋","团队标签：爆发力担当","../img/intro/1.jpg",
"楼层二<br>案例页面<br>布局设计",
"1、动态加载的分页功能<br>2、搜索查询功能<br>3、PHP模糊查询功能<br>4、封装加载函数，提高查询效率<br>5、二级联动功能"),
(2,"张坚江","个人标签：不一样的“小可爱”","团队标签：责任担当","../img/intro/2.jpg",
"楼层三<br>帮助页面<br>404页面<br>页面汇总",
"1、轮播<br>2、智能搜索提示功能<br> 3、 响应式布局<br>4、动态数据展示<br>5、promise控制的懒加载功能"),
(3,"屠溢聪","个人标签：篮球小王子","团队标签：认真担当","../img/intro/3.jpg",
"楼层四<br>关于页面<br>登录页面<br>header",
"1、canvas背景的绘制<br>2、地图的应用<br>3、H5新特性—视频的应用<br>4、鼠标事件<br>5、登录功能"),
(4,"洪峰","个人标签：“高冷”游泳教练","团队标签：执行力担当","../img/intro/4.jpg",
"楼层六<br>优势页面",
"1、滚动事件<br>2、楼层点击事件<br>3、懒加载功能<br>4、媒体查询<br>5、轮播功能"),
(5,"岳小梅","个人标签：“淑女”的女汉子","团队标签：分工+统筹","../img/intro/5.jpg",
"楼层五<br>产品详情页<br>注册页面<br>footer",
"1、异步和阻塞结合的展示功能（promise）<br>2、3D轮播功能（产品页）<br>3、动态数据展示功能<br>4、自适应调整功能<br>5、ECharts动态数据统计功能<br>6、注册功能（正则、验证码等）"),
(6,"葛宇霞","个人标签： 技术 “女侠”","团队标签：核心技术担当","../img/intro/6.jpg",
"首页（汇总）<br>团队风采页面",
"1、全屏的纵向和横向切换功能<br>2、楼层点击和滚动功能<br>3、事件兼容性的处理（如：大部分浏览器都是用mouseWheel事件，火狐是用DOMMouseScroll事件）<br>4、键盘的切换功能（用which和keyCode解决了兼容性问题）<br>5、自适应窗口功能（当调整浏览器窗口的大小时，发生 resize 事件）<br>6、自定义插件");
