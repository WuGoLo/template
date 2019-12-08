/**
 * @requires SuperMap/Lang.js
 */

/**
 * Namespace: SuperMap.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <SuperMap.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <SuperMap.String.format> calls.
 */
SuperMap.Lang.en = {

	'unhandledRequest': "Unhandled request return ${statusText}",

	'Permalink': "Permalink",

	'Overlays': "Overlays",

	'Base Layer': "Base Layer",

	'LayerSwitcher': "LayerSwitcher",

	'noFID': "Can't update a feature for which there is no FID.",

	'browserNotSupported':
		"Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",

	// console message
	'minZoomLevelError':
		"The minZoomLevel property is only intended for use " +
		"with the FixedZoomLevels-descendent layers. That this " +
		"wfs layer checks for minZoomLevel is a relic of the" +
		"past. We cannot, however, remove it without possibly " +
		" breaking OL based applications that may depend on it." +
		"Therefore we are deprecating it -- the minZoomLevel." +
		"Please instead use min/max resolution setting.",

	'commitSuccess': "WFS Transaction: SUCCESS ${response}",

	'commitFailed': "WFS Transaction: FAILED ${response}",

	'googleWarning':
		"The Google Layer was unable to load correctly.<br><br>" +
		"To get rid of this message, select a new BaseLayer " +
		"in the layer switcher in the upper-right corner.<br><br>" +
		"Most likely, this is because the Google Maps library " +
		"script was either not included, or does not contain the " +
		"correct API key for your site.<br><br>",

	'getLayerWarning':
		"The ${layerType} Layer was unable to load correctly.<br><br>" +
		"To get rid of this message, select a new BaseLayer " +
		"in the layer switcher in the upper-right corner.<br><br>" +
		"Most likely, this is because the ${layerLib} library " +
		"script was not correctly included.<br><br>",

	'Scale = 1 : ${scaleDenom}': "Scale = 1 : ${scaleDenom}",

	//labels for the graticule control
	'W': 'W',
	'E': 'E',
	'N': 'N',
	'S': 'S',
	'Graticule': 'Graticule',

	// console message
	'reprojectDeprecated':
		"You are using the 'reproject' option " +
		"on the ${layerName} layer. This option is deprecated: " +
		"its use was designed to support displaying data over commercial " +
		"basemaps, but that functionality should now be achieved by using " +
		"Spherical Mercator support.",

	// console message
	'methodDeprecated':
		"This method has been deprecated and will be removed. " +
		"Please use ${newMethod} instead.",

	'proxyNeeded': "You probably need to set SuperMap.ProxyHost to access ${url}.",

	// **** end ****
	'end': '',
	'mi': "mi",
	'km': "km",
	'm': "m",
	'ft': "ft",

	'cloudLayerAttr': '&copy;2016 AMap GS(2015)2681',

	//VectorMapEditor
	'editorName':"VectorMapEditor",
	'layerList':"LayerList",
	'point':"PointLayer",
	'line':"LineLayer",
	'region':"PolygonLayer",
	'text':"TextLayer",
	'advanceSetting':"advanceSetting",
	'expandingPointContent':"Expanding",
	'volleyPointContent':"Volley",
	'rendezvousPointContent':"Rendezvous",
	'supplyPointContent':"Supply",
	//symbolAlgo
	'symbolAlgo_17703':"Add",
	'symbolAlgo_17704':"Emergency",
	'symbolAlgo_21600':"Punching",
	'symbolAlgo_28000_1':"Danger",
	'symbolAlgo_28000_2':"Middle",
	'symbolAlgo_28000_3':"light",
	'symbolAlgo_31304':"Electric resistance",
	'symbolAlgo_3010301':"Adjustment",
	'symbolAlgo_3010303':"StartOff",
	'symbolAlgo_3010304':"Coordinate",
	//basic symbol
	'polyLine':"polyLine",
	'parallelogram':"parallelogram",
	'circle':"circle",
	'ellipse':"ellipse",
	'annotation':"annotation",
	'regularPolygon':"regular polygon",
	'polygon':"polygon",
	'bezier':"bezier",
	'closedBesselCurve':"closed bessel curve",
	'kidney':"kidney",
	'brace':"brace",
	'trapezoid':"trapezoid",
    'rectangle':"rectangle",
    'chord':"chord",
    'sector':"sector",
    'arc':"arc",
    'parallel':"parallel",
	'annoFrame':"annoframe",
	'tooltipBoxM':"tooltip BoxM",
	'runway':"runway",
	'curveEight':"curveEight",
	'arrowLine':"ArrowLine",
	'pathText':"pathText",
	'concentricCircle':"ConcentricCircle",
	'combinedCircle':"combinedCircle",
	'freeCurve':"freeCurve",
	'nodeChain':"nodeChain",
	'lineMarking':"line marking",
	'symbolTextBox':"symbolText box",

	//generation Symbol
	'parallelFlatArrow':"parallel flat arrow",
	'multipleArrow':"multiple Arrow",
	'trapezoidalFlatArrow':"trapezoidal flat arrow",
	'besselPointArrow':"bessel point arrow",
	'besselArrow':"bassel arrow",
	'doubleArrow':"double arrow",
	'brokenSpaceTriangleArrow':"broken_space_triangle_arrow",
	'besselDovetailArrow':"bessel dovetail arrow",
	'ordinaryLineArrow':"ordinary line arrow",
	'besselPointedEarsTailArrow':"bessel pointed ears tail arrow",
	'besselTipArrow':"bessel_tip_arrow",
	'besselArrowNoGraph':"bessel arrow no graph",
	'brokenSpaceTriangleArrowNoGraph':"broken space triangle arrow no graph",
	'besselPointedEarsTailArrowNoGraph':"bessel pointed ears tail arrow no graph",
	'ordinaryLineArrowNoGraph':"ordinary line arrow no graph",
	'combianationArrow':"combianation arrow",


	'airDeployment':"airDeployment",
	'airRoute':"airRoute",
	'arcRegion':"arcRegion",
	'flagGroup':"flagGroup",
	'lineRelation':"lineRelation",
	'polygonRegion':"polygonRegion",
	'navyRoute':"navyRoute",
	'missileRoute':"missileRoute",
	'navyDeployment':"navyDeployment",
	'satelliteTimeWindows':"satelliteTimeWindows",
	'satellite':"satellite",
	'symbolText':"symbolText",
	'symbolText1':"symbolText1",
	'interferenceBeam':"interferenceBeam",
	'groupObject':"groupObject"

};
