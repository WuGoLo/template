<template>
  <div>
    <el-table :data="tableData" border  stripe  style="width: 100%"  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#99c0de','color': 'rgb(103, 194, 58)',}">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">
          <span>{{scope.$index+1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请单号">
        <template slot-scope="scope">
          <router-link :to="{path:'/map/maplabel'}">{{scope.row.sqdh}}</router-link>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请单位">
        <template slot-scope="scope">
          <span>{{scope.row.sqdw}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="穿揽单位">
        <template slot-scope="scope">
          <span>{{scope.row.cldw}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="起点">
        <template slot-scope="scope">
          <span>{{scope.row.qd}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="终点">
        <template slot-scope="scope">
          <span>{{scope.row.zd}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="长度(子孔公里)">
        <template slot-scope="scope">
          <span>{{scope.row.cd}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="申请数量(子孔)">
        <template slot-scope="scope">
          <span>{{scope.row.sqsl}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.zt | getState}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="穿揽日期">
        <template slot-scope="scope">
          <span>{{scope.row.clrq}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <div style="text-align: center">
            <el-button  type="primary"  size="mini"  class="handle-edit" v-show="scope.row.zt==1 ||scope.row.zt==4"  @click="handEdit(scope.row)">
              <i class="el-icon-edit-outline"></i> 编辑
            </el-button>
            <el-button  type="primary"  size="mini"  class="handle-edit" v-show="scope.row.zt==3"  @click="handDow(scope.row)">开井证下载</el-button>
            <el-button  type="primary"  size="mini"  class="handle-edit" v-show="scope.row.zt==6"  @click="handDowOrder(scope.row)">下载销售订单</el-button>
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
</template>

<script>
export default {
  components:{
  },
  props:{},
  data(){
    return {
      currentPage: 1,
      state:'',
      tableData: [{
        id: '001',
        sqdh: 'GISSQD201900001',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'10',
        sqsl:'51',
        zt:'1',
        clrq:'2019-7-13',
      }, {
        id: '002',
        sqdh: 'GISSQD201900002',
        sqdw: '联通',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'15',
        sqsl:'4',
        zt:'2',
        clrq:'2019-10-11'
      }, {
        id: '003',
        sqdh: 'GISSQD201900003',
        sqdw: '电信',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'23',
        sqsl:'12',
        zt:'3',
        clrq:'2019-10-15'
      }, {
        id:'004',
        sqdh: 'GISSQD201900004',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'14',
        sqsl:'1',
        zt:'4',
        clrq:'2019-7-18'
      }, {
        id:'005',
        sqdh: 'GISSQD201900005',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'14',
        sqsl:'1',
        zt:'5',
        clrq:'2019-4-19'
      }, {
        id:'006',
        sqdh: 'GISSQD201900006',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'14',
        sqsl:'1',
        zt:'6',
        clrq:'2019-6-11'
      }, {
        id:'007',
        sqdh: 'GISSQD201900007',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'14',
        sqsl:'1',
        zt:'7',
        clrq:'2019-3-11'
      }
      ],
    }
  },
  watch:{},
  computed:{},
  methods:{
    handEdit(row){
      this.$router.push({path:'/map/maplabel'})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handDow(){},
    handDowOrder(){}
  },
  created(){},
  mounted(){
  },
  filters: {
    getState(value) {
      var arr = [
        "审核不通过",
        "待审核",
        "已审核",
        "草稿",
        "已穿揽",
        "已下单",
        "失效订单"
      ];
      return arr[value - 1];
    },
  },
}
</script>
<style lang="scss" scoped>
</style>