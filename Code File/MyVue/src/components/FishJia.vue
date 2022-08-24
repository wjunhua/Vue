<template>
  <div class="guiyu">
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onIndex1" @mouseleave="offIndex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/Rotation">
      <div id="back" @mouseenter="onBack" @mouseleave="offBack">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  data(){
    return{
      index1: false,
      back: false,
    }
  },
  methods:{
    onIndex1() {
      this.index1 = true;
    },
    offIndex1() {
      this.index1 = false;
    },
    onBack() {
      this.back = true;
    },
    offBack() {
      this.back = false;
    },
  }
};
</script>

<style scoped>
.guiyu {
  background: url("../assets/jpg/甲鱼33.jpg") no-repeat;
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
</style>
