-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-04 16:25:58
-- 服务器版本： 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `product`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `now_price` float NOT NULL COMMENT '商品现价',
  `old_price` float NOT NULL COMMENT '商品原价',
  `num` int(10) NOT NULL COMMENT '商品数量',
  `pic` varchar(355) NOT NULL COMMENT '商品图片',
  `details` varchar(255) NOT NULL COMMENT '商品详情'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `now_price`, `old_price`, `num`, `pic`, `details`) VALUES
(1, '米莱珠宝 戴妃款5A天然坦桑石戒指 18K金彩色宝石 彩宝女珠宝定制', 4187, 31350, 256, '[{"src":"TB1rdg7KpXXXXX0aXXXXXXXXXXX_!!0-item_pic.jpg"},{"src":"TB2Su1TbXXXXXXNXXXXXXXXXXXX_!!23304479.jpg"},{"src":"TB2J3FpcpXXXXcaXpXXXXXXXXXX_!!23304479.jpg"},{"src":"TB2Et0AcpXXXXbgXXXXXXXXXXXX_!!23304479.jpg_400x400.jpg"}]', '淘金币最高可抵商品价 2%'),
(2, '正品Somic/硕美科 G989发烧级游戏娱乐耳机', 499, 600, 1234, '[{"src":"T1XsCIXlljXXarUbEU_013721.jpg"}]', '前一小时到手价400'),
(3, '现货同步发货 HUAWEI HUAWEI P30全面屏华为p30pro智能手机', 3988, 6448, 594, '[{"src":"O1CN01OCjhmx1k0SjcLyqBi_!!95894621.jpg"},{"src":"O1CN01fENhgl1k0SjdUE3cj_!!95894621.jpg"}]', '10元店铺优惠券，满2500元可用'),
(4, '加狮MadCatz R.A.T PROX美加狮赛钛客激光游戏电竞鼠标变形', 1799, 1999, 180, '[{"src":"TB1GWmEXKLM8KJjSZFqXXa7.FXa_!!0-item_pic.jpg"},{"src":"TB1dxMIXfQs8KJjSZFEXXc9RpXa_!!0-item_pic.jpg"},{"src":"TB1CteoadzJ8KJjSspkXXbF7VXa_!!0-item_pic.jpg"},{"src":"TB1_WGEXJHO8KJjSZFLXXaTqVXa_!!0-item_pic.jpg"}]', '4小时内发货'),
(6, 'Intel I5 8400 游戏主机超7500 微星1060红龙信仰级显卡祝您吃鸡', 6179, 9999, 6, '[{"src":"TB2wIilk_vI8KJjSspjXXcgjXXa_!!1790023841.jpg"},{"src":"TB2G3Nmk0fJ8KJjy0FeXXXKEXXa_!!1790023841.jpg"},{"src":"TB2hGQ9c7fb_uJjSsD4XXaqiFXa_!!1790023841.jpg"}]', '7天内发货'),
(7, 'TUFF 16寸17寸越野轮毂霸道FJ牧马人LC100帕拉丁BJ40L哈弗H5皮卡', 200, 1300, 2, '[{"src":"TB274wLbFHzQeBjSZFzXXa__FXa_!!261941210.jpg"},{"src":"TB1.cPENpXXXXc_XFXXYXGcGpXX_M2.SS2"},{"src":"TB1mOJsKFXXXXXgXFXXXXXXXXXX_!!0-item_pic.jpg"}]', '附近28个安装点'),
(8, '便携式榨汁杯 杯子usWfVFvtPY', 2888, 3000, 25, '[{"src":"TB2sBA9tiRnpuFjSZFCXXX2DXXa_!!2579140052.jpg"},{"src":"TB2mcG7bNBmpuFjSZFsXXcXpFXa_!!2579140052.jpg"}]', '该商品参与了公益宝贝计划'),
(9, 'Sony/索尼 FDR-AX60 Handycam 4K数码摄像机【新品热卖当天顺丰】', 6399, 7000, 2, '[{"src":"TB2.nOcXSCWBuNjy0FhXXb6EVXa_!!671152568.jpg"},{"src":"TB2ESygXL9TBuNjy1zbXXXpepXa_!!671152568.jpg"},{"src":"TB2WnedXKuSBuNjSsplXXbe8pXa_!!671152568.jpg"}]', '淘金币可抵127.98元'),
(10, 'Pisen/品胜LE101耳塞式立体声蓝牙耳机双麦挂耳式通用型无线耳SSR', 165, 600, 94, '[{"src":"TB2hrk3X4xmpuFjSZFNXXXrRXXa_!!18176274.jpg"},{"src":"TB1JHlgHXXXXXblXpXXXXXXXXXX_!!0-item_pic.jpg"}]', '淘金币可抵3.30元'),
(5, '开门式高透明亚克力展示盒模型罩动漫手办收纳箱玩具防尘盒子定制', 20, 110, 94240, '[{"src":"O1CN01UfFFDf1hrBSLby2Nl_!!0-item_pic.jpg"},{"src":"O1CN01OkEZ9U1hrBSL3vzle_!!3925144330.jpg"},{"src":"O1CN01imK9CI1hrBSLKGBVJ_!!3925144330.jpg"}]', '送天猫积分10起'),
(11, '复仇者联盟2奥创绿巨人雷神钢铁侠超人蝙蝠侠可活动发光手办模型', 160, 370, 34, '[{"src":"TB2.IvzbA7myKJjSZFgXXcT9XXa_!!2924227546.jpg"},{"src":"TB2U2bqbtMnyKJjSZPhXXaeZVXa_!!2924227546.jpg"},{"src":"TB2tLvjbzZnyKJjSZPcXXXqHVXa_!!2924227546.jpg"},{"src":"TB2jk2ubxolyKJjSZPfXXawNpXa_!!2924227546.jpg"}]', '放假才能睡觉'),
(12, '纯种二哈幼犬活体宠物狗活幼体宠物狗狗大型犬哈士奇幼犬巨型真狗', 200, 600, 8560, '[{"src":"O1CN01z8pflB2GbcYkhsSW1_!!2819249034.jpg"},{"src":"O1CN01d37v6I2GbcYu3JGdo_!!2819249034.jpg"},{"src":"O1CN01PBV5pw2GbcYrdOX26_!!2819249034.png"}]', '无服务范围限制'),
(13, '狗狗活幼体宠物幼犬买真狗卖活物大型活犬纯种阿拉斯加小狗宠物狗', 200, 600, 1001, '[{"src":"TB2MwBZkkZmBKNjSZPiXXXFNVXa_!!3842043700.jpg"},{"src":"TB2fcXJCKySBuNjy1zdXXXPxFXa_!!3842043700.jpg"},{"src":"TB2iCWfCQSWBuNjSszdXXbeSpXa_!!3842043700.jpg"},{"src":"TB20p99CGmWBuNjy1XaXXXCbXXa_!!3842043700.jpg"}]', '无服务范围限制'),
(14, '德国欧帝亚全新立式家用钢琴123正品88键专业演奏成人黑白色钢琴', 11800, 33750, 1923, '[{"src":"TB2cfskbgRkpuFjy1zeXXc.6FXa_!!69824228.jpg"},{"src":"TB256VoXR0kpuFjy1zdXXXuUVXa_!!69824228.jpg"},{"src":"TB2cTxoXHtlpuFjSspoXXbcDpXa_!!69824228.jpg"}]', '淘金币可抵236.00元'),
(15, '罗林斯中音萨克斯管乐器正品成人9901降E调中音萨克斯初学者', 7300, 12345, 2, '[{"src":"O1CN01lzcRyV1XzILNBthmT_!!197292994.jpg"},{"src":"O1CN01EUapzt1XzIM3bMcJQ_!!0-item_pic.jpg"}]', '品牌: roullinsar/罗林斯'),
(16, '满口埙十孔10孔陶埙古埙土梁吐良埙书法刻字乐器E F G调追乐熏勋', 157.79, 380, 2127, '[{"src":"TB2DCBlfgDD8KJjy0FdXXcjvXXa_!!280149087.jpg"},{"src":"TB21kkJe3vD8KJjSsplXXaIEFXa_!!280149087.jpg"},{"src":"TB2P63Ve8HH8KJjy0FbXXcqlpXa_!!280149087.jpg"},{"src":"TB2e9FlfgDD8KJjy0FdXXcjvXXa_!!280149087.jpg"}]', '100元店铺优惠券，满3000元可用');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_password` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_phone`, `user_password`) VALUES
(1, 'root', '13912345678', '12345t'),
(2, '马小跳', '13812389087', '12345t'),
(6, 'qwe', '13412341234', '12345t'),
(7, 'mjn', '13456889829', 'ma123456'),
(8, 'grger', '18154674943', '12345t');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=17;
--
-- 使用表AUTO_INCREMENT `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
