
<template>
  <div>
    <full-page :options="options">
      <div class="section">
        <div class="box1"></div>
      </div>
      <div class="section">
        <div class="box2"></div>
      </div>
      <div class="section">
        <div class="box3"></div>
      </div>
      <div class="section">
        <div class="box4"></div>
      </div>
    </full-page>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 160%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:110%;height:20%;position: absolute;z-index: 99;top: -15%;left: 125%" v-if="showTeacher"
      >小朋友，滑动鼠标可以进行下一个景点的学习哦！</div>
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
    <router-link to="/Visit">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      index1: false,
      back: false,
      showTeacher:true,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
      },
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
.box1 {
  background: url("../assets/jpg/中心1.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.box2 {
  background: url("../assets/jpg/中心2.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.box3 {
  background: url("../assets/jpg/中心3.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.box4 {
  background: url("../assets/jpg/中心4.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
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
