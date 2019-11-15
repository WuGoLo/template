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
    <el-dialog title="申请单号详情" class="info-dialog" :visible.sync="dialogTableVisible">
      <show-info :data=tableInfo :options="option"></show-info>
    </el-dialog>
    <el-dialog
        :title="text"
        :visible.sync="dialogFormVisible"
        :before-close="handleClose"
        :close-on-click-modal="false"
        >
        <el-form
          ref="applyForm"
          :model="applyForm"
          label-width="100px"
          :rules="applyForm"
        >
          <el-form-item label="申请单号:" prop="sqdh">
            <el-input v-model="applyForm.sqdh" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="申请单位:" prop="sqdw">
            <el-input v-model="applyForm.sqdw" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="穿揽单位:" prop="cldw">
            <el-input v-model="applyForm.cldw"></el-input>
          </el-form-item>
          <el-form-item label="起点:" prop="qd">
            <el-input v-model="applyForm.qd"></el-input>
          </el-form-item>
          <el-form-item label="终点:" prop="zd">
            <el-input v-model="applyForm.zd"></el-input>
          </el-form-item>
          <el-form-item label="长度:" prop="cd">
            <el-input v-model="applyForm.cd"></el-input>
          </el-form-item>
          <el-form-item label="申请数量:" prop="sqsl">
            <el-input v-model="applyForm.sqsl"></el-input>
          </el-form-item>
          <el-form-item label="状态:" prop="zt" >
            <el-input v-model="state" :disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="穿揽日期:" prop="clrq">
            <el-date-picker
              v-model="applyForm.clrq"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="cancelClose"  size="small"  type="primary">取消</el-button>
          <el-button type="primary" size="small"  style="margin-left:50px;" @click="updateData">保存</el-button>
        </span>
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
      state:'',
      applyForm: {
        sqdh: "",
        sqdw: "",
        cldw: '',
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
        cldw: "cldw",
        qd: "qd",
        zd:'zd',
        cd:'cd',
        sqsl:'sqsl',
        zt:'zt',
        clrq:'clrq',
      },
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
    showInfo(val){
      console.log(val);
      this.tableInfo = val;
      this.dialogTableVisible = true;
    },
    handEdit(row){
      this.dialogFormVisible = true;
      this.$nextTick(() => {
          this.applyForm.sqdh = row.sqdh;
          this.applyForm.sqdw = row.sqdw;
          this.applyForm.cldw = row.cldw;
          this.applyForm.qd = row.qd;
          this.applyForm.zd = row.zd;
          this.applyForm.cd = row.cd;
          this.applyForm.sqsl = row.sqsl;
          this.applyForm.clrq = row.clrq;
          if(row.zt == 1){
            this.state = "审核不通过"
          }else if(row.zt == 4){
            this.state = "草稿"
          }
        })
    },
    handleClose(){
      this.dialogFormVisible = false;
    },
    cancelClose(){
      this.dialogFormVisible = false;
    },
    updateData(){
      this.dialogFormVisible = false;
      this.$refs.applyForm.validate(valid => {
          if (valid) {
            console.log(this.applyForm)
          } else {
            return false;
          }
        });
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