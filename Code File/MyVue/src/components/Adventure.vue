<template>
  <div class="map">
    <div class="center" @click="show = !show"></div>

    <div class="location">
      <router-link to="/FishingAnswer">
        <div id="fish-man" @mouseenter="onFishMan" @mouseleave="offFishMan">
          <img src="../assets/jpg/打鱼之旅.png" v-show="!fishMan" />
          <img
            src="../assets/jpg/打鱼之旅.png"
            v-show="fishMan"
            class="color"
          />
        </div>
      </router-link>
      <router-link to="/FishGame">
        <div id="fish-man2" @mouseenter="onFishMan2" @mouseleave="offFishMan2">
          <img src="../assets/jpg/鱼类竞猜.png" v-show="!fishMan2" />
          <img
            src="../assets/jpg/鱼类竞猜.png"
            v-show="fishMan2"
            class="color"
          />
        </div>
      </router-link>
      <router-link to="/PoemExam">
        <div id="fish-man3" @mouseenter="onFishMan3" @mouseleave="offFishMan3">
          <img src="../assets/jpg/猜诗词.png" v-show="!fishMan3" />
          <img src="../assets/jpg/猜诗词.png" v-show="fishMan3" class="color" />
        </div>
      </router-link>
      <router-link to="/exam">
        <div id="fish-man4" @mouseenter="onFishMan4" @mouseleave="offFishMan4">
          <img src="../assets/jpg/知识大考验.png" v-show="!fishMan4" />
          <img src="../assets/jpg/知识大考验.png" v-show="fishMan4" class="color" />
        </div>
      </router-link>
      <router-link to="/GuessFamous">
      <div id="fish-man5" @mouseenter="onFishMan5" @mouseleave="offFishMan5">
        <img src="../assets/jpg/猜名人.png" v-show="!fishMan5" />
        <img src="../assets/jpg/猜名人.png" v-show="fishMan5" class="color" />
      </div>
      </router-link>
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 170%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div style="width:100%;height:20%;position: absolute;z-index: 99;top: -20%;left: 130%;font-size: 1.1vw" v-if="showTeacher"
      >小朋友，学习完千岛湖的知识，我们已经积蓄好力量去探险千岛湖的奥秘啦，跟随老师的步伐，去发挥我们的聪明才智吧！</div>
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
    <router-link to="/index1">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      fishMan: false,
      fishMan2: false,
      fishMan3: false,
      fishMan4: false,
      fishMan5: false,
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
    onFishMan() {
      this.fishMan = true;
    },
    offFishMan() {
      this.fishMan = false;
    },
    onFishMan2() {
      this.fishMan2 = true;
    },
    offFishMan2() {
      this.fishMan2 = false;
    },
    onFishMan3() {
      this.fishMan3 = true;
    },
    offFishMan3() {
      this.fishMan3 = false;
    },
    onFishMan4() {
      this.fishMan4 = true;
    },
    offFishMan4() {
      this.fishMan4 = false;
    },
    onFishMan5() {
      this.fishMan5 = true;
    },
    offFishMan5() {
      this.fishMan5 = false;
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
<style scoped>
  .buttonStyle_2{
    background: url("../assets/jpg/继续.png");
    background-size: 100% 100%;
    width: 35%;
    height: 13%;
    position: absolute;
    top: 19%;
    left: 160%;
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
h1 {
  color: #402311;
  font-family: "YouYuan";
  margin-left: -32%;
  font-size: 18px;
  font-weight: bolder;
}

.map {
  background: url("../assets/jpg/探险背景.jpg") no-repeat;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  position: fixed;
  font-size: 62.5%;
  overflow: hidden;
}
.location {
  width: 70%;
  left: 15%;
  height: 74vh;
  position: relative;
}

.center {
  width: 8%;
  height: 16vh;
  position: relative;
  top: 38%;
  left: 47%;
  z-index: 999;
}
.t1 {
  width: 83%;
  height: 100vh;
  position: absolute;
  /* left: 30%; */
  top: 0%;
  z-index: 77;
}
.t2 {
  width: 80%;
  height: 100vh;
  position: absolute;
  left: 21%;
  top: 0;
  z-index: 77;
}
#fish-man {
  width: 21%;
  height: 31%;
  position: absolute;
  left: 1%;
  top: 61%;
}

#fish-man img {
  width: 100%;
  height: 100%;
}
#fish-man2 {
  width: 19%;
  height: 26%;
  position: absolute;
  left: 1%;
  top: 15%;
}

#fish-man2 img {
  width: 100%;
  height: 100%;
}
#fish-man3 {
  width: 20%;
  height: 25%;
  position: absolute;
  left: 29%;
  top: 52%;
}

#fish-man3 img {
  width: 100%;
  height: 100%;
}
#fish-man4 {
  width: 20%;
  height: 23%;
  position: absolute;
  left: 63%;
  top: 25%;
}

#fish-man4 img {
  width: 100%;
  height: 100%;
}
#fish-man5 {
  width: 20%;
  height: 23%;
  position: absolute;
  left: 74%;
  top: 70%;
}
.bp1 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 11%;
  left: 12%;
  z-index: 5;
}
.bp2 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 22%;
  left: 10.5%;
  z-index: 5;
}
.bp3 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 51%;
  left: 7%;
  z-index: 5;
}
.bp4 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 11%;
  left: 61%;
  z-index: 5;
}
.bp5 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 54%;
  left: 70%;
  z-index: 5;
}
.sp1 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 35%;
  left: 15%;
  z-index: 5;
  opacity: 0.6;
}
.sp1 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp2 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 40.5%;
  left: 14.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp2 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp3 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 46.5%;
  left: 14%;
  z-index: 5;
  opacity: 0.6;
}
.sp3 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp4 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 65%;
  left: 13%;
  z-index: 5;
  opacity: 0.6;
}
.sp4 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp5 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 70%;
  left: 12.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp5 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp6 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 75%;
  left: 12%;
  z-index: 5;
  opacity: 0.6;
}
.sp6 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp7 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 80%;
  left: 11.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp7 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp8 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 24%;
  left: 69%;
  z-index: 5;
  opacity: 0.6;
}
.sp8 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp9 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 29%;
  left: 69.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp9 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp10 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 34%;
  left: 70%;
  z-index: 5;
  opacity: 0.6;
}
.sp10 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp11 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 39%;
  left: 70.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp11 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp12 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 44%;
  left: 71%;
  z-index: 5;
  opacity: 0.6;
}
.sp12 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp13 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 66%;
  left: 78%;
  z-index: 5;
  opacity: 0.6;
}
.sp13 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp14 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 71%;
  left: 78.25%;
  z-index: 5;
  opacity: 0.6;
}
.sp14 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp15 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 76%;
  left: 78.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp15 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp16 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 81%;
  left: 78.75%;
  z-index: 5;
  opacity: 0.6;
}
.sp16 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
.sp17 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 86%;
  left: 79%;
  z-index: 5;
  opacity: 0.6;
}
.sp17 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 20%;
  left: -2%;
}
#fish-man5 img {
  width: 100%;
  height: 100%;
}
.color {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-610px);
  opacity: 0;
}
.slide-fade2-enter-active {
  transition: all 0.3s ease;
}
.slide-fade2-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(610px);
  opacity: 0;
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
</style>
