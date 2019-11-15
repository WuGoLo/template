<template>
  <div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <first></first>  
      </el-tab-pane>
      <el-tab-pane label="草稿" name="second">
        <second></second>
      </el-tab-pane>
      <el-tab-pane label="已下单" name="third">
        <third></third>
      </el-tab-pane>
      <el-tab-pane label="失效订单" name="fourth">
        <fourth></fourth>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="five">
        <five></five>
      </el-tab-pane>
      <el-tab-pane label="已审核" name="six">
        <six></six>
      </el-tab-pane>
      <el-tab-pane label="审核驳回" name="seven">
        <seven></seven>
      </el-tab-pane>
      <el-tab-pane label="已穿揽" name="eight">
        <eight></eight>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import first from "@/components/tabs/first.vue"
import second from "@/components/tabs/second.vue"
import third from "@/components/tabs/third.vue"
import fourth from "@/components/tabs/fourth.vue"
import five from "@/components/tabs/five.vue"
import six from "@/components/tabs/six.vue"
import seven from "@/components/tabs/seven.vue"
import eight from "@/components/tabs/eight.vue"
export default {
  components:{ first, second, third, fourth, five, six, seven, eight},
  props:{},
  data(){
    return {
      activeName: 'first',

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