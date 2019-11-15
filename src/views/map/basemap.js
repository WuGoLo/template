import * as esriLoader from 'esri-loader'
const Esrimap = {
  init(mapdom) {
    esriLoader.loadCss();
    // const options = {
    //   url: 'https://js.arcgis.com/3.24/'
    // }
    esriLoader.loadModules([
      'esri/Map',
      'esri/views/MapView'
      // "esri/Graphic",
      // "esri/layers/GraphicsLayer",
      // 'dojo/domReady!'
    ])
    .then(([ArcGISMap, MapView]) => {
      let map = new ArcGISMap({
        basemap: 'topo-vector'
      });
      let view = new MapView({
        container: mapdom,
        map: map,
        center: [-118, 34],
        zoom: 8
      });
    })
    .catch (err => {})
  }
}
export default Esrimap