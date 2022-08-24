<template>
  <div id="perspective">
    <div id="wrap" click.prevent.stop="changeStaut">
      <div>
        <router-link to="/LuoSi">
          <img src="../assets/jpg/1.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/DanShui">
          <img src="../assets/jpg/2.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/BaiMaDiGuaGan">
          <img src="../assets/jpg/3.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/XueCai">
          <img src="../assets/jpg/4.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/YeSheng">
          <img src="../assets/jpg/5.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/LinAn">
          <img src="../assets/jpg/6.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/LuoSi">
          <img src="../assets/jpg/1.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/DanShui">
          <img src="../assets/jpg/2.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/BaiMaDiGuaGan">
          <img src="../assets/jpg/3.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/XueCai">
          <img src="../assets/jpg/4.jpg" />
        </router-link>
      </div>
      <div>
        <router-link to="/YeSheng">
          <img src="../assets/jpg/5.jpg" />
        </router-link>
      </div>

      <p></p>
    </div>

    <!--    智能老师来啦-->
    <div style="height: 40%; width: 15%; position: absolute; top: 50%">
      <img
        src="../assets/jpg/老师.png"
        alt=""
        style="width: 100%; height: 100%"
        v-if="showTeacher"
      />
      <img
        src="../assets/jpg/AI.png"
        alt=""
        class="head"
        v-if="!showTeacher"
        @click="reStart"
      />
      <img
        src="../assets/jpg/蓝云.png"
        alt=""
        style="
          width: 180%;
          height: 90%;
          position: absolute;
          top: -50%;
          left: 95%;
          z-index: 98;
        "
        v-if="showTeacher"
      />
      <div
        class="wordStyle"
        style="
          width: 120%;
          height: 20%;
          position: absolute;
          z-index: 99;
          top: -20%;
          left: 127%;
        "
        v-if="showTeacher"
      >
        小朋友，看到这些千岛湖的特色美食是不是直流口水呢，哈哈，点击特产图片可以查看它的制作方法哦！
      </div>
      <div
        class="buttonStyle_2"
        v-if="showTeacher"
        @click="showTeacher = !showTeacher"
      ></div>
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
    <router-link to="/People">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  inject: ["reload"],
  data() {
    return {
      index1: false,
      back: false,
      showTeacher: true,
    };
  },
  created() {
    let _this = this;
    setTimeout(function () {
      _this.end4();
    }, 6000);
  },
  methods: {
    end4() {
      this.showTeacher = false;
    },
    reStart() {
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
    changeStaut() {
      this.reload();
    },
  },
  mounted() {
    var oWrap = document.getElementById("wrap");
    var oImg = oWrap.getElementsByTagName("div");
    var oImgLength = oImg.length;
    var Deg = 360 / oImgLength;

    var nowX,
      nowY,
      lastX,
      lastY,
      minusX = 0,
      minusY = 0;
    var roY = 0,
      roX = -10;
    var timer;
    console.log(`Deg: ${Deg}`);
    for (var i = 0; i < oImgLength; i++) {
      // oImg[i].style.transform = `rotateY(${i * Deg}deg) translateZ(0px)`;

      // oImg[i].style.transform = `rotateX(${Deg}) rotateY(${i * Deg}deg) translateZ(444px)`;
      oImg[i].style.transition =
        "transform 1s " + (oImgLength - 1 - i) * 0.1 + "s";
      oImg[i].style["-webkit-transform"] = `rotateY(${
        i * Deg
      }deg) translateZ(300px)`;
      console.log(`i*Deg: ${i * Deg}`);
    }

    mTop();

    window.onresize = mTop;

    function mTop() {
      var wH = document.documentElement.clientHeight;
      oWrap.style.marginTop = wH / 2 - 180 + "px";
    }

    // 拖拽：三个事件-按下 移动 抬起
    //按下
    document.onmousedown = function (ev) {
      ev = ev || window.event;

      //鼠标按下的时候，给前一点坐标赋值，为了避免第一次相减的时候出错
      lastX = ev.clientX;
      lastY = ev.clientY;

      //移动
      this.onmousemove = function (ev) {
        ev = ev || window.event;

        clearInterval(timer);

        nowX = ev.clientX; // clientX 鼠标距离页面左边的距离
        nowY = ev.clientY; // clientY ………………………………顶部………………

        //当前坐标和前一点坐标差值
        minusX = nowX - lastX;
        minusY = nowY - lastY;

        //更新wrap的旋转角度，拖拽越快-> minus变化大 -> roY变化大 -> 旋转快
        roY += minusX * 0.2; // roY = roY + minusX*0.2;
        roX -= minusY * 0.1;

        oWrap.style.transform =
          "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";
        oWrap.style[`-webkit-transform`] =
          "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";

        /*
						//生成div，让div跟着鼠标动
						var oDiv = document.createElement('div');
						oDiv.style.cssText = 'width:5px;height:5px;background:red;position:fixed;left:'+nowX+'px;top:'+nowY+'px';
						this.body.appendChild(oDiv);
						*/

        //前一点的坐标
        lastX = nowX;
        lastY = nowY;
      };
      //抬起
      this.onmouseup = function () {
        this.onmousemove = null;
        timer = setInterval(function () {
          minusX *= 0.95;
          minusY *= 0.95;
          roY += minusX * 0.2; // roY = roY + minusX*0.2;
          roX -= minusY * 0.1;
          oWrap.style.transform =
            "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";

          if (Math.abs(minusX) < 0.1 && Math.abs(minusY) < 0.1) {
            clearInterval(timer);
          }
          console.log(minusX);
        }, 13);
      };
      return false;
    };
  },
};
// window.onload = function () {
//   var oWrap = document.getElementById("wrap");
//   var oImg = oWrap.getElementsByTagName("img");
//   var oImgLength = oImg.length;
//   var Deg = 360 / oImgLength;
//   var nowX,
//     nowY,
//     lastX,
//     lastY,
//     minusX = 0,
//     minusY = 0;
//   var roY = 0,
//     roX = -10;
//   var timer;

//   for (var i = 0; i < oImgLength; i++) {
//     oImg[i].style.transform = "rotateY(" + i * Deg + "deg) translateZ(350px)";
//     oImg[i].style.transition =
//       "transform 1s " + (oImgLength - 1 - i) * 0.1 + "s";
//   }

//   mTop();

//   window.onresize = mTop;

//   function mTop() {
//     var wH = document.documentElement.clientHeight;
//     oWrap.style.marginTop = wH / 2 - 180 + "px";
//   }

//   // 拖拽：三个事件-按下 移动 抬起
//   //按下
//   document.onmousedown = function (ev) {
//     ev = ev || window.event;

//     //鼠标按下的时候，给前一点坐标赋值，为了避免第一次相减的时候出错
//     lastX = ev.clientX;
//     lastY = ev.clientY;

//     //移动
//     this.onmousemove = function (ev) {
//       ev = ev || window.event;

//       clearInterval(timer);

//       nowX = ev.clientX; // clientX 鼠标距离页面左边的距离
//       nowY = ev.clientY; // clientY ………………………………顶部………………

//       //当前坐标和前一点坐标差值
//       minusX = nowX - lastX;
//       minusY = nowY - lastY;

//       //更新wrap的旋转角度，拖拽越快-> minus变化大 -> roY变化大 -> 旋转快
//       roY += minusX * 0.2; // roY = roY + minusX*0.2;
//       roX -= minusY * 0.1;

//       oWrap.style.transform = "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";

//       /*
// 						//生成div，让div跟着鼠标动
// 						var oDiv = document.createElement('div');
// 						oDiv.style.cssText = 'width:5px;height:5px;background:red;position:fixed;left:'+nowX+'px;top:'+nowY+'px';
// 						this.body.appendChild(oDiv);
// 						*/

//       //前一点的坐标
//       lastX = nowX;
//       lastY = nowY;
//     };
//     //抬起
//     this.onmouseup = function () {
//       this.onmousemove = null;
//       timer = setInterval(function () {
//         minusX *= 0.95;
//         minusY *= 0.95;
//         roY += minusX * 0.2; // roY = roY + minusX*0.2;
//         roX -= minusY * 0.1;
//         oWrap.style.transform =
//           "rotateX(" + roX + "deg) rotateY(" + roY + "deg)";

//         if (Math.abs(minusX) < 0.1 && Math.abs(minusY) < 0.1) {
//           clearInterval(timer);
//         }
//         console.log(minusX);
//       }, 13);
//     };
//     return false;
//   };
// };
</script>
<style scoped>
.buttonStyle_2 {
  background: url("../assets/jpg/继续.png");
  background-size: 100% 100%;
  width: 35%;
  height: 13%;
  position: absolute;
  top: 17%;
  left: 170%;
  z-index: 99;
}
.buttonStyle_2:active {
  transform: scale(0.8);
}
.head {
  width: 60%;
  position: absolute;
  top: 65%;
  left: 10%;
}
* {
  margin: 0;
  padding: 0;
}
body {
  background: black;
  overflow: hidden;
}
#perspective {
  perspective: 800px;
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
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

#wrap {
  height: 200px;
  width: 155px; /*133:200  4:6  */
  height: 180px;
  margin: 0 auto;
  position: relative;
  /*搭建3D效果必须的两个属性：一个变换风格变3d，一个场景景深800px*/
  transform-style: preserve-3d;
  transform: rotateX(-10deg) rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg) rotateY(0deg);
}

#wrap div {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1px;
  transform: rotateY(0deg) translateZ(0px);
  -webkit-transform: rotateY(0deg) translateZ(0px);
  /*倒影：朝向 偏移 遮盖*/ /*线性渐变(从哪里开始,开始时候的颜色,结束时候的颜色)*/
  -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(0, 0, 0, 0)
        40%, rgba(0, 0, 0, 0.5) 100%);
}

#wrap img {
  width: 100%;
  height: 100%;
}
#wrap p {
  width: 1200px;
  height: 1200px;
  background: -webkit-radial-gradient(
    center center,
    600px 600px,
    rgba(244, 23, 234, 0.2),
    rgba(0, 0, 0, 0)
  );
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 102%;
  margin-left: -600px;
  margin-top: -600px;
  transform: rotateX(90deg);
}
</style>