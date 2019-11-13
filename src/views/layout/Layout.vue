<template>
  <el-container class="home">
    <el-aside>
      <Side-bar></Side-bar>
    </el-aside>
    <el-container class="content">
      <el-header>
        <Header-bar></Header-bar>
      </el-header>
      <el-main>
        <div class="main-box">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, i) in breadcrumb" :key="i">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>  
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { HeaderBar, SideBar } from './middle';
export default {
  components: { HeaderBar, SideBar },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'breadcrumb',
    ])
  },
  beforeCreate () {
    // if (!localStorage.getItem('token')) {
    //   this.$router.push({
    //     name: 'login'
    //   })
    // }
  },
  methods: {
    // 退出功能
    logout () {
      localStorage.clear()
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
  }
  .main-box {
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 10px;
  }
</style>
