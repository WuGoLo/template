<template>
  <div class="container">
    <div class="top-search">
      <span>用户名称：</span>
      <el-input placeholder="请输入" v-model="listQuery.user"></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="getUserList()"
        style="margin-left:20px"
      >查询</el-button>
    </div>

    <el-table :data="tableData" border  stripe  style="width: 100%"  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#aab9f9','color': 'rgb(103, 194, 58)',}">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">
          <span>{{scope.$index+1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户名称">
        <template slot-scope="scope">
          <span>{{scope.row.username}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="密码">
        <template slot-scope="scope">
          <span>{{scope.row.pwd}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
            <el-switch
              size="small"
              v-model="scope.row.STATE"
              active-color="#009A52"
              inactive-color="#DCDFE6"
              @change="getUserState(scope.row)"
            ></el-switch>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
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
          username: '测试名1',
          pwd: '123456',
          STATE:'1'
        }, {
          username: '测试名2',
          pwd: '123456',
          STATE:'0'
        }, {
          username: '测试名3',
          pwd: '123456',
          STATE:'1'
        }, {
          username: '测试名4',
          pwd: '123456',
          STATE:'1'
        }],
        listQuery:{
          customer:'',
        },
        currentPage: 1
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