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
              <span>{{scope.row.sqdh}}</span>
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
          <el-table-column align="center" label="长度">
            <template slot-scope="scope">
              <span>{{scope.row.cd}}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="申请数量">
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
                <button  type="button" @click="handEdit(scope.row)">编辑</button>
                <button  type="button" @click="handDow(scope.row)">开井证下载</button>
              </div>
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