<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">全部</el-tab-pane>
      <el-tab-pane label="草稿" name="second">草稿</el-tab-pane>
      <el-tab-pane label="已下单" name="third">已下单</el-tab-pane>
      <el-tab-pane label="失效订单" name="fourth">失效订单</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      activeName: 'first'
    }
  },
  watch:{},
  computed:{},
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
</style>