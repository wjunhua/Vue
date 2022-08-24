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
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">4.{{theRandomSubject4.question}}</div>
                <el-radio v-model="radio4" label="A" class="answerStyle">{{theRandomSubject4.choice1}}</el-radio>
                <el-radio v-model="radio4" label="B" class="answerStyle1">{{theRandomSubject4.choice2}}</el-radio>
                <el-radio v-model="radio4" label="C" class="answerStyle2">{{theRandomSubject4.choice3}}</el-radio>
                <el-radio v-model="radio4" label="D" class="answerStyle3">{{theRandomSubject4.choice4}}</el-radio>
                <div :plain="true" @click="check4" class="buttonStyle">

                </div>
            </div>
        </div>
        <div class="subjectStyle" v-show="showSubject5">
            <div style="width: 100%;height: 100%">
                <div class="titleStyle">单选题</div>
                <div class="questionStyle">5.{{theRandomSubject5.question}}</div>
                <el-radio v-model="radio5" label="A" class="answerStyle">{{theRandomSubject5.choice1}}</el-radio>
                <el-radio v-model="radio5" label="B" class="answerStyle1">{{theRandomSubject5.choice2}}</el-radio>
                <el-radio v-model="radio5" label="C" class="answerStyle2">{{theRandomSubject5.choice3}}</el-radio>
                <el-radio v-model="radio5" label="D" class="answerStyle3">{{theRandomSubject5.choice4}}</el-radio>
                    <div @click="check5" class="buttonStyle">

                    </div>
            </div>
        </div>
      <div class="subjectStyle" v-show="showSubject6">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">6.{{theRandomSubject6.question}}</div>
          <el-radio v-model="radio6" label="A" class="answerStyle">{{theRandomSubject6.choice1}}</el-radio>
          <el-radio v-model="radio6" label="B" class="answerStyle1">{{theRandomSubject6.choice2}}</el-radio>
          <el-radio v-model="radio6" label="C" class="answerStyle2">{{theRandomSubject6.choice3}}</el-radio>
          <el-radio v-model="radio6" label="D" class="answerStyle3">{{theRandomSubject6.choice4}}</el-radio>
          <div @click="check6" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject7">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">7.{{theRandomSubject7.question}}</div>
          <el-radio v-model="radio7" label="A" class="answerStyle">{{theRandomSubject7.choice1}}</el-radio>
          <el-radio v-model="radio7" label="B" class="answerStyle1">{{theRandomSubject7.choice2}}</el-radio>
          <el-radio v-model="radio7" label="C" class="answerStyle2">{{theRandomSubject7.choice3}}</el-radio>
          <el-radio v-model="radio7" label="D" class="answerStyle3">{{theRandomSubject7.choice4}}</el-radio>
          <div @click="check7" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject8">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">8.{{theRandomSubject8.question}}</div>
          <el-radio v-model="radio8" label="A" class="answerStyle">{{theRandomSubject8.choice1}}</el-radio>
          <el-radio v-model="radio8" label="B" class="answerStyle1">{{theRandomSubject8.choice2}}</el-radio>
          <el-radio v-model="radio8" label="C" class="answerStyle2">{{theRandomSubject8.choice3}}</el-radio>
          <el-radio v-model="radio8" label="D" class="answerStyle3">{{theRandomSubject8.choice4}}</el-radio>
          <div @click="check8" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject9">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">9.{{theRandomSubject9.question}}</div>
          <el-radio v-model="radio9" label="A" class="answerStyle">{{theRandomSubject9.choice1}}</el-radio>
          <el-radio v-model="radio9" label="B" class="answerStyle1">{{theRandomSubject9.choice2}}</el-radio>
          <el-radio v-model="radio9" label="C" class="answerStyle2">{{theRandomSubject9.choice3}}</el-radio>
          <el-radio v-model="radio9" label="D" class="answerStyle3">{{theRandomSubject9.choice4}}</el-radio>
          <div @click="check9" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject10">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">10.{{theRandomSubject10.question}}</div>
          <el-radio v-model="radio10" label="A" class="answerStyle">{{theRandomSubject10.choice1}}</el-radio>
          <el-radio v-model="radio10" label="B" class="answerStyle1">{{theRandomSubject10.choice2}}</el-radio>
          <el-radio v-model="radio10" label="C" class="answerStyle2">{{theRandomSubject10.choice3}}</el-radio>
          <el-radio v-model="radio10" label="D" class="answerStyle3">{{theRandomSubject10.choice4}}</el-radio>
          <div @click="check10" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject11">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">11.{{theRandomSubject11.question}}</div>
          <el-radio v-model="radio11" label="A" class="answerStyle">{{theRandomSubject11.choice1}}</el-radio>
          <el-radio v-model="radio11" label="B" class="answerStyle1">{{theRandomSubject11.choice2}}</el-radio>
          <el-radio v-model="radio11" label="C" class="answerStyle2">{{theRandomSubject11.choice3}}</el-radio>
          <el-radio v-model="radio11" label="D" class="answerStyle3">{{theRandomSubject11.choice4}}</el-radio>
          <div @click="check11" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject12">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">12.{{theRandomSubject12.question}}</div>
          <el-radio v-model="radio12" label="A" class="answerStyle">{{theRandomSubject12.choice1}}</el-radio>
          <el-radio v-model="radio12" label="B" class="answerStyle1">{{theRandomSubject12.choice2}}</el-radio>
          <el-radio v-model="radio12" label="C" class="answerStyle2">{{theRandomSubject12.choice3}}</el-radio>
          <el-radio v-model="radio12" label="D" class="answerStyle3">{{theRandomSubject12.choice4}}</el-radio>
          <div @click="check12" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject13">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">13.{{theRandomSubject13.question}}</div>
          <el-radio v-model="radio13" label="A" class="answerStyle">{{theRandomSubject13.choice1}}</el-radio>
          <el-radio v-model="radio13" label="B" class="answerStyle1">{{theRandomSubject13.choice2}}</el-radio>
          <el-radio v-model="radio13" label="C" class="answerStyle2">{{theRandomSubject13.choice3}}</el-radio>
          <el-radio v-model="radio13" label="D" class="answerStyle3">{{theRandomSubject13.choice4}}</el-radio>
          <div @click="check13" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject14">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">14.{{theRandomSubject14.question}}</div>
          <el-radio v-model="radio14" label="A" class="answerStyle">{{theRandomSubject14.choice1}}</el-radio>
          <el-radio v-model="radio14" label="B" class="answerStyle1">{{theRandomSubject14.choice2}}</el-radio>
          <el-radio v-model="radio14" label="C" class="answerStyle2">{{theRandomSubject14.choice3}}</el-radio>
          <el-radio v-model="radio14" label="D" class="answerStyle3">{{theRandomSubject14.choice4}}</el-radio>
          <div @click="check14" class="buttonStyle">

          </div>
        </div>
      </div>
      <div class="subjectStyle" v-show="showSubject15">
        <div style="width: 100%;height: 100%">
          <div class="titleStyle">单选题</div>
          <div class="questionStyle">15.{{theRandomSubject15.question}}</div>
          <el-radio v-model="radio15" label="A" class="answerStyle">{{theRandomSubject15.choice1}}</el-radio>
          <el-radio v-model="radio15" label="B" class="answerStyle1">{{theRandomSubject15.choice2}}</el-radio>
          <el-radio v-model="radio15" label="C" class="answerStyle2">{{theRandomSubject15.choice3}}</el-radio>
          <el-radio v-model="radio15" label="D" class="answerStyle3">{{theRandomSubject15.choice4}}</el-radio>
          <router-link to="/Adventure">
          <div @click="p_changeGrade" class="buttonStyle">

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
            <div class="wordStyle" style="width:120%;height:20%;position: absolute;z-index: 99;top: -20%;left: 125%" v-if="showTeacher"
            >风光绮丽的千岛湖至今孕育了无数的诗词大家，现在让我来考考你对千岛湖诗词的了解有几何吧！</div>
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
    import $ from 'jquery'
    import {selectAccount,changeTheGrade2,_changeGrade1,selectPoem} from '../network/test.js'
    export default {
        data(){
            return {
                showSubject1: true, showSubject2: false, showSubject3: false,
                showSubject4: false, showSubject5: false, showSubject6: false,
                showSubject7: false, showSubject8: false, showSubject9: false,
                showSubject10: false, showSubject11: false, showSubject12: false,
                showSubject13: false, showSubject14: false, showSubject15: false,
                radio1: '', radio2: '', radio3: '',
                radio4: '', radio5: '', radio6: '',
                radio7: '', radio8: '',radio9: '',
                radio10: '',radio11: '', radio12: '',
                radio13: '', radio14: '',radio15: '',
                grade: 0,
                theAccount:null,
                num: 0, num1: 1, account: '',
                nn: [],
                temps:'',
                theRandomSubject1 : null,theRandomSubject2 : null,theRandomSubject3 : null,
                theRandomSubject4 : null,theRandomSubject5 : null,theRandomSubject6 : null,
                theRandomSubject7 : null,theRandomSubject8 : null,theRandomSubject9 : null,
                theRandomSubject10 : null,theRandomSubject11 : null,theRandomSubject12 : null,
                theRandomSubject13 : null,theRandomSubject14 : null,theRandomSubject15 : null,
                index1: false,
                back: false,
                items: 1,
                showTeacher:true,
            }
        },
        methods:{
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
          getRandomInt(min, max) {
            this.nn[0] = Math.floor(Math.random() * (max - min + 1)) + min;
            this.temps = this.nn[0];
            while(this.items < 15){
              this.nn[this.items] = Math.floor(Math.random() * (max - min + 1)) + min;
              while(this.nn[this.items] === this.temps){
                this.nn[this.items] = Math.floor(Math.random() * (max - min + 1)) + min;
              }
              this.temps = this.nn[this.items];
              this.items ++;
            }
          },
            _selectPoem() {
                selectPoem(this.nn[0]).then(res=>{
                  if(res.data[0]){
                    this.theRandomSubject1 = res.data[0];
                  }
                });
              selectPoem(this.nn[1]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject2 = res.data[0];
                }
              });
              selectPoem(this.nn[2]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject3 = res.data[0];
                }
              });
              selectPoem(this.nn[3]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject4 = res.data[0];
                }
              });
              selectPoem(this.nn[4]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject5 = res.data[0];
                }
              });
              selectPoem(this.nn[5]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject6 = res.data[0];
                }
              });
              selectPoem(this.nn[6]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject7 = res.data[0];
                }
              });
              selectPoem(this.nn[7]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject8 = res.data[0];
                }
              });
              selectPoem(this.nn[8]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject9 = res.data[0];
                }
              });
              selectPoem(this.nn[9]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject10 = res.data[0];
                }
              });
              selectPoem(this.nn[10]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject11 = res.data[0];
                }
              });
              selectPoem(this.nn[11]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject12 = res.data[0];
                }
              });
              selectPoem(this.nn[12]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject13 = res.data[0];
                }
              });
              selectPoem(this.nn[13]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject14 = res.data[0];
                }
              });
              selectPoem(this.nn[14]).then(res=>{
                if(res.data[0]){
                  this.theRandomSubject15 = res.data[0];
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
            check4() {
                if(this.radio4 === this.theRandomSubject4.answer){
                    this.grade += 10;
                    this.showSubject4 = false;
                    this.showSubject5 = true;
                    this.$message({
                        message: '答对了',
                        type: 'success'
                    });
                }
                else{
                    this.grade += 0;
                    this.showSubject4 = false;
                    this.showSubject5 = true;
                    this.$message.error('答错了');
                }
            },
            check5() {
                if(this.radio5 === this.theRandomSubject5.answer){
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
            check6() {
                if(this.radio6 === this.theRandomSubject6.answer){
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
          check7() {
            if(this.radio7 === this.theRandomSubject7.answer){
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
          check8() {
            if(this.radio8 === this.theRandomSubject8.answer){
              this.grade += 10;
              this.showSubject8 = false;
              this.showSubject9 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject8 = false;
              this.showSubject9 = true;
              this.$message.error('答错了');
            }
          },
          check9() {
            if(this.radio9 === this.theRandomSubject9.answer){
              this.grade += 10;
              this.showSubject9 = false;
              this.showSubject10 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject9 = false;
              this.showSubject10 = true;
              this.$message.error('答错了');
            }
          },
          check10() {
            if(this.radio10 === this.theRandomSubject10.answer){
              this.grade += 10;
              this.showSubject10 = false;
              this.showSubject11 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject10 = false;
              this.showSubject11 = true;
              this.$message.error('答错了');
            }
          },
          check11() {
            if(this.radio11 === this.theRandomSubject11.answer){
              this.grade += 10;
              this.showSubject11 = false;
              this.showSubject12 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject11 = false;
              this.showSubject12 = true;
              this.$message.error('答错了');
            }
          },
          check12() {
            if(this.radio12 === this.theRandomSubject12.answer){
              this.grade += 10;
              this.showSubject12 = false;
              this.showSubject13 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject12 = false;
              this.showSubject13 = true;
              this.$message.error('答错了');
            }
          },
          check13() {
            if(this.radio13 === this.theRandomSubject13.answer){
              this.grade += 10;
              this.showSubject13 = false;
              this.showSubject14 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject13 = false;
              this.showSubject14 = true;
              this.$message.error('答错了');
            }
          },
          check14() {
            if(this.radio14 === this.theRandomSubject14.answer){
              this.grade += 10;
              this.showSubject14 = false;
              this.showSubject15 = true;
              this.$message({
                message: '答对了',
                type: 'success'
              });
            }
            else{
              this.grade += 0;
              this.showSubject14 = false;
              this.showSubject15 = true;
              this.$message.error('答错了');
            }
          },
            p_changeGrade() {
                if(this.radio15 === this.theRandomSubject15.answer){
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
                changeTheGrade2(this.grade,this.theAccount.ID).then(res=>{
                  if(res.data===1){

                  }
                });
                _changeGrade1(this.grade).then(res=>{
                    if(res.data===1){
                    }
                });
            },
        },
        created() {
          this.getRandomInt(1,25);
          this._selectPoem();
          this._selectAccount();
            let _this = this;
            setTimeout(function () {
                _this.end4();
            },6000)
        },
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
    background: url("../assets/jpg/poemBackground.jpg");
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
    left: 4%;
    color: #311b10;
}

.answerStyle{
    font-size: 1.5vw;
    position: absolute;
    top: 28%;
    left: 4%;
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
