<template>
  <body id="container" click.prevent.stop="changeStaut">
    <div id="xunyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡中华鲟鱼.png" />
    </div>
    <div id="gunziyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡棍子鱼.png" />
    </div>
    <div id="niqiu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡泥鳅.png" />
    </div>
    <div id="baihuayu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡百花鱼.png" />
    </div>
    <div id="hualian" @click="handleClick($event)">
      <img src="../assets/jpg/小泡花鲢.png" />
    </div>
    <div id="huaguyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡花鲴鱼.png" />
    </div>
    <div id="yeshengjiayu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡野生甲鱼.png" />
    </div>
    <div id="jinyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡金鱼.png" />
    </div>
    <div id="luyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡鲈鱼.png" />
    </div>
    <div id="liyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡鲤鱼.png" />
    </div>
    <div id="jiyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡鲫鱼.png" />
    </div>
    <div id="bianyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡鳊鱼.png" />
    </div>
    <div id="guiyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡鳜鱼.png" />
    </div>
    <div id="huangciyu" @click="handleClick($event)">
      <img src="../assets/jpg/小泡黄刺鱼.png" />
    </div>
    <div id="yuwang" @click="handleStart()">
      <img src="../assets/jpg/未标题-1-恢复的.png" />
    </div>
    <span id="showWord"></span>
    <div id="time">
      <img src="../assets/jpg/框.png" />
    </div>
    <p class="sj">时间</p>
    <div id="score">
      <img src="../assets/jpg/框.png" />
    </div>
    <p class="df">得分</p>
    <div id="jishi"></div>
    <div id="point"></div>
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onindex1" @mouseleave="offindex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/Adventure">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </body>
</template>

<script>
  import $ from 'jquery'
// import func from "../../vue-temp/vue-editor-bridge";
// export default{
var oYuwang = document.getElementById("yuwang");
var ojishi = document.getElementById("jishi");
var oshowWord = document.getElementById("showWord");
var oPoint = document.getElementById("point");

var arrWords = [
  { name: "中华鲟鱼", id: "xunyu" },
  { name: "棍子鱼", id: "gunziyu" },
  { name: "泥鳅", id: "niqiu" },
  { name: "百花鱼", id: "baihuayu" },
  { name: "花鲢", id: "hualian" },
  { name: "花鲴鱼", id: "huaguyu" },
  { name: "野生甲鱼", id: "yeshengjiayu" },
  { name: "金鱼", id: "jinyu" },
  { name: "鲈鱼", id: "luyu" },
  { name: "鲤鱼", id: "liyu" },
  { name: "鲫鱼", id: "jiyu" },
  { name: "鳊鱼", id: "bianyu" },
  { name: "鳜鱼", id: "guiyu" },
  { name: "黄刺鱼", id: "huangciyu" },
];
var arr = arrWords.slice(0);
var arrWord = { id: "" };
var time = 60;
var timer;
var scores = 0;

function random(value) {
  arrWord = value[Math.floor(Math.random() * arrWords.length)];
  let word = document.getElementById("showWord");
  word.innerHTML = arrWord.name;
}
function timeCount() {
  clearInterval(timer);
  timer = setInterval(() => {
    // ojishi.innerHTML = time + "s";
    $("#jishi").html(time + "s");
    if (time == 0) {
      clearInterval(timer);
      // document.getElementById("container").classList.add("disabled");
      $("#container").addClass("disabled");
    }
    time--;
  }, 1000);
}

document.onmousemove = function (ev) {
  var e = ev || window.event;
  $("#yuwang").css("left", e.clientX - 150 + "px");
  $("#yuwang").css("top", e.clientY - 100 + "px");
  $("#showWord").css("left", e.clientX + 10 + "px");
  $("#showWord").css("top", e.clientY + 10 + "px");
  // oYuwang.style.left = e.clientX - 150 + "px";
  // oYuwang.style.top = e.clientY - 100 + "px";
  // oshowWord.style.left = e.clientX + 10 + "px";
  // oshowWord.style.top = e.clientY + 10 + "px";
};
// }
export default {
  data() {
    return {
      inject: ["reload"],
      index1: false,
      back: false,
    };
  },
  methods: {
    handleStart() {
      random(arrWords);
      timeCount();
      $("#yuwang").addClass("disabled");
    },
    handleClick(e) {
      let value = e.target.offsetParent.id;
      if (value == arrWord.id) {
        let index = arrWords.indexOf(arrWord);
        arrWords.splice(index, 1);

        if (arrWords.length > 0) {
          random(arrWords);
          scores += 1;
          $("#point").html(scores);
        } else {
          clearInterval(timer);
        }
      } else {
        scores -= 1;
        $("#point").html(scores);
      }
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
}

body {
  background: url(../assets/jpg/背景2.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: relative;
}

#xunyu {
  width: 24%;
  height: 44%;
  left: 20%;
  top: 33%;
  position: absolute;
}

#xunyu img {
  width: 100%;
  height: 100%;
}

#gunziyu {
  width: 15%;
  height: 30%;
  right: 5%;
  top: 10%;
  position: absolute;
}

#gunziyu img {
  width: 100%;
  height: 100%;
}

#niqiu {
  position: absolute;
  width: 17%;
  height: 32%;
  left: 18%;
  top: 70%;
}

#niqiu img {
  width: 100%;
  height: 100%;
}

#baihuayu {
  position: absolute;
  width: 23%;
  height: 43%;
  left: 39%;
  top: 23%;
}

#baihuayu img {
  width: 100%;
  height: 100%;
}

#hualian {
  position: absolute;
  width: 20%;
  height: 41%;
  left: 1%;
  top: 20%;
}

#hualian img {
  width: 100%;
  height: 100%;
}

#huaguyu {
  position: absolute;
  width: 16%;
  height: 30%;
  left: 32%;
  top: 8%;
}

#huaguyu img {
  width: 100%;
  height: 100%;
}

#yeshengjiayu {
  position: absolute;
  width: 18%;
  height: 33%;
  right: 27%;
  top: 70%;
}

#yeshengjiayu img {
  width: 100%;
  height: 100%;
}

#jinyu {
  position: absolute;
  width: 20%;
  height: 38%;
  right: 20%;
  top: 10%;
}

#jinyu img {
  width: 100%;
  height: 100%;
}

#luyu {
  position: absolute;
  width: 20%;
  height: 40%;
  left: 2%;
  top: 50%;
}

#luyu img {
  width: 100%;
  height: 100%;
}

#liyu {
  position: absolute;
  width: 23%;
  height: 43%;
  left: 35%;
  top: 60%;
}

#liyu img {
  width: 100%;
  height: 100%;
}

#jiyu {
  position: absolute;
  width: 19%;
  height: 36%;
  right: 24%;
  bottom: 23%;
}

#jiyu img {
  width: 100%;
  height: 100%;
}

#bianyu {
  position: absolute;
  width: 20%;
  height: 40%;
  left: 15%;
  top: 4%;
}

#bianyu img {
  width: 100%;
  height: 100%;
}

#guiyu {
  position: absolute;
  width: 21%;
  height: 41%;
  bottom: 3%;
  right: 7%;
}

#guiyu img {
  width: 100%;
  height: 100%;
}

#huangciyu {
  position: absolute;
  width: 20%;
  height: 40%;
  bottom: 32%;
  right: 6%;
}

#huangciyu img {
  width: 100%;
  height: 100%;
}

.disabled {
  pointer-events: none;
}

#yuwang {
  position: absolute;
  width: 18%;
  height: 50%;
  z-index: 98;
}

#time {
  position: absolute;
  width: 15%;
  height: 12%;
  left: 5%;
  bottom: 8%;
}

#time img {
  width: 100%;
  height: 100%;
}

#score {
  position: absolute;
  width: 15%;
  height: 12%;
  left: 5%;
  bottom: 1%;
}

#score img {
  width: 100%;
  height: 100%;
}

.sj {
  position: absolute;
  width: 10%;
  height: 8%;
  left: 5%;
  top: 83.6%;
  bottom: 8%;
  font-size: 1.3vw;
}

.df {
  position: absolute;
  width: 10%;
  height: 8%;
  left: 5%;
  top: 90.7%;
  bottom: 1%;
  font-size: 1.3vw;
}

#jishi {
  position: absolute;
  height: 15%;
  width: 15%;
  font-size: 1.3vw;
  left: 8%;
  bottom: 1%;
}

#point {
  position: absolute;
  height: 15%;
  width: 15%;
  font-size: 1.3vw;
  left: 8%;
  bottom: -6%;
}

#showWord {
  position: absolute;
  z-index: 99;
  font-size: 1.3vw;
}
.bg {
  width: 4.25%;
  height: 14%;
  position: absolute;
  top: 3%;
  left: 1.1%;
  z-index: 9999;
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
  z-index: 9999;
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
  z-index: 9999;
}

#back img {
  width: 100%;
  height: 100%;
}
</style>
