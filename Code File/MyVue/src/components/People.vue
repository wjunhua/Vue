<template>
  <div class="People">
    <router-link to="/Rotation">
      <div id="fish-man" @mouseenter="onFishMan" @mouseleave="offFishMan">
        <img src="../assets/jpg/渔夫.png" v-show="!fishMan" />
        <img src="../assets/jpg/渔夫色彩.png" v-show="fishMan" class="color" />
      </div>
      <div id="fish-knowledge" @mouseenter="onFishMan" @mouseleave="offFishMan">
        <img src="../assets/jpg/knowledge.png" v-show="fishMan" />
        <img src="../assets/jpg/11.png" v-show="!fishMan" />
      </div>
    </router-link>
    <router-link to="/Show">
      <div
        id="fish"
        @mouseenter="onLocalSpecialty"
        @mouseleave="offLocalSpecialty"
      >
        <img src="../assets/jpg/网鱼灰.png" v-show="!localSpecialty" />
        <img
          src="../assets/jpg/网鱼色彩.png"
          v-show="localSpecialty"
          class="color"
        />
      </div>
      <div
        id="local-specialty"
        @mouseenter="onLocalSpecialty"
        @mouseleave="offLocalSpecialty"
      >
        <img src="../assets/jpg/localspecialty.png" v-show="localSpecialty" />
        <img src="../assets/jpg/33.png" v-show="!localSpecialty" />
      </div>
    </router-link>
    <router-link to="/Fishing">
      <div id="cook" @mouseenter="onCook" @mouseleave="offCook">
        <img src="../assets/jpg/厨师灰.png" v-show="!cook" />
        <img src="../assets/jpg/厨师.png" v-show="cook" class="color" />
      </div>
      <div id="fishing-knowledge" @mouseenter="onCook" @mouseleave="offCook">
        <img src="../assets/jpg/fishing.png" v-show="cook" />
        <img src="../assets/jpg/22.png" v-show="!cook" />
      </div>
    </router-link>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 55%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 220%;height: 110%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:135%;height:20%;position: absolute;z-index: 99;top: -20%;left: 140%" v-if="showTeacher"
      >水养鱼 鱼养水的千岛湖有着发达的渔业，巨网捕鱼，鱼类特产都吸引着慕名而来的游客，
        小朋友，接下来让我们跟随老师的步伐，从千岛湖的捕鱼知识，当地特产，鱼类知识来学
        习千岛湖的渔业知识吧！</div>
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
      fishMan: false,
      localSpecialty: false,
      cook: false,
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
    onFishMan() {
      this.fishMan = true;
    },
    offFishMan() {
      this.fishMan = false;
    },
    onLocalSpecialty() {
      this.localSpecialty = true;
    },
    offLocalSpecialty() {
      this.localSpecialty = false;
    },
    onCook() {
      this.cook = true;
    },
    offCook() {
      this.cook = false;
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
    top: 33%;
    left: 190%;
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
.People {
  background: url("../assets/jpg/渔业背景.jpg") no-repeat;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
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

#fish-man {
  width: 25%;
  height: 70%;
  position: absolute;
  left: 2%;
  bottom: 50px;
}

#fish-man img {
  width: 100%;
  height: 100%;
}

#fish-knowledge {
  width: 30%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 6%;
}

#fish {
  width: 33%;
  height: 70%;
  position: absolute;
  left: 31%;
  bottom: 50px;
}

#fish img {
  width: 100%;
  height: 100%;
}

#local-specialty {
  width: 30%;
  height: 100%;
  position: absolute;
  left: 34%;
  top: 6%;
  display: block;
}

#cook {
  width: 25%;
  height: 70%;
  position: absolute;
  left: 70%;
  bottom: 50px;
}

#cook img {
  width: 100%;
  height: 100%;
}

#fishing-knowledge {
  width: 30%;
  height: 100%;
  position: absolute;
  left: 69%;
  top: 6%;
  display: block;
}

.color {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
}
</style>
