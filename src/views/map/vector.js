var  vector = new SuperMap.Layer.Vector("vector");
function creatVector(){
    var point = new SuperMap.Geometry.Point(116.46 , 40.25);
    var pointVector = new SuperMap.Feature.Vector(point);
    pointVector.style = {
        fillColor: "red",
        strokeColor: "yellow",
        pointRadius: 6
    };
    vector.addFeatures([pointVector]);
}
export default {
    vectorLayer:vector,
    creat:creatVector
}