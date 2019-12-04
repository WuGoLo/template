import L from 'leaflet';
import '@supermap/iclient-leaflet';
export default {
  map: {},
  point: {},
  init(id) {
			let _this = this
      const map = L.map(id, {
				crs: L.CRS.EPSG4326,
				center: [40.310, 116.750],
        maxZoom: 18,
        zoom: 8
			})
			var url = "http://172.19.1.183:8090/iserver/services/map-abc2/rest/maps/ditu";
    	L.supermap.tiledMapLayer(url).addTo(map);  // baseMap.getMap() 是基础底图
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
  panTo(options) {
      this.map.panTo(options)
  }, // 平移地图中心点
  flyTo(lat, zoom, options) {
      this.map.panTo(lat, zoom, options)
  }, // 平移缩放到指定点，平滑移动
  zoomOffset(number) {
      this.map.setZoom(number)
  }, // 地图缩放
  fullScreen(event, id) {
      let element = document.getElementById('map')
      if (id) {
          element = document.getElementById('id')
      }
      // 确定全屏显示元素
      const requestMethod =
          element.requestFullScreen ||
          element.webkitRequestFullScreen ||
          element.mozRequestFullScreen ||
          element.msRequestFullScreen
      requestMethod.call(element)
  }, // 全屏放大函数
  calStyle(el) {
      const style = document.defaultView.getComputedStyle(el, null)
      return style
  }, // 元素样式计算
  // 重置地图视图
  resetMapView(params, type, callback) {
      sgisSpatialQuery.sgisSpatial.spatialQueryUtil.getFeaturesByRegionCodes(
          params,
          type,
          callback()
      )
  },
}