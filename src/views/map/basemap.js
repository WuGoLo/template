import L from 'leaflet';
import '@supermap/iclient-leaflet';
export default {
  map: {},
  point: {},
  init(id) {
    let _this = this
    let host = window.isLocal ? window.server : "http://support.supermap.com.cn:8090";
    let url = host + "/iserver/services/map-china400/rest/maps/China";
    // let url = "http://172.19.1.183:8090/iserver/services/map-abc2/rest/maps/ditu";
    const map = L.map(id, {
      crs: L.CRS.EPSG4326,
      center: [40.310, 116.750],
      maxZoom: 18,
      zoom: 8
    })
    L.supermap.tiledMapLayer(url).addTo(map);
    this.map = map
    // 添加控件
    L.control.scale().addTo(map);
    map.on('mousemove', function (e) {
    	_this.point = map.layerPointToLatLng(e.layerPoint)
    })
    // mapTool.init(map) // 添加控件函数的封装
  }, // 地图初始化函数
  getMousePoint() {
    return this.point
  }, // 获取当前鼠标所在地图的经纬度
  getMap() {
    return this.map
  }, // 返回地图初始化对象
}