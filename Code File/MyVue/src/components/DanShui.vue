<template>
  <body>
    <div id="way">
      <div id="page1"></div>
      <div id="page2"></div>
      <div id="page3"></div>
      <div id="page4"></div>
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
    <router-link to="/Show">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </body>
</template>
<script>
export default {
  data() {
    return {
      index1: false,
      back: false,
    };
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
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
body {
  background: url("../assets/jpg/淡水虾干.jpg");
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  overflow: hidden;
}

#page1 {
  background: url("../assets/jpg/虾.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 15%;
  height: 20%;
  position: absolute;
  left: 6%;
  top: 60%;
  transition: all 0.6s;
}
#page1:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}
#page2 {
  background: url("../assets/jpg/碗.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 12%;
  height: 17%;
  position: absolute;
  left: 31%;
  top: 60%;
  transition: all 0.6s;
}
#page2:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
}
#page3 {
  background: url("../assets/jpg/大日.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 10%;
  height: 15%;
  position: absolute;
  left: 59%;
  top: 62%;
  transition: all 0.6s;
}
#page3:hover {
  transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
}
#page4 {
  background: url("../assets/jpg/虾干.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 13%;
  height: 16%;
  position: absolute;
  left: 84%;
  top: 62%;
  transition: all 0.6s;
}
#page4:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
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