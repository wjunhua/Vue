<template>
  <div class="viewer" id="test">
    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 50%;z-index: 99">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%;z-index: 100" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 180%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 99" v-if="showTeacher">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 127%" v-if="showTeacher"
      >小朋友，快来360°欣赏淳安古色古香的景色吧！</div>
      <div class="buttonStyle_2" v-if="showTeacher" @click="showTeacher = !showTeacher"></div>
    </div>
  </div>
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
export default {
  data() {
    return {
      factoryLink: require("../assets/jpg/test.jpg"),
      showTeacher:true,
    };
  },
  created() {
    let _this = this;
    setTimeout(function () {
      _this.end4();
    },6000)
  },
  methods:{
    end4(){
      this.showTeacher = false;
    },
    reStart(){
      this.showTeacher = !this.showTeacher;
    },
  },
  mounted() {
    const _this = this;
    getTitleHeight();
    loadingAllImg();

    var canvasHeight;
    function getTitleHeight() {
      var maxHeight = window.innerHeight;
      canvasHeight = parseFloat(maxHeight) + "px";
    }
    function loadingAllImg() {
      var div = document.getElementById("test");
      var PSV = new Viewer({
        panorama: _this.factoryLink,
        container: div,
        // 可选，默认值为2000，全景图在time_anim毫秒后会自动进行动画。（设置为false禁用它）
        // time_anim: false,
        // 可选值，默认为false。显示导航条。
        navbar: true,
        // 可选，默认值null，全景图容器的最终尺寸。例如：{width: 500, height: 300}。
        size: {
          width: "100%",
          height: canvasHeight,
        },
      });
    }
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
.viewer {
  /* max-width: 640px; */
  width: 100%;
  margin: 0 auto;
}
</style>
