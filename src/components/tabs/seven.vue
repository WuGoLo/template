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
      <el-table-column align="center" label="操作" width="200px">
        <template slot-scope="scope">
          <div style="text-align: center">
            <el-button  type="primary"  size="mini"  class="handle-edit" v-if="scope.row.zt==1"  @click="handEdit(scope.row)">
              <i class="el-icon-edit-outline"></i> 编辑
            </el-button>
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
      currentPage:1,
      tableData: [ {
        id: '001',
        sqdh: 'GISSQD201900001',
        sqdw: '移动',
        cldw: '测试数据',
        qd:'A',
        zd:'B',
        cd:'10',
        sqsl:'51',
        zt:'1',
        clrq:'2019-7-13'
      }
      ],
    }
  },
  watch:{},
  computed:{},
  methods:{
    handEdit(){
      this.$router.push({path:'/map/maplabel'})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  created(){},
  mounted(){
  },
}
</script>
<style lang="scss" scoped>
</style>