<template>
  <div id="backgroundcolor">
    <div id="mainblock">
      <div class="navmenu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="position: relative;top: 50px">
          <span style="color: rgb(103,151,163);">教师端</span>
          <div style="height: 50px"></div>
          <el-menu-item index="1" class="menu"><router-link to="/stu_info">题库管理</router-link></el-menu-item>
          <el-menu-item index="1" class="menu"><router-link to="/select">学生成绩查询</router-link></el-menu-item>
        </el-menu>
      </div>
      <div id="message">
        <div id="word">
        </div>
        <div class="underline"></div>
        <div id="block-1">
          <p id="word-1">学生成绩查询</p>
          <div class="student">
            <div class="header">
              学号:
              <el-input v-model="account" placeholder="请输入学生学号" class="inputStyle">
              </el-input>
              <el-button @click="p_select()">查询</el-button>
            </div>
            <el-table :data="testInfo" border height="420" class="table">
              <el-table-column prop="account" label="学号" width="130">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.account"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="grade1" label="成绩1" width="200">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.grade1"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="grade2" label="成绩2" width="200">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.grade2"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="grade3" label="成绩3"  width="200">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.grade3"></el-input>
                </template>
              </el-table-column>
              <el-table-column prop="grade4" label="成绩4"  width="200">
                <template slot-scope="scope">
                  <el-input size="mini" v-model="scope.row.grade4"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>

    <!--    数据可视化     -->
    <div class="Echarts">
      <div id="main" class="table1"></div>
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
  import {select} from '../network/test.js'
  export default {
    name: 'hello',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        activeName: 'first',
        account:'',
        address:'',
        editlist:false,
        editdetail:{},
        testInfo:null,
        index1: false,
        back: false,
        grade:null,
        // 指定图表的配置项和数据
        option : {
          title: {
            text: '学生成绩分析'
          },
          tooltip: {},
          legend: {
            data:['成绩']
          },
          xAxis: {
            data: ["打鱼之旅成绩","鱼类竞猜成绩","诗词大会成绩","名人猜猜成绩","知识考验成绩"]
          },
          yAxis: {},
          series: [{
            name: '成绩',
            type: 'bar',
            data: [0, 0, 0, 0, 0]
          }]
        },
      };
    },
    mounted(){
      this.myEcharts();
    },
    methods: {
      myEcharts(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('main'));

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      p_select() {
        select(this.account).then(res=>{
          if(res.data){
            this.testInfo = res.data;
            this.grade = res.data[0];
            this.option = {
              title: {
                text: '学生成绩分析'
              },
              tooltip: {},
              legend: {
                data:['成绩']
              },
              xAxis: {
                data: ["打鱼之旅成绩","鱼类竞猜成绩","诗词大会成绩","名人猜猜成绩","知识考验成绩"]
              },
              yAxis: {},
              series: [{
                name: '成绩',
                type: 'bar',
                data: [this.grade.grade1, 30, this.grade.grade2, this.grade.grade3, this.grade.grade4]
              }]
            };
            this.myEcharts();
          }
        });
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
  .table1{
    width: 80%;
    height: 50%;
    position: absolute;
    left: 18%;
    top: 60%;
  }
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
    margin-bottom: 1.5%;
  }
  .inputStyle{
    width: 12%;
    margin-right: 1%;
  }
  .table{
    width: 96%;
    position: relative;
    left: 2%;
    margin-top: 1%;
  }
  .button{
    display: inline-block;
    margin-left: -13%;
  }
  .el-button--text {
    color: #000000;
  }
</style>
