<template>
  <div style="height: 100%;width: 100%">
  <div class="map">
    <div class="center" @click="show = !show"></div>
    <transition name="slide-fade">
      <div class="t1" v-show="show">
        <img src="../assets/jpg/元1.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <transition name="slide-fade2">
      <div class="t2" v-show="show">
        <img src="../assets/jpg/元2.png" style="width: 100%; height: 100%" />
      </div>
    </transition>
    <div class="location">
      <router-link to="/MountainChange">
        <div class="fish-man" @mouseenter="onFishMan" @mouseleave="offFishMan" v-if="!show1">
          <img src="../assets/jpg/千岛湖的形成.png" v-show="!fishMan" />
          <img
            src="../assets/jpg/千岛湖的形成.png"
            v-show="fishMan"
            class="color"
          />
        </div>
        <div class="fish-man" @mouseenter="onFishMan" @mouseleave="offFishMan" v-if="show1"
        style="height: 8%;width: 17%;position: absolute;left: 19%;top: 14%">
          <img src="../assets/jpg/gray3.png" v-show="!fishMan" />
          <img
                  src="../assets/jpg/gray3.png"
                  v-show="fishMan"
                  class="color"
          />
        </div>
      </router-link>
      <router-link to="/People">
        <div class="fish-man2" @mouseenter="onFishMan2" @mouseleave="offFishMan2" v-if="!show2">
          <img src="../assets/jpg/千岛湖的渔业.png" v-show="!fishMan2" />
          <img
            src="../assets/jpg/千岛湖的渔业.png"
            v-show="fishMan2"
            class="color"
          />
        </div>
        <div class="fish-man2" @mouseenter="onFishMan2" @mouseleave="offFishMan2" v-if="show2"
             style="height: 8%;width: 17%;position: absolute;left: 18%;top: 26%">
          <img src="../assets/jpg/gray4.png" v-show="!fishMan2" />
          <img
                  src="../assets/jpg/gray4.png"
                  v-show="fishMan2"
                  class="color"
          />
        </div>
      </router-link>
      <router-link to="/History">
        <div class="fish-man3" @mouseenter="onFishMan3" @mouseleave="offFishMan3" v-if="!show3">
          <img src="../assets/jpg/千岛湖的历史.png" v-show="!fishMan3" />
          <img
            src="../assets/jpg/千岛湖的历史.png"
            v-show="fishMan3"
            class="color"
          />
        </div>
        <div class="fish-man3" @mouseenter="onFishMan3" @mouseleave="offFishMan3" v-if="show3"
             style="height: 8%;width: 17%;position: absolute;left: 14%;top: 55%">
          <img src="../assets/jpg/gray5.png" v-show="!fishMan3" />
          <img
                  src="../assets/jpg/gray5.png"
                  v-show="fishMan3"
                  class="color"
          />
        </div>
      </router-link>
      <router-link to="/Visit">
        <div class="fish-man4" @mouseenter="onFishMan4" @mouseleave="offFishMan4" v-if="!show4">
          <img src="../assets/jpg/游览千岛湖.png" v-show="!fishMan4" />
          <img
            src="../assets/jpg/游览千岛湖.png"
            v-show="fishMan4"
            class="color"
          />
        </div>
        <div class="fish-man4" @mouseenter="onFishMan4" @mouseleave="offFishMan4" v-if="show4"
             style="height: 8%;width: 17%;position: absolute;left: 68%;top: 14%">
          <img src="../assets/jpg/gray1.png" v-show="!fishMan4" />
          <img
                  src="../assets/jpg/gray1.png"
                  v-show="fishMan4"
                  class="color"
          />
        </div>
      </router-link>
      <router-link to="/Adventure">
        <div id="fish-man5" @mouseenter="onFishMan5" @mouseleave="offFishMan5">
          <img src="../assets/jpg/千岛湖探险.png" v-show="!fishMan5" />
          <img
            src="../assets/jpg/千岛湖探险.png"
            v-show="fishMan5"
            class="color"
          />
        </div>
      </router-link>
      <div class="bp1"></div>
      <div class="bp2"></div>
      <div class="bp3"></div>
      <div class="bp4"></div>
      <div class="bp5"></div>
      <router-link to="/Fishing">
        <div class="sp1">
          <h1>捕鱼知识</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/Rotation">
        <div class="sp2">
          <h1>鱼类知识</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/Show">
        <div class="sp3">
          <h1>当地特产</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/Poem">
        <div class="sp4">
          <h1>诗词千岛</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/WaterCity">
        <div class="sp5">
          <h1>水下古城</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <div class="sp6">
        <h1>淳安古韵</h1>
        <img src="../assets/jpg/小点.png" />
      </div>
      <router-link to="/FamousPerson">
        <div class="sp7">
          <h1>历史名人</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/CenterLake">
        <div class="sp8">
          <h1>中心湖区</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/NorthEast">
        <div class="sp9">
          <h1>东北湖区</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/NorthWest">
        <div class="sp10">
          <h1>西北湖区</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/SouthEast">
        <div class="sp11">
          <h1>东南湖区</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <router-link to="/SouthWest">
        <div class="sp12">
          <h1>西南湖区</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <div class="sp13">
        <h1>打渔之旅</h1>
        <img src="../assets/jpg/小点.png" />
      </div>
      <router-link to="/FishGame">
        <div class="sp14">
          <h1>鱼类竞猜</h1>
          <img src="../assets/jpg/小点.png" />
        </div>
      </router-link>
      <div class="sp15">
        <h1>诗词大会</h1>
        <img src="../assets/jpg/小点.png" />
      </div>
      <div class="sp16">
        <h1>猜猜名人</h1>
        <img src="../assets/jpg/小点.png" />
      </div>
      <div class="sp17">
        <h1>知识考验</h1>
        <img src="../assets/jpg/小点.png" />
      </div>
    </div>
    <div v-if="!nextPage" style="height: 40%;width: 15%;position: absolute;top: 50%">
      <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showCloud">
      <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showCloud" @click="reStart">
      <img src="../assets/jpg/蓝云.png" alt="" style="width: 240%;height: 120%;position: absolute;
      top: -65%;left: 95%;z-index: 98" v-if="showCloud">
      <div class="wordStyle_1" style="width:130%;height:20%;position: absolute;z-index: 99;top: -33%;left: 155%"
      v-if="showCloud">{{this.trueContent}}</div>
      <div class="buttonStyle_2" v-if="showCloud" @click="showCloud = false"></div>
    </div>
  </div>
    <div class="blackScreen" v-if="showScreen">
    </div>
    <div style="width: 100%;height: 100%;position: absolute" v-if="showContent">
      <div class="teacher1">
        <span class="gradeStyle" style="position: absolute;top: 25%;left: 51%">{{theGrade.grade}}</span>
        <span class="gradeStyle" style="position: absolute;top: 25%;left: 75%">{{80 - theGrade.grade}}</span>
        <div class="wordStyle" v-if="nextPage">
          <p>小朋友，老师根据测试结果，</p>
          <p>为你量身定制了学习计划，让我们</p>
          <p>拨开云雾开始学习千岛湖的文化吧！</p>
        </div>
        <div class="wordStyle" v-if="!nextPage">
        </div>
        <div class="buttonStyle" @click="next1" v-if="nextPage"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {selectAccount,selectGrade,selectContent,green} from '../network/test.js'
export default {
  data() {
    return {
      show: true,
      fishMan: false,
      fishMan2: false,
      fishMan3: false,
      fishMan4: false,
      fishMan5: false,
      showScreen : true,showContent : true,
      show1 : true,show2 : true,show3 : true,show4 : true,
      theShow1 : null,theShow2 : null,theShow3 : null,theShow4 : null,
      theAccount : null, theGrade : null,
      wordContent : [
        '小朋友，前测成绩较为不理想，老师根据你的课前答题情况，制' +
        '定了个性化学习目录，黄色标题框的内容板块需要小朋友详细学' +
        '习与记忆，灰色标题框的内容板块可浏览学习，接下来，让我们' +
        '走进如诗如画的千岛湖吧！',
        '小朋友，前测取得了良好的成绩，老师根据你的课前答题情况，' +
        '制定了个性化学习目录，黄色标题框的内容板块需要小朋友详细' +
        '学习与记忆，灰色标题框的内容板块可浏览学习，接下来，让我' +
        '们走进如诗如画的千岛湖吧！',
        '小朋友，前测取得了非常棒的成绩！老师根据你的课前答题情况' +
        '，制定了个性化学习目录，黄色标题框的内容板块需要小朋友详' +
        '细学习与记忆，灰色标题框的内容板块可浏览学习，接下来，让' +
        '我们走进如诗如画的千岛湖吧！',
      ],
      trueContent : '',
      nextPage : true,
      timer : '',
      showCloud : true,
      qwe: '',
    };
  },
  created() {
    this._selectAccount();
    this._selectGrade();
    this._selectContent1();
    this._selectContent2();
    this._selectContent3();
    this._selectContent4();
  },
  methods: {
    reStart(){
      this.showCloud = true;
    },
    fade(){
      this.showCloud = false;
    },
    next1(){
      this.nextPage = !this.nextPage;
      this.show = !this.show;
      this.showScreen = !this.showScreen;
      this.showContent = !this.showContent;
      if(this.theGrade.grade <= 20){
        this.trueContent = this.wordContent[0];
      }
      else if(this.theGrade.grade > 20 && this.theGrade.grade <= 50){
        this.trueContent = this.wordContent[1];
      }
      else{
        this.trueContent = this.wordContent[2];
      }
      this.showCloud = true;
      // let _this = this;
      // setTimeout(function () {
      //   _this.fade();
      // },10000)
    },
    next2(){
      this.show = !this.show;
      this.showScreen = !this.showScreen;
      this.showContent = !this.showContent;
    },
    _selectContent1() {
      this.qwe = 1;
      selectContent(this.qwe).then(res=>{
        if(res.data[0]){
          this.theShow1 = res.data[0];
          if(this.theShow1.shows === '0'){
            this.show1 = false;
          }
        }
      });
    },
    _selectContent2() {
      this.qwe = 2;
      selectContent(this.qwe).then(res=>{
        if(res.data[0]){
          this.theShow2 = res.data[0];
          if(this.theShow2.shows === '0'){
            this.show2 = false;
          }
        }
      });
    },
    _selectContent3() {
      this.qwe = 3;
      selectContent(this.qwe).then(res=>{
        if(res.data[0]){
          this.theShow3 = res.data[0];
          if(this.theShow3.shows === '0'){
            this.show3 = false;
          }
        }
      });
    },
    _selectContent4() {
      this.qwe = 4;
      selectContent(this.qwe).then(res=>{
        if(res.data[0]){
          this.theShow4 = res.data[0];
          if(this.theShow4.shows === '0'){
            this.show4 = false;
          }
        }
      });
    },
    _selectAccount(){
      selectAccount(sessionStorage.getItem('account')).then(res=>{
        if(res.data[0]){
          this.theAccount=res.data[0];
        }else {
          this.theAccount=0;
        }
      });
      green(1,0);
      green(2,0);
      green(3,0);
      green(4,0);
      green(5,0);
    },
    _selectGrade(){
      selectGrade(sessionStorage.getItem('grade')).then(res=>{
        if(res.data[0]){
          this.theGrade=res.data[0];
        }else {
          this.theGrade=0;
        }
      })
    },
    onFishMan() {
      this.fishMan = true;
    },
    offFishMan() {
      this.fishMan = false;
    },
    onFishMan2() {
      this.fishMan2 = true;
    },
    offFishMan2() {
      this.fishMan2 = false;
    },
    onFishMan3() {
      this.fishMan3 = true;
    },
    offFishMan3() {
      this.fishMan3 = false;
    },
    onFishMan4() {
      this.fishMan4 = true;
    },
    offFishMan4() {
      this.fishMan4 = false;
    },
    onFishMan5() {
      this.fishMan5 = true;
    },
    offFishMan5() {
      this.fishMan5 = false;
    },
  },
};
</script>
<style scoped>

.head{
  width: 60%;
  position: absolute;
  top: 65%;
  left: 25%;
}
.head:active{
  transform: scale(0.8);
}

.blackScreen{
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #72706d;
  opacity: 0.3;
}

.teacher1{
  width: 50%;
  height: 60%;
  background: url("../assets/jpg/结果.png");
  background-size: 100% 100%;
  z-index: 99;
  position: absolute;
  top: 20%;
  left: 25%;
}

.buttonStyle{
  background: url("../assets/jpg/确定.png");
  background-size: 100% 100%;
  width: 10%;
  height: 10%;
  position: absolute;
  top: 80%;
  left: 53%;
}
.buttonStyle:active{
  transform: scale(0.8);
}

.buttonStyle_2{
  background: url("../assets/jpg/继续.png");
  background-size: 100% 100%;
  width: 35%;
  height: 13%;
  position: absolute;
  top: 27%;
  left: 190%;
  z-index: 99;
}
.buttonStyle_2:active{
  transform: scale(0.8);
}

.gradeStyle{
  font-size: 1.8vw;
  color: white;
  font-weight: bolder;
}

.wordStyle{
  color: #0d4972;
  position: relative;
  top: 53%;
  left: 12%;
  font-size: 1.2vw;
  line-height: 85%;
}
.wordStyle_1{
  color: #0d4972;
  position: relative;
  left: 12%;
  font-size: 1.2vw;
}

h1 {
  color: #402311;
  font-family: "YouYuan";
  margin-left: -32%;
  font-size: 18px;
  font-weight: bolder;
}

.map {
  background: url(../assets/jpg/目录.jpg) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  position: fixed;
  font-size: 62.5%;
  overflow: hidden;
}
.location {
  width: 70%;
  left: 15%;
  height: 74vh;
  position: relative;
}

.center {
  width: 8%;
  height: 16vh;
  position: relative;
  top: 38%;
  left: 47%;
  z-index: 999;
}
.t1 {
  width: 83%;
  height: 100vh;
  position: absolute;
  /* left: 30%; */
  top: 0%;
  z-index: 77;
}
.t2 {
  width: 80%;
  height: 100vh;
  position: absolute;
  left: 21%;
  top: 0;
  z-index: 77;
}
.fish-man {
  width: 21%;
  height: 14%;
  position: absolute;
  left: 16%;
  top: 12%;
}

.fish-man img {
  width: 100%;
  height: 100%;
}
.fish-man2 {
  width: 21%;
  height: 14%;
  position: absolute;
  left: 14.5%;
  top: 23%;
}

.fish-man2 img {
  width: 100%;
  height: 100%;
}
.fish-man3 {
  width: 21%;
  height: 14%;
  position: absolute;
  left: 10.5%;
  top: 52%;
}

.fish-man3 img {
  width: 100%;
  height: 100%;
}
.fish-man4 {
  width: 21%;
  height: 14%;
  position: absolute;
  left: 65%;
  top: 12%;
}

.fish-man4 img {
  width: 100%;
  height: 100%;
}
#fish-man5 {
  width: 21%;
  height: 14%;
  position: absolute;
  left: 74%;
  top: 54%;
}
.bp1 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 11%;
  left: 12%;
  z-index: 5;
}
.bp2 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 22%;
  left: 10.5%;
  z-index: 5;
}
.bp3 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 51%;
  left: 7%;
  z-index: 5;
}
.bp4 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 11%;
  left: 61%;
  z-index: 5;
}
.bp5 {
  background: url("../assets/jpg/大点.png") no-repeat;
  width: 6%;
  height: 15%;
  position: absolute;
  background-size: 100% 100%;
  top: 54%;
  left: 70%;
  z-index: 5;
}
.sp1 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 35%;
  left: 15%;
  z-index: 5;
  opacity: 0.6;
}
.sp1 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp2 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 40.5%;
  left: 14.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp2 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp3 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 46.5%;
  left: 14%;
  z-index: 5;
  opacity: 0.6;
}
.sp3 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp4 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 65%;
  left: 13%;
  z-index: 5;
  opacity: 0.6;
}
.sp4 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp5 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 70%;
  left: 12.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp5 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp6 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 75%;
  left: 12%;
  z-index: 5;
  opacity: 0.6;
}
.sp6 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp7 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 80%;
  left: 11.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp7 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp8 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 24%;
  left: 69%;
  z-index: 5;
  opacity: 0.6;
}
.sp8 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp9 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 29%;
  left: 69.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp9 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp10 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 34%;
  left: 70%;
  z-index: 5;
  opacity: 0.6;
}
.sp10 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp11 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 39%;
  left: 70.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp11 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp12 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 44%;
  left: 71%;
  z-index: 5;
  opacity: 0.6;
}
.sp12 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp13 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 66%;
  left: 76%;
  z-index: 5;
  opacity: 0.6;
}
.sp13 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp14 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 71%;
  left: 76.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp14 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp15 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 76%;
  left: 77%;
  z-index: 5;
  opacity: 0.6;
}
.sp15 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp16 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 81%;
  left: 77.5%;
  z-index: 5;
  opacity: 0.6;
}
.sp16 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
.sp17 {
  width: 19%;
  height: 5%;
  position: absolute;
  top: 86%;
  left: 78%;
  z-index: 5;
  opacity: 0.6;
}
.sp17 img {
  width: 21%;
  height: 94%;
  position: absolute;
  top: 50%;
  left: -2%;
}
#fish-man5 img {
  width: 100%;
  height: 100%;
}
.color {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-610px);
  opacity: 0;
}
.slide-fade2-enter-active {
  transition: all 0.3s ease;
}
.slide-fade2-leave-active {
  transition: all 2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(610px);
  opacity: 0;
}
</style>
