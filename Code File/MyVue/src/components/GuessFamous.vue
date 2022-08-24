<template>
  <div class="Rotation">
    <div class="ladder" style="width: 100%;height: 100%;position: absolute;left: -3%;top: -12%">
      <el-carousel :interval="4000" type="card" class="horseRaceLamp">
        <el-carousel-item>
          <img src="../assets/jpg/1人.png" alt="" id="img1" @click="check1">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/jpg/2人.png" alt="" id="img2" @click="check2">
        </el-carousel-item>
        <el-carousel-item>
          <router-link to="/Adventure">
          <img src="../assets/jpg/3人.png" alt="" id="img3" @click="check3">
          </router-link>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/jpg/4人.png" alt="" id="img4" @click="check4">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/jpg/5人.png" alt="" id="img5" @click="check5">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/jpg/6人.png" alt="" id="img6" @click="check6">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 50%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 180%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 127%" v-if="showTeacher"
      >千岛湖自古以来人杰地灵，培育了无数的传名伟人，现在让我来考考你对这些名人的了解吧！</div>
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
    <router-link to="/Adventure">
      <div id="back" @mouseenter="onback" @mouseleave="offback">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
import {changeTheGrade3,selectAccount} from '../network/test.js'
import "./app.css";
export default {
  data() {
    return {
      index1: false,
      back: false,
      grade:0,
      theAccount:null,
      showTeacher:true,
    };
  },
  created() {
    this._selectAccount();
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
    _selectAccount(){
      selectAccount(sessionStorage.getItem('account')).then(res=>{
        if(res.data[0]){
          this.theAccount=res.data[0];
        }else {
          this.theAccount = 0;
        }
      })
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
    check1(){
      alert("答错了");
      this.grade -= 5;
    },
    check2(){
      alert("答错了");
      this.grade -= 5;
    },
    check3(){
      this.grade += 40;
      alert("答对了");
      changeTheGrade3(this.grade,this.theAccount.ID).then(res=>{
        if(res.data===1){

        }
      });
    },
    check4(){
      alert("答错了");
      this.grade -= 5;
    },
    check5(){
      alert("答错了");
      this.grade -= 5;
    },
    check6(){
      alert("答错了");
      this.grade -= 5;
    },
  },
};
</script>

<style>
.el-carousel__mask {
  background-color: transparent;
}

.el-carousel__container {
  height: 80%;
}

.el-carousel__arrow--right {
  right: 8%;
  color: transparent;
}

.el-carousel__arrow--left {
  left: 1%;
  color: transparent;
}


</style>

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

a {
  color: white;
}

.Rotation {
  background: url("../assets/jpg/peopleBackground.jpg") no-repeat;
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
.ladder {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

#img1 {

}
#img1:active{
  transform: scale(0.8);
}
#img3 {

}
#img3:active{
  transform: scale(0.8);
}
#img2 {

}
#img2:active{
  transform: scale(0.8);
}
#img4 {

}
#img4:active{
  transform: scale(0.8);
}
#img5 {

}
#img5:active{
  transform: scale(0.8);
}
#img6 {

}
#img6:active{
  transform: scale(0.8);
}
.horseRaceLamp {
  width: 90%;
  height: 80%;
  position: absolute;
  top: 15%;
  left: 8%;
}
</style>
