<template>
  <div class="MountainChange">
    <div class="moun">
      <!-- <div class="com"></div> -->
      <div class="moun1">
        <img @click="changeRain" src="../assets/jpg/下雨.png" class="img-1" />
      </div>
      <div style="height: 100%; width: 100%" v-if="show">
        <div class="big-1"></div>
        <div class="big-2"></div>
        <div class="big-3"></div>
        <div class="big-4"></div>
        <div class="big-5"></div>
        <div class="big-6"></div>
        <div class="big-7"></div>
        <div class="big-8"></div>
        <div class="big-9"></div>
        <div class="big-10"></div>
        <div class="medium-1"></div>
        <div class="medium-2"></div>
        <div class="medium-3"></div>
        <div class="medium-4"></div>
        <div class="medium-5"></div>
        <div class="medium-6"></div>
        <div class="medium-7"></div>
        <div class="medium-8"></div>
        <div class="medium-9"></div>
        <div class="medium-10"></div>
        <div class="small-1"></div>
        <div class="small-2"></div>
        <div class="small-3"></div>
        <div class="small-4"></div>
        <div class="small-5"></div>
        <div class="small-6"></div>
        <div class="small-7"></div>
        <div class="small-8"></div>
        <div class="small-9"></div>
        <div class="small-10"></div>
      </div>
      <div class="moun2" @click="startBuild">
        <img src="../assets/jpg/建水库.png" class="img-2" />
      </div>
      <div class="moun3" @click="startCar">
        <img src="../assets/jpg/搬家.png" class="img-3" />
      </div>
      <div class="moun4" @click="startMap">
        <img src="../assets/jpg/地图.png" class="img-4" />
      </div>
    </div>
    <transition name="river">
      <div class="boll" v-show="show">
        <div class="water w1" v-show="show"></div>
        <div class="water w2" v-show="show"></div>
        <div class="water" v-show="show"></div>
      </div>
    </transition>
    <transition name="forward">
      <div v-show="showBulldozer" class="build">
        <img src="../assets/jpg/build.png" alt />
      </div>
    </transition>
    <transition name="forward">
      <div v-show="showBulldozer" class="build1">
        <img src="../assets/jpg/灰.png" alt />
      </div>
    </transition>
    <transition name="appear">
      <div v-show="showBulldozer" id="block">
        <img src="../assets/jpg/建水库1.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="forward">
      <div v-show="showCar" class="build">
        <img src="../assets/jpg/搬家.png" alt />
      </div>
    </transition>
    <transition name="forward">
      <div v-show="showCar" class="build2">
        <img src="../assets/jpg/灰.png" alt />
      </div>
    </transition>
    <transition name="cloud1">
      <div v-show="showMap" class="clouds1">
        <img src="../assets/jpg/c1.png" alt />
      </div>
    </transition>
    <transition name="cloud2">
      <div v-show="showMap" class="clouds2">
        <img src="../assets/jpg/c2.png" />
      </div>
    </transition>
    <transition name="cloud3">
      <div v-show="showMap" class="clouds3">
        <img src="../assets/jpg/c3.png" />
      </div>
    </transition>
    <transition name="cloud4">
      <div v-show="showMap" class="clouds4">
        <img src="../assets/jpg/c4.png" />
      </div>
    </transition>
    <transition name="cloud5">
      <div v-show="showMap" class="clouds5">
        <img src="../assets/jpg/c5.png" />
      </div>
    </transition>
    <transition name="cloud6">
      <div v-show="showMap" class="clouds6">
        <img src="../assets/jpg/c6.png" />
      </div>
    </transition>
    <transition name="appear1">
      <div v-show="showCar2" class="block1">
        <img src="../assets/jpg/搬家1.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="appear1">
      <div v-show="showCar1" class="block1">
        <img src="../assets/jpg/搬家2.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="appear1">
      <div v-show="show" class="block1">
        <img src="../assets/jpg/下雨1.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="appear3">
      <div v-show="showMap" id="block3">
        <img src="../assets/jpg/现今的千岛湖.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="appear2">
      <div v-show="showMap" id="block2">
        <img
          src="../assets/jpg/变迁过程.jpg"
          style="width: 100%; height: 100%"
        />
      </div>
    </transition>
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 50%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 200%;height: 100%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 140%" v-if="showTeacher"
      >小朋友，了解如诗如画的千岛湖的第一步骤肯定是要先知道千岛湖是如何形成，
        话不多说，让我通过不同的按钮功能，了解千岛湖的形成的原因吧！</div>
      <div class="buttonStyle_2" v-if="showTeacher" @click="showTeacher = !showTeacher"></div>
    </div>
    <router-link to="/index1">
      <div id="fish-man" @mouseenter="onFishMan" @mouseleave="offFishMan">
        <img src="../assets/jpg/首页键.png" v-show="!fishMan" />
        <img src="../assets/jpg/首页键2.png" v-show="fishMan" class="color" />
      </div>
    </router-link>
    <router-link to="/index1">
      <div id="fish-man1" @mouseenter="onFishMan1" @mouseleave="offFishMan1">
        <img src="../assets/jpg/返回键.png" v-show="!fishMan1" />
        <img src="../assets/jpg/返回键2.png" v-show="fishMan1" class="color" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      timer: "",
      value: 0,
      showBulldozer: false,
      showCar:false,
      showCar2: false,
      showCar1:false,
      showMap: false,
      fishMan: false,
      fishMan1: false,
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
    reStart(){
      this.showTeacher = !this.showTeacher;
    },
    end1(){
      this.show = false;
    },
    end2(){
      this.showBulldozer = false;
    },
    end3(){
      this.showCar2 = false;
      this.showCar1 = true;
    },
    end4(){
      this.showTeacher = false;
    },
    end5(){
      this.showCar = false;
      this.showCar1 = false;
    },
    onFishMan() {
      this.fishMan = true;
    },
    offFishMan() {
      this.fishMan = false;
    },
    onFishMan1() {
      this.fishMan1 = true;
    },
    offFishMan1() {
      this.fishMan1 = false;
    },
    changeRain: function () {
      this.showBulldozer = false;
      this.showCar = false;
      this.showCar1 = false;
      this.showCar2 = false;
      this.showMap = false;
      this.show = true;
      let _this = this;
      setTimeout(function () {
        _this.end1();
      },10000)
    },
    startBuild() {
      this.show = false;
      this.showCar = false;
      this.showCar1 = false;
      this.showCar2 = false;
      this.showMap = false;
      this.showBulldozer = !this.showBulldozer;
      let _this = this;
      setTimeout(function () {
        _this.end2();
      },10000)
    },
    startCar() {
      this.show = false;
      this.showBulldozer = false;
      this.showCar = true;
      this.showCar2 = true;
      this.showMap = false;
      let _this = this;
      setTimeout(function () {
        _this.end3();
        _this.endCar();
      },10000);
    },
    endCar(){
      let _this = this;
      setTimeout(function () {
        _this.end5();
      },10000);
    },
    startMap() {
      this.show = false;
      this.showBulldozer = false;
      this.showCar = false;
      this.showCar1 = false;
      this.showCar2 = false;
      this.showMap = !this.showMap;
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
  left: 25%;
}
.MountainChange {
  background: url("../assets/jpg/地理变迁过程.jpg") no-repeat;
  width: 100%;
  height: 100vh;
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
.color {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}
#fish-man {
  width: 2%;
  height: 4.3%;
  position: absolute;
  left: 2.2%;
  top: 5%;
}

#fish-man img {
  width: 100%;
  height: 100%;
}
#fish-man1 {
  width: 2%;
  height: 4%;
  position: absolute;
  left: 2.23%;
  top: 10%;
}

#fish-man1 img {
  width: 100%;
  height: 100%;
}
.build1 {
  position: absolute;
  top: 70%;
  left: 69%;
}
.build2 {
  position: absolute;
  top: 73%;
  left: 53%;
}

.moun1 {
  width: 14%;
  position: absolute;
  top: 0;
  left: 83%;
  z-index: 4;
}

.moun2 {
  width: 15%;
  top: 27%;
  left: 83%;
  position: absolute;
}

.moun3 {
  width: 15%;
  position: absolute;
  top: 52%;
  left: 83%;
}
.moun4 {
  width: 15%;
  position: absolute;
  top: 80%;
  left: 83%;
}
.img-1 {
  width: 90%;
  height: 90%;
}

.img-1:active {
  transform: scale(0.8);
}

.img-2 {
  width: 90%;
  height: 90%;
}

.img-2:active {
  transform: scale(0.8);
}

.img-3 {
  width: 90%;
  height: 90%;
}

.img-3:active {
  transform: scale(0.8);
}
.img-4 {
  width: 90%;
  height: 90%;
}

.img-4:active {
  transform: scale(0.8);
}
.com {
  border-radius: 0 50% 50% 50%;
  background: skyblue;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
}

body,
div,
h1,
h2,
h3,
html,
li,
p,
ul {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@-webkit-keyframes move_wave {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 832px 0;
  }
}

@keyframes move_wave {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 832px 0;
  }
}

.boll {
  height: 25%;
  width: 79.75%;
  /* border-radius: 50%;
    border: 2px solid #fe810c; */
  float: left;
  position: fixed;
  bottom: -10%;
  left: 1%;
  font-size: 14px;
  overflow: hidden;
}

.water {
  height: 50%;
  background: url("../assets/jpg/波浪.png") repeat-x;
  position: absolute;
  width: 100%;
  -webkit-animation: move_wave 4s linear infinite;
  animation: move_wave 4s linear infinite;
}

.w1 {
  opacity: 0.5;
  background-position: 120px 0;
  -webkit-animation: move_wave 10s linear infinite;
  animation: move_wave 3s linear infinite;
}

.w2 {
  opacity: 0.3;
  background-position: 60px 0;
  -webkit-animation: move_wave 8s linear infinite;
  animation: move_wave 8s linear infinite;
}

.big-1,
.medium-1,
.small-1,
.medium-2,
.small-2,
.medium-3,
.small-3,
.medium-4,
.small-4,
.medium-5,
.small-5,
.medium-6,
.small-6,
.medium-7,
.small-7,
.medium-8,
.small-8,
.medium-9,
.small-9,
.medium-10,
.small-10 {
  position: absolute;
  z-index: 20;
  bottom: 49%;
  left: 2%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.95s linear 1.16s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-1:before,
.medium-1:before,
.small-1:before,
.medium-2:before,
.small-2:before,
.medium-3:before,
.small-3:before,
.medium-4:before,
.small-4:before,
.medium-5:before,
.small-5:before,
.medium-6:before,
.small-6:before,
.medium-7:before,
.small-7:before,
.medium-8:before,
.small-8:before,
.medium-9:before,
.small-9:before,
.medium-10:before,
.small-10:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-1:after,
.medium-1:after,
.small-1:after,
.medium-2:after,
.small-2:after,
.medium-3:after,
.small-3:after,
.medium-4:after,
.small-4:after,
.medium-5:after,
.small-5:after,
.medium-6:after,
.small-6:after,
.medium-7:after,
.small-7:after,
.medium-8:after,
.small-8:after,
.medium-9:after,
.small-9:after,
.medium-10:after,
.small-10:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 22%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-1 {
  left: 72%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 1.28s infinite;
  animation-fill-mode: both;
}
.medium-1:before {
  top: -2%;
  left: 61%;
  width: 10px;
  height: 10px;
}
.medium-1:after {
  top: -4%;
  left: 62%;
  width: 10px;
  height: 10px;
}

.small-1 {
  left: 32%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 0.96s infinite;
  animation-fill-mode: both;
}
.small-1:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-1:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-2 {
  position: absolute;
  z-index: 20;
  bottom: 13%;
  left: 53%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.95s linear 0.8s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-2:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-2:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2px;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-2 {
  left: 44%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 0.96s infinite;
  animation-fill-mode: both;
}
.medium-2:before {
  top: -2%;
  left: 5%;
  width: 10px;
  height: 10px;
}
.medium-2:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-2 {
  left: 57%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2s linear 0.36s infinite;
  animation-fill-mode: both;
}
.small-2:before {
  top: -2%;
  left: 6%;
  width: 10px;
  height: 10px;
}
.small-2:after {
  top: -3%;
  left: 16%;
  width: 10px;
  height: 10px;
}

.big-3 {
  position: absolute;
  z-index: 20;
  bottom: 8%;
  left: 20%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.85s linear 0.48s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-3:before {
  position: absolute;
  content: "";
  display: block;
  top: -2%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-3:after {
  position: absolute;
  content: "";
  display: block;
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-3 {
  left: 60%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 0.36s infinite;
  animation-fill-mode: both;
}
.medium-3:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-3:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-3 {
  left: 20%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 0.28s infinite;
  animation-fill-mode: both;
}
.small-3:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-3:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-4 {
  position: absolute;
  z-index: 20;
  bottom: 4%;
  left: 74%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.95s linear 1.88s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-4:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-4:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-4 {
  left: 34%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 1.76s infinite;
  animation-fill-mode: both;
}
.medium-4:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-4:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-4 {
  left: 14%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2s linear 0.68s infinite;
  animation-fill-mode: both;
}
.small-4:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-4:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-5 {
  position: absolute;
  z-index: 20;
  bottom: 25%;
  left: 10%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.95s linear 0.56s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-5:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-5:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-5 {
  left: 30%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.4s linear 0.68s infinite;
  animation-fill-mode: both;
}
.medium-5:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-5:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-5 {
  left: 37%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2s linear 1.24s infinite;
  animation-fill-mode: both;
}
.small-5:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-5:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-6 {
  position: absolute;
  z-index: 20;
  bottom: 22%;
  left: 55%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.85s linear 0.88s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-6:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-6:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-6 {
  left: 25%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.4s linear 1.8s infinite;
  animation-fill-mode: both;
}
.medium-6:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-6:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-6 {
  left: 20%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 0.36s infinite;
  animation-fill-mode: both;
}
.small-6:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-6:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-7 {
  position: absolute;
  z-index: 20;
  bottom: 4%;
  left: 15%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.85s linear 1.12s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-7:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-7:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-7 {
  left: 45%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 0.2s infinite;
  animation-fill-mode: both;
}
.medium-7:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-7:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-7 {
  left: 45%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 1.12s infinite;
  animation-fill-mode: both;
}
.small-7:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-7:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-8 {
  position: absolute;
  z-index: 20;
  bottom: 14%;
  left: 36%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.85s linear 0.92s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-8:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-8:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-8 {
  left: 46%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.5s linear 0.48s infinite;
  animation-fill-mode: both;
}
.medium-8:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-8:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-8 {
  left: 16%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 1.6s infinite;
  animation-fill-mode: both;
}
.small-8:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-8:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-9 {
  position: absolute;
  z-index: 20;
  bottom: 9%;
  left: 46%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.95s linear 0.44s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-9:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-9:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-9 {
  left: 56%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.4s linear 0.8s infinite;
  animation-fill-mode: both;
}
.medium-9:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-9:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-9 {
  left: 26%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2s linear 0.4s infinite;
  animation-fill-mode: both;
}
.small-9:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-9:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

.big-10 {
  position: absolute;
  z-index: 20;
  bottom: 15%;
  left: 46%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #7fc1f9;
  animation: drop 0.85s linear 1.56s infinite;
  animation-fill-mode: both;
  transform-origin: 50% 100%;
}
.big-10:before {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}
.big-10:after {
  position: absolute;
  content: "";
  display: block;
  top: -5%;
  left: 2%;
  width: 10px;
  height: 10px;
  background-color: #7fc1f9;
  border-radius: 50%;
}

.medium-10 {
  left: 56%;
  opacity: 0.6;
  width: 10px;
  height: 10px;
  animation: drop 1.4s linear 0.28s infinite;
  animation-fill-mode: both;
}
.medium-10:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.medium-10:after {
  top: -4%;
  left: 2%;
  width: 10px;
  height: 10px;
}

.small-10 {
  left: 66%;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  animation: drop 2.1s linear 1.56s infinite;
  animation-fill-mode: both;
}
.small-10:before {
  top: -2%;
  left: 1%;
  width: 10px;
  height: 10px;
}
.small-10:after {
  top: -3%;
  left: 1%;
  width: 10px;
  height: 10px;
}

@keyframes drop {
  0% {
    transform: translate3d(40px, -320px, 0) scaleX(1) scaleY(1) rotate(15deg);
  }
  85% {
    transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(15deg);
  }
  100% {
    transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
  }
}

.forward-enter-active {
  width: 100%;
  transition: all 5s ease;
  display: flex;
}

.forward-enter {
  width: 100%;
  transform: translateX(-60%);
  display: flex;
}
.cloud1-enter-active {
  width: 100%;
  transition: all 8s ease;
  display: flex;
}

.cloud1-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}
.clouds1 {
  position: absolute;
  top: 60%;
  left: 10%;
  z-index: 77;
}
.cloud2-enter-active {
  width: 100%;
  transition: all 4s ease;
  display: flex;
}

.cloud2-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}
.clouds2 {
  position: absolute;
  top: 44%;
  left: 20%;
  z-index: 77;
}
.cloud3-enter-active {
  width: 100%;
  transition: all 6s ease;
  display: flex;
}

.cloud3-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}
.clouds3 {
  position: absolute;
  top: 38%;
  left: 36%;
  z-index: 77;
}
.cloud4-enter-active {
  width: 100%;
  transition: all 5s ease;
  display: flex;
}

.cloud4-enter {
  width: 100%;
  transform: translateX(-20%);
  display: flex;
}
.clouds4 {
  position: absolute;
  top: 69%;
  left: 30%;
  z-index: 77;
}
.cloud5-enter-active {
  width: 100%;
  transition: all 4s ease;
  display: flex;
}

.cloud5-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}
.clouds5 {
  position: absolute;
  top: 51%;
  left: 58%;
  z-index: 77;
}
.cloud6-enter-active {
  width: 100%;
  transition: all 5s ease;
  display: flex;
}

.cloud6-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}
.clouds6 {
  position: absolute;
  top: 66%;
  left: 63%;
  z-index: 77;
}
.build {
  position: absolute;
  top: 70%;
  left: 60%;
}

.river-active {
  transition: opacity 3s;
  display: flex;
}

.river-enter {
  opacity: 0;
  display: flex;
}

#block {
  width: 41%;
  height: 39%;
  position: absolute;
  left: 19%;
  top: 17%;
}
.appear-enter {
  opacity: 0;
  display: flex;
}
.appear-enter-active {
  transition: opacity 3s;
  display: flex;
}
.block1 {
  width: 41%;
  height: 39%;
  position: absolute;
  left: 19%;
  top: 17%;
}
.appear1-enter {
  opacity: 0;
  display: flex;
}
.appear1-enter-active {
  transition: opacity 3s;
  display: flex;
}
#block3 {
  width: 41%;
  height: 39%;
  position: absolute;
  left: 19%;
  top: 17%;
  z-index: 99;
}
.appear3-enter {
  opacity: 0;
  display: flex;
}
.appear3-enter-active {
  transition: opacity 3s;
  display: flex;
}
#block2 {
  width: 80%;
  height: 95%;
  position: absolute;
  left: 1%;
  top: 2%;
}
.appear2-enter {
  opacity: 0;
  display: flex;
}
.appear2-enter-active {
  transition: opacity 3s;
  display: flex;
}
</style>
