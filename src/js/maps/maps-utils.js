"use strict";
define([
    "../config/appConfig",
    "magcore/resources/color-ramps",
    "esri/tasks/QueryTask",
    "dojo/domReady!"
], function (
    config,
    colorRamps,
    QueryTask
) {
    let $mapsList = $("#mapsList");
    let $colorRamp = $("#colorRamp");
    let $classBreaksCount = $("#classBreaksCount");
    let $classType = $("#classType");
    let $dynamicCBRCheckbox = $("#dynamicCBRCheckbox");

    var mapsutils = {
        GetColorRamp: function (type, rampKey, numBreaks) {
            const ramps = this.GetRampsByNumAndType(type, numBreaks);
            let ramp = ramps[rampKey];
            let rtnRamp = [];
            for (let i = 0; i < ramp.length; i++) {
                const clr = ramp[i];
                rtnRamp.push({
                    r: clr[0],
                    g: clr[1],
                    b: clr[2]
                });
            }
            return rtnRamp;
        },

        GetRampsByNumAndType: function (type, numBreaks) {
            let classBreakSet = colorRamps[type]["classBreakSets"][numBreaks];
            let allRamps = colorRamps[type]["colorRamps"];
            let returnRamps = {};

            Object.keys(allRamps).forEach(function (rampKey) {
                let ramp = allRamps[rampKey];
                let filteredRamp = [];

                Object.keys(ramp).forEach(function (letterKey) {
                    if (classBreakSet.indexOf(letterKey) > -1) {
                        filteredRamp.push(ramp[letterKey]);
                    }
                });
                returnRamps[rampKey] = filteredRamp;
            });
            return returnRamps;
        },

        ColorRampToHTML: function (ramp, rampKey, rampType) {
            let html = `<div data-type="${rampType}" data-id="${rampKey}" class="cRamp">`;
            for (let i = 0; i < ramp.length; i++) {
                let clr = ramp[i];
                if (clr.r && clr.g && clr.b) {
                    clr = `${clr.r}, ${clr.g}, ${clr.b}`;
                }

                html += `<div style="background-color:rgb(${clr})" class="colorRampSquare"></div>`;
            }
            return (html += "</div>");
        },

        GetActiveMapData: function () {
            //Gets active map item
            let $activeItem = $mapsList.find(".activeMapItem");
            if ($activeItem) {
                //Pull jquery data object from active map item
                return $activeItem.data("mapsConfig");
            }
        },

        GetCurrentMapsParams: async function () {
            let conf = this.GetActiveMapData();
            let cbrCount = $classBreaksCount.val();
            let classType = $classType.val();
            let breaks = conf.breaks[classType + cbrCount];

            if ($dynamicCBRCheckbox.is(":checked") && classType !== "Custom") {
                breaks = await GetDynamicClassBreaks(cbrCount, classType, conf);
            }

            let cbInfos = [];

            //Get color ramp info
            let rampKey = $colorRamp.find(".cRamp").data("id") || config.DefaultColorRamp;
            let type = $colorRamp.find(".cRamp").data("type") || config.DefaultColorScheme;

            //Get a color ramp using above data
            let colorRamp = this.GetColorRamp(type, rampKey, cbrCount);

            if (classType === "Custom") {
                cbInfos = this.GetCustomBreaks(colorRamp);
            } else {
                cbInfos = this.GetCurrentBreaks(breaks, colorRamp);
            }

            return {
                conf: conf,
                breaks: breaks,
                rampKey: rampKey,
                type: type,
                colorRamp: colorRamp,
                cbInfos: cbInfos,
                classType: classType
            };
        },

        pctLabel: function (val) {
            return (Math.round(val * 1000) / 10).toLocaleString("en-US");
        },

        numLabel: function (val) {
            return Math.round(val).toLocaleString("en-US");
        },

        GetCurrentBreaks: function (breaks, colorRamp) {
            const rtnData = [];
            let conf = this.GetActiveMapData();
            for (let i = 0; i < breaks.length - 1; i++) {
                const min = breaks[i];
                const max = breaks[i + 1];

                let minLabel = min;
                let maxLabel = max;

                if (conf.Type === "percent") {
                    minLabel = Math.round(minLabel * 1000) / 10 + "%";
                    maxLabel = Math.round(maxLabel * 1000) / 10 + "%";
                } else if (conf.Type === "number") {
                    minLabel = Math.round(minLabel).toLocaleString("en-US");
                    maxLabel = Math.round(maxLabel).toLocaleString("en-US");
                }

                rtnData.push({
                    minValue: min,
                    maxValue: max,
                    symbol: {
                        type: "simple-fill",
                        color: colorRamp[i],
                        outline: {
                            color: [0, 0, 0, 0.1],
                            width: 0.5
                        }
                    },
                    label: `${minLabel} - ${maxLabel}`
                });
            }
            return rtnData;
        },
        view: null,
        map: null
    }

    async function GetDynamicClassBreaks(cbrCount, classType, conf) {
        let q = {
            returnGeometry: false,
            outFields: conf.NormalizeField ? [conf.FieldName, conf.NormalizeField] : [conf.FieldName],
            where: `${conf.FieldName} IS NOT NULL`,
            geometry: mapsutils.view.extent,
            outSpatialReference: 102100,
            maxAllowableOffset: .1
        };

        let qt = new QueryTask({
            url: config.mainUrl + "/0"
        });

        return qt.execute(q).then(function (res) {
            let arr = [];
            res.features.forEach(feature => {
                if (conf.NormalizeField) {
                    arr.push(feature.attributes[conf.FieldName] / feature.attributes[conf.NormalizeField] || 0);
                } else {
                    arr.push(feature.attributes[conf.FieldName]);
                }
            });

            let series = new geostats();
            series.setSerie(arr);

            let breakValues = [];
            if (classType === "Jenks") {
                breakValues = series.jenks(arr, Number(cbrCount));
            } else if (classType === "EqInterval") {
                breakValues = series.getClassEqInterval(Number(cbrCount));
            } else if (classType === "Quantile") {
                breakValues = series.getClassQuantile(Number(cbrCount));
            }
            return breakValues;
        });
    }

    return mapsutils;
}
);