<template>
  <div class="head-nav">
    <h2>北信基础网上办理平台</h2>
    <div>
      <span class="nav-sys">
        <span>
         <img class="logout-img" src="@/assets/images/yonghu-1.png" alt="">
        </span>
        <span>
          {{userName}}
        </span>
      </span>
      <span class="nav-sys" @click="logout">
        <span>
          <img class="logout-img" src="@/assets/images/tuichu.png"/>
        </span>
        <span>
          退出
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
      userName:'',
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    this.userName = window.sessionStorage.getItem("username");
    console.log(this.userName)
  },
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
    span {
      display: inline-block;
      height: 24px;
      line-height: 24px;
    }
  }
  .logout-img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
  }
</style>