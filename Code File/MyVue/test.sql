/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2020-10-15 10:34:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `grade1` varchar(255) DEFAULT NULL,
  `grade2` varchar(255) DEFAULT NULL,
  `grade3` varchar(255) DEFAULT NULL,
  `grade4` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('1', '100', '70', '35', '0', '180207000');
INSERT INTO `account` VALUES ('2', '120', '40', '35', '50', '180207001');
INSERT INTO `account` VALUES ('3', '100', '0', '40', '50', '180207002');
INSERT INTO `account` VALUES ('4', '120', '30', '40', '20', '180207003');
INSERT INTO `account` VALUES ('5', '100', '50', '30', '30', '180207004');
INSERT INTO `account` VALUES ('6', '90', '70', '30', '60', '180207005');
INSERT INTO `account` VALUES ('7', '110', '0', '35', '0', '180207003');

-- ----------------------------
-- Table structure for admin_info
-- ----------------------------
DROP TABLE IF EXISTS `admin_info`;
CREATE TABLE `admin_info` (
  `account` int(10) NOT NULL,
  `password` char(20) NOT NULL,
  `admin` char(20) NOT NULL,
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_info
-- ----------------------------
INSERT INTO `admin_info` VALUES ('1802', '1802', '老师');
INSERT INTO `admin_info` VALUES ('180207000', '180207000', '吴萍');
INSERT INTO `admin_info` VALUES ('180207001', '180207001', '酷睿');
INSERT INTO `admin_info` VALUES ('180207002', '180207002', '本恩');
INSERT INTO `admin_info` VALUES ('180207003', '180207003', '王强');
INSERT INTO `admin_info` VALUES ('180207004', '180207004', '路由');
INSERT INTO `admin_info` VALUES ('180207005', '180207005', '瑟提');
INSERT INTO `admin_info` VALUES ('180207006', '180207006', '小红');
INSERT INTO `admin_info` VALUES ('180207008', '12345678', '小花');
INSERT INTO `admin_info` VALUES ('180207009', '123456', '李华');

-- ----------------------------
-- Table structure for choose
-- ----------------------------
DROP TABLE IF EXISTS `choose`;
CREATE TABLE `choose` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  `choice1` varchar(255) DEFAULT NULL,
  `choice2` varchar(255) DEFAULT NULL,
  `choice3` varchar(255) DEFAULT NULL,
  `choice4` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of choose
-- ----------------------------
INSERT INTO `choose` VALUES ('1', '关于千岛湖的形成下面那个选项是正确的：', 'A.千岛湖是建国后因修水库大坝而成的人工湖', 'B.千岛湖是自然气候因素形成的天然湖泊。', 'C.千岛湖是许多小岛积聚起来形成的湖泊。', 'D.千岛湖是地壳运动生成的湖泊。', 'A');
INSERT INTO `choose` VALUES ('2', '浙江淳安千岛湖由哪个外力形成的', 'A.风', 'B.流水', 'C.冰川', 'D.人为因素', 'D');
INSERT INTO `choose` VALUES ('3', '千岛湖属于', 'A.人工湖', 'B.自然湖', 'C.咸水湖', 'D.盐湖', 'B');
INSERT INTO `choose` VALUES ('4', '千岛湖又名', 'A．三峡水库', 'B．新安江水库', 'C.丹江口水库', 'D.刘家峡水库', 'B');
INSERT INTO `choose` VALUES ('5', '以下哪个不是千岛湖的特产？', 'A.野生鱼干', 'B.淡水虾干', 'C.临安山核桃', 'D.酸菜鱼', 'D');
INSERT INTO `choose` VALUES ('6', '围网捕鱼的第二个步骤是以下哪个？', 'A.侦察鱼群', 'B.刺网赶鱼', 'C.设置包围圈', 'D.收网起鱼', 'C');
INSERT INTO `choose` VALUES ('7', '千岛湖（新安江水库）于   年建成，历时   年', 'A．1955,5', 'B．1955,3', 'C.1960,3', 'D. 1960，5', 'D');
INSERT INTO `choose` VALUES ('8', '千岛湖位于', 'A．浙江省杭州市淳安县', 'B．浙江省宁波市', 'C. 浙江省湖州市德清县', 'D. 浙江省嘉兴市', 'A');
INSERT INTO `choose` VALUES ('9', '以下哪个不属于千岛湖名人', 'A.唐代农民起义女英雄陈硕真', 'B.北宋农民起义领导方腊', 'C.明朝著名清官海瑞', 'D.唐朝诗仙李白', 'D');
INSERT INTO `choose` VALUES ('10', '以下的诗歌发生的地点淳安与哪个湖有关？《富春舟中》明代 · 佘翔    寒云落木晚萧萧，人与孤舟对寂寥。忽见西风吹五两，月明还趁浙江潮。', 'A. 西湖', 'B.千岛湖', 'C.盐湖', 'D.洞庭湖', 'B');
INSERT INTO `choose` VALUES ('11', '千岛湖属于   级旅游景区', 'A．5A', 'B．4A', 'C．3A', 'D．2A', 'A');
INSERT INTO `choose` VALUES ('12', '千岛湖最佳游览季节是', 'A.6月-8月', 'B.9月-11月', 'C.10月-12月', 'D.3月-5月', 'B');
INSERT INTO `choose` VALUES ('13', '千岛湖可以分为多少个湖区？', 'A.西北、东北、东南、西南，4个湖区', 'B.西北、东北、东南、西南，中心湖区，5个湖区', 'C.东北、东南、西南，3个湖区', 'D.西南、西北、东南、中心湖区，4个湖区', 'B');
INSERT INTO `choose` VALUES ('14', '以下哪个不是千岛湖的景点？', 'A.陈硕真起义遗址', 'B.长岭石柱', 'C.仙人潭', 'D.雷峰塔', 'D');

-- ----------------------------
-- Table structure for grade
-- ----------------------------
DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade
-- ----------------------------
INSERT INTO `grade` VALUES ('1', '0');
INSERT INTO `grade` VALUES ('2', '0');
INSERT INTO `grade` VALUES ('3', '40');
INSERT INTO `grade` VALUES ('4', '0');
INSERT INTO `grade` VALUES ('5', '0');
INSERT INTO `grade` VALUES ('6', '0');
INSERT INTO `grade` VALUES ('7', '0');
INSERT INTO `grade` VALUES ('8', '60');
INSERT INTO `grade` VALUES ('9', '10');
INSERT INTO `grade` VALUES ('10', '0');
INSERT INTO `grade` VALUES ('11', '0');
INSERT INTO `grade` VALUES ('12', '10');
INSERT INTO `grade` VALUES ('13', '40');
INSERT INTO `grade` VALUES ('14', '80');
INSERT INTO `grade` VALUES ('15', '0');
INSERT INTO `grade` VALUES ('16', '50');
INSERT INTO `grade` VALUES ('17', '50');
INSERT INTO `grade` VALUES ('18', '20');
INSERT INTO `grade` VALUES ('19', '50');
INSERT INTO `grade` VALUES ('20', '30');
INSERT INTO `grade` VALUES ('21', '30');
INSERT INTO `grade` VALUES ('22', '30');
INSERT INTO `grade` VALUES ('23', '30');
INSERT INTO `grade` VALUES ('24', '40');
INSERT INTO `grade` VALUES ('25', '50');
INSERT INTO `grade` VALUES ('26', '60');
INSERT INTO `grade` VALUES ('27', '10');
INSERT INTO `grade` VALUES ('28', '0');
INSERT INTO `grade` VALUES ('29', '30');
INSERT INTO `grade` VALUES ('30', '0');
INSERT INTO `grade` VALUES ('31', '0');

-- ----------------------------
-- Table structure for grade_2
-- ----------------------------
DROP TABLE IF EXISTS `grade_2`;
CREATE TABLE `grade_2` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of grade_2
-- ----------------------------
INSERT INTO `grade_2` VALUES ('1', '0');
INSERT INTO `grade_2` VALUES ('2', '0');
INSERT INTO `grade_2` VALUES ('3', '20');
INSERT INTO `grade_2` VALUES ('4', '0');
INSERT INTO `grade_2` VALUES ('5', '0');
INSERT INTO `grade_2` VALUES ('6', '0');
INSERT INTO `grade_2` VALUES ('7', '0');
INSERT INTO `grade_2` VALUES ('8', '70');
INSERT INTO `grade_2` VALUES ('9', '40');
INSERT INTO `grade_2` VALUES ('10', '80');
INSERT INTO `grade_2` VALUES ('11', '0');
INSERT INTO `grade_2` VALUES ('12', '50');
INSERT INTO `grade_2` VALUES ('13', '70');
INSERT INTO `grade_2` VALUES ('14', '0');

-- ----------------------------
-- Table structure for green
-- ----------------------------
DROP TABLE IF EXISTS `green`;
CREATE TABLE `green` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `shows` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of green
-- ----------------------------
INSERT INTO `green` VALUES ('1', '1');
INSERT INTO `green` VALUES ('2', '1');
INSERT INTO `green` VALUES ('3', '1');
INSERT INTO `green` VALUES ('4', '1');
INSERT INTO `green` VALUES ('5', '1');

-- ----------------------------
-- Table structure for poem_choose
-- ----------------------------
DROP TABLE IF EXISTS `poem_choose`;
CREATE TABLE `poem_choose` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  `choice1` varchar(255) DEFAULT NULL,
  `choice2` varchar(255) DEFAULT NULL,
  `choice3` varchar(255) DEFAULT NULL,
  `choice4` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of poem_choose
-- ----------------------------
INSERT INTO `poem_choose` VALUES ('1', '《富春渚诗》的作者谢灵运是哪个朝代的？', 'A.清朝', 'B.明朝', 'C.南北朝', 'D.唐朝', 'C');
INSERT INTO `poem_choose` VALUES ('2', '“溯流触惊急，临圻阻参错”出自哪一首诗？', 'A.富春舟中', 'B.富春渚诗', 'C.富春', 'D.游千岛湖', 'B');
INSERT INTO `poem_choose` VALUES ('3', '“天渐苍茫水渐黟”的意思是？', 'A.宏伟的千岛湖面一望无涯', 'B.天色逐渐苍茫水也渐渐变多', 'C.雾气蒸腾岛影浮现', 'D.太阳照射湖面像鱼鳞一样闪烁', 'B');
INSERT INTO `poem_choose` VALUES ('4', '“岚腾岛影浮”的“岚”指的是？', 'A．雾气', 'B．雨水', 'C.阳光', 'D.微风', 'A');
INSERT INTO `poem_choose` VALUES ('5', '将太阳比喻成鱼鳞一样闪烁的诗句是？', 'A.岚腾岛影浮', 'B.日出磷光烁', 'C.天渐苍茫水渐黟', 'D.平湖千顷碧', 'B');
INSERT INTO `poem_choose` VALUES ('6', '下列哪句诗句是描写雪停太阳出来后的千岛湖景色？', 'A.一川如画晚晴新', 'B.寒云落木晚萧萧', 'C.日出磷光烁', 'D.雪晴山脊见', 'D');
INSERT INTO `poem_choose` VALUES ('7', '下列哪句诗句是描写孤独的心情？', 'A.不敢停桡更问津', 'B.人与孤舟对寂寥', 'C.自笑无媒者，逢人作解嘲', 'D. 怀抱既昭旷，外物徒龙蠖', 'B');
INSERT INTO `poem_choose` VALUES ('8', '“水送山迎入富春”中“水送山迎”的意思是？', 'A.山清水秀，风景秀丽', 'B.水来接送，山来迎接，说明距离目的地很近', 'C. 指赏玩风光，寄情山水之中，也形容旅途漫长', 'D. 说明旅途开始，眼前的山水渐渐远去', 'C');
INSERT INTO `poem_choose` VALUES ('9', '下列哪句诗运用了比喻的修辞手法？', 'A.水送山迎入富春', 'B.一川如画晚晴新', 'C.严光万古清风在', 'D.浩然一往赴无涯', 'B');
INSERT INTO `poem_choose` VALUES ('10', '下列哪句诗中，诗人以扬雄自喻,说逢人就要对他人给予的嘲笑加以解释？', 'A. 未必柳间无谢客，也应花里有秦人', 'B.平生协幽期，沦踬困微弱', 'C.自笑无媒者，逢人作解嘲', 'D.怀抱既昭旷，外物徒龙蠖', 'C');
INSERT INTO `poem_choose` VALUES ('11', '诗人自评“尽管我没有伯昏无人的气概，竟然如吕梁丈夫般闯过险泷” 的是下列哪句诗？', 'A.平生协幽期，沦踬困微弱', 'B.怀抱既昭旷，外物徒龙蠖', 'C.溯流触惊急，临圻阻参错', 'D.亮乏伯昏分，险过吕梁壑', 'D');
INSERT INTO `poem_choose` VALUES ('12', '下列哪句诗表达了作者心胸顿时豁然开朗旷达的心境？', 'A.怀抱既昭旷，外物徒龙蠖', 'B.未必柳间无谢客，也应花里有秦人', 'C.自笑无媒者，逢人作解嘲', 'D.宿心渐申写，万事俱零落', 'A');
INSERT INTO `poem_choose` VALUES ('13', '下列哪句诗表达了作者平生之志本在于幽栖养生，只因意志薄弱陷于困顿之境的心意？', 'A.平生协幽期，沦踬困微弱', 'B.宿心渐申写，万事俱零落', 'C.严光万古清风在，不敢停桡更问津', 'D.江源南去永，野渡暂维梢', 'A');
INSERT INTO `poem_choose` VALUES ('14', '“怀抱既昭旷，外物徒龙蠖”中的外物指的是？', 'A.身外之事，即世事', 'B.身外之物，即金钱', 'C.外界的事物，指的是千岛湖以外', 'D.身外之物，指不重要的物品', 'A');
INSERT INTO `poem_choose` VALUES ('15', '“宿心渐申写，万事俱零落”中的“宿心”指的是？', 'A.指未完成的心愿', 'B.夜晚的心境', 'C.一直以来的愿望，指升迁', 'D.宿愿，指隐居', 'D');
INSERT INTO `poem_choose` VALUES ('16', '“宿心渐申写，万事俱零落”中的“申写”指的是？', 'A.舒展', 'B.书写', 'C.描述，表达', 'D.申诉', 'A');
INSERT INTO `poem_choose` VALUES ('17', '“宿心渐申写，万事俱零落”中的“万事俱零落”的意思是？', 'A.许多事情都已经结束了，无法挽回', 'B.万事万物都已经凋零破败', 'C.尘世的一切俗世从此完全抛却', 'D.尘世的一切都已经被忘记，万物凋敝', 'C');
INSERT INTO `poem_choose` VALUES ('18', '下列哪句诗中，运用了“扬子解嘲”的典故？', 'A.未必柳间无谢客，也应花里有秦人', 'B.平生协幽期，沦踬困微弱', 'C.自笑无媒者，逢人作解嘲', 'D.怀抱既昭旷，外物徒龙蠖', 'C');
INSERT INTO `poem_choose` VALUES ('19', '“未必柳间无谢客，也应花里有秦人” 中的“谢客”指的是？', 'A.谢绝客人拜访', 'B.代指席间的某位客人，其人姓谢', 'C.南北朝著名诗人谢灵运', 'D.东晋名臣谢安', 'C');
INSERT INTO `poem_choose` VALUES ('20', '“未必柳间无谢客，也应花里有秦人” 中的“秦人”在这里指的是？', 'A.秦代的人', 'B.秦人的后代', 'C.秦汉时，北方民族对汉人的称呼', 'D.桃花源里隐居的人', 'D');
INSERT INTO `poem_choose` VALUES ('21', '在吴融的《富春》中，作者自谦说自己在高人雅士面前不敢停桡问津的句子是？', 'A.严光万古清风在，不敢停桡更问津', 'B.未必柳间无谢客，也应花里有秦人。', 'C.平生协幽期，沦踬困微弱', 'D.亮乏伯昏分，险过吕梁壑', 'A');
INSERT INTO `poem_choose` VALUES ('22', '“严光万古清风在，不敢停桡更问津”中“问津”包含的典故是？', 'A.陶潜在《桃花源记》中写的“后遂无问津者”', 'B.孔子迷路，使子路向隐者问津而遭到讥笑', 'C.冯骥才在《雕花烟斗》中用“问津”指询问价格', 'D.南朝梁沉约在《桐柏山金庭馆碑》中写道“寻师讲道，结友问津。”', 'B');
INSERT INTO `poem_choose` VALUES ('23', '“江源南去永，野渡暂维梢”中的“维梢”意思是？', 'A.惟妙惟肖', 'B.系船停泊', 'C.保护好树梢', 'D.停止奏乐，梢指古代奏乐时拿的竿子', 'B');
INSERT INTO `poem_choose` VALUES ('24', '“自笑无媒者，逢人作解嘲” 中的“无媒者”指的是？', 'A.没有婚姻介绍人', 'B.没有引荐的人', 'C.没有支持自己的人', 'D.没有遇到喜欢的人', 'B');
INSERT INTO `poem_choose` VALUES ('25', '下列哪句诗句表达富春是避世隐居的胜地，柳里花间，应多有逸人雅士？', 'A.未必柳间无谢客，也应花里有秦人', 'B.严光万古清风在，不敢停桡更问津', 'C.亮乏伯昏分，险过吕梁壑', 'D.自笑无媒者，逢人作解嘲', 'A');

-- ----------------------------
-- Table structure for point
-- ----------------------------
DROP TABLE IF EXISTS `point`;
CREATE TABLE `point` (
  `ID` int(11) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `shows` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of point
-- ----------------------------
INSERT INTO `point` VALUES ('1', '千岛湖的形成', '0');
INSERT INTO `point` VALUES ('2', '千岛湖的渔业', '0');
INSERT INTO `point` VALUES ('3', '千岛湖的历史', '0');
INSERT INTO `point` VALUES ('4', '游览千岛湖', '0');

-- ----------------------------
-- Table structure for stu_info
-- ----------------------------
DROP TABLE IF EXISTS `stu_info`;
CREATE TABLE `stu_info` (
  `name` varchar(255) NOT NULL,
  `num` int(50) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  PRIMARY KEY (`num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stu_info
-- ----------------------------
INSERT INTO `stu_info` VALUES ('王勇', '1001', '男', '浙江省杭州市江干区白杨街道学源街998号');
INSERT INTO `stu_info` VALUES ('殷忠', '1002', '男', '浙江省杭州市江干区白杨街道学源街998号');
INSERT INTO `stu_info` VALUES ('丁香', '1003', '女', '浙江省杭州市江干区白杨街道学源街998号');
INSERT INTO `stu_info` VALUES ('茗儿', '1004', '男', '浙江省杭州市江干区白杨街道学源街998号');
INSERT INTO `stu_info` VALUES ('朱朝阳', '1005', '男', '浙江省杭州市江干区白杨街道学源街998号');
INSERT INTO `stu_info` VALUES ('岳普', '1006', '女', '浙江省杭州市江干区白杨街道学源街998号');
