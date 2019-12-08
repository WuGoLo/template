<template>
  <div class="map-content">
    <div ref="mapdom" id="map" class="map"></div>
    <div ref="edit_box" class="panel panel-primary">
      <div class='panel-heading'>
        <h5 class='panel-title text-center'>'编辑'</h5>
      </div>
      <div class='panel-body content'>
        <input type='button' class='btn btn-default' value='添加' @click='addMarker()'/>&nbsp;
        <input type='button' class='btn btn-default' value='撤销' @click='revocationMarker()'/>&nbsp;
        <input type='button' class='btn btn-default' value='提交' @click='commit()'/>&nbsp;
        <input type='button' class='btn btn-default' value='清除' @click='clearLayer()'/>
      </div>
    </div>
    <div class="box">
      <div class="top-search">
        <div>
          <span>申请人：</span>
          <el-input placeholder="" v-model="listQuery.name" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">起点：</span>
          <el-input placeholder="" v-model="listQuery.qd" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">终点：</span>
          <el-input placeholder="" v-model="listQuery.zd" :disabled="disabled" class="top-input"></el-input>
        </div>
        <div>
          <span class="search-label">数量：</span>
          <el-input placeholder="" v-model="listQuery.sl" :disabled="disabled" class="top-input" style="width:50px;"></el-input>
        </div>
        <div>
          <el-button type="primary" size="mini" @click="getUserList()" style="margin-right:10px" class="btn">提交</el-button>
          <el-button type="primary" size="mini" @click="getUserList()">保存</el-button>
        </div>
      </div>
      <el-table :data="tableData" border  stripe  row-key="id"  fit  highlight-current-row  :header-cell-style="{'background-color': '#99c0de','color': 'rgb(103, 194, 58)',}">
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
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//添加鼠标滑动事件
var tooltip = L.tooltip({
    direction: 'right'
});
export default {
  components:{},
  props:{},
  data(){
    return {
      Esrimap: null,
      listQuery:{
        name:'北京移动',
        qd:'苏州街',
        zd:'海淀黄庄',
        sl:'2'
      },
      disabled:true,
      tableData: [{
        xmbah:'JG12345',
        xmmc:'苏州街',
        gd:'苏州街1#2#-苏州街1#2#',
        sl:'可穿揽',
        cl:''
      },
      {
        xmbah:'KG12345',
        xmmc:'海淀黄庄',
        gd:'海淀黄庄1#2#-海淀黄庄1#2#',
        sl:'可穿揽',
        cl:''
      }],
      map: {},
      marker: {},
      resultLayer: {},
      featureGroup: {},
      featureService: {},
    }
  },
  watch:{},
  computed:{},
  created(){

  },
  mounted(){
    // baseMap.init('map')
    // var host = window.isLocal ? window.server : "http://support.supermap.com.cn:8090";
    // var url = host + "/iserver/services/map-china400/rest/maps/China";
    // var url = "http://172.19.1.183:8090/iserver/services/map-abc2/rest/maps/ditu";
    // L.supermap.tiledMapLayer(url).addTo(baseMap.getMap());  // baseMap.getMap() 是基础底图
    this.init('map')
  },
  methods:{
    init(id) {
      var host = window.isLocal ? window.server : "http://support.supermap.com.cn:8090";
      var baseUrl = host + "/iserver/services/map-world/rest/maps/World";
      var url = host + "/iserver/services/data-world/rest/data";
      // let url = "http://172.19.1.183:8090/iserver/services/map-abc2/rest/maps/ditu";

      this.map = L.map(id, {
        preferCanvas: true,
        crs: L.CRS.EPSG4326,
				center: [40.310, 116.750],
        maxZoom: 18,
        zoom: 5
      })

      let DefaultIcon = L.icon({
          iconUrl: icon,
          shadowUrl: iconShadow
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      L.marker([40.310, 116.750]).addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
      L.supermap.tiledMapLayer(baseUrl).addTo(this.map);
      this.featureGroup = L.featureGroup().addTo(this.map);
      this.featureService = L.supermap.featureService(url);
      this.initFeature();
      this.initEditView();
    },
    initFeature() {
      let polygon = L.polygon([[20, 118], [20, 120], [50, 120], [50, -120], [20, 118]]);
      let getFeatureParams = new SuperMap.GetFeaturesByGeometryParameters({
        toIndex: -1,
        datasetNames: ["World:Capitals"],
        geometry: polygon
      });

      this.featureService.getFeaturesByGeometry(getFeatureParams, (serviceResult) => {
        console.log(serviceResult)
        this.resultLayer = L.geoJSON(serviceResult.result.features).addTo(this.map);
        this.resultLayer.on("mousemove", (e) => {
          e.layer.bindPopup('提示弹出' + "：" + e.layer.feature.properties.CAPITAL).openPopup();
        });
        this.resultLayer.on("mouseout", (e) => {
          e.layer.closePopup();
        });
      });
    },
    initEditView() {
      let infoView = L.control({position: 'topright'});
      let me = this;
      infoView.onAdd = () => {
        this.handleMapEvent(this.$refs.edit_box, me._map)
        return this.$refs.edit_box;
      };
      infoView.addTo(this.map);
    },
    handleMapEvent(div, map) {
      if (!div || !map) {
        return;
      }
      div.addEventListener('mouseover', () => {
        this.map.dragging.disable();
        this.map.scrollWheelZoom.disable();
        this.map.doubleClickZoom.disable();
      });
      div.addEventListener('mouseout', () => {
        this.map.dragging.enable();
        this.map.scrollWheelZoom.enable();
        this.map.doubleClickZoom.enable();
      });
    },
    addMarker() {
      // this.$message.clearAlert();
      this.closeClearListener();
      var xmax = 120, xmin = 100, ymax = 50, ymin = 20,
      point = [];
      if (!this.featureGroup.hasLayer(this.marker)) {
        point = [
          Math.floor(Math.random() * (ymax - ymin + 1) + ymin),
          Math.floor(Math.random() * (xmax - xmin + 1) + xmin)
        ];
        this.marker = L.circleMarker(point, {color: "red"});
        this.featureGroup.addLayer(this.marker);
        this.featureGroup.addTo(this.map);
        this.map.flyTo(point, 5);
      } else {
        this.featureGroup.clearLayers();
        point = [
          Math.floor(Math.random() * (ymax - ymin + 1) + ymin),
          Math.floor(Math.random() * (xmax - xmin + 1) + xmin)
        ];
        this.marker = L.circleMarker(point, {color: "red"});
        this.featureGroup.addLayer(this.marker);
        this.featureGroup.addTo(this.map);
        this.map.flyTo(point, 5);
      }
    },
    revocationMarker() {
      this.closeClearListener();
      if (this.featureGroup.hasLayer(this.marker)) {
        this.featureGroup.clearLayers();
        this.marker = null;
      } else {
        this.$message.info('不可撤销的');
      }
    },
    pointerMoveHandler (evt) {
      tooltip.setContent(resources.text_selectMarkerToDelete);
      tooltip.setLatLng(evt.latlng);
      tooltip.addTo(this.map);
    },
    commit() {
      // this.$message.clearAlert();
      this.closeClearListener();
      if (this.featureGroup.hasLayer(this.marker)) {
        this.marker = this.marker.toGeoJSON();
        this.marker.properties = {POP: 1, CAPITAL: 'test'};
        var addFeatureParams = new SuperMap.EditFeaturesParameters({
          dataSourceName: "World",
          dataSetName: "Capitals",
          features: this.marker,
          editType: "add",
          returnContent: true
        });
        this.featureService.editFeatures(addFeatureParams,  (serviceResult) => {
          if (serviceResult.result.succeed) {
            this.featureGroup.clearLayers();
            this.marker = null;
            if (this.resultLayer) {
              this.map.removeLayer(this.resultLayer);
              this.resultLayer = null;
            }
            this.initFeature();
            this.$message.info('提交成功！');
          }
        });
      } else {
        this.$message.info('添加成功！');
      }
    },
    clearLayer() {
      this.map.on('mousemove', this.pointerMoveHandler);
      if (this.resultLayer) {
        this.resultLayer.on("click", this.layerClickListener);
      }
      // this.$message.clearAlert();
    },
    layerClickListener(e) {
      var deleteParams = new SuperMap.EditFeaturesParameters({
        dataSourceName: "World",
        dataSetName: "Capitals",
        IDs: [e.layer.feature.id],
        editType: "delete"
      });
      this.featureService.editFeatures(deleteParams, (serviceResult) => {
        if (serviceResult.result.succeed) {
          if (this.resultLayer) {
            this.map.removeLayer(this.resultLayer);
            this.resultLayer = null;
          }
          this.initFeature();
          this.$message.info('删除成功！');
          this.closeClearListener();
        } else {
          this.$message.info('删除失败！');
        }
      });
    },
    closeClearListener() {
      if (this.map.hasLayer(tooltip)) {
        tooltip.removeFrom(this.map);
      }
      if (this.resultLayer) {
        this.resultLayer.off("click", this.layerClickListener);
      }
      this.map.off('mousemove', this.pointerMoveHandler);
    }
  },
}
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
  .box{
    width: 100%;
    bottom: 0;
    box-sizing: border-box;
    background: #fff;
    .search-span{
      padding-right:10px;
    }
    .top-input{
      margin-right:30px;
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
  .leaflet-tooltip, .leaflet-tooltip:before {
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