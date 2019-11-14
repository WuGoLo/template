<template>
  <div>
    <div class="userName">
      <span style="padding-right:10px;">客户名称</span>
      <el-input
        placeholder=""
        v-model="listQuery.name"
      ></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="getVersionList()"
        style="margin-left:10px"
      >查询</el-button>
    </div>

    <el-table
    :data="tableData"
    border
    style="width: 100%"
    row-key="id"
    fit
    highlight-current-row
    :header-cell-style="{
          'background-color': '#aab9f9',
          'color': 'rgb(103, 194, 58)',
            }">
    <el-table-column prop="date" label="序号" width="60" align="center">
      <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
    </el-table-column>
    <el-table-column align="center" width="150px" label="客户名称">
      <template slot-scope="scope">
        <span>{{scope.row.username}}</span>
      </template>
    </el-table-column>
    <el-table-column align="center" width="150px" label="项目名称">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
        <el-table-column align="center" width="150px" label="">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
        <el-table-column align="center" width="150px" label="数量(子孔)">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
      </template>
    </el-table-column>
        <el-table-column align="center" width="150px" label="存量(子孔)">
      <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        listQuery:{
          name:'',
        }
    }
  },
  watch:{},
  computed:{},
  methods:{
    getVersionList(){}
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.userName{
  margin: 20px;
}
</style>