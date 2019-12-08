<template>
  <div class="map-content">
    <div ref="mapdom" id="map" class="map"></div>
    <!-- <div ref="edit_box" class="panel panel-primary">
      <div class='panel-heading'>
        <h5 class='panel-title text-center'>'编辑'</h5>
      </div>
      <div class='panel-body content'>
        <input type='button' class='btn btn-default' value='添加' @click='addMarker()'/>&nbsp;
        <input type='button' class='btn btn-default' value='撤销' @click='revocationMarker()'/>&nbsp;
        <input type='button' class='btn btn-default' value='提交' @click='commit()'/>&nbsp;
        <input type='button' class='btn btn-default' value='清除' @click='clearLayer()'/>
      </div>
    </div>-->
    <div class="box">
      <div class="top-search">
        <div>
          <span>申请人：</span>
          <el-input placeholder v-model="listQuery.name" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">起点：</span>
          <el-input placeholder v-model="listQuery.qd" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">终点：</span>
          <el-input placeholder v-model="listQuery.zd" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">数量：</span>
          <el-input
            placeholder
            v-model="listQuery.sl"
            :disabled="disabled"
            class="top-input"
            style="width:50px;"
          ></el-input>
        </div>
        <div>
          <el-button
            type="primary"
            size="mini"
            @click="getUserList()"
            style="margin-right:10px"
            class="btn"
          >提交</el-button>
          <el-button type="primary" size="mini" @click="getUserList()">保存</el-button>
        </div>
      </div>
      <el-table
        :data="tableData"
        border
        stripe
        row-key="id"
        fit
        highlight-current-row
        :header-cell-style="{'background-color': '#99c0de','color': 'rgb(103, 194, 58)',}"
      >
        <el-table-column label="序号" width="60" align="center">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="项目备案号">
          <template slot-scope="scope">
            <span>{{scope.row.xmbah}}</span>
            <!-- <a class="table-title" @click="showInfo(scope.row)">{{scope.row.sqdh}}</a> -->
          </template>
        </el-table-column>
        <el-table-column align="center" label="项目名称">
          <template slot-scope="scope">
            <span>{{scope.row.xmmc}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="管段">
          <template slot-scope="scope">
            <span>{{scope.row.gd}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="数量(子孔)">
          <template slot-scope="scope">
            <span>{{scope.row.sl}}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="存量(子孔)">
          <template slot-scope="scope">
            <span>{{scope.row.cl}}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import baseMap from './basemap'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
//添加鼠标滑动事件
var tooltip = L.tooltip({
  direction: "right"
});
export default {
  components: {},
  props: {},
  data() {
    return {
      Esrimap: null,
      listQuery: {
        name: "北京移动",
        qd: "苏州街",
        zd: "海淀黄庄",
        sl: "2"
      },
      disabled: true,
      tableData: [
        {
          xmbah: "JG12345",
          xmmc: "苏州街",
          gd: "苏州街1#2#-苏州街1#2#",
          sl: "可穿揽",
          cl: ""
        },
        {
          xmbah: "KG12345",
          xmmc: "海淀黄庄",
          gd: "海淀黄庄1#2#-海淀黄庄1#2#",
          sl: "可穿揽",
          cl: ""
        }
      ],
      map: {},
      marker: {},
      resultLayer: {},
      featureGroup: {},
      featureService: {}
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    // baseMap.init('map')
    this.init("map");
  },
  methods: {
    init(id) {
      var url =
        // "http://192.168.43.114:8090/iserver/services/map-bxdt/rest/maps/bxdt";
        "http://localhost:8090/iserver/services/map-test2/rest/maps/%E5%9F%8E%E9%99%85%E5%85%AC%E8%B7%AF@text";
      var url2 =
        // "http://192.168.43.114:8090/iserver/services/map-China100/rest/maps/China";
        "http://localhost:8090/iserver/services/map-china400/rest/maps/China";
      var crs = L.Proj.CRS("EPSG:3857", {
        //  bounds: [12847869.0, 5020989.03,13080932.21,4785304.29]
        // bounds: bounds,
        origin: [12960831.28 , 4902398.79]
      });
      var map = L.map("map", {
        crs: L.CRS.EPSG3857,
        center: [40, 116.5],
        maxZoom: 18,
        zoom: 15
      });
      L.supermap.tiledMapLayer(url2).addTo(map);
      L.supermap.tiledMapLayer(url).addTo(map);
    }
  }
};
</script>
<style lang="scss" scoped>
.map-content {
  background-color: #fff;
  padding: 10px;
}
.map {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.box {
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  background: #fff;
  .search-span {
    padding-right: 10px;
  }
  .top-input {
    margin-right: 30px;
    width: 140px;
  }
  .btn.el-button--primary {
    color: #fff;
    background: #009a52;
    border: 1px solid #009a52;
  }
  .btn.el-button--primary:hover {
    color: #fff;
    background: #127714;
    border: 1px solid #127714;
  }
}
.leaflet-tooltip,
.leaflet-tooltip:before {
  color: white;
  border: none;
  background: rgba(0, 0, 0, 0.5);
}

.tooltip-inner {
  width: 80px;
  background-color: transparent;
  color: #515151;
}
</style>