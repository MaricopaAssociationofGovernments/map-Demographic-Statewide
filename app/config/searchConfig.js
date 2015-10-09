﻿(function() {

    "use strict";

    define([
        "esri/tasks/locator",
        "esri/geometry/Extent",
        "esri/layers/FeatureLayer"
    ], function(Locator, Extent, FeatureLayer) {
        // console.log(appConfig.layerInfo[3].queryUrl);

        var searchConfig = new function() {
            var self = this;

            self.Sources = [{
                locator: new Locator(appConfig.geoCoderService),
                singleLineFieldName: "SingleLine",
                autoNavigate: true,
                enableInfoWindow: true,
                enableHighlight: false,
                autoSelect: false,
                showInfoWindowOnSelect: true,
                name: "Map",
                searchExtent: new Extent({
                    "xmin": -114.68,
                    "ymin": 31.29,
                    "xmax": -109.06,
                    "ymax": 36.99
                }),
                placeholder: "302 N 1st Ave, Phoenix, Arizona"
            }, {
                featureLayer: new FeatureLayer(appConfig.countyService),
                searchFields: ["NAME"],
                displayField: "NAME",
                name: "Counties",
                outFields: ["*"],
                placeholder: "Pinal County"
            }, {
                featureLayer: new FeatureLayer(appConfig.placeService),
                searchFields: ["NAME"],
                displayField: "NAME",
                name: "Jurisdiction",
                placeholder: "Scottsdale"
            }, {
                featureLayer: new FeatureLayer(appConfig.legislativeService),
                searchFields: ["DISTRICT_NUM"],
                displayField: "DISTRICT_NUM",
                name: "Legislative Districts",
                outFields: ["*"],
                placeholder: "Legislative District 03"
            }, {
                featureLayer: new FeatureLayer(appConfig.congressionalService),
                searchFields: ["DISTRICT_NUM"],
                displayField: "DISTRICT_NUM",
                name: "Congressional Districts",
                outFields: ["*"],
                placeholder: "Congressional District 1"
            }, {
                featureLayer: new FeatureLayer(appConfig.tractService),
                searchFields: ["NAMELSAD"],
                displayField: "NAMELSAD",
                autoNavigate: true,
                name: "Census Tracts",
                outFields: ["*"],
                placeholder: "Census Tract 8.03"
            }];
        };
        return searchConfig;
    });
}());