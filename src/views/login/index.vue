<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <img src="@/assets/images/logo-2.png" height="60px" alt="北信">
      </div>
      <div class="title-container">
        <h3 class="title">北信基础网上办理平台</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <img src="@/assets/images/denglu-1.png">
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="登录名" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container svg-container_login">
          <img src="@/assets/images/denglu-2.png">
        </span>
        <el-input :type="passwordType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="密码" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <i class="el-icon-view"/>
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="margin-top: 26px;width:300px;height:46px;margin-left:15px;border-radius: 40px;" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>

  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin123',
        password: 'admin123'
      },
      loginRules: {
        username: [{ required: true, message: '请输入登录名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      passwordType: 'password',
      loading: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {

      },
      immediate: true
    }

  },
  created() {

  },
  destroyed() {

  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.rememberMe) {
            this.loginForm.rememberMe = 1;
          } else {
            this.loginForm.rememberMe = 0;
          }
        this.$router.push('map/maplabel')
          window.sessionStorage.setItem(
            "username",
            this.loginForm.username
          );
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$color:#2b50ef;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  background-image: url("../../assets/images/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-form {
    margin: 0 auto; /*水平居中*/
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    width: 400px;
    height: 410px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
  }
  .svg-container {
    padding: 6px 5px 0px 15px;
    color: $color;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .title-container {
    text-align: center;
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $color;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    img {
      margin-bottom: 20px;
      display: inline-block;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $color;
    cursor: pointer;
    user-select: none;
  }
}
</style>
