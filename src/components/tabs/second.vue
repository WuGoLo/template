<template>
  <div>
        <el-table :data="tableData" border  stripe  style="width: 100%"  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#aab9f9','color': 'rgb(103, 194, 58)',}">
          <el-table-column label="序号" width="60" align="center">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="250px" label="客户名称">
            <template slot-scope="scope">
              <span>{{scope.row.user}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="250px" label="项目名称">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="管段">
            <template slot-scope="scope">
              <span>{{scope.row.pipe}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="250px" label="数量(子孔)">
            <template slot-scope="scope">
              <span>{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="250px" label="存量(子孔)">
            <template slot-scope="scope">
              <span>{{scope.row.stock}}</span>
            </template>
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        tableData: [{
          user: 'JK787989',
          name: 'second',
          pipe: '上海市普陀区金沙江路 1518 弄',
          num:'可穿揽',
          stock:'测试数据'
        }, {
          user: 'SY89889',
          name: '苏州街1-1',
          pipe: '上海市普陀区金沙江路 1518 弄',
          num:'可穿揽',
          stock:'测试数据'
        }, {
          user: 'KLHU23429',
          name: '王小虎',
          pipe: '上海市普陀区金沙江路 1519 弄',
          num:'可穿揽',
          stock:'测试数据'
        }, {
          user: 'JK787989',
          name: '海淀黄庄2-2',
          pipe: '上海市普陀区金沙江路 1516 弄',          
          num:'可穿揽',
          stock:'测试数据'
        }],
    }
  },
  watch:{},
  computed:{},
  methods:{

  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
</style>