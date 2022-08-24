<template>
  <div id="backgroundcolor">
    <div id="mainblock">
      <div class="navmenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="position: relative;top: 50px">
          <span style="color: rgb(103,151,163);">教师端</span>
          <div style="height: 50px"></div>
          <el-menu-item index="1" class="menu"><router-link to="/stu_info">题库管理</router-link></el-menu-item>
          <el-menu-item index="1" class="menu"><router-link to="/select">学生成绩查询</router-link></el-menu-item>
        </el-menu>
      </div>
      <div id="message">
        <div class="underline"></div>
        <div id="block-1">
          <p id="word-1">题库管理</p>
          <div class="student">
            <div class="header">
              题目:
              <el-input v-model="question" placeholder="题目" class="inputStyle">
              </el-input>
              正确选项:
              <el-input v-model="answer" placeholder="正确选项" class="inputStyle">
              </el-input>
              选项1:
              <el-input v-model="choice1" placeholder="选项一" class="inputStyle">
              </el-input>
              选项2:
              <el-input v-model="choice2" placeholder="选项二" class="inputStyle">
              </el-input>
              选项3:
              <el-input v-model="choice3" placeholder="选项三" class="inputStyle">
              </el-input>
              选项4:
              <el-input v-model="choice4" placeholder="选项四" class="inputStyle">
              </el-input>
              <el-button @click="_add" style="position: absolute;top: 2%;left: 89.75%">增加</el-button>
            </div>
            <el-table :data="testInfo" border height="420" class="table">
              <el-table-column prop="num" label="题目" width="200">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.question"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="num" label="正确选项" width="90">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.answer"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="选项1" width="250">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.choice1"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="sex" label="选项2" width="250">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.choice2"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="address" label="选项3"  width="250">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.choice3"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="address" label="选项4"  width="250">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.choice4"></el-input>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                  <el-button @click="p_delete(scope.$index)" type="text" size="small" class="button">
                    移除
                  </el-button>
                  <el-button @click="p_change(scope.$index)" type="text" size="small" class="button">
                    修改
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <img src="../assets/jpg/导航.png" style="width: 100%; height: 100%" />
    </div>
    <router-link to="/index1">
      <div id="index1" @mouseenter="onIndex1" @mouseleave="offIndex1">
        <img src="../assets/jpg/首页键.png" v-show="!index1" />
        <img src="../assets/jpg/首页键2.png" v-show="index1" class="color1" />
      </div>
    </router-link>
    <router-link to="/index1">
      <div id="back" @mouseenter="onBack" @mouseleave="offBack">
        <img src="../assets/jpg/返回键.png" v-show="!back" />
        <img src="../assets/jpg/返回键2.png" v-show="back" class="color1" />
      </div>
    </router-link>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {test,add,_delete,_change} from '../network/test.js'
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeName: 'first',
        question:'',
        answer:'',
        choice1:'',
        choice2:'',
        choice3:'',
        choice4:'',
        editlist:false,
        editdetail:{},
        testInfo:null,
        index1: false,
        back: false,
      };
    },
    created() {
      this._test()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      open1() {
        this.$message({
          showClose: true,
          message: '保存成功！',
          type: 'success'
        });
      },
      _test(){
        test().then(res=>{
          this.testInfo=res.data;
        })
      },
      _add() {
        add(this.question,this.answer,this.choice1,this.choice2,this.choice3,this.choice4).then(res=>{
          if(res.data===1){
            alert('插入成功！');
            this.$router.go(0)
          }
          else{
            alert('插入失败');
          }
        })
      },
      p_delete(index) {
        _delete(this.testInfo[index].question).then(res=>{
          if(res.data===1){
            alert('删除成功！');
            this.$router.go(0)
          }
          else{
            alert('删除失败');
          }
        })
      },
      p_change(index) {
        _change(this.testInfo[index].question,this.testInfo[index].answer,
          this.testInfo[index].choice1,this.testInfo[index].choice2,this.testInfo[index].choice3,this.testInfo[index].choice4).then(res=>{
          if(res.data===1){
            alert('修改成功！');
            this.$router.go(0)
          }
          else{
            alert('修改失败');
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
    }
  }

</script>

<style scoped>
  .bg {
    width: 4.25%;
    height: 14%;
    position: absolute;
    top: 9%;
    left: 4%;
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
    left: 5%;
    top: 11%;
  }

  #index1 img {
    width: 100%;
    height: 100%;
  }
  #back {
    width: 2%;
    height: 4%;
    position: absolute;
    left: 5%;
    top: 16%;
  }

  #back img {
    width: 100%;
    height: 100%;
  }
  #backgroundcolor{
    background-color: rgb(242,242,242);
    height: 713px;
    width: 100%;
  }
  #mainblock{
    height: 90.4%;
    width: 92.6%;
    background-color: rgb(192,212,221);
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 5px #888888;
  }
  .menu{
    font-size: 12px;
    text-decoration: none;
    margin-bottom: 30%;
  }
  .menu:after{
    content:'';
    display:block;
    width:110px;
    margin-top:-5px;
    border-bottom:2px solid rgb(192,212,221);
    text-align: center;
  }
  .el-menu-item {
    transition: border-color .5s,background-color .5s,color .5s;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid transparent;
    color: rgb(103,151,163);
    font-weight: 800;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: solid 1px transparent;
  }
  a:-webkit-any-link {
    cursor: pointer;
    text-decoration: none;
  }
  .navmenu{
    width: 12.8%;
    background-color: #ffffff;
    display: inline-block;
    box-shadow: 0px 2px 3px #888888;
    margin-top: 2px;
    margin-left: -9px;
    height: 99%;
  }
  .el-menu-item:hover{
    background-color: rgb(192,212,221) !important;
  }
  #message{
    float: right;
    width: 84.6%;
    height: 615px;
    display: inline-block;
    background-color: rgb(242,242,242);
    margin-top: 13px;
    margin-right: 17px;
    box-shadow: 3px 3px 5px #888888;
  }
  #word{
    font-size: 12px;
    position: relative;
    top: 1.1%;
    color: rgb(103,151,163);
    font-weight: 800;
  }
  #header-left{
    float: left;
    position: relative;
    left: 6.7%;
  }
  #header-right{
    float: right;
    position: relative;
    right: 4.5%;
  }
  .underline{
    border-bottom: 2px solid rgb(192,212,221);
    position: relative;
    top: 5%;
    width: 93.2%;
    left: 3.6%;
  }
  .underline-1{
    border-bottom: 6px solid rgb(192,212,221);
  }
  #block-1{
    position: relative;
    top: 4%;
    color: rgb(103,151,163);
  }
  #word-1{
    font-size: 25px;
  }
  .el-button+.el-button {
    margin-left: 28px;
  }
  .header{
    width: 100%;
    margin-bottom: 4%;
  }
  .inputStyle{
    width: 10%;
    margin-right: 0;
  }
  .table{
    width: 96%;
    position: relative;
    left: 2%;
    margin-top: 1%;
  }
  .button{
    display: inline-block;
  }
  .el-button--text {
    color: #000000;
  }
</style>
