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
          lists.length * 7 +'s;'">
        <li
          :style="'width:' + 70 / (lists.length * 2) + '%;'"
          v-for="(item, index) in lists"
          :key="index">
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

    <transition name="forward">
      <div v-if="!showTeacher">
        <img src="../assets/jpg/boy-boat.png" alt class="boat" />
        <!--    男孩和船    -->
      </div>
    </transition>

    <div class="cloud-1" v-show="showCloud">
      <!--    开船啦    -->
      <p >小朋友们！学习了千岛湖的捕</p>
      <p >鱼方式，接下来让我们进入千</p>
      <p >岛湖的打鱼之旅吧！</p>
      <img
        src="../assets/jpg/按钮.png"
        alt
        class="click-1"
        @click="changeCloud"
      />
    </div>

    <div class="cloud-2" v-show="!showCloud" v-if="tip1">
      <!--    答题一号啦    -->
      <p >千岛湖捕鱼方式</p>
      <p >的第一个步骤是</p>
      <p >以上哪个？</p>
    </div>
    <div class="cloud-2" v-show="!showCloud" v-if="tip2">
      <!--    答题二号啦    -->
      <p >千岛湖捕鱼方式</p>
      <p >的第二个步骤是</p>
      <p >以上哪个？</p>
    </div>
    <div class="cloud-2" v-show="!showCloud" v-if="tip3">
      <!--    答题三号啦    -->
      <p >千岛湖捕鱼方式</p>
      <p >的第三个步骤是</p>
      <p >以上哪个？</p>
    </div>
    <div class="cloud-2" v-show="!showCloud" v-if="tip4">
      <!--    答题四号啦    -->
      <p >千岛湖捕鱼方式</p>
      <p >的第四个步骤是</p>
      <p >以上哪个？</p>
    </div>
    <transition name="teacherComing">
      <div class="teacher" v-if="showTeacher">
        <img src="../assets/jpg/结束提示.png" alt="">
      </div>
    </transition>

    <div class="boll">
      <!--    波浪效果    -->
      <div class="water w1"></div>
      <div class="water w2"></div>
      <div class="water"></div>
    </div>

    <div class="observe" v-show="!showCloud" @click="check3">
      <img src="../assets/jpg/3步.png" alt />
    </div>
    <div class="observe" style="margin-left: 22%" v-show="!showCloud" @click="check4">
      <img src="../assets/jpg/4步.png" alt />
    </div>
    <div class="observe" style="margin-left: 44%" v-show="!showCloud" @click="check1">
      <img src="../assets/jpg/1步.png" alt />
    </div>
    <div class="observe" style="margin-left: 66%" v-show="!showCloud" @click="check2">
      <img src="../assets/jpg/2步.png" alt />
    </div>

    <div class="true" v-show="!showCloud" v-if="right3">
      <img src="../assets/jpg/正确.png" alt />
    </div>
    <div class="true" v-show="!showCloud" v-if="wrong3">
      <img src="../assets/jpg/错误.png" alt />
    </div>
    <div class="true" style="margin-left: 22%" v-show="!showCloud" v-if="right4">
      <img src="../assets/jpg/正确.png" alt />
    </div>
    <div class="true" style="margin-left: 22%" v-show="!showCloud" v-if="wrong4">
      <img src="../assets/jpg/错误.png" alt />
    </div>
    <div class="true" style="margin-left: 44%" v-show="!showCloud" v-if="right1">
      <img src="../assets/jpg/正确.png" alt />
    </div>
    <div class="true" style="margin-left: 44%" v-show="!showCloud" v-if="wrong1">
      <img src="../assets/jpg/错误.png" alt />
    </div>
    <div class="true" style="margin-left: 66%" v-show="!showCloud" v-if="right2">
      <img src="../assets/jpg/正确.png" alt />
    </div>
    <div class="true" style="margin-left: 66%" v-show="!showCloud" v-if="wrong2">
      <img src="../assets/jpg/错误.png" alt />
    </div>

    <!--    智能老师来啦-->
    <div  style="height: 40%;width: 15%;position: absolute;top: 50%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeachers">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeachers" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 180%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeachers">
      <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 127%" v-if="showTeachers"
      >巨网捕鱼是千岛湖的特色活动哦，让我们进行一个简短的小测试来考考你对巨网捕鱼的了解吧！</div>
      <div class="buttonStyle_2" v-if="showTeachers" @click="showTeachers = !showTeachers"></div>
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
import {selectAccount,changeTheGrade} from '../network/test.js'
export default {
  data() {
    return {
      index1: false,
      back: false,
      showCloud: true,
      right1:false,wrong1:false,
      right2:false,wrong2:false,
      right3:false,wrong3:false,
      right4:false,wrong4:false,
      count:'1',
      state1:'1',state2:'1',state3:'1',state4:'1',
      tip1:true,tip2:false,tip3:false,tip4:false,
      showTeacher:false,
      theAccount:null,
      grade:0,
      showTeachers:true,
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
          this.theAccount=0;
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
    changeCloud(){
      this.showCloud = false;
    },
    end1(){
      this.wrong1 = false;
    },
    end2(){
      this.wrong2 = false;
    },
    end3(){
      this.wrong3 = false;
    },
    end4(){
      this.wrong4 = false;
    },
    check1(){
      if(this.state1 === '1'){
        if(this.count === '1'){
          this.grade += 30;
          this.right1 = true;
          this.state1 = '0';
          this.count = '2';
          this.tip1 = false;
          this.tip2 = true;
        }
        else{
          this.grade -= 10,
          this.wrong1 = true;
          let _this = this;
          setTimeout(function () {
            _this.end1();
          },1500)
        }
      }
    },
    check2(){
      if(this.state2 === '1'){
        if(this.count === '2'){
          this.grade += 30;
          this.right2 = true;
          this.state2 = '0';
          this.count = '3';
          this.tip2 = false;
          this.tip3 = true;
        }
        else{
          this.grade -= 10;
          this.wrong2 = true;
          let _this = this;
          setTimeout(function () {
            _this.end2();
          },1500)
        }
      }
    },
    check3(){
      if(this.state3 === '1'){
        if(this.count === '3'){
          this.grade += 30;
          this.right3 = true;
          this.state3 = '0';
          this.count = '4';
          this.tip3 = false;
          this.tip4 = true;
        }
        else{
          this.grade -= 10;
          this.wrong3 = true;
          let _this = this;
          setTimeout(function () {
            _this.end3();
          },1500)
        }
      }
    },
    check4(){
      if(this.state4 === '1'){
        if(this.count === '4'){
          this.grade += 30;
          this.right4 = true;
          this.state4 = '0';
          this.tip4 = false;
          this.showTeacher = true;
          changeTheGrade(this.grade,this.theAccount.ID).then(res=>{
            if(res.data===1){

            }
          })
        }
        else{
          this.grade -= 10;
          this.wrong4 = true;
          let _this = this;
          setTimeout(function () {
            _this.end4();
          },1500)
        }
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
.hello {
  background: url("../assets/jpg/fish背景.jpg");
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  overflow: hidden;
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

.boat {
  position: relative;
  margin-top: 24%;
  left: -5%;
  width: 30%;
  height: 35%;
}

.cloud-1 {
  position: absolute;
  top: 14%;
  left: 55%;
  width: 39%;
  height: 48.5%;
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
  top: 37%;
  left: 55%;
  width: 25%;
  height: 30.5%;
  background: url("../assets/jpg/云对话框.png") no-repeat;
  background-size: 100% 100%;
}

.cloud-2 p {
  color: rgb(252, 148, 1);
  font-size: 3vh;
  position: relative;
  top: 14%;
}

.observe {
  width: 18%;
  height: 25%;
  position: absolute;
  top: 13%;
  left: 8%;
}
.observe img {
  width: 100%;
  height: 100%;
}
.observe:active{
  transform: scale(0.85);
}

.true{
  position: absolute;
  top: 2%;
  left: 13%;
  width: 7%;
}
.true img{
  width: 100%;
  height: 100%;
}

.teacher{
  width: 35%;
  position: absolute;
  top: 45%;
  z-index: 99;
}
.teacher img{
  width: 100%;
  height: 100%;
}

.click-1 {
  position: absolute;
  top: 77%;
  left: 40%;
  width: 20%;
  height: 20%;
  transition: transform 50ms ease-out;
}

.click-1:active {
  transform: scale(0.8);
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
  /*老师出现动画*/
.teacherComing-enter-active {
  transition: opacity 2s;
  display: flex;
}

.teacherComing-enter {
  opacity: 0;
  display: flex;
}
/*男孩前进动画*/
.forward-leave-active {
  transition: all 5s;
}

.forward-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
