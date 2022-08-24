<template>
  <div style="width: 100%;height: 100%">                                                                 <!--   背景   -->
    <div class="insteadWhole" v-if="whole">
      <div style="width: 50%" class="wordStyle3" v-if="showWord">
        <p>小朋友们，在学习千岛湖之前，</p>
        <p>跟老师做个关于千岛湖的课前测试吧，这样</p>
        <p>可以让老师更好的帮助小朋友们学习新知识哦！</p>
      </div>
      <router-link to="/Subject">
        <div class="button2"></div>
      </router-link>
    </div>
    <div id="background1">
    <div id="mainBlock">
      <div id="slider">
        <transition name="slide">
          <div id="slider1" @click="changeWord" v-show="slideEnter">
          </div>
        </transition>
        <transition name="slide1">
          <div id="slider2" @click="changeWord" v-show="!slideEnter">
          </div>
        </transition>
        <transition name="word">
          <p class="wordStyle1" v-show="wordEnter">学生登录</p>
        </transition>
        <transition name="word">
          <p class="wordStyle2" v-show="!wordEnter">学生登录</p>
        </transition>
        <transition name="word">
          <p class="wordStyle2 extra" v-show="wordEnter">教师登录</p>
        </transition>
        <transition name="word" e>
          <p class="wordStyle1 extra" v-show="!wordEnter">教师登录</p>
        </transition>
      </div>
      <div class="demo-input-suffix inputStyle"
      style="margin-bottom: 3%">                                              <!--  输入框格式  -->
        <el-input v-model="account" placeholder="请输入账号">
        </el-input>
      </div>
      <div class="demo-input-suffix inputStyle">
        <el-input v-model="password" placeholder="请输入密码" show-password>
        </el-input>
      </div>
      <el-checkbox v-model="checked" style="margin: 1% 53% 1% 0">记住密码</el-checkbox>
      <div v-if="!showTeacher">
        <el-button
         type="primary"
         class="button1" @click="p_login(account,password)">登录</el-button>
        <br/>
      </div>
      <div v-if="showTeacher">
        <el-button
          type="primary"
          class="button1" @click="p_login1(account,password)">登录</el-button>
        <br/>
      </div>
    </div>
    <router-link to="/register"><el-button id="register">注册</el-button></router-link>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
  import {_addAccount,_login} from '../network/test.js'
  export default {
    name: 'hello',
    data() {
      return {
        account:'',
        name:'',
        password: '',
        wordEnter : true,
        slideEnter : true,
        checked : true,
        whole : false,
        testInfo:null,
        showTeacher: false,
        showWord:false,
      }
    },
    methods: {
      p_login(account, password) {
        _login(account, password).then(res => {
          if (res.data === 0) {
            alert('账号或密码出错');
          } else {
            this.whole = true;
            let _this = this;
            setTimeout(function () {
              _this.start1();
            },300);
            _addAccount(account).then(res=>{
              if(res.data===1){

              }
            });
          }
        });
      },
      p_login1(account, password) {
        _login(account, password).then(res => {
          if (res.data === 0) {
            alert('账号或密码出错');
          } else {
            alert('教师账户登录成功');
            this.$router.push('/stu_info');
          }
        });
      },
      changeWord() {
        this.wordEnter = !this.wordEnter;
        this.slideEnter = !this.slideEnter;
        this.showTeacher = !this.showTeacher;
      },
      start1(){
        this.showWord = true;
      }
    }
  }
</script>

<style scoped>

  #background1{
    background: url("../assets/login/首页背景.jpg");
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
  }

  #mainBlock{
    width: 37.5%;
    height: 39%;
    position: absolute;
    top: 28.7%;
    left: 33.75%;
    background-color: rgb(224,239,246);
    border-radius: 1.6%;
  }

  #slider{
    background: url("../assets/login/1.png");
    background-size: 100% 100%;
    height: 20%;
    width: 68%;
    position: relative;
    left: 16%;
    margin-top: 2%;
  }

  #slider1{
    background: url("../assets/login/2.png");
    background-size: 100% 100%;
    height: 70%;
    width: 50%;
    position: absolute;
    top: 20%;
    left: 3%;
  }

  #slider2{
    background: url("../assets/login/2.png");
    background-size: 100% 100%;
    height: 70%;
    width: 50%;
    position: absolute;
    top: 20%;
    left: 48%;
  }

  .inputStyle{
    width: 70%;
    position: relative;
    left: 15%;
  }

  .button1{
    width: 70%;
    height: 16%;
  }

  .word-enter-active,.word-leave-active {
    transition: all 0.3s;
    display: flex;
  }
  .word-enter,.word-leave-to {
    opacity: 0;
    display: flex;
  }
  .word-leave,.word-enter-to{
    opacity: 1;
    display: flex;
  }

  .slide-enter-active{
    transition: all 1.5s ease;
    display: flex;
  }
  .slide-enter{
    transform: translateX(90%);
    display: flex;
  }

  .slide1-enter-active{
    transition: all 1.5s ease;
    display: flex;
  }
  .slide1-enter{
    transform: translateX(-90%);
    display: flex;
  }

  .wordStyle1{
    color: white;
    position: absolute;
    left: 17%;
    top: 2%;
    font-size: 1.1vw;
    letter-spacing: 0.2vw;
  }

  .wordStyle2{
    color: rgb(1,126,255);
    position: absolute;
    left: 17%;
    top: 2%;
    font-size: 1.1vw;
    letter-spacing: 0.2vw;
  }

  .extra{
    left: 64%;
  }

  .insteadWhole{
    width: 100%;
    height: 100%;
    background: url("../assets/jpg/灰色背景.png");
    background-size: 100% 100%;
    opacity: 1;
    position: absolute;
    z-index: 3;
  }

  .button2{
    background: url("../assets/jpg/确定.png");
    background-size: 100% 100%;
    width: 7%;
    height: 7%;
    position: absolute;
    top: 70%;
    left: 30%;
  }
  .button2:active{
    transform: scale(0.8);
  }

  .wordStyle3{
    color: #0d4972;
    position: relative;
    top: 50%;
    left: 10%;
    font-size: 1.3vw;
  }

  #register{
    position: absolute;
    top: 51.5%;
    left: 60.5%;
    height: 3%;
    width: 5%;
    padding: 0;
  }

</style>

<style>
  .el-checkbox:last-of-type {
    margin-right: 56%;
  }
</style>
