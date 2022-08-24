<template>
  <div id="all">
    <div class="wordStyle">{{theAccount.grade1}}</div>
    <div class="wordStyle">{{num * 10}}</div>
    <div class="wordStyle">{{theAccount.grade2}}</div>
    <div class="wordStyle">{{theAccount.grade3}}</div>
    <div class="wordStyle">{{theAccount.grade4}}</div>
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onIndex1" @mouseleave="offIndex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/Adventure">
      <div id="back" @mouseenter="onBack" @mouseleave="offBack">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
  import {selectEnd} from '../network/test.js'
  export default {
    data(){
      return{
        testInfo:null,
        account:'',
        theAccount:null,
        num:'',
        index1: false,
        back: false,
      }
    },
    created() {
      this._selectEnd();
      this.getRandomInt(1,10);
    },
    methods:{
      getRandomInt(min, max) {
        this.num = Math.floor(Math.random() * (max - min + 1)) + min;
      },
      _selectEnd(){
        selectEnd(sessionStorage.getItem('ID')).then(res=>{
          if(res.data[0]){
            this.theAccount=res.data[0];
          }else {
            this.theAccount = 0;
          }
        })
      },
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
    },
  }
</script>

<style scoped>
#all{
  width: 100%;
  height: 100%;
  background: url("../assets/jpg/得分.jpg");
  background-size: 100% 100%;
}

.wordStyle{
  color: white;
  width: 70%;
  height: 11%;
  position: relative;
  top: 13%;
  left: 15%;
  font-size: 1.7vw;
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
