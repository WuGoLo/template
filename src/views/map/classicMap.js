import '@/map/libs/SuperMap-8.1.1-14620'
import '@supermap/iclient-classic'
var host = window.isLocal ? window.server : "http://support.supermap.com.cn:8090";
var map, local, layer, vectorLayer, drawPoint, drawPolygon, dataUrl, ids, modifyFeature,
style = {
    strokeColor: "#304DBE",
    strokeWidth: 1,
    pointerEvents: "visiblePainted",
    fillColor: "#304DBE",
    fillOpacity: 0.8,
    pointRadius: 2
},
style1 = {
    strokeColor: "#304DBE",
    strokeWidth: 1,
    pointerEvents: "visiblePainted",
    fillColor: "#304DBE",
    fillOpacity: 0.8,
    pointRadius: 2
}
url1 = host + "/iserver/services/map-jingjin/rest/maps/京津地区土地利用现状图",
url2 = host + "/iserver/services/data-jingjin/rest/data/datasources/name/Jingjin/datasets/name/BaseMap_R/",
url3 = host + "/iserver/services/data-jingjin/rest/data/";
addLayer= () =>{
    map.addLayers([layer, vectorLayer]);
    map.setCenter(new SuperMap.LonLat(117, 40), 0);
    readDataToVectorLayer();
}

//每次操作后，更新VectorLayer上的要素
readDataToVectorLayer= () =>{
    var GetFeaturesByBoundsParameters, getFeaturesByGeometryService;
    GetFeaturesByBoundsParameters = new SuperMap.REST.GetFeaturesByBoundsParameters({
        datasetNames: ["Jingjin:BaseMap_R"],
        spatialQueryMode: SuperMap.REST.SpatialQueryMode.INTERSECT,
        bounds: map.getExtent()
    });
    getFeaturesByGeometryService = new SuperMap.REST.GetFeaturesByBoundsService(url3, {
        eventListeners: {
            "processCompleted": function (e) {
                console.log(e);
                vectorLayer.addFeatures(e.result.features);
            },
            "processFailed": null
        }
    });
    getFeaturesByGeometryService.processAsync(GetFeaturesByBoundsParameters);
}

//激活添加地物
activateAddFeature= () =>{
    
    //先清除上次的显示结果
//        vectorLayer.removeAllFeatures();
    clearAllDeactivate();
    drawPolygon.activate();
}

//执行添加地物
addFeatureCompleted =(drawGeometryArgs)=> {
    drawPolygon.deactivate();
    var geometry = drawGeometryArgs.feature.geometry,
        feature = new SuperMap.Feature.Vector();
    feature.geometry = drawGeometryArgs.feature.geometry,
        feature.style = style;
    vectorLayer.addFeatures(feature);

    geometry.id = "100000";
    var editFeatureParameter,
        editFeatureService,
        features = {
            fieldNames: [],
            fieldValues: [],
            geometry: geometry
        };
    editFeatureParameter = new SuperMap.REST.EditFeaturesParameters({
        features: [features],
        editType: SuperMap.REST.EditType.ADD,
        returnContent: false
    });
    editFeatureService = new SuperMap.REST.EditFeaturesService(url2, {
        eventListeners: {
            "processCompleted": addFeaturesProcessCompleted,
            "processFailed": processFailed
        }
    });
    editFeatureService.processAsync(editFeatureParameter);
}

//添加地物成功
    addFeaturesProcessCompleted = (editFeaturesEventArgs) => {
    var addResultIds = editFeaturesEventArgs.result.IDs,
        resourceInfo = editFeaturesEventArgs.result.resourceInfo;
    if (addResultIds === null && resourceInfo === null) return;

    if ((addResultIds && addResultIds.length > 0) || (resourceInfo && resourceInfo.succeed)) {
        alert("操作成功", true, 240);
        vectorLayer.removeAllFeatures();
        readDataToVectorLayer();
        //重新加载图层
        layer.redraw();
    } else {
        alert("操作成功", false, 240);
    }
}

processFailed = (e) => {
    alert(e.error.errorMsg, false);
}

//激活选择地物
activateSelectedFeature= () =>{
    
    clearAllDeactivate();
    drawPoint.activate();
}

//执行选择地物
selectedFeatureCompleted = (drawGeometryArgs) => {
    drawPoint.deactivate();
    var getFeaturesByGeometryParams,
        getFeaturesByGeometryService,
        geometry = drawGeometryArgs.feature.geometry;
    getFeaturesByGeometryParams = new SuperMap.REST.GetFeaturesByGeometryParameters({
        datasetNames: ["Jingjin:BaseMap_R"],
        spatialQueryMode: SuperMap.REST.SpatialQueryMode.INTERSECT,
        geometry: geometry
    });
    getFeaturesByGeometryService = new SuperMap.REST.GetFeaturesByGeometryService(url3, {
        eventListeners: {
            "processCompleted": selectedFeatureProcessCompleted,
            "processFailed": processFailed
        }
    });
    getFeaturesByGeometryService.processAsync(getFeaturesByGeometryParams);
}

//选择地物完成
selectedFeatureProcessCompleted = (getFeaturesEventArgs) => {
    var features,
        feature,
        i, len,
        originFeatures = getFeaturesEventArgs.originResult.features,
        result = getFeaturesEventArgs.result;
    vectorLayer.removeAllFeatures();

    if (originFeatures === null || originFeatures.length === 0) {
        alert("操作成功", false, 240);
        return;
    }
    ids = new Array();
    //将当前选择的地物的ID保存起来，以备删除地物使用,并在编辑地物中使之为null，以免编辑地物后在不选择地物时将所编辑的地物删除
    for (i = 0, len = originFeatures.length; i < len; i++) {
        ids.push(originFeatures[i].ID);
    }
    if (result && result.features) {
        features = result.features;
        for (var j = 0, len = features.length; j < len; j++) {
            feature = features[j];
            feature.style = style;
            vectorLayer.addFeatures(feature);
        }
    }
    readDataToVectorLayer();
}

//激活编辑地物
editselectedFeature= () =>{
    
    clearAllDeactivate();
    if (ids == null) {
        alert("操作成功", false, 260);
    }
    else {
        modifyFeature.activate();
    }
}

//执行地物编辑
editFeatureCompleted = (event) => {
    modifyFeature.deactivate();
    var editFeatureParameter,
        editFeatureService,
        features,
        attributes,
        feature = event.feature;

    attributes = feature.attributes;
    var attrNames = [];
    var attrValues = [];
    for (var attr in attributes) {
        attrNames.push(attr);
        attrValues.push(attributes[attr]);
    }
    features = {
        fieldNames: attrNames,
        fieldValues: attrValues,
        geometry: event.feature.geometry
    };
    features.geometry.id = feature.fid;
    editFeatureParameter = new SuperMap.REST.EditFeaturesParameters({
        features: [features],
        editType: SuperMap.REST.EditType.UPDATE
    });
    editFeatureService = new SuperMap.REST.EditFeaturesService(url2, {
        eventListeners: {
            "processCompleted": updateFeaturesProcessCompleted,
            "processFailed": processFailed
        }
    });
    editFeatureService.processAsync(editFeatureParameter);
}

//更新地物完成
updateFeaturesProcessCompleted = (editFeaturesEventArgs) => {
    if (editFeaturesEventArgs.result.resourceInfo.succeed) {
        alert("操作成功", true, 240);
        //重新加载图层
        vectorLayer.removeAllFeatures();
        layer.redraw();
        //使Ids为空，以免编辑地物后在不选择地物时将所编辑的地物删除
        ids = null;
    }
    else {
        alert("操作成功", false, 240);
    }
    readDataToVectorLayer();
}

//删除选中地物
deleteSelectedFeature= () =>{
    
    clearAllDeactivate();
    if (ids == null) {
        alert("操作成功", false, 240);
    }
    else {
        var editFeatureParameter,
            editFeatureService;
        editFeatureParameter = new SuperMap.REST.EditFeaturesParameters({
            IDs: ids,
            editType: SuperMap.REST.EditType.DELETE
        });
        editFeatureService = new SuperMap.REST.EditFeaturesService(url2, {
            eventListeners: {
                "processCompleted": deleteFeaturesProcessCompleted,
                "processFailed": processFailed
            }
        });
        editFeatureService.processAsync(editFeatureParameter);
    }

}

//删除地物完成
deleteFeaturesProcessCompleted = (editFeaturesEventArgs) => {
    if (editFeaturesEventArgs.result.resourceInfo.succeed) {
        alert("操作成功", true, 240);
        //重新加载图层
        vectorLayer.removeAllFeatures();
        readDataToVectorLayer();
        layer.redraw();
    }
    else {
        alert("操作成功", false, 240);
    }
}

clearAllDeactivate= () =>{
    modifyFeature.deactivate();
    drawPoint.deactivate();
    drawPolygon.deactivate();
}
export default {
    init() {
        SuperMap.ImgPath="../static/images/";
        layer = new SuperMap.Layer.TiledDynamicRESTLayer("京津", url1, {
            transparent: true,
            cacheEnabled: false
        }, {maxResolution: "auto", bufferImgCount: 0}); //将bufferImgCount设置为0，不使用缓存，编辑后，刷新图层，永远请求最新的图片
        layer.events.on({"layerInitialized": addLayer});
        vectorLayer = new SuperMap.Layer.Vector("Vector Layer");
        vectorLayer.events.on({"afterfeaturemodified": editFeatureCompleted});
        modifyFeature = new SuperMap.Control.ModifyFeature(vectorLayer);

        drawPoint = new SuperMap.Control.DrawFeature(vectorLayer, SuperMap.Handler.Point);
        drawPoint.events.on({"featureadded": selectedFeatureCompleted});

        // drawPath = new SuperMap.Control.DrawFeature(vectorLayer, SuperMap.Handler.Path);
        // drawPath.events.on({"featureadded": addFeatureCompleted});

        drawPolygon = new SuperMap.Control.DrawFeature(vectorLayer, SuperMap.Handler.Polygon);
        drawPolygon.events.on({"featureadded": addFeatureCompleted});

        map = new SuperMap.Map("map", {
            controls: [
                new SuperMap.Control.ScaleLine(),
                new SuperMap.Control.Zoom(),
                new SuperMap.Control.Navigation({
                    dragPanOptions: {
                        enableKinetic: true
                    }
                }),
                drawPoint, drawPolygon]
        });
        map.addControl(modifyFeature);
        map.addControl(new SuperMap.Control.LayerSwitcher(), new SuperMap.Pixel(42, 80));
    },
    activateAddFeature: activateAddFeature,
    activateSelectedFeature: activateSelectedFeature,
    editselectedFeature: editselectedFeature,
    deleteSelectedFeature: deleteSelectedFeature
}