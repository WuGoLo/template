<template>
  <div class="head-nav">
    <h2>北信基础网上办理平台</h2>
    <div>
      <span class="nav-sys">
        <span>
          <i class="el-icon-user-solid"></i>
        </span>
        <span>
          用户中心
        </span>
      </span>
      <span class="nav-sys" @click="logout">
        <span>
          <i class="el-icon-switch-button"></i>
        </span>
        <span>
          安全退出
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerbar',
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){},
  methods:{
    logout() {
      this.$router.push('/login')
    }
  },
}
</script>
<style lang="scss" scoped>
  $color:#2b50ef;
  .head-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      line-height: 60px;
    }
  }
  .nav-sys {
    line-height: 18px;
    margin-right: 20px;
    cursor: pointer;
    &:first-child {
      i {
        color: $color;
      }
      &:hover {
        color: $color;
      }
    }
    &:last-child {
      i {
        color: #e91e2e;
      }
      &:hover {
        color: #e91e2e;
      }
    }
    span {
      display: inline-block;
      height: 24px;
      line-height: 24px;
    }
    i {
      font-size: 16px;
    }
  }
</style>