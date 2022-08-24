<template>
  <div class="fog">
    <figure class="absolute-bg"></figure>
    <div class="fog__container">
      <div class="fog__img fog__img--first"></div>
      <div class="fog__img fog__img--second"></div>
    </div>
    <div id="sign1" @mouseenter="poemControl1"></div>
    <div id="sign2" @mouseenter="poemControl2"></div>
    <div id="sign3" @mouseenter="poemControl3"></div>
    <div id="sign4" @mouseenter="poemControl4"></div>
    <div id="sign5" @mouseenter="poemControl5"></div>
    <div id="sign6" @mouseenter="poemControl6"></div>
    <transition name="show">
      <div v-show="poemShow1" id="poem1" @mouseleave="poemClose1">
        <img src="../assets/jpg/诗歌22.png" alt />
      </div>
    </transition>
    <transition name="show">
      <div v-show="poemShow2" id="poem2" @mouseleave="poemClose2">
        <img src="../assets/jpg/诗歌33.png" alt />
      </div>
    </transition>
    <transition name="show">
      <div v-show="poemShow3" id="poem3" @mouseleave="poemClose3">
        <img src="../assets/jpg/诗歌44.png" alt />
      </div>
    </transition>
    <transition name="show">
      <div v-show="poemShow4" id="poem4" @mouseleave="poemClose4">
        <img src="../assets/jpg/诗歌55.png" alt />
      </div>
    </transition>
    <transition name="show">
      <div v-show="poemShow5" id="poem5" @mouseleave="poemClose5">
        <img src="../assets/jpg/诗歌66.png" alt />
      </div>
    </transition>
    <transition name="show">
      <div v-show="poemShow6" id="poem6" @mouseleave="poemClose6">
        <img src="../assets/jpg/诗歌77.png" alt />
      </div>
    </transition>
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onindex1" @mouseleave="offindex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/History">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%;z-index: 99">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 200%;height: 100%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 140%" v-if="showTeacher"
      >小朋友，将鼠标移至诗歌名称初可以查看诗歌内容哦！</div>
      <div class="buttonStyle_2" v-if="showTeacher" @click="showTeacher = !showTeacher"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "HelloWorld",
  data() {
    return {
      toolTopbody: "",
      poemShow1: false,
      poemShow2: false,
      poemShow3: false,
      poemShow4: false,
      poemShow5: false,
      poemShow6: false,
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
    end4(){
      this.showTeacher = false;
    },
    reStart(){
      this.showTeacher = !this.showTeacher;
    },
    itemMouseover: function () {
      var focusTooltip = $("#focus_toolTip");
      focusTooltip.css("display", "block");
    },

    itemMouseout: function () {
      var focusTooltip = $("#focus_toolTip");
      focusTooltip.css("display", "none");
    },

    itemMousemove: function (e) {
      var self = this;
      var focusTooltip = $("#focus_toolTip");
      focusTooltip.css("top", e.clientY - 1 + "px");
      focusTooltip.css("left", e.clientX + 5 + "px");
      var effectHtml =
        "<div style='font-size:12px;margin-top:5px;'>" + "</div>";
      self.toolTopbody = headerHtml + effectHtml;
    },

    poemControl1() {
      this.poemShow1 = true;
    },
    poemClose1() {
      this.poemShow1 = false;
    },

    poemControl2() {
      this.poemShow2 = true;
    },
    poemClose2() {
      this.poemShow2 = false;
    },

    poemControl3() {
      this.poemShow3 = true;
    },
    poemClose3() {
      this.poemShow3 = false;
    },

    poemControl4() {
      this.poemShow4 = true;
    },
    poemClose4() {
      this.poemShow4 = false;
    },

    poemControl5() {
      this.poemShow5 = true;
    },
    poemClose5() {
      this.poemShow5 = false;
    },

    poemControl6() {
      this.poemShow6 = true;
    },
    poemClose6() {
      this.poemShow6 = false;
    },
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
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buttonStyle_2{
    background: url("../assets/jpg/继续.png");
    background-size: 100% 100%;
    width: 35%;
    height: 13%;
    position: absolute;
    top: 27%;
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

figure {
  margin: 0;
}

.absolute-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100vh;
  width: 100%;
  background-image: url("../assets/jpg/诗歌改背景2.jpg");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}

.fog {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #000;
}

.fog__container {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 99;
}

.fog__img {
  position: absolute;
  height: 100vh;
  width: 300vw;
}

.fog__img--first {
  background: url("../assets/jpg/fog-1(2).png") repeat-x;
  background-size: contain;
  background-position: center;
  -webkit-animation: marquee 60s linear infinite;
  animation: marquee 60s linear infinite;
}

.fog__img--second {
  background: url("../assets/jpg/fog-2(2).png") repeat-x;
  background-size: contain;
  background-position: center;
  -webkit-animation: marquee 40s linear infinite;
  animation: marquee 40s linear infinite;
}

@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-200vw, 0, 0);
    transform: translate3d(-200vw, 0, 0);
  }
}

@keyframes marquee {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    -webkit-transform: translate3d(-200vw, 0, 0);
    transform: translate3d(-200vw, 0, 0);
  }
}

#sign1 {
  background: url("../assets/jpg/g2.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 35%;
  left: 93%;
  z-index: 99;
}

#sign2 {
  background: url("../assets/jpg/g3.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 50%;
  left: 7%;
  z-index: 99;
}

#sign3 {
  background: url("../assets/jpg/g4.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 50%;
  left: 38%;
  z-index: 99;
}

#sign4 {
  background: url("../assets/jpg/g5.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 20%;
  left: 74%;
  z-index: 99;
}

#sign5 {
  background: url("../assets/jpg/g6.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 72%;
  left: 84%;
  z-index: 99;
}

#sign6 {
  background: url("../assets/jpg/g7.png");
  background-size: 100% 100%;
  width: 3%;
  height: 18%;
  position: absolute;
  top: 80%;
  left: 24%;
  z-index: 99;
}

#poem1 {
  width: 30%;
  position: absolute;
  top: 20%;
  left: 60%;
  z-index: 99;
}

#poem2 {
  width: 30%;
  position: absolute;
  top: 30%;
  left: 2%;
  z-index: 99;
}

#poem3 {
  width: 30%;
  position: absolute;
  top: 27%;
  left: 22%;
  z-index: 99;
}

#poem4 {
  width: 30%;
  position: absolute;
  top: 7%;
  left: 62%;
  z-index: 99;
}

#poem5 {
  width: 30%;
  position: absolute;
  top: 40%;
  left: 60%;
  z-index: 99;
}

#poem6 {
  width: 30%;
  position: absolute;
  top: 42%;
  left: 15%;
  z-index: 99;
}

.show-enter-active {
  transition: opacity 2.5s;
  display: flex;
}

.show-enter {
  opacity: 0;
  display: flex;
}
.bg {
  width: 4.25%;
  height: 14%;
  position: absolute;
  top: 3%;
  left: 1.1%;
  z-index: 999;
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
  z-index: 999;
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
  z-index: 999;
}

#back img {
  width: 100%;
  height: 100%;
}
</style>
