<template>
  <div class="viewer" id="test"></div>
</template>

<script>
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
export default {
  data() {
    return {
      factoryLink: require("../assets/jpg/test.jpg"),
    };
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
.viewer {
  /* max-width: 640px; */
  width: 100%;
  margin: 0 auto;
}
</style>