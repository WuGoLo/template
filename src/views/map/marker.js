var  markerlayer = new SuperMap.Layer.Markers("markerLayer");
function creatMarker(){
    var size = new SuperMap.Size(44, 33);
    var offset = new SuperMap.Pixel(-(size.w / 2), -size.h);
    var icon = new SuperMap.Icon('../static/images/marker.png', size, offset);
    var marker = new SuperMap.Marker(new SuperMap.LonLat(116.46 , 40.25), icon);
    marker.events.on({
        "click": function(){alert(1)},
        "scope": marker
    });
    markerlayer.addMarker(marker);
}
export default {
    mklyr:markerlayer,
    creat:creatMarker
}