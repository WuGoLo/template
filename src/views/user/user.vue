<template>
  <div>
    <div class="customer">
      <span style="padding-right:10px;">用户名称</span>
      <el-input placeholder="" v-model="listQuery.user"></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="getUserList()"
        style="margin-left:10px"
      >查询</el-button>
    </div>

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
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
      </el-pagination>
    </div>
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
          name: '海淀黄庄2-2',
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
        listQuery:{
          customer:'',
        },
        currentPage4: 1
    }
  },
  watch:{},
  computed:{},
  methods:{
    getUserList(){
      let user = this.listQuery.user
      console.log(user)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
</style>