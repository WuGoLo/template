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
          <i class="el-icon-user-solid"/>
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container svg-container_login">
          <i class="el-icon-lock"/>
        </span>
        <el-input :type="passwordType" v-model="loginForm.password" name="password" auto-complete="on" placeholder="password" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <i class="el-icon-view"/>
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
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
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{ required: true, message: '管理员账户不允许为空', trigger: 'blur' }],
        password: [
          { required: true, message: '管理员密码不允许为空', trigger: 'blur' }
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
      login().then(res => {
        console.log(res);
        window.sessionStorage.setItem(
          "username",
          res.data.data.userName
        );
        window.sessionStorage.setItem(
          "loginName",
          res.data.data.loginName
        );
        if(res.data.code == 1) {
          this.$router.push('map/maplabel')
        }
      })
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
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    background-color: #fff;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $color;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
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
