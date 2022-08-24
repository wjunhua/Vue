<template>
  <div class="hello">
    <!--    背景     -->
    <div class="box">
      <!--    山     -->
      <!-- 假设lists列表有4个项，设置ul的宽度为800%（相对于box），设置li的宽度为12.5%（相对于ul是12.5%；相对于box是100%），但是li要有8个，其中4个是复制的，用来占位 -->
      <ul
        :style="
          'width:' +
          lists.length * 100 * 2 +
          '%;animation-duration:' +
          lists.length * 7 +
          's;'
        "
      >
        <li
          :style="'width:' + 70 / (lists.length * 2) + '%;'"
          v-for="(item, index) in lists"
          :key="index"
        >
          <img :src="item.image" alt />
        </li>
        <li
          :style="'width:' + 70 / (lists.length * 2) + '%;'"
          v-for="(item, index) in lists"
          :key="index"
        >
          <img :src="item.image" alt />
        </li>
      </ul>
    </div>
    <div v-show="showCloud">
      <img src="../assets/jpg/boy-boat.png" alt class="boat" />
      <!--    男孩和船    -->
    </div>
    <div v-show="showBoy4">
      <img src="../assets/jpg/boy-boat.png" alt class="boat-3" />
      <!--    男孩和船    -->
    </div>
    <transition name="forward">
      <!--  小男孩坐船前进动画1  -->
      <div v-show="!showCloud" class="state-1" v-if="showCloud1">
        <img src="../assets/jpg/boy-boat.png" alt class="boat-1" />
      </div>
    </transition>
    <transition name="forward2">
      <!--  小男孩坐船前进动画2  -->
      <div v-show="!showCloud" class="state-1" v-if="forward1">
        <img src="../assets/jpg/boy-boat.png" alt class="forwardBoy1" />
      </div>
    </transition>
    <transition name="forward3">
      <!--  小男孩坐船前进动画3  -->
      <div v-show="!showCloud" class="state-1" v-if="forward2">
        <img src="../assets/jpg/boy-boat.png" alt class="forwardBoy2" />
      </div>
    </transition>
    <div v-show="!showBoy1" class="observe-1">
      <img src="../assets/jpg/boy-observe.png" alt />
      <!--    男孩侦查    -->
    </div>
    <div v-show="showBoy2" class="observe-2">
      <img src="../assets/jpg/boy-success.png" alt />
      <!--    男孩收网    -->
    </div>
    <div
      class="observe"
      v-show="!showCloud"
      v-if="showCloud1"
      @mouseenter="offSet"
      @mouseleave="onSet"
      @click="changeCloud1"
    >
      <!--    侦查提示    -->
      <img src="../assets/jpg/11111.png" alt v-show="showSet" />
      <img src="../assets/jpg/111.png" alt v-show="!showSet" />
    </div>
    <div
      class="observe"
      v-show="!showCloud3"
      @mouseenter="offSet"
      @mouseleave="onSet"
      @click="changeCloud3"
    >
      <!--   设置包围圈提示    -->
      <img src="../assets/jpg/fish2.png" alt v-show="!showSet" />
      <img src="../assets/jpg/222222.png" alt v-show="showSet" />
    </div>
    <div
      class="observe"
      v-show="!showCloud4"
      @mouseenter="offSet"
      @mouseleave="onSet"
      @click="changeCloud4"
    >
      <!--   刺网赶鱼提示    -->
      <img src="../assets/jpg/fish3.png" alt v-show="!showSet" />
      <img src="../assets/jpg/33333.png" alt v-show="showSet" />
    </div>
    <div
      class="observe"
      style="left: 60%"
      v-if="showGet"
      @mouseenter="offSet"
      @mouseleave="onSet"
      @click="changeCloud5"
    >
      <!--   收网起鱼提示    -->
      <img src="../assets/jpg/fish1.png" alt v-show="!showSet" />
      <img src="../assets/jpg/44444.png" alt v-show="showSet" />
    </div>
    <div id="cloud" v-show="showCloud">
      <!--    对话    -->
      <p class="word-1">小朋友们！捕鱼节是千岛湖的</p>
      <p class="word-1">传统节日哦，让我们一起学习</p>
      <p class="word-1">
        &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp捕鱼文化，体验渔民的的文化吧！
      </p>
      <img src="../assets/jpg/按钮.png" alt id="click" @click="changeCloud" />
      <!--    按钮     -->
    </div>
    <div class="cloud-1" v-show="!showCloud1" v-if="showCloud2">
      <!--    侦查小知识    -->
      <p v-show="pageControl1">侦察鱼群是整个巨网捕鱼工作流程的</p>
      <p v-show="pageControl1">第一步，也是具有丰富经验的捕捞师</p>
      <p v-show="pageControl1">傅们的一项独门绝活。根据鱼儿在凌</p>
      <p v-show="pageControl2">晨、傍晚跳上水面透气的特性，因鱼</p>
      <p v-show="pageControl2">的种类、体形、大小不同，跳上水面</p>
      <p v-show="pageControl2">发出的声响也不同来判断鱼群、种类</p>
      <p v-show="pageControl3">，还可以根据水面上飘来淡淡的鱼腥</p>
      <p v-show="pageControl3">味来判断水中鱼群的数量，这可真是</p>
      <p v-show="pageControl3">高难度的绝活呀。每天清晨天蒙蒙亮</p>
      <p v-show="pageControl4">时，几位经验丰富的老师傅划着小渔</p>
      <p v-show="pageControl4">舟在千岛湖水面上，或听、或看、或</p>
      <p v-show="pageControl4">闻，象侦察兵似的侦察鱼群，并分析</p>
      <p v-show="pageControl5">判断出鱼群种类、数量、规格等，从</p>
      <p v-show="pageControl5">而作出正确的渔场选择决策，决定捕</p>
      <p v-show="pageControl5">捞的渔场。</p>
      <img
        src="../assets/jpg/nextPage.png"
        alt
        class="click-1"
        @click="addValue"
        v-show="!pageControl5"
      />
      <!--    按钮     -->
      <img
        src="../assets/jpg/continue.png"
        alt
        class="click-1"
        @click="changeCloud2"
        v-show="pageControl5"
      />
    </div>
    <div class="cloud-1" v-show="!showCircle" v-if="showSetCircle">
      <!--    设置包围圈小知识    -->
      <p v-show="pageControl1">渔场确定后便开始放拦网。在队长的</p>
      <p v-show="pageControl1">指挥下，把长4000米左右，高约65米</p>
      <p v-show="pageControl1">的巨大拦网用拖轮放下水，借助岸线</p>
      <p v-show="pageControl2">等将鱼群包围或拦截在作业渔场内，</p>
      <p v-show="pageControl2">并设置好航道，保持被包围渔场的封</p>
      <p v-show="pageControl2">闭性。然后选择适当的位置，将张网</p>
      <p v-show="pageControl3">网口（俗称畚斗网）连在拦网上，形</p>
      <p v-show="pageControl3">成埋伏圈。</p>
      <img
        src="../assets/jpg/nextPage.png"
        alt
        class="click-1"
        @click="addValue"
        v-show="!pageControl3"
      />
      <!--    按钮     -->
      <img
        src="../assets/jpg/continue.png"
        alt
        class="click-1"
        @click="nextCatch"
        v-show="pageControl3"
      />
    </div>
    <div class="cloud-2" v-show="showForward" v-if="!showNet" style="left: 50%">
      <!--    刺网赶鱼小知识    -->
      <p v-show="pageControl1">通过在包围圈渔场内吊放单层和三层</p>
      <p v-show="pageControl1">刺网以配合拦网，将鱼群驱赶向所设</p>
      <p v-show="pageControl1">置的定置张网内。利用鱼群触网受惊</p>
      <p v-show="pageControl2">吓后，逃窜的特性，通过在包围圈内</p>
      <p v-show="pageControl2">层层切割式的放三层刺网、单层刺网</p>
      <p v-show="pageControl2">，配合拦网引导鱼群往张网方向逃窜</p>
      <p v-show="pageControl3">，完成赶鱼程序。有时，还要加放拦</p>
      <p v-show="pageControl3">网，以缩小包围圈并驱赶鱼群，迫使</p>
      <p v-show="pageControl3">鱼群进入张网。</p>
      <img
        src="../assets/jpg/nextPage.png"
        alt
        class="click-1"
        @click="addValue"
        v-show="!pageControl3"
      />
      <!--    按钮     -->
      <img
        src="../assets/jpg/continue.png"
        alt
        class="click-1"
        @click="nextGet"
        v-show="pageControl3"
      />
    </div>
    <div class="cloud-2" v-show="showBoy2" style="left: 55%">
      <!--    收网小知识    -->
      <p v-show="pageControl1">根据鱼群活动情况，由队长统一指挥</p>
      <p v-show="pageControl1">放、收网程序和时机。先收刺网，清</p>
      <p v-show="pageControl1">除杂物与缠绕在刺网上的渔获物。等</p>
      <p v-show="pageControl2">包围圈中的鱼群绝大部分进入张网后</p>
      <p v-show="pageControl2">，才可收拦网与张网。拦网采用液压</p>
      <p v-show="pageControl2">起网机起收，起鱼是巨网捕鱼过程的</p>
      <p v-show="pageControl3">最后一道工序，也是最精彩、场面最</p>
      <p v-show="pageControl3">壮观、最激动人心的环节。收张网时</p>
      <p v-show="pageControl3">，先将沉浮式活水船连接在张网后墙</p>
      <p v-show="pageControl4">，然后一步步收起张网。由于活水船</p>
      <p v-show="pageControl4">船舱低于水面，只要拉动网衣就能将</p>
      <p v-show="pageControl4">张网中的鱼倾倒于船舱内。鱼多时，</p>
      <p v-show="pageControl5">张网要分批起鱼，控制收网进度和节</p>
      <p v-show="pageControl5">奏，免受鱼体操伤，利于活鱼运输和</p>
      <p v-show="pageControl5">销售。捕捞规格有严格的限定，实施</p>
      <p v-show="pageControl6">捕大留小，并限额捕捞总量，从而确</p>
      <p v-show="pageControl6">保永续利用。</p>
      <img
        src="../assets/jpg/nextPage.png"
        alt
        class="click-1"
        @click="addValue"
        v-show="!pageControl6"
      />
      <!--    按钮     -->
      <router-link to="/FishingAnswer">
      <img
        src="../assets/jpg/continue.png"
        alt
        class="click-1"
        @click="ending"
        v-show="pageControl6"
      />
      </router-link>
    </div>
    <div class="boll">
      <!--    波浪效果    -->
      <div class="water w1"></div>
      <div class="water w2"></div>
      <div class="water"></div>
    </div>
    <transition name="find">
      <!--  发现鱼群动画  -->
      <div v-show="showFind" class="state-4">
        <img src="../assets/jpg/鱼群.png" alt class="findFish" />
      </div>
    </transition>
    <transition name="forward1">
      <!--  赶鱼动画  -->
      <div v-show="showForward" class="state-3" v-if="!showBoy5">
        <img src="../assets/jpg/鱼群.png" alt class="boat-2" />
      </div>
    </transition>
    <transition name="setCircle">
      <!--  湖底包围圈设置动画  -->
      <div v-show="!showCircle" id="state-2" v-if="hide">
        <img src="../assets/jpg/渔网.png" alt class="set-1" />
      </div>
    </transition>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 150%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:90%;height:20%;position: absolute;z-index: 99;top: -20%;left: 130%" v-if="showTeacher"
      >巨网捕鱼是千岛湖的特色活动哦，让我们通过小动画来了解巨网捕鱼的步骤吧！</div>
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
  data() {
    return {
      index1: false,
      back: false,
      showCloud: true,
      showSet: true,
      showSetCircle: true,
      showForward: false,
      forward1: false,
      forward2: false,
      showBoy1: true,
      showBoy2: false,
      showBoy3: false,
      showBoy4: false,
      showBoy5: false,
      showNet: false,
      showGet: false,
      showCircle: true,
      showFind: false,
      showCloud1: true,
      showCloud2: true,
      showCloud3: true,
      showCloud4: true,
      showCloud5: true,
      page: 0,
      hide: true,
      pageControl1: true,
      pageControl2: false,
      pageControl3: false,
      pageControl4: false,
      pageControl5: false,
      pageControl6: false,
      showTeacher:true,
      lists: [
        {
          image: require("../assets/jpg/山1.png"),
        },
        {
          image: require("../assets/jpg/山2.png"),
        },
        {
          image: require("../assets/jpg/山1.png"),
        },
        {
          image: require("../assets/jpg/山2.png"),
        },
      ],
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
    changeCloud() {
      this.showCloud = !this.showCloud;
    },
    onSet() {
      this.showSet = true;
    },
    offSet() {
      this.showSet = false;
    },
    changeCloud1() {
      this.showCloud1 = !this.showCloud1;
      this.showBoy1 = !this.showBoy1;
      this.showFind = !this.showFind;
    },
    changeCloud2() {
      this.showCloud2 = !this.showCloud2;
      this.showCloud3 = !this.showCloud3;
      this.showBoy1 = !this.showBoy1;
      this.showBoy4 = !this.showBoy4;
      this.pageControl1 = true;
      this.pageControl2 = false;
      this.pageControl3 = false;
      this.pageControl4 = false;
      this.pageControl5 = false;
      this.page = 0;
    },
    changeCloud3() {
      this.showCloud3 = !this.showCloud3;
      this.showCircle = !this.showCircle;
    },
    changeCloud4() {
      this.showCloud4 = !this.showCloud4;
      this.showForward = !this.showForward;
      this.showFind = !this.showFind;
    },
    changeCloud5() {
      this.showCloud5 = !this.showCloud5;
      this.showBoy2 = !this.showBoy2;
      this.showBoy3 = !this.showBoy3;
      this.showGet = !this.showGet;
      this.forward2 = !this.forward2;
      this.hide = !this.hide;
      this.showBoy5 = !this.showBoy5;
    },
    nextCatch() {
      this.page = 0;
      this.pageControl1 = true;
      this.pageControl2 = false;
      this.pageControl3 = false;
      this.showSetCircle = !this.showSetCircle;
      this.showCloud4 = !this.showCloud4;
      this.forward1 = !this.forward1;
      this.showBoy4 = !this.showBoy4;
    },
    nextGet() {
      this.page = 0;
      this.pageControl1 = true;
      this.pageControl2 = false;
      this.pageControl3 = false;
      this.showNet = !this.showNet;
      this.showGet = !this.showGet;
      this.forward2 = !this.forward2;
      this.forward1 = !this.forward1;
    },
    ending() {
      this.page = 0;
      this.pageControl1 = true;
      this.showBoy2 = !this.showBoy2;
    },
    addValue() {
      this.page++;
      if (this.page === 1) {
        this.pageControl1 = !this.pageControl1;
        this.pageControl2 = !this.pageControl2;
        console.log(this.page);
      } else if (this.page === 2) {
        this.pageControl2 = !this.pageControl2;
        this.pageControl3 = !this.pageControl3;
      } else if (this.page === 3) {
        this.pageControl3 = !this.pageControl3;
        this.pageControl4 = !this.pageControl4;
      } else if (this.page === 4) {
        this.pageControl4 = !this.pageControl4;
        this.pageControl5 = !this.pageControl5;
      } else if (this.page === 5) {
        this.pageControl5 = !this.pageControl5;
        this.pageControl6 = !this.pageControl6;
        this.page = 0;
      }
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
    top: 18%;
    left: 150%;
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
.hello {
  background: url("../assets/jpg/fish背景.jpg");
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}

@-webkit-keyframes move_wave {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 832px 0;
  }
}

@keyframes move_wave {
  0% {
    background-position: 0 0;
  }

  to {
    background-position: 832px 0;
  }
}

.boll {
  height: 40%;
  width: 100%;
  float: left;
  position: fixed;
  font-size: 14px;
  overflow: hidden;
  bottom: -20%;
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

.water {
  height: 50%;
  background: url("../assets/jpg/波浪.png") repeat-x;
  position: absolute;
  width: 100%;
  -webkit-animation: move_wave 5s linear infinite;
  animation: move_wave 5s linear infinite;
}

.w1 {
  opacity: 0.6;
  background-position: 120px 0;
  -webkit-animation: move_wave 12s linear infinite;
  animation: move_wave 4s linear infinite;
}

.w2 {
  opacity: 0.4;
  background-position: 60px 0;
  -webkit-animation: move_wave 6s linear infinite;
  animation: move_wave 6s linear infinite;
}

.boat {
  position: relative;
  margin-top: 24%;
  left: -35%;
  width: 30%;
  height: 35%;
}

.boat-1 {
  position: relative;
  left: 20%;
  width: 30%;
  height: 35%;
  display: flex;
}

.boat-2 {
  position: absolute;
  left: 100%;
  width: 35%;
  display: flex;
}

.boat-3 {
  position: absolute;
  top: 50%;
  left: 20%;
  width: 30%;
  display: flex;
}

.forwardBoy1 {
  position: absolute;
  left: 30%;
  width: 30%;
  display: flex;
}

.forwardBoy2 {
  position: absolute;
  left: 40%;
  width: 30%;
  display: flex;
}

.set-1 {
  position: relative;
  left: 45%;
  width: 20%;
  display: flex;
}

#cloud {
  position: absolute;
  top: 12%;
  left: 27%;
  width: 58%;
  height: 70%;
  background: url("../assets/jpg/云对话框.png");
  background-size: 100% 100%;
}

.cloud-1 {
  position: absolute;
  top: 14%;
  left: 47%;
  width: 45%;
  height: 51.5%;
  background: url("../assets/jpg/云对话框.png") no-repeat;
  background-size: 100% 100%;
}

.cloud-1 p {
  color: rgb(252, 148, 1);
  font-size: 4vh;
  position: relative;
  top: 20%;
  left: 0;
}

.cloud-2 {
  position: absolute;
  top: 14%;
  left: 6%;
  width: 45%;
  height: 51.5%;
  background: url("../assets/jpg/云对话框.png") no-repeat;
  background-size: 100% 100%;
}

.cloud-2 p {
  color: rgb(252, 148, 1);
  font-size: 4vh;
  position: relative;
  top: 20%;
  left: 0;
}

#click {
  position: absolute;
  top: 68%;
  left: 37%;
  width: 28%;
  height: 30%;
  transition: transform 50ms ease-out;
}

#click:active {
  transform: scale(0.8);
}

.click-1 {
  position: absolute;
  top: 72%;
  left: 40%;
  width: 20%;
  height: 25%;
  transition: transform 50ms ease-out;
}

.click-1:active {
  transform: scale(0.8);
}

.word-1 {
  color: rgb(252, 148, 1);
  font-size: 28px;
  position: relative;
  top: 23%;
  left: -4%;
}

.state-1 {
  position: relative;
  top: 50.8%;
}

#state-2 {
  position: relative;
  top: 72.6%;
}

.state-3 {
  position: relative;
  top: 79%;
  width: 50%;
}

.state-4 {
  position: relative;
  top: 79%;
  width: 50%;
}

.forward-enter-active {
  width: 100%;
  transition: all 3s ease;
  display: flex;
}

.forward-enter {
  width: 100%;
  transform: translateX(-20%);
  display: flex;
}

.forward2-enter-active {
  width: 100%;
  transition: all 3s ease;
  display: flex;
}

.forward2-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}

.forward3-enter-active {
  width: 100%;
  transition: all 3s ease;
  display: flex;
}

.forward3-enter {
  width: 100%;
  transform: translateX(-10%);
  display: flex;
}

.forward1-enter-active {
  transition: all 3s ease;
  display: flex;
}

.forward1-enter {
  transform: translateX(10%);
  display: flex;
}

.find-enter-active {
  transition: opacity 3s;
  display: flex;
}

.find-enter {
  opacity: 0;
  display: flex;
}

.setCircle-enter-active {
  width: 100%;
  transition: all 3s ease;
  display: flex;
}

.setCircle-enter {
  width: 100%;
  transform: translateY(-40%);
  display: flex;
}

.observe {
  width: 32%;
  height: 40%;
  position: absolute;
  top: 18%;
  left: 48%;
}

.observe img {
  width: 100%;
  height: 100%;
}

.observe-1 {
  position: absolute;
  top: 22%;
  left: 11%;
  width: 72%;
  height: 78%;
}

.observe-1 img {
  height: 100%;
  width: 100%;
}

.observe-2 {
  position: absolute;
  top: 51%;
  left: 40%;
  width: 30%;
}

.observe-2 img {
  height: 100%;
  width: 100%;
}

.findFish {
  position: absolute;
  left: 110%;
  width: 35%;
  display: flex;
}
</style>

<style scoped>
.box {
  width: 100%;
  height: 40%;
  overflow: hidden;
  top: 60%;
  position: absolute;
}
.box ul {
  animation-name: move;
  /* 在style中动态设置每一个li花费的时间为2s */
  /* animation-duration: 8s; */
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
ul li {
  float: left;
  display: flex;
  align-items: center;
}
ul li .content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    /* 平移自身宽度的50%，ul宽度的50%，剩下的那50%用来在下一次显示时占位 */
    transform: translateX(-50%);
  }
}
</style>
