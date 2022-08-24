<template>
  <div class="history">
    <div class="history-location">
      <router-link to="/Poem">
        <div class="page1" id="page11"></div>
      </router-link>
      <router-link to="/WaterCity">
        <div class="page2" id="page22"></div>
      </router-link>
      <router-link to="/Panorama">
        <div class="page3" id="page33"></div>
      </router-link>
      <router-link to="/FamousPerson">
        <div class="page4" id="page44"></div>
      </router-link>
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 200%;height: 100%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div style="width:120%;height:15%;position: absolute;z-index: 99;top: -20%;
      left: 140%;font-size: 1.2vw" v-if="showTeacher"
      >千岛湖有着千年的历史，其中有着许多值得我们学习的历史文化，让我们进入相应的板块进行学习吧！</div>
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.history {
  background: url(../assets/jpg/历史背景.jpg) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  position: fixed;
  font-size: 62.5%;
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
.history-location {
  width: 100%;
  height: 97%;
  position: relative;
  top: 1.5%;
}

.page1 {
  background: url("../assets/jpg/诗词千岛.png") no-repeat;
  background-size: 100% 100%;
  width: 23%;
  height: 50%;
  position: absolute;
  left: 4%;
  top: 11%;
  transition: all 0.6s;
}

.page1:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.page2 {
  background: url("../assets/jpg/水下古城.png") no-repeat;
  background-size: 100% 100%;
  width: 23%;
  height: 50%;
  position: absolute;
  left: 27%;
  top:10%;
  transition: all 0.6s;
}

.page2:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.page3 {
  background: url("../assets/jpg/淳安古韵.png") no-repeat;
  background-size: 100% 100%;
  width: 23%;
  height: 50%;
  position: absolute;
  left: 50%;
  top:12%;
  transition: all 0.6s;
}

.page3:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}

.page4 {
  background: url("../assets/jpg/hp.png") no-repeat;
  background-size: 100% 100%;
  width: 23%;
  height: 50%;
  position: absolute;
  left: 73%;
  top:11%;
  transition: all 0.6s;
}

.page4:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
</style>
