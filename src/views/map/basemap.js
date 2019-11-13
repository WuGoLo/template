import * as esriLoader from 'esri-loader'
const Esrimap = {
  init(mapdom) {
    esriLoader.loadCss('https://js.arcgis.com/3.24/esri/css/esri.css');
    const options = {
      url: 'https://js.arcgis.com/3.24/'
    }
    esriLoader.loadModules([
      'esri/map',
      'dojo/domReady!'
    ], options)
    .then(([Map]) => {
      let map = new Map(mapdom, {
        basemap: 'topo-vector',
        center: [113.3209952545166, 23.090055306224895],
        zoom: 15
      })
    })
    .catch (err => {})
  }
}
export default Esrimap