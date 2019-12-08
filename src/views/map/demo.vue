<template>
  <div class="map-content">
    <div id="toolbar" class="panel panel-primary">
    <div class='panel-heading'>
    <h5 class='panel-title text-center' data-i18n="resources.title_editFeature"></h5></div>
    <div class='panel-body content'>
    <input type="button" class="btn btn-default" value="新增地物" @click="activateAddFeature()"/>
    <input type="button" class="btn btn-default" value="选择地物" @click="activateSelectedFeature()"/>
    <input type="button" class="btn btn-default" value="编辑地物" @click="editselectedFeature()"/>
    <input type="button" class="btn btn-default" value="删除地物" @click="deleteSelectedFeature()"/>
    </div>
    </div>
    <div ref="mapdom" id="map" class="map"></div>
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
import '@/map/libs/SuperMap-8.1.1-14620'
import '@supermap/iclient-classic'
import  vector from './vector'
import  markerlayer from './marker'
import baseMap from "./classicMap";
export default {
  components:{},
  props:{},
  map: null,
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
    }
  },
  watch:{},
  computed:{},
  created(){

  },
  mounted(){
    // this.initMap();
    baseMap.init()
  },
  methods:{
    // initMap() {
    //   SuperMap.ImgPath="../static/images/";
    //   this.map = new SuperMap.Map("map");
    //   var url = "http://support.supermap.com.cn:8090/iserver/services/map-jingjin/rest/maps/京津地区土地利用现状图";
    //   layer = new SuperMap.Layer.TiledDynamicRESTLayer("World", url, {
    //         transparent: true,
    //         cacheEnabled: true
    //     }, {
    //     maxResolution: "auto"
    //   });
    //   layer.events.on({"layerInitialized": this.addLayer });
    // },
    // addLayer() {
    //   vector.creat();
    //   markerlayer.creat();
    //   this.map.addLayers([layer,vector.vectorLayer,markerlayer.mklyr]);
    //   // this.map.addLayers([layer]);
    //   this.map.setCenter(new SuperMap.LonLat(116.46 , 40.25), 0);
    // }
    activateAddFeature() {
      baseMap.activateAddFeature()
    },
    activateSelectedFeature() {
      baseMap.activateSelectedFeature()
    },
    editselectedFeature() {
      baseMap.editselectedFeature()
    },
    deleteSelectedFeature() {
      baseMap.deleteSelectedFeature()
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