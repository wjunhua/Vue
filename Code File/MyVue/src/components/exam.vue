<template>

    <div id="backGround">
        <div class="subjectStyle" v-show="showSubject1">
            <div style="width: 100%;height: 100%">
            <div class="titleStyle">单选题</div>
            <div class="questionStyle">1.{{theRandomSubject1.question}}</div>
            <el-radio v-model="radio1" label="A" class="answerStyle">{{theRandomSubject1.choice1}}</el-radio>
            <el-radio v-model="radio1" label="B" class="answerStyle1">{{theRandomSubject1.choice2}}</el-radio>
            <el-radio v-model="radio1" label="C" class="answerStyle2">{{theRandomSubject1.choice3}}</el-radio>
            <el-radio v-model="radio1" label="D" class="answerStyle3">{{theRandomSubject1.choice4}}</el-radio>
            <div :plain="true" @click="check1" class="buttonStyle">

            </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject2">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">2.{{theRandomSubject2.question}}</div>
                <el-radio v-model="radio2" label="A" class="answerStyle">{{theRandomSubject2.choice1}}</el-radio>
                <el-radio v-model="radio2" label="B" class="answerStyle1">{{theRandomSubject2.choice2}}</el-radio>
                <el-radio v-model="radio2" label="C" class="answerStyle2">{{theRandomSubject2.choice3}}</el-radio>
                <el-radio v-model="radio2" label="D" class="answerStyle3">{{theRandomSubject2.choice4}}</el-radio>
                <div :plain="true" @click="check2" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject3">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">3.{{theRandomSubject3.question}}</div>
                <el-radio v-model="radio3" label="A" class="answerStyle">{{theRandomSubject3.choice1}}</el-radio>
                <el-radio v-model="radio3" label="B" class="answerStyle1">{{theRandomSubject3.choice2}}</el-radio>
                <el-radio v-model="radio3" label="C" class="answerStyle2">{{theRandomSubject3.choice3}}</el-radio>
                <el-radio v-model="radio3" label="D" class="answerStyle3">{{theRandomSubject3.choice4}}</el-radio>
                <div :plain="true" @click="check3" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject4">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">多选题</div>
                <div class="questionStyle">4.千岛湖的主要鱼类有哪几种？</div>
                <el-checkbox-group v-model="radio4" style="width: 100%;height: 100%">
                    <el-checkbox label="A" class="answerStyle">A.中华鲟鱼</el-checkbox>
                    <el-checkbox label="B" class="answerStyle1">B.青条丝</el-checkbox>
                    <el-checkbox label="C" class="answerStyle2">C.花鲴鱼</el-checkbox>
                    <el-checkbox label="D" class="answerStyle3">D.棍子鱼</el-checkbox>
                </el-checkbox-group>
                <div :plain="true" @click="duo" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject5">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">5.{{theRandomSubject4.question}}</div>
                <el-radio v-model="radio5" label="A" class="answerStyle">{{theRandomSubject4.choice1}}</el-radio>
                <el-radio v-model="radio5" label="B" class="answerStyle1">{{theRandomSubject4.choice2}}</el-radio>
                <el-radio v-model="radio5" label="C" class="answerStyle2">{{theRandomSubject4.choice3}}</el-radio>
                <el-radio v-model="radio5" label="D" class="answerStyle3">{{theRandomSubject4.choice4}}</el-radio>
                <div :plain="true" @click="check4" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject6">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">6.{{theRandomSubject5.question}}</div>
                <el-radio v-model="radio6" label="A" class="answerStyle">{{theRandomSubject5.choice1}}</el-radio>
                <el-radio v-model="radio6" label="B" class="answerStyle1">{{theRandomSubject5.choice2}}</el-radio>
                <el-radio v-model="radio6" label="C" class="answerStyle2">{{theRandomSubject5.choice3}}</el-radio>
                <el-radio v-model="radio6" label="D" class="answerStyle3">{{theRandomSubject5.choice4}}</el-radio>
                <div :plain="true" @click="check5" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject7">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">7.{{theRandomSubject6.question}}</div>
                <el-radio v-model="radio7" label="A" class="answerStyle">{{theRandomSubject6.choice1}}</el-radio>
                <el-radio v-model="radio7" label="B" class="answerStyle1">{{theRandomSubject6.choice2}}</el-radio>
                <el-radio v-model="radio7" label="C" class="answerStyle2">{{theRandomSubject6.choice3}}</el-radio>
                <el-radio v-model="radio7" label="D" class="answerStyle3">{{theRandomSubject6.choice4}}</el-radio>
                <div :plain="true" @click="check6" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject8">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">8.{{theRandomSubject7.question}}</div>
                <el-radio v-model="radio8" label="A" class="answerStyle">{{theRandomSubject7.choice1}}</el-radio>
                <el-radio v-model="radio8" label="B" class="answerStyle1">{{theRandomSubject7.choice2}}</el-radio>
                <el-radio v-model="radio8" label="C" class="answerStyle2">{{theRandomSubject7.choice3}}</el-radio>
                <el-radio v-model="radio8" label="D" class="answerStyle3">{{theRandomSubject7.choice4}}</el-radio>
                    <router-link to="/score">
                    <div @click="p_changeGrade()" class="buttonStyle">

                    </div>
                    </router-link>
            </div>
        </div>

        <!--    智能老师来啦-->
        <div  style="height: 40%;width: 15%;position: absolute;top: 50%">
            <img src="../assets/jpg/老师.png" alt="" style="width: 100%;height: 100%" v-if="showTeacher">
            <img src="../assets/jpg/AI.png" alt="" class="head" v-if="!showTeacher" @click="reStart">
            <img src="../assets/jpg/蓝云.png" alt="" style="width: 180%;height: 90%;position: absolute;
      top: -50%;left: 95%;z-index: 98" v-if="showTeacher">
            <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 127%" v-if="showTeacher"
            >小朋友们，对千岛湖进行了一系列的探索与发现后，相信你们对他已经有了十足的理解，让我来看看你对千岛湖的了解程度吧！</div>
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
    import {_changeGrade,selectRandom,changeContent,selectAccount,changeTheGrade4} from '../network/test.js'
    export default {
        data(){
            return {
                showSubject1: true, showSubject2: false, showSubject3: false,
                showSubject4: false, showSubject5: false, showSubject6: false,
                showSubject7: false, showSubject8: false,
                radio1: [], radio2: [], radio3: [],
                radio4: [], radio5: [], radio6: [],
                radio7: [], radio8: [],
                grade: 0,
                num: 0, num1: 1, account: '',
                nn1: '',nn2: '',nn3: '',nn4: '',nn5: '',nn6: '', nn7: '',
                theRandomSubject1 : null,theRandomSubject2 : null,theRandomSubject3 : null,
                theRandomSubject4 : null,theRandomSubject5 : null,theRandomSubject6 : null,
                theRandomSubject7 : null,
                shows: '',ID: '',
                index1: false,
                back: false,
                theAccount:null,
                showTeacher:true,
            }
        },
        created() {
            this.getRandomInt1(1,2);
            this.getRandomInt2(3,4);
            this.getRandomInt3(5,6);
            this.getRandomInt4(7,8);
            this.getRandomInt5(9,10);
            this.getRandomInt6(11,12);
            this.getRandomInt7(13,14);
            this._selectRandom1();
            this._selectRandom2();
            this._selectRandom3();
            this._selectRandom4();
            this._selectRandom5();
            this._selectRandom6();
            this._selectRandom7();
            this._selectAccount();
            this._selectAccount();
            let _this = this;
            setTimeout(function () {
                _this.end4();
            },6000)
        },
        methods:{
            end4(){
                this.showTeacher = false;
            },
            reStart(){
                this.showTeacher = !this.showTeacher;
            },
          _selectAccount(){
            selectAccount(sessionStorage.getItem('ID')).then(res=>{
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
            getRandomInt1(min, max) {
                this.nn1 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt2(min, max) {
                this.nn2 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt3(min, max) {
                this.nn3 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt4(min, max) {
                this.nn4 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt5(min, max) {
                this.nn5 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt6(min, max) {
                this.nn6 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getRandomInt7(min, max) {
                this.nn7 = Math.floor(Math.random() * (max - min + 1)) + min;
            },
            _selectRandom1() {
                selectRandom(this.nn1).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject1 = res.data[0];
                    }
                });
            },
            _selectRandom2() {
                selectRandom(this.nn2).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject2 = res.data[0];
                    }
                });
            },
            _selectRandom3() {
                selectRandom(this.nn3).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject3 = res.data[0];
                    }
                });
            },
            _selectRandom4() {
                selectRandom(this.nn4).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject4 = res.data[0];
                    }
                });
            },
            _selectRandom5() {
                selectRandom(this.nn5).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject5 = res.data[0];
                    }
                });
            },
            _selectRandom6() {
                selectRandom(this.nn6).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject6 = res.data[0];
                    }
                });
            },
            _selectRandom7() {
                selectRandom(this.nn7).then(res=>{
                    if(res.data[0]){
                        this.theRandomSubject7 = res.data[0];
                    }
                });
            },
            check1() {
                if(this.radio1 === this.theRandomSubject1.answer){
                    this.grade += 10;
                    this.showSubject1 = false;
                    this.showSubject2 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject1 = false;
                    this.showSubject2 = true;
                    this.$message.error('答错了');
                }
            },
            check2() {
                if(this.radio2 === this.theRandomSubject2.answer){
                    this.grade += 10;
                    this.showSubject2 = false;
                    this.showSubject3 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject2 = false;
                    this.showSubject3 = true;
                    this.$message.error('答错了');
                }
            },
            check3() {
                if(this.radio3 === this.theRandomSubject3.answer){
                    this.grade += 10;
                    this.showSubject3 = false;
                    this.showSubject4 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject3 = false;
                    this.showSubject4 = true;
                    this.$message.error('答错了');
                }
            },
            duo(){
                for(this.num = 0;this.num < 4;this.num ++){
                    if(!this.radio4[this.num]){
                        this.radio4[this.num] = 0;
                    }
                }
                this.num = 0;
                for (this.num = 0; this.num < 4; this.num++) {
                    if (this.radio4[this.num] === "A") {
                        for (this.num = 0; this.num < 4; this.num++) {
                            if (this.radio4[this.num] === "B") {
                                for (this.num = 0; this.num < 4; this.num++) {
                                    if (this.radio4[this.num] === "C") {
                                        for (this.num = 0; this.num < 4; this.num++) {
                                            if (this.radio4[this.num] === "D") {
                                                this.grade += 10;
                                                this.showSubject4 = false;
                                                this.showSubject5 = true;
                                                this.$message({
                                                    message: '答对了',
                                                    type: 'success'
                                                });
                                                this.num1 = 0;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.num >= 4 && this.num1 === 1) {
                    this.grade += 0;
                    this.showSubject4 = false;
                    this.showSubject5 = true;
                    this.$message.error('答错了');
                }
                this.num1 = 1;
            },
            check4() {
                if(this.radio5 === this.theRandomSubject4.answer){
                    this.grade += 10;
                    this.showSubject5 = false;
                    this.showSubject6 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject5 = false;
                    this.showSubject6 = true;
                    this.$message.error('答错了');
                }
            },
            check5() {
                if(this.radio6 === this.theRandomSubject5.answer){
                    this.grade += 10;
                    this.showSubject6 = false;
                    this.showSubject7 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject6 = false;
                    this.showSubject7 = true;
                    this.$message.error('答错了');
                }
            },
            check6() {
                if(this.radio7 === this.theRandomSubject6.answer){
                    this.grade += 10;
                    this.showSubject7 = false;
                    this.showSubject8 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject7 = false;
                    this.showSubject8 = true;
                    this.$message.error('答错了');
                }
            },
            p_changeGrade() {
                if(this.radio8 === this.theRandomSubject7.answer){
                    this.grade += 10;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.$message.error('答错了');
                }
                _changeGrade(this.grade).then(res=>{
                    if(res.data===1){
                    }
                });
              changeTheGrade4(this.grade,this.theAccount.ID).then(res=>{
                if(res.data===1){

                }
              });
            },
        }
    }

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

#backGround{
    width: 100%;
    height: 100%;
    background: url("../assets/jpg/exam.gif");
    background-size: 100% 100%;
}

.subjectStyle{
    width: 60%;
    height: 65%;
    position: relative;
    top: 25%;
    left: 20%;
}

.titleStyle{
    font-size: 1.5vw;
    letter-spacing: 1vw;
    position: absolute;
    top: 3%;
    left: 45%;
    color: #311b10;
}

.questionStyle{
    font-size: 1.5vw;
    position: absolute;
    top: 15%;
    left: 7%;
    color: #311b10;
}

.answerStyle{
    font-size: 1.5vw;
    position: absolute;
    top: 28%;
    left: 5%;
}

.answerStyle1{
    font-size: 1.5vw;
    position: absolute;
    top: 38%;
    left: 4%;
}

.answerStyle2{
    font-size: 1.5vw;
    position: absolute;
    top: 28%;
    left: 60%;
}

.answerStyle3{
    font-size: 1.5vw;
    position: absolute;
    top: 38%;
    left: 60%;
}

.buttonStyle{
    width: 20%;
    height: 6%;
    position: absolute;
    bottom: 29%;
    left: 41%;
    background: url("../assets/jpg/examHandIn.png");
    background-size: 100% 100%;
    color: white;
}
.buttonStyle:active{
    transform: scale(0.9);
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
