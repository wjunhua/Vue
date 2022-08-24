<template>
  <div id="water">
    <video
      id="video"
      class="play-v"
      poster="../assets/jpg/播放(1).png"
      controls
    >
      <source src="../assets/video/1.千岛湖.mp4" />
    </video>

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
  </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
#water {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.play-v {
  width: 100%;
  outline: none;
}

.control {
  background: url("../assets/jpg/bofang.png") no-repeat;
  background-size: 40%;
  background-position: center;
  width: 10vh;
  height: 10vh;
  background-color: rgba(0, 0, 0, 1);
  opacity: 0.6;
  position: absolute;
  left: 50%;
  top: 45%;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 99;
  outline: none;
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
