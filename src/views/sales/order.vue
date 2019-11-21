<template>
  <div class="container">
    <div class="top-search">
      <span>订单编号：</span>
      <el-select
        v-model="listQuery.orderNumber"
        filterable
        remote
        reserve-keyword
        placeholder="请输入"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in orderArr"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span style="margin-left: 30px;">状态：</span>
      <el-select v-model="listQuery.orderState" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="mini"
        @click="getOrderList()"
        style="margin-left:20px"
      >搜索</el-button>
    </div>
    <div class="main-table">
      <el-table :data="tableData" border  stripe  style="width: 100%"  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#99c0de','color': 'rgb(103, 194, 58)',}">
        <el-table-column label="序号" width="60" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width='250' label="销售订单编号">
          <template slot-scope="scope">
            <span>{{scope.row.customer}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width='250' label="客户名称">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="联系方式">
          <template slot-scope="scope">
            <span>{{scope.row.pipe}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="管段信息">
          <template slot-scope="scope">
            <span>{{scope.row.num}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="状态">
          <template slot-scope="scope">
            <span>{{scope.row.zt | getState}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" width='250' label="操作">
          <template slot-scope="scope">
            <div style="text-align: center">
              <el-button  type="primary"  size="mini"  class="handle-edit" v-show="scope.row.zt==1"  @click="handDow(scope.row)">
              <i class="el-icon-bottom"></i> 下载</el-button>          
            </div>
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
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      orderArr: [],
      list: [],
      loading: false,
      listQuery:{
        orderNumber:'',
        orderState: '',
      },
      currentPage: 1,
      tableData: [{
        customer: 'JK787989',
        name: '海淀黄庄2-2',
        pipe: '上海市普陀区金沙江路 1518 弄',
        num:'可穿揽',
        stock:'测试数据',
        zt:'1'
      }, {
        customer: 'SY89889',
        name: '苏州街1-1',
        pipe: '上海市普陀区金沙江路 1518 弄',
        num:'可穿揽',
        stock:'测试数据',
        zt:'2'
      }, {
        customer: 'KLHU23429',
        name: '王小虎',
        pipe: '上海市普陀区金沙江路 1519 弄',
        num:'可穿揽',
        stock:'测试数据',
        zt:'2'
      }, {
        customer: 'JK787989',
        name: '海淀黄庄2-2',
        pipe: '上海市普陀区金沙江路 1516 弄',          
        num:'可穿揽',
        stock:'测试数据',
        zt:'1'
      }],
      states: ["Alabama", "Alaska", "Arizona",
      "Arkansas", "California", "Colorado",
      "Connecticut", "Delaware", "Florida",
      "Georgia", "Hawaii", "Idaho", "Illinois",
      "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland",
      "Massachusetts"],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods:{
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.orderArr = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.orderArr = [];
      }
    },
    getOrderList() {
      console.log(this.listQuery)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handDow(){},
  },
  filters: {
    getState(value) {
      var arr = [
        "有效",
        "无效",
      ];
      return arr[value - 1];
    },
  },
}
</script>
<style lang="scss" scoped>
</style>