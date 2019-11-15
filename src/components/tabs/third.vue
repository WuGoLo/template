<template>
  <div>
    <el-table :data="tableData" border  stripe  style="width: 100%"  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#aab9f9','color': 'rgb(103, 194, 58)',}">
      <el-table-column label="序号" width="60" align="center">
        <template slot-scope="scope">
          <span>{{scope.$index+1}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请单号">
        <template slot-scope="scope">
          <a class="table-title" @click="showInfo(scope.row)">{{scope.row.sqdh}}</a>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请单位">
        <template slot-scope="scope">
          <span>{{scope.row.sqdw}}</span>
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
      <el-table-column align="center" label="剩余时间">
        <template  slot-scope="scope">
          <span>{{scope.row.time}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <div style="text-align: center">
            <el-button  type="primary"  size="mini"  class="handle-edit" v-show="scope.row.zt==6"  @click="handDow(scope.row)">
              <i class="el-icon-bottom"></i> 下载</el-button>          
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="申请单号详情" class="info-dialog" :visible.sync="dialogTableVisible">
      <show-info :data=tableInfo :options="option"></show-info>
    </el-dialog>
  </div>
</template>

<script>
import showInfo from "@/components/numdetail/showInfo.vue"
export default {
  components:{
    showInfo
  },
  props:{},
  data(){
    return {
      dialogTableVisible:false,
      dialogFormVisible:false,
      disabled:true,
      text:'修改',
      applyForm: {
        sqdh: "",
        sqdw: "",
        qd:'',
        zd:'',
        cd:'',
        sqsl:0,
        zt:'',
        clrq:'',
      },
      tableInfo: {},
      option: {
        sqdh: "sqdh",
        sqdw: "sqdw",
        qd: "qd",
        zd:'zd',
        cd:'cd',
        sqsl:'sqsl',
        zt:'zt',
        clrq:'clrq',
      },
      tableData: [ {
        id:'006',
        sqdh: 'GISSQD201900006',
        sqdw: '移动',
        qd:'A',
        zd:'B',
        cd:'14',
        sqsl:'1',
        zt:'6',
        clrq:'2019-6-11',
        time:'1:59:59(时分秒倒计时)'
      }
      ],
    }
  },
  watch:{},
  computed:{},
  methods:{
    showInfo(val){
      console.log(val);
      this.tableInfo = val;
      this.dialogTableVisible = true;
    },
    handDow(){}
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