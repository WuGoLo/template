<template>
  <div>
    <div v-if="options.sqdh != ''" class="itembox">
      <h5>申请单号:</h5>
      <div style="line-height: 20px;">{{data[options.sqdh]}}</div>
    </div>
    <div v-if="options.sqdw != ''" class="itembox">
      <h5>申请单位:</h5>
      <div style="line-height: 20px;">{{data[options.sqdw]}}</div>
    </div>
    <div v-if="options.cldw != ''" class="itembox">
      <h5>穿揽单位:</h5>
      <div style="line-height: 20px;">{{data[options.cldw]}}</div>
    </div>
    <div v-if="options.qd != ''" class="itembox">
      <h5>起点:</h5>
      <div style="line-height: 20px;">{{data[options.qd]}}</div>
    </div>
    <div v-if="options.zd != ''" class="itembox">
      <h5>终点:</h5>
      <div style="line-height: 20px;">{{data[options.zd]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'show-info',
  props:{
    data: {},
    options: {
      sqdh: "sqdh",
      sqdw: "sqdw",
      cldw: "cldw",
      qd: "qd",
      zd:'zd',
      cd:'cd',
      sqsl:'sqsl',
      zt:'zt',
      clrq:'clrq',
    },
  },
  data(){
    return {
    }
  },
  methods:{},
}
</script>
<style lang="scss" scoped>
.itembox {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px dashed #c4c9d0;
  h5 {
    display: block;
    flex-wrap: nowrap;
    width: 80px !important;
    font-size: 14px;
    color: #333;
  }
  p {
    display: block;
    line-height: 20px;
  }
  .imgbox, .listbox {
    width: 760px;
  }
  .imgbox /deep/ img {
    width: 760px !important;
  }
  .listbox span {
    margin-right: 20px;
    margin-bottom: 4px;
    display: inline-block;
    border-bottom: 1px solid #c4c9d0;
  }
}
</style>