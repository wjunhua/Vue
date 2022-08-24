<template>
  <div class="Rotation">
    <div class="ladder">
      <el-carousel :interval="4000" type="card" class="horseRaceLamp">
        <el-carousel-item>
          <router-link @click="go_FishJi" to="/FishJi">
            <div id="img1">
              <div class="word-1">
                <p>鲫鱼是我国最常见的淡水鱼类之一，具</p>
                <p>有杂食性鱼类，食性广、适应性强，是</p>
                <p>我国重要的养殖性鱼类。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishXun" to="/FishXun">
            <div id="img2">
              <div class="word-1">
                <p>中华鲟:硬骨鱼纲鲟科的鱼类。常见个</p>
                <p>体50-300千克,最大个体可达600千克。</p>
                <p>是长江中最大的鱼,有“长江鱼王”之称。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishBlack" to="/FishBlack">
            <div id="img3">
              <div class="word-1">
                <p>黑鱼，是乌鳢的俗称。乌鳢属鲈形目、</p>
                <p>鳢科，是鳢科鱼类中分布最广、产量最</p>
                <p>大的种类。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishBian" to="/FishBian">
            <div id="img4">
              <div class="word-1">
                <p>鳊鱼主要分布于中国长江中、下游附属中</p>
                <p>型湖泊。生长迅速、适应能力强。因其味</p>
                <p>道鲜美，是中国主要淡水养殖鱼类之一。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishGui" to="/FishGui">
            <div id="img5">
              <div class="word-1">
                <p>鳜是真鲈科、鳜属的鱼类属于完全淡水生</p>
                <p>活的鱼类，为肉食性鱼类，性凶猛终生以</p>
                <p>鱼类和其他水生动物为食。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishLu" to="/FishLu">
            <div id="img6">
              <div class="word-1">
                <p>鲈鱼与黄河鲤鱼、鳜鱼及黑龙江兴凯湖大</p>
                <p>白鱼并列为“中国四大淡水名鱼”。我国的</p>
                <p>鲈鱼品种以松江鲈为主，又名四腮鲈鱼。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishHua" to="/FishHua">
            <div id="img7">
              <div class="word-1">
                <p>花鲢一般指鳙，是鲤科、鲢属鱼类。从鱼</p>
                <p>苗到成鱼阶段是以浮游动物为主食，兼浮</p>
                <p>游植物，是典型的浮游生物食性的鱼类。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishLi" to="/FishLi">
            <div id="img8">
              <div class="word-1">
                <p>鲤鱼，中文别名鲤拐子、鲤子、毛子，红</p>
                <p>鱼。鲤科中粗强的褐色鱼。原产亚洲，杂</p>
                <p>食性。在水域不大的地方有洄游的习性。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishJin" to="/FishJin">
            <div id="img9">
              <div class="word-1">
                <p>金鱼又称金鲫鱼。鲤科鱼类，是由野生红</p>
                <p>黄色鲫鱼演化而来。远在晋朝就有“赤鳞</p>
                <p>鱼”的文字记载，堪称中国的国粹。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishGun" to="/FishGun">
            <div id="img10">
              <div class="word-1">
                <p>棍子鱼学名属鳡属鲤形目，鲤科，鲃亚科</p>
                <p>似鳡属。俗称：棍子鱼，真线鳡，墨线鳡</p>
                <p>红尾鳡，竿鮈，棒子鱼，竿条鱼。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishHuang" to="/FishHuang">
            <div id="img11">
              <div class="word-1">
                <p>黄颡鱼是鲿科、黄颡鱼属一种常见的淡水</p>
                <p>鱼。含有人类自身不能合成的ω-3、</p>
                <p>EPA和DHA等不饱和脂肪酸。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishGu" to="/FishGu">
            <div id="img12">
              <div class="word-1">
                <p>黑龙江花骨鱼是黑龙江省的地方产品</p>
                <p>花骨鱼分布较广，松花江、乌苏里江</p>
                <p>镜泊湖都有渔获量。以底栖动物为食</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishJia" to="/FishJia">
            <div id="img13">
              <div class="word-1">
                <p>甲鱼，是鳖的俗称，也叫团鱼、水鱼</p>
                <p>是卵生两栖爬行动物，是龟鳖目鳖科</p>
                <p>软壳水生龟的统称。共有20多种。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishNi" to="/FishNi">
            <div id="img14">
              <div class="word-1">
                <p>泥鳅是鳅科、泥鳅属鳅类。体长形</p>
                <p>呈圆柱状，尾柄侧扁而薄。为底栖</p>
                <p>鱼类，栖息于河流、湖泊。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <router-link @click="go_FishBai" to="/FishBai">
            <div id="img15">
              <div class="word-1">
                <p>百花鱼是用鲳鱼制作而成的一道家常菜</p>
                <p>鱼类属于动物性食物，主要提供蛋白质</p>
                <p>和脂肪给人体。</p>
              </div>
            </div>
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 50%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 180%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 140%" v-if="showTeacher"
      >千岛湖是出了名的淡水鱼产地，让我们看看千岛湖的主要鱼类有哪些吧，
        别忘了点击鱼的图片可以查看详情哦！</div>
      <div class="buttonStyle_2" v-if="showTeacher" @click="showTeacher = !showTeacher"></div>
    </div>

    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onindex1" @mouseleave="offindex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/People">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
import "./app.css";
export default {
  data() {
    return {
      index1: false,
      back: false,
      showTeacher:true,
  };
  },
  created() {
      let _this = this;
      setTimeout(function () {
        _this.end4();
      },6000)
    },
    methods: {
    onindex1() {
      this.index1 = true;
    },
    offindex1() {
      this.index1 = false;
    },
    onback() {
      this.back = true;
    },
    offback() {
      this.back = false;
    },
    end4(){
      this.showTeacher = false;
    },
    reStart(){
      this.showTeacher = !this.showTeacher;
    },
  },
};
</script>

<style>
.el-carousel__mask {
  background-color: transparent;
}

.el-carousel__container {
  height: 80%;
}

.el-carousel__arrow--right {
  right: 8%;
}

.el-carousel__arrow--left {
  left: 1%;
}
</style>

<style scoped>
  .buttonStyle_2{
    background: url("../assets/jpg/继续.png");
    background-size: 100% 100%;
    width: 35%;
    height: 13%;
    position: absolute;
    top: 17%;
    left: 170%;
    z-index: 99;
  }
  .buttonStyle_2:active{
    transform: scale(0.8);
  }
  .head{
    width: 60%;
    position: absolute;
    top: 65%;
    left: 10%;
  }
a {
  color: white;
}

.Rotation {
  background: url("../assets/jpg/背景框.jpg") no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.bg {
  width: 4.25%;
  height: 14%;
  position: absolute;
  top: 3%;
  left: 1.1%;
}
.color1 {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}
#index1 {
  width: 2%;
  height: 4.3%;
  position: absolute;
  left: 2.2%;
  top: 5%;
}

#index1 img {
  width: 100%;
  height: 100%;
}
#back {
  width: 2%;
  height: 4%;
  position: absolute;
  left: 2.23%;
  top: 10%;
}

#back img {
  width: 100%;
  height: 100%;
}
.ladder {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#img1 {
  background: url("../assets/jpg/大泡鲫鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}

#img3 {
  background: url("../assets/jpg/大泡黑鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}

#img2 {
  background: url("../assets/jpg/大泡中华鲟鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}

#img4 {
  background: url("../assets/jpg/大泡鳊鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}

#img5 {
  background: url("../assets/jpg/大泡鳜鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}

#img6 {
  background: url("../assets/jpg/大泡鲈鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img7 {
  background: url("../assets/jpg/大泡花鲢.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img8 {
  background: url("../assets/jpg/大泡鲤鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img9 {
  background: url("../assets/jpg/大泡金鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img10 {
  background: url("../assets/jpg/大泡棍子鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img11 {
  background: url("../assets/jpg/大泡黄刺鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img12 {
  background: url("../assets/jpg/大泡花鲴鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img13 {
  background: url("../assets/jpg/大泡野生甲鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img14 {
  background: url("../assets/jpg/大泡泥鳅.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
#img15 {
  background: url("../assets/jpg/大泡百花鱼.png");
  height: 115%;
  width: 80%;
  background-size: 100% 100%;
  position: fixed;
  margin-right: 2%;
}
.word-1 {
  font-size: 1.3vw;
  line-height: 55%;
  position: relative;
  top: 47%;
}

.horseRaceLamp {
  width: 100%;
  height: 80%;
  position: absolute;
  top: 15%;
  left: 4%;
}
</style>
