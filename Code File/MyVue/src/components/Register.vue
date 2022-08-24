<template>
  <div class="hello">
    <h1>账号注册</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="account" class="input-1">
        <el-input v-model.number="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="admin" class="input-1">
        <el-input v-model="ruleForm.admin" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="input-1">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass" class="input-1">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleForm.account,ruleForm.admin,ruleForm.password)">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  import $ from 'jquery'
  import {_register} from '../network/test.js'
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            callback();
          }
        }, 1000);
      };
      var checkAdmin = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          account:'',
          password: '',
          checkPass: '',
          admin: '',
        },
        rules: {
          account:[
            { validator: checkAccount, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          admin: [
            { validator: checkAdmin, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      go_HelloWorld(){
        this.$router.push('/')
      },
      submitForm(account,admin,password) {
        _register(account,password,admin).then(res=>{
          if(res.data===1){
            alert('提交成功！');
            this.$router.push('/');
          }
          else{
            alert('提交失败');
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .input-1{
    width: 60%;
    margin-left: 18%;
    margin-bottom: 4%;
  }
</style>
