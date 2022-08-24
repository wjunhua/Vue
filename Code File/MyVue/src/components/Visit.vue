<template>
  <div id="whole">
    <div class="instead" id="background1" v-show="showBg1"></div>
    <div class="instead" id="background2" v-show="showBg2"></div>
    <div class="instead" id="background3" v-show="showBg3"></div>
    <div class="instead" id="background4" v-show="showBg4"></div>
    <div class="instead" id="background5" v-show="showBg5"></div>
    <div class="instead" id="background6" v-show="showBg6"></div>
    <router-link @click="goNorthWest" to="/NorthWest">
      <img
        src="../assets/jpg/西北字.png"
        alt
        id="word1"
        @mouseenter="offBg1"
        @mouseleave="onBg1"
      />
    </router-link>
    <router-link @click="goSouthWest" to="/SouthWest">
      <img
        src="../assets/jpg/西南字.png"
        alt
        id="word2"
        @mouseenter="offBg2"
        @mouseleave="onBg2"
      />
    </router-link>
    <router-link @click="goNorthEast" to="/NorthEast">
      <img
        src="../assets/jpg/东北字.png"
        alt
        id="word3"
        @mouseenter="offBg3"
        @mouseleave="onBg3"
      />
    </router-link>
    <router-link @click="goSouthEast" to="/SouthEast">
      <img
        src="../assets/jpg/东南字.png"
        alt
        id="word4"
        @mouseenter="offBg4"
        @mouseleave="onBg4"
      />
    </router-link>
    <router-link @click="goCenterLake" to="/CenterLake">
      <img
        src="../assets/jpg/中心字.png"
        alt
        id="word5"
        @mouseenter="offBg5"
        @mouseleave="onBg5"
      />
    </router-link>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 160%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:110%;height:20%;position: absolute;z-index: 99;top: -25%;left: 125%" v-if="showTeacher"
      >小朋友！千岛湖分为5个湖区，每个湖区都有其特色的景点，让我们选择自己感兴趣的湖区，进行参观吧！</div>
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
      showBg1: true,
      showBg2: false,
      showBg3: false,
      showBg4: false,
      showBg5: false,
      showBg6: false,
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
    onBg1() {
      this.showBg1 = true;
      this.showBg2 = false;
    },
    offBg1() {
      this.showBg1 = false;
      this.showBg2 = true;
    },
    onBg2() {
      this.showBg1 = true;
      this.showBg3 = false;
    },
    offBg2() {
      this.showBg1 = false;
      this.showBg3 = true;
    },
    onBg3() {
      this.showBg1 = true;
      this.showBg4 = false;
    },
    offBg3() {
      this.showBg1 = false;
      this.showBg4 = true;
    },
    onBg4() {
      this.showBg1 = true;
      this.showBg5 = false;
    },
    offBg4() {
      this.showBg1 = false;
      this.showBg5 = true;
    },
    onBg5() {
      this.showBg1 = true;
      this.showBg6 = false;
    },
    offBg5() {
      this.showBg1 = false;
      this.showBg6 = true;
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
    top: 12%;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#whole {
  height: 100%;
  width: 100%;
}

.instead {
  width: 100%;
  height: 100%;
}

#background1 {
  background: url("../assets/jpg/背景.jpg");
  background-size: 100% 100%;
}

#background2 {
  background: url("../assets/jpg/西北.jpg");
  background-size: 100% 100%;
}

#background3 {
  background: url("../assets/jpg/西南.jpg");
  background-size: 100% 100%;
}

#background4 {
  background: url("../assets/jpg/东北.jpg");
  background-size: 100% 100%;
}

#background5 {
  background: url("../assets/jpg/东南.jpg");
  background-size: 100% 100%;
}

#background6 {
  background: url("../assets/jpg/中心.jpg");
  background-size: 100% 100%;
}

#word1 {
  position: absolute;
  top: 16%;
  left: 22%;
  width: 10%;
}

#word2 {
  position: absolute;
  top: 75.7%;
  left: 31.1%;
  width: 9.5%;
}

#word3 {
  position: absolute;
  top: 15%;
  left: 65%;
  width: 10%;
}

#word4 {
  position: absolute;
  top: 65%;
  left: 66.7%;
  width: 10%;
}

#word5 {
  position: absolute;
  top: 49%;
  left: 43.25%;
  width: 9.5%;
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
