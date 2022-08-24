<template>
  <div class="famous">
    <div class="person-location">
      <div class="list">
        <div class="page1" id="page11"></div>
      </div>
      <div class="bofang" @click="showStart1"></div>
      <div class="Bofang" @click="showEnd" v-if="close"></div>
      <video class="video" controls v-if="close1">
        <source src="../assets/video/杨桂枝.mp4" />
      </video>
      <div class="list">
        <div class="page2" id="page22"></div>
      </div>
      <div class="bofang2" @click="showStart2"></div>
      <video class="video2" controls v-if="close2">
        <source src="../assets/video/贺齐.mp4" />
      </video>
      <div class="list">
        <div class="page3" id="page33"></div>
      </div>
      <div class="bofang3" @click="showStart3"></div>
      <video class="video3" controls v-if="close3">
        <source src="../assets/video/方腊.mp4" />
      </video>
      <div class="list">
        <div class="page4" id="page44"></div>
      </div>
      <div class="bofang4" @click="showStart4"></div>
      <video class="video4" controls v-if="close4">
        <source src="../assets/video/chenshuozhen.mp4" />
      </video>
      <div class="list">
        <div class="page5" id="page55"></div>
      </div>
      <div class="bofang5" @click="showStart5"></div>
      <video class="video5" controls v-if="close5">
        <source src="../assets/video/海瑞.mp4" />
      </video>
      <div class="list">
        <div class="page6" id="page66"></div>
      </div>
      <div class="bofang6" @click="showStart6"></div>
      <video class="video6" controls v-if="close6">
        <source src="../assets/video/方干.mp4" />
      </video>
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 200%;height: 100%;position: absolute;
      top: -50%;left: 95%;z-index: 100" v-if="showTeacher">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 101;top: -20%;left: 140%" v-if="showTeacher"
      >小朋友，点击相应人物名牌可以查看人物生平经历哦！</div>
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
    <router-link to="/History">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      index1: false,
      back: false,
      close: false,
      close1: false,
      close2: false,
      close3: false,
      close4: false,
      close5: false,
      close6: false,
      showTeacher:true,
    };
  },
  mounted() {
    var i = false;
    var a = true;
    var s = true;
    var d = true;
    var f = true;
    var g = true;
    var h = true;
    $(".bofang").click(function () {
      if (i == false) {
        $(".video").fadeIn("slow");
        $(".video").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video").fadeOut("slow");
        $(".video").trigger("pause");
        console.log(2);
        i = false;
      }
    });
    $(".Bofang").click(function () {
      if (a == true) {
        $(".video").fadeOut("slow");
        $("video").trigger("pause");
        console.log(2);
        a = false;
      } else {
        $(".video").fadeOut("slow");
        $(".video").trigger("play");
        console.log(2);
        a = true;
      }
      if (s == true) {
        $(".video2").fadeOut("slow");
        $("video2").trigger("pause");
        console.log(2);
        s = false;
      } else {
        $(".video2").fadeOut("slow");
        $(".video2").trigger("play");
        console.log(2);
        s = true;
      }
      if (d == true) {
        $(".video3").fadeOut("slow");
        $("video3").trigger("pause");
        console.log(2);
        d = false;
      } else {
        $(".video3").fadeOut("slow");
        $(".video3").trigger("play");
        console.log(2);
        d = true;
      }
      if (f == true) {
        $(".video4").fadeOut("slow");
        $("video4").trigger("pause");
        console.log(2);
        f = false;
      } else {
        $(".video4").fadeOut("slow");
        $(".video4").trigger("play");
        console.log(2);
        f = true;
      }
      if (g == true) {
        $(".video5").fadeOut("slow");
        $("video5").trigger("pause");
        console.log(2);
        g = false;
      } else {
        $(".video5").fadeOut("slow");
        $(".video5").trigger("play");
        console.log(2);
        g = true;
      }
      if (h == true) {
        $(".video6").fadeOut("slow");
        $("video6").trigger("pause");
        console.log(2);
        h = false;
      } else {
        $(".video6").fadeOut("slow");
        $(".video6").trigger("play");
        console.log(2);
        h = true;
      }
    });
    $(".bofang2").click(function () {
      if (i == false) {
        $(".video2").fadeIn("slow");
        $(".video2").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video2").fadeOut("slow");
        $(".video2").trigger("pause");
        console.log(2);
        i = false;
      }
    });

    $(".bofang3").click(function () {
      if (i == false) {
        $(".video3").fadeIn("slow");
        $(".video3").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video3").fadeOut("slow");
        $(".video").trigger("pause");
        console.log(2);
        i = false;
      }
    });
    $(".bofang4").click(function () {
      if (i == false) {
        $(".video4").fadeIn("slow");
        $(".video4").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video4").fadeOut("slow");
        $(".video4").trigger("pause");
        console.log(2);
        i = false;
      }
    });
    $(".bofang5").click(function () {
      if (i == false) {
        $(".video5").fadeIn("slow");
        $(".video5").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video5").fadeOut("slow");
        $(".video5").trigger("pause");
        console.log(2);
        i = false;
      }
    });
    $(".bofang6").click(function () {
      if (i == false) {
        $(".video6").fadeIn("slow");
        $(".video6").trigger("play");
        console.log(1);
        i = true;
      } else {
        $(".video6").fadeOut("slow");
        $(".video6").trigger("pause");
        console.log(2);
        i = false;
      }
    });
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
    showStart1() {
      this.close1 = true;
      this.close = true;
    },
    showEnd() {
      this.close = false;
      if (this.close1 === true) {
        this.close1 = false;
      } else if (this.close2 === true) {
        this.close2 = false;
      } else if (this.close3 === true) {
        this.close3 = false;
      } else if (this.close4 === true) {
        this.close4 = false;
      } else if (this.close5 === true) {
        this.close5 = false;
      } else if (this.close6 === true) {
        this.close6 = false;
      }
    },
    showStart2() {
      this.close2 = true;
      this.close = true;
    },
    showStart3() {
      this.close3 = true;
      this.close = true;
    },
    showStart4() {
      this.close4 = true;
      this.close = true;
    },
    showStart5() {
      this.close5 = true;
      this.close = true;
    },
    showStart6() {
      this.close6 = true;
      this.close = true;
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
    z-index: 101;
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

.famous {
  background: url("../assets/jpg/hp背景.jpg") no-repeat;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  z-index: 0;
}

.person-location {
  justify-content: space-around;
  width: 100%;
  display: flex;
}
.bofang {
  width: 3vh;
  height: 25vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 8%;
  top: 12%;
  z-index: 99;
}

.bofang2 {
  width: 3vh;
  height: 23vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 21%;
  top: 41%;
  z-index: 99;
}
.Bofang {
  background: url("../assets/jpg/关闭.png") no-repeat;
  background-size: 100% 100%;
  width: 14vh;
  height: 7vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 79%;
  top: 14%;
  z-index: 99;
}
.bofang3 {
  width: 3vh;
  height: 23vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 37.5%;
  top: 28%;
  z-index: 99;
}
.bofang4 {
  width: 3vh;
  height: 25vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 48.5%;
  top: 8%;
  z-index: 99;
}
.bofang5 {
  width: 3vh;
  height: 23vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 55.5%;
  top: 36%;
  z-index: 99;
}
.bofang6 {
  width: 3vh;
  height: 23vh;
  border-radius: 35%;
  cursor: pointer;
  position: absolute;
  left: 71.5%;
  top: 19%;
  z-index: 99;
}

video.video {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 22%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
video.video2 {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 38%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
video.video3 {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 41%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
video.video4 {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 22%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
video.video5 {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 3%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
video.video6 {
  width: 50%;
  margin-top: 25vh;
  position: absolute;
  left: 22%;
  /* margin-left: 16%; */
  outline: none;
  display: none;
  z-index: 999;
}
.page1 {
  background: url("../assets/jpg/杨桂枝.png") no-repeat;
  background-size: 100% 100%;
  width: 4%;
  height: 26%;
  z-index: 99;
  position: absolute;
  left: 7%;
  top: 12%;
}

.page2 {
  background: url("../assets/jpg//贺齐.png") no-repeat;
  background-size: 100% 100%;
  width: 10%;
  height: 40%;
  top: 33%;
  z-index: 99;
  position: absolute;
  left: 17%;
}

.page3 {
  background: url("../assets/jpg/方腊.png") no-repeat;
  background-size: 100% 100%;
  width: 9%;
  height: 40%;
  top: 20%;
  z-index: 99;
  position: absolute;
  left: 34%;
}

.page4 {
  background: url("../assets/jpg/陈硕真.png") no-repeat;
  background-size: 100% 100%;
  width: 11%;
  height: 42%;
  top: -1%;
  z-index: 99;
  position: absolute;
  left: 43%;
}

.page5 {
  background: url("../assets/jpg/海瑞.png") no-repeat;
  background-size: 100% 100%;
  width: 11%;
  height: 42%;
  top: 25%;
  z-index: 99;
  position: absolute;
  left: 50%;
}

.page6 {
  background: url("../assets/jpg/方午.png") no-repeat;
  background-size: 100% 100%;
  width: 11%;
  height: 43%;
  top: 10%;
  z-index: 99;
  position: absolute;
  left: 66%;
}

.page1 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page1:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
}

.page2 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page2:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
}

.page3 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page3:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
}

.page4 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page4:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
}

.page5 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page5:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
}

.page6 {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  -webkit-transition: all 2s ease-in-out;
  -moz-transition: all 2s ease-in-out;
  -ms-transition: all 2s ease-in-out;
  -o-transition: all 2s ease-in-out;
}

.page6:hover {
  position: absolute;
  transition: all 2s ease-in-out;
  perspective: 800px;
  perspective-origin: 50% 100px;
  transform: rotateY(360deg);
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
