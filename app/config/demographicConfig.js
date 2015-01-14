(function() {

    "use strict";

    define(

        function() {
            var demographicConfig = new function() {
                var self = this;

                self.exportSummaryGridUrl = "http://geo.azmag.gov/services/AzMagService/api/ExportGrid";
                self.exportReportUrl = "http://geo.azmag.gov/services/AzMagService/api/ExportDemographicCharts";
                self.exportSelectedFeaturesUrl = "http://geo.azmag.gov/services/AzMagService/api/ExportSelectedFeatures";

                self.Census2010byBlockGroup = appConfig.layerInfo[3].url;

                self.CompareOperators = {
                    string: [{
                        Name: "Equals",
                        Sign: "="
                    }, {
                        Name: "Starts With",
                        Sign: "%[value]"
                    }, {
                        Name: "Contains",
                        Sign: "%[value]%"
                    }, {
                        Name: "Ends With",
                        Sign: "[value]%"
                    }],
                    number: [{
                        Name: "Equals",
                        Sign: "="
                    }, {
                        Name: "Less Than",
                        Sign: "<"
                    }, {
                        Name: "Less Than Or Equal To",
                        Sign: "<="
                    }, {
                        Name: "Greater Than Or Equal To",
                        Sign: ">="
                    }, {
                        Name: "Greater Than",
                        Sign: ">"
                    }],
                    date: [{
                        Name: "Equals",
                        Sign: "="
                    }, {
                        Name: "Less Than",
                        Sign: "<"
                    }, {
                        Name: "Less Than Or Equal To",
                        Sign: "<="
                    }, {
                        Name: "Greater Than Or Equal To",
                        Sign: ">="
                    }, {
                        Name: "Greater Than",
                        Sign: ">"
                    }]
                };

                self.queryFields = [{
                        Name: "COUNTY_NAME",
                        Field: "County",
                        Type: "string",
                        Placeholder: "(50 Max)"
                    }, //pinal fips code is 021
                    {
                        Name: "TRACTCE10",
                        Field: "Tract",
                        Type: "string",
                        Placeholder: "(00021 to 980700)"
                    }, {
                        Name: "BLKGRPCE10",
                        Field: "Block Group",
                        Type: "string",
                        Placeholder: "(7 Max)"
                    }, {
                        Name: "SQ_MI",
                        Field: "Square Miles",
                        Type: "number",
                        Placeholder: "(1124.57 Max)"
                    }, {
                        Name: "TOT_POP",
                        Field: "Total Population",
                        Type: "number",
                        Placeholder: "(7293 Max)"
                    }, {
                        Name: "MEDIAN_AGE",
                        Field: "Pop Median Age",
                        Type: "number",
                        Placeholder: "(82.6 Max)"
                    }, {
                        Name: "Under5",
                        Field: "Pop Under 5",
                        Type: "number",
                        Placeholder: "(801 Max)"
                    }, {
                        Name: "Age5to17",
                        Field: "Pop Age 5 to 17",
                        Type: "number",
                        Placeholder: "(1688 Max)"
                    }, {
                        Name: "Age18to34",
                        Field: "Pop Age 18 to 34",
                        Type: "number",
                        Placeholder: "(4782 Max)"
                    }, {
                        Name: "Age35to49",
                        Field: "Pop Age 35 to 49",
                        Type: "number",
                        Placeholder: "(2519 Max)"
                    }, {
                        Name: "Age50to64",
                        Field: "Pop Age 50 to 64",
                        Type: "number",
                        Placeholder: "(1143 Max)"
                    }, {
                        Name: "Age65to84",
                        Field: "Pop Age 65 to 84",
                        Type: "number",
                        Placeholder: "(2327 Max)"
                    }, {
                        Name: "Age85Plus",
                        Field: "Pop Age 85+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "Age50Plus",
                        Field: "Pop Age 50+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "Age60Plus",
                        Field: "Pop Age 60+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "Age65Plus",
                        Field: "Pop Age 65+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "Age70Plus",
                        Field: "Pop Age 70+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "Age75Plus",
                        Field: "Pop Age 75+",
                        Type: "number",
                        Placeholder: "(761 Max)"
                    }, {
                        Name: "WHITE",
                        Field: "White",
                        Type: "number",
                        Placeholder: "(5158 Max)"
                    }, {
                        Name: "BLACK",
                        Field: "Black",
                        Type: "number",
                        Placeholder: "(1198 Max)"
                    }, {
                        Name: "NATIVE",
                        Field: "Native",
                        Type: "number",
                        Placeholder: "(2560 Max)"
                    }, {
                        Name: "ASIAN",
                        Field: "Asian",
                        Type: "number",
                        Placeholder: "(1026 Max)"
                    }, {
                        Name: "PACIFIC",
                        Field: "Pacific",
                        Type: "number",
                        Placeholder: "(945 Max)"
                    }, {
                        Name: "OTHER",
                        Field: "Other",
                        Type: "number",
                        Placeholder: "(2664 Max)"
                    }, {
                        Name: "TWO_OR_MORE",
                        Field: "Two or More",
                        Type: "number",
                        Placeholder: "(251 Max)"
                    }, {
                        Name: "HISPANIC",
                        Field: "Hispanic",
                        Type: "number",
                        Placeholder: "(3255 Max)"
                    }, {
                        Name: "NOT_HISPANIC",
                        Field: "Not Hispanic",
                        Type: "number",
                        Placeholder: "(5121 Max)"
                    }, {
                        Name: "MINORITY_POP",
                        Field: "Minority Population",
                        Type: "number",
                        Placeholder: "(6211 Max)"
                    }, {
                        Name: "TOTAL_HU",
                        Field: "Total Housing",
                        Type: "number",
                        Placeholder: "(3063 Max)"
                    }, {
                        Name: "OCCUPIED_HU",
                        Field: "Occupied Housing",
                        Type: "number",
                        Placeholder: "(2025 Max)"
                    }, {
                        Name: "VACANT_HU",
                        Field: "Vacant Housing",
                        Type: "number",
                        Placeholder: "(1990 Max)"
                    }, {
                        Name: "SEASONAL_HU",
                        Field: "Seasonal Housing",
                        Type: "number",
                        Placeholder: "(1905 Max)"
                    }, {
                        Name: "NON_SEASONAL_HU",
                        Field: "Non Seasonal Housing",
                        Type: "number",
                        Placeholder: "(2119 Max)"
                    }, {
                        Name: "NON_SEASONAL_VAC_HU",
                        Field: "Non Seasonal Vacant Housing",
                        Type: "number",
                        Placeholder: "(980 Max)"
                    }, {
                        Name: "OWNER_OCC_HU",
                        Field: "Owner Occupied Housing",
                        Type: "number",
                        Placeholder: "(1837 Max)"
                    }, {
                        Name: "RENTER_OCC_HU",
                        Field: "Renter Occupied Housing",
                        Type: "number",
                        Placeholder: "(1534 Max)"
                    }, {
                        Name: "AVG_HH_SIZE",
                        Field: "Avg Household Size",
                        Type: "number",
                        Placeholder: "(8.4 Max)"
                    }, {
                        Name: "AVG_HH_SIZE_OWNER_HU",
                        Field: "Avg Household Size Owner Housing",
                        Type: "number",
                        Placeholder: "(8.4 Max)"
                    }, {
                        Name: "AVG_HH_SIZE_RENTER_HU",
                        Field: "Avg Household Size Renter Housing",
                        Type: "number",
                        Placeholder: "(5.63 Max)"
                    }, {
                        Name: "TOTAL_HOUSEHOLDS",
                        Field: "Total Households",
                        Type: "number",
                        Placeholder: "(1994 Max)"
                    }, {
                        Name: "HOUSEHOLDS_LESS_THAN_25000",
                        Field: "Households Less than $25,000",
                        Type: "number",
                        Placeholder: "(799 Max)"
                    }, {
                        Name: "HOUSEHOLDS_25000_TO_49999",
                        Field: "Households $25,000 to $49,999",
                        Type: "number",
                        Placeholder: "(646 Max)"
                    }, {
                        Name: "HOUSEHOLDS_50000_TO_99999",
                        Field: "Households $50,000 to $99,999",
                        Type: "number",
                        Placeholder: "(902 Max)"
                    }, {
                        Name: "HOUSEHOLDS_100000_OR_MORE",
                        Field: "Households $100,000 or More",
                        Type: "number",
                        Placeholder: "(841 Max)"
                    }, {
                        Name: "MEDIAN_HOUSEHOLD_INCOME",
                        Field: "Median Household Income",
                        Type: "number",
                        Placeholder: "(250001 Max)"
                    }, {
                        Name: "POPULATION_25_YEARS_AND_OVER",
                        Field: "Pop 25 Years and Over",
                        Type: "number",
                        Placeholder: "(6785 Max)"
                    }, {
                        Name: "LT9GRADE",
                        Field: "9th Grade",
                        Type: "number",
                        Placeholder: "(1218 Max)"
                    }, {
                        Name: "NOHSDIPLOMA",
                        Field: "No High School Diploma",
                        Type: "number",
                        Placeholder: "(1248 Max)"
                    }, {
                        Name: "HSGRAD",
                        Field: "High School Diploma",
                        Type: "number",
                        Placeholder: "(2032 Max)"
                    }, {
                        Name: "SOMECOLLEGE",
                        Field: "Some College",
                        Type: "number",
                        Placeholder: "(2032 Max)"
                    }, {
                        Name: "ASSOCIATES",
                        Field: "Associates Degree",
                        Type: "number",
                        Placeholder: "(562 Max)"
                    }, {
                        Name: "BACHELORS",
                        Field: "Bachelors Degree",
                        Type: "number",
                        Placeholder: "(1205 Max)"
                    }, {
                        Name: "GRADPROF",
                        Field: "Graduate Degree",
                        Type: "number",
                        Placeholder: "(1085 Max)"
                    }, {
                        Name: "TOTAL_FAMILY",
                        Field: "Total Family",
                        Type: "number",
                        Placeholder: "(1632 Max)"
                    }, {
                        Name: "INCOME_BELOW_POVERTY_LEVEL",
                        Field: "Income Below Poverty Level",
                        Type: "number",
                        Placeholder: "(397 Max)"
                    }, {
                        Name: "NOT_INCOME_BELOW_POVERTY_LEVEL",
                        Field: "Not Income Below Poverty Level",
                        Type: "number",
                        Placeholder: "(1529 Max)"
                    }, {
                        Name: "MEDIAN_VALUE",
                        Field: "Median Value",
                        Type: "number",
                        Placeholder: "(1000001 Max)"
                    }, {
                        Name: "MEDIAN_GROSS_RENT",
                        Field: "Median Gross Rent",
                        Type: "number",
                        Placeholder: "(2001 Max)"
                    }
                ];

                // config for selected block groups tab
                self.selectedBlockGroups = [{
                    field: "OBJECTID",
                    hidden: true
                }, {
                    field: "COUNTY_NAME",
                    title: "County",
                    width: "80px"
                }, {
                    field: "TRACTCE10",
                    title: "Tract",
                    width: "55px"
                }, {
                    field: "BLKGRPCE10",
                    title: "Block Group",
                    width: "60px"
                }, {
                    field: "SQ_MI",
                    title: "Square Miles*",
                    width: "60px",
                    format: "{0:n2}"
                }, {
                    field: "TOT_POP",
                    title: "Total Population*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "MINORITY_POP",
                    title: "Minority Population*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "MEDIAN_AGE",
                    title: "Median Age*",
                    width: "55px",
                    format: "{0:n2}"
                }, {
                    field: "Under5",
                    title: "Under 5*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "Age5to17",
                    title: "Age 5 to 17*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age18to34",
                    title: "Age 18 to 34*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age35to49",
                    title: "Age 35 to 49*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age50to64",
                    title: "Age 50 to 64*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age65to84",
                    title: "Age 65 to 84*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age85Plus",
                    title: "Age 85 and Over*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age50Plus",
                    title: "Age 50 Plus*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age60Plus",
                    title: "Age 60 Plus*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age65Plus",
                    title: "Age 65 Plus*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age70Plus",
                    title: "Age 70 Plus*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "Age75Plus",
                    title: "Age 75 Plus*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "WHITE",
                    title: "White*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "BLACK",
                    title: "Black*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "NATIVE",
                    title: "Native*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "ASIAN",
                    title: "Asian*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "PACIFIC",
                    title: "Pacific*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "TWO_OR_MORE",
                    title: "Two or More*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "OTHER",
                    title: "Other*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "HISPANIC",
                    title: "Hispanic*",
                    width: "60px",
                    format: "{0:n0}"
                }, {
                    field: "NOT_HISPANIC",
                    title: "Not Hispanic*",
                    width: "60px",
                    format: "{0:n0}"
                }, {
                    field: "TOTAL_HOUSEHOLDS",
                    title: "Total Households^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "MEDIAN_HOUSEHOLD_INCOME",
                    title: "Median Household Income^",
                    width: "100px",
                    format: "{0:c}"
                }, {
                    field: "HOUSEHOLDS_LESS_THAN_25000",
                    title: "Households Less than $25,000^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "HOUSEHOLDS_25000_TO_49999",
                    title: "Households $25,000 to $49,999^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "HOUSEHOLDS_50000_TO_99999",
                    title: "Households $50,000 to $99,999^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "HOUSEHOLDS_100000_OR_MORE",
                    title: "Households $100,000 or More^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "TOTAL_FAMILY",
                    title: "Total Family^",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "INCOME_BELOW_POVERTY_LEVEL",
                    title: "Income Below  Poverty Level^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "POPULATION_25_YEARS_AND_OVER",
                    title: "Population 25yrs and Over^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "LT9GRADE",
                    title: "Less than 9th Grade^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "NOHSDIPLOMA",
                    title: "No HS Diploma^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "HSGRAD",
                    title: "High School Grad^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "SOMECOLLEGE",
                    title: "Some College^",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "ASSOCIATES",
                    title: "Associates^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "BACHELORS",
                    title: "Bachelors^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "GRADPROF",
                    title: "Graduates^",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "TOTAL_HU",
                    title: "Total Housing Units*",
                    width: "55px",
                    format: "{0:n0}"
                }, {
                    field: "OCCUPIED_HU",
                    title: "Occupied Housing Units*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "VACANT_HU",
                    title: "Vacant Housing Units*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "OWNER_OCC_HU",
                    title: "Owner Occupied Housing Units*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "RENTER_OCC_HU",
                    title: "Renter Occupited Housing Units*",
                    width: "80px",
                    format: "{0:n0}"
                }, {
                    field: "MEDIAN_VALUE",
                    title: "Median Value^",
                    width: "100px",
                    format: "{0:c}"
                }, {
                    field: "MEDIAN_GROSS_RENT",
                    title: "Median Gross Rent^",
                    width: "80px",
                    format: "{0:c}"
                }];

                self.reports = {

                    stateSummary: {
                        name: "Demographic Summary",
                        restUrl: self.Census2010byBlockGroup + "/2",
                        whereClause: "NAME = Arizona",
                        compareUrl: self.Census2010byBlockGroup + "/2",
                        compareWhereClause: "OBJECTID > -1",
                        comparePlaceField: "NAME",
                        summaryField: "NAME",
                        isTimeVaryingData: false,
                        source: "*Census 2010; ^American Community Survey 2009-2013",
                        treeViewMenu: [{
                            topic: "General",
                            category: "General",
                            commHeaderColumnStartIndex: 0,
                            commHeaderColumnSpan: 3,
                            commHeaderBackgroundFromARGB: [200, 173, 216, 230]
                        }, {
                            topic: "Age",
                            category: "Age",
                            commHeaderColumnStartIndex: 3,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 242, 221, 220]
                        }, {
                            topic: "Population by Race",
                            category: "Population by Race",
                            commHeaderColumnStartIndex: 11,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 234, 241, 221]
                        }, {
                            topic: "Population by Ethnicity",
                            category: "Population by Ethnicity",
                            commHeaderColumnStartIndex: 18,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 253, 233, 217]
                        }, {
                            topic: "Poverty",
                            category: "Poverty",
                            commHeaderColumnStartIndex: 20,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 229, 224, 236]
                        }, {
                            topic: "Household Income",
                            category: "Household Income",
                            commHeaderColumnStartIndex: 22,
                            commHeaderColumnSpan: 6,
                            commHeaderBackgroundFromARGB: [200, 247, 250, 206]
                        }, {
                            topic: "Educational Attainment",
                            category: "Educational Attainment",
                            commHeaderColumnStartIndex: 28,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 221, 217, 195]
                        }, {
                            topic: "Housing",
                            category: "Housing",
                            commHeaderColumnStartIndex: 36,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 214, 254, 254]
                        }],
                        fields: [
                            // General
                            {
                                fieldName: "SQ_MI",
                                fieldType: "double",
                                tableHeader: "Area in square miles*",
                                fieldAlias: "Area in square miles",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "General",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TOT_POP",
                                fieldType: "long",
                                tableHeader: "Total population*",
                                fieldAlias: "Total Population",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MINORITY_POP",
                                fieldType: "long",
                                tableHeader: "Minority Population*",
                                fieldAlias: "Minority Population",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                rowID: "3",
                                category: "General",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Age
                            {
                                fieldName: "MEDIAN_AGE",
                                fieldType: "double",
                                tableHeader: "Median Age*",
                                fieldAlias: "Median Age",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Under5",
                                fieldType: "long",
                                tableHeader: "Under 5*",
                                fieldAlias: "Under 5",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age5to17",
                                fieldType: "long",
                                tableHeader: "5 to 17*",
                                fieldAlias: "5 to 17",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age18to34",
                                fieldType: "long",
                                tableHeader: "18 to 34*",
                                fieldAlias: "18 to 34",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age35to49",
                                fieldType: "long",
                                tableHeader: "35 to 49*",
                                fieldAlias: "35 to 49",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50to64",
                                fieldType: "long",
                                tableHeader: "50 to 64*",
                                fieldAlias: "50 to 64",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65to84",
                                fieldType: "long",
                                tableHeader: "65 to 84*",
                                fieldAlias: "65 to 84",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age85Plus",
                                fieldType: "long",
                                tableHeader: "85 and over*",
                                fieldAlias: "85 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50Plus",
                                fieldType: "long",
                                tableHeader: "50 Plus*",
                                fieldAlias: "50 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "9",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age60Plus",
                                fieldType: "long",
                                tableHeader: "60 Plus*",
                                fieldAlias: "60 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "91",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65Plus",
                                fieldType: "long",
                                tableHeader: "65 Plus*",
                                fieldAlias: "65 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "92",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age70Plus",
                                fieldType: "long",
                                tableHeader: "70 Plus*",
                                fieldAlias: "70 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "93",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age75Plus",
                                fieldType: "long",
                                tableHeader: "75 Plus*",
                                fieldAlias: "75 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "94",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            },
                            // Race
                            {
                                fieldName: "WHITE",
                                fieldType: "long",
                                tableHeader: "White*",
                                fieldAlias: "White",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BLACK",
                                fieldType: "long",
                                tableHeader: "Black*",
                                fieldAlias: "Black",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NATIVE",
                                fieldType: "long",
                                tableHeader: "Native American*",
                                fieldAlias: "Native American",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASIAN",
                                fieldType: "long",
                                tableHeader: "Asian*",
                                fieldAlias: "Asian",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "PACIFIC",
                                fieldType: "long",
                                tableHeader: "Pacific Islander*",
                                fieldAlias: "Pacific Islander",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TWO_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Two or More*",
                                fieldAlias: "2 or more",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OTHER",
                                fieldType: "long",
                                tableHeader: "Other Race*",
                                fieldAlias: "Other",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Ethnicity
                            {
                                fieldName: "HISPANIC",
                                fieldType: "long",
                                tableHeader: "Hispanic*",
                                fieldAlias: "Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOT_HISPANIC",
                                fieldType: "long",
                                tableHeader: "Non-Hispanic*",
                                fieldAlias: "Non-Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Household Income
                            {
                                fieldName: "TOTAL_HOUSEHOLDS",
                                fieldType: "long",
                                tableHeader: "Households^",
                                fieldAlias: "Households",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_HOUSEHOLD_INCOME",
                                fieldType: "long",
                                tableHeader: "Median Household Income^",
                                fieldAlias: "Median Household Income",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Households",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_LESS_THAN_25000",
                                fieldType: "long",
                                tableHeader: "Less Than $25,000^",
                                fieldAlias: "&lt; 25K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_25000_TO_49999",
                                fieldType: "long",
                                tableHeader: "$25,000 to $50,000^",
                                fieldAlias: "25 - 50K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_50000_TO_99999",
                                fieldType: "long",
                                tableHeader: "$50,000 to $100,000^",
                                fieldAlias: "50 - 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_100000_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Greater Than $100,000^",
                                fieldAlias: "&gt; 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Poverty
                            {
                                fieldName: "TOTAL_FAMILY",
                                fieldType: "long",
                                tableHeader: "Families^",
                                fieldAlias: "Families",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Poverty",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "INCOME_BELOW_POVERTY_LEVEL",
                                fieldType: "long",
                                tableHeader: "Families in Poverty",
                                fieldAlias: "Families in Poverty",
                                percentOfField: "TOTAL_FAMILY",
                                densityAreaField: "SQ_MI",
                                category: "Poverty",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Educational Attainment
                            {
                                fieldName: "POPULATION_25_YEARS_AND_OVER",
                                fieldType: "long",
                                tableHeader: "Population 25  and older^",
                                fieldAlias: "Population 25  and older",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Educational Attainment",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "LT9GRADE",
                                fieldType: "long",
                                tableHeader: "Less than 9th Grade^",
                                fieldAlias: "&lt; 9th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOHSDIPLOMA",
                                fieldType: "long",
                                tableHeader: " to 12th Grade^",
                                fieldAlias: "9th - 12th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HSGRAD",
                                fieldType: "long",
                                tableHeader: "High School Graduate^",
                                fieldAlias: "High School Grad",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "SOMECOLLEGE",
                                fieldType: "long",
                                tableHeader: "Some College^",
                                fieldAlias: "Some College",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASSOCIATES",
                                fieldType: "long",
                                tableHeader: "Associates Degree^",
                                fieldAlias: "Associates",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BACHELORS",
                                fieldType: "long",
                                tableHeader: "Bachelors Degree^",
                                fieldAlias: "Bachelors",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "GRADPROF",
                                fieldType: "long",
                                tableHeader: "Graduate or Professional Degree^",
                                fieldAlias: "Grad or Professional",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Housing
                            {
                                fieldName: "TOTAL_HU",
                                fieldType: "long",
                                tableHeader: "Housing Units*",
                                fieldAlias: "Total Housing Units",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OCCUPIED_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Units*",
                                fieldAlias: "Occupied",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "VACANT_HU",
                                fieldType: "long",
                                tableHeader: "Vacant Units*",
                                fieldAlias: "Vacant",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OWNER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Owner Units*",
                                fieldAlias: "Owner Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "RENTER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Renter Units*",
                                fieldAlias: "Renter Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_VALUE",
                                fieldType: "double",
                                tableHeader: "Median Housing Value^",
                                fieldAlias: "Median Housing Value",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_GROSS_RENT",
                                fieldType: "double",
                                tableHeader: "Median Rent^",
                                fieldAlias: "Median Gross Rent",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }
                        ]
                    },



                    countySummary: {
                        name: "Demographic Summary",
                        restUrl: self.Census2010byBlockGroup + "/2",
                        whereClause: "NAME <> 'Arizona'",
                        compareUrl: self.Census2010byBlockGroup + "/2",
                        compareWhereClause: "OBJECTID > -1",
                        comparePlaceField: "NAME",
                        summaryField: "NAME",
                        isTimeVaryingData: false,
                        source: "*Census 2010; ^American Community Survey 2009-2013",
                        treeViewMenu: [{
                            topic: "General",
                            category: "General",
                            commHeaderColumnStartIndex: 0,
                            commHeaderColumnSpan: 3,
                            commHeaderBackgroundFromARGB: [200, 173, 216, 230]
                        }, {
                            topic: "Age",
                            category: "Age",
                            commHeaderColumnStartIndex: 3,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 242, 221, 220]
                        }, {
                            topic: "Population by Race",
                            category: "Population by Race",
                            commHeaderColumnStartIndex: 11,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 234, 241, 221]
                        }, {
                            topic: "Population by Ethnicity",
                            category: "Population by Ethnicity",
                            commHeaderColumnStartIndex: 18,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 253, 233, 217]
                        }, {
                            topic: "Poverty",
                            category: "Poverty",
                            commHeaderColumnStartIndex: 20,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 229, 224, 236]
                        }, {
                            topic: "Household Income",
                            category: "Household Income",
                            commHeaderColumnStartIndex: 22,
                            commHeaderColumnSpan: 6,
                            commHeaderBackgroundFromARGB: [200, 247, 250, 206]
                        }, {
                            topic: "Educational Attainment",
                            category: "Educational Attainment",
                            commHeaderColumnStartIndex: 28,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 221, 217, 195]
                        }, {
                            topic: "Housing",
                            category: "Housing",
                            commHeaderColumnStartIndex: 36,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 214, 254, 254]
                        }],
                        fields: [
                            // General
                            {
                                fieldName: "SQ_MI",
                                fieldType: "double",
                                tableHeader: "Area in square miles*",
                                fieldAlias: "Area in square miles",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "General",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TOT_POP",
                                fieldType: "long",
                                tableHeader: "Total population*",
                                fieldAlias: "Total Population",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MINORITY_POP",
                                fieldType: "long",
                                tableHeader: "Minority Population*",
                                fieldAlias: "Minority Population",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                rowID: "3",
                                category: "General",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Age
                            {
                                fieldName: "MEDIAN_AGE",
                                fieldType: "double",
                                tableHeader: "Median Age*",
                                fieldAlias: "Median Age",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Under5",
                                fieldType: "long",
                                tableHeader: "Under 5*",
                                fieldAlias: "Under 5",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age5to17",
                                fieldType: "long",
                                tableHeader: "5 to 17*",
                                fieldAlias: "5 to 17",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age18to34",
                                fieldType: "long",
                                tableHeader: "18 to 34*",
                                fieldAlias: "18 to 34",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age35to49",
                                fieldType: "long",
                                tableHeader: "35 to 49*",
                                fieldAlias: "35 to 49",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50to64",
                                fieldType: "long",
                                tableHeader: "50 to 64*",
                                fieldAlias: "50 to 64",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65to84",
                                fieldType: "long",
                                tableHeader: "65 to 84*",
                                fieldAlias: "65 to 84",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age85Plus",
                                fieldType: "long",
                                tableHeader: "85 and over*",
                                fieldAlias: "85 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50Plus",
                                fieldType: "long",
                                tableHeader: "50 Plus*",
                                fieldAlias: "50 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "9",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age60Plus",
                                fieldType: "long",
                                tableHeader: "60 Plus*",
                                fieldAlias: "60 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "91",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65Plus",
                                fieldType: "long",
                                tableHeader: "65 Plus*",
                                fieldAlias: "65 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "92",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age70Plus",
                                fieldType: "long",
                                tableHeader: "70 Plus*",
                                fieldAlias: "70 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "93",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age75Plus",
                                fieldType: "long",
                                tableHeader: "75 Plus*",
                                fieldAlias: "75 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "94",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            },
                            // Race
                            {
                                fieldName: "WHITE",
                                fieldType: "long",
                                tableHeader: "White*",
                                fieldAlias: "White",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BLACK",
                                fieldType: "long",
                                tableHeader: "Black*",
                                fieldAlias: "Black",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NATIVE",
                                fieldType: "long",
                                tableHeader: "Native American*",
                                fieldAlias: "Native American",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASIAN",
                                fieldType: "long",
                                tableHeader: "Asian*",
                                fieldAlias: "Asian",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "PACIFIC",
                                fieldType: "long",
                                tableHeader: "Pacific Islander*",
                                fieldAlias: "Pacific Islander",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TWO_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Two or More*",
                                fieldAlias: "2 or more",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OTHER",
                                fieldType: "long",
                                tableHeader: "Other Race*",
                                fieldAlias: "Other",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Ethnicity
                            {
                                fieldName: "HISPANIC",
                                fieldType: "long",
                                tableHeader: "Hispanic*",
                                fieldAlias: "Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOT_HISPANIC",
                                fieldType: "long",
                                tableHeader: "Non-Hispanic*",
                                fieldAlias: "Non-Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Household Income
                            {
                                fieldName: "TOTAL_HOUSEHOLDS",
                                fieldType: "long",
                                tableHeader: "Households^",
                                fieldAlias: "Households",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_HOUSEHOLD_INCOME",
                                fieldType: "long",
                                tableHeader: "Median Household Income^",
                                fieldAlias: "Median Household Income",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Households",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_LESS_THAN_25000",
                                fieldType: "long",
                                tableHeader: "Less Than $25,000^",
                                fieldAlias: "&lt; 25K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_25000_TO_49999",
                                fieldType: "long",
                                tableHeader: "$25,000 to $50,000^",
                                fieldAlias: "25 - 50K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_50000_TO_99999",
                                fieldType: "long",
                                tableHeader: "$50,000 to $100,000^",
                                fieldAlias: "50 - 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_100000_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Greater Than $100,000^",
                                fieldAlias: "&gt; 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartType: "column",
                                chartName: "Households",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Poverty
                            {
                                fieldName: "TOTAL_FAMILY",
                                fieldType: "long",
                                tableHeader: "Families^",
                                fieldAlias: "Families",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Poverty",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "INCOME_BELOW_POVERTY_LEVEL",
                                fieldType: "long",
                                tableHeader: "Families in Poverty",
                                fieldAlias: "Families in Poverty",
                                percentOfField: "TOTAL_FAMILY",
                                densityAreaField: "SQ_MI",
                                category: "Poverty",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Educational Attainment
                            {
                                fieldName: "POPULATION_25_YEARS_AND_OVER",
                                fieldType: "long",
                                tableHeader: "Population 25  and older^",
                                fieldAlias: "Population 25  and older",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Educational Attainment",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "",
                                chartType: "",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "LT9GRADE",
                                fieldType: "long",
                                tableHeader: "Less than 9th Grade^",
                                fieldAlias: "&lt; 9th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOHSDIPLOMA",
                                fieldType: "long",
                                tableHeader: " to 12th Grade^",
                                fieldAlias: "9th - 12th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HSGRAD",
                                fieldType: "long",
                                tableHeader: "High School Graduate^",
                                fieldAlias: "High School Grad",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "SOMECOLLEGE",
                                fieldType: "long",
                                tableHeader: "Some College^",
                                fieldAlias: "Some College",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASSOCIATES",
                                fieldType: "long",
                                tableHeader: "Associates Degree^",
                                fieldAlias: "Associates",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BACHELORS",
                                fieldType: "long",
                                tableHeader: "Bachelors Degree^",
                                fieldAlias: "Bachelors",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "GRADPROF",
                                fieldType: "long",
                                tableHeader: "Graduate or Professional Degree^",
                                fieldAlias: "Grad or Professional",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartType: "column",
                                chartName: "Persons",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Housing
                            {
                                fieldName: "TOTAL_HU",
                                fieldType: "long",
                                tableHeader: "Housing Units*",
                                fieldAlias: "Total Housing Units",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OCCUPIED_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Units*",
                                fieldAlias: "Occupied",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "VACANT_HU",
                                fieldType: "long",
                                tableHeader: "Vacant Units*",
                                fieldAlias: "Vacant",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OWNER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Owner Units*",
                                fieldAlias: "Owner Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "RENTER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Renter Units*",
                                fieldAlias: "Renter Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_VALUE",
                                fieldType: "double",
                                tableHeader: "Median Housing Value^",
                                fieldAlias: "Median Housing Value",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_GROSS_RENT",
                                fieldType: "double",
                                tableHeader: "Median Rent^",
                                fieldAlias: "Median Gross Rent",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }
                        ]
                    },
                    placeSummary: {
                        name: "Demographic Summary",
                        restUrl: self.Census2010byBlockGroup + "/1",
                        whereClause: "OBJECTID > -1",
                        compareUrl: self.Census2010byBlockGroup + "/2",
                        compareWhereClause: "OBJECTID > -1",
                        comparePlaceField: "NAME",
                        summaryField: "NAME",
                        isTimeVaryingData: false,
                        source: "*Census 2010; ^American Community Survey 2009-2013",
                        treeViewMenu: [{
                            topic: "General",
                            category: "General",
                            commHeaderColumnStartIndex: 0,
                            commHeaderColumnSpan: 3,
                            commHeaderBackgroundFromARGB: [200, 173, 216, 230]
                        }, {
                            topic: "Age",
                            category: "Age",
                            commHeaderColumnStartIndex: 3,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 242, 221, 220]
                        }, {
                            topic: "Population by Race",
                            category: "Population by Race",
                            commHeaderColumnStartIndex: 11,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 234, 241, 221]
                        }, {
                            topic: "Population by Ethnicity",
                            category: "Population by Ethnicity",
                            commHeaderColumnStartIndex: 18,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 253, 233, 217]
                        }, {
                            topic: "Poverty",
                            category: "Poverty",
                            commHeaderColumnStartIndex: 20,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 229, 224, 236]
                        }, {
                            topic: "Household Income",
                            category: "Household Income",
                            commHeaderColumnStartIndex: 22,
                            commHeaderColumnSpan: 6,
                            commHeaderBackgroundFromARGB: [200, 247, 250, 206]
                        }, {
                            topic: "Educational Attainment",
                            category: "Educational Attainment",
                            commHeaderColumnStartIndex: 28,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 221, 217, 195]
                        }, {
                            topic: "Housing",
                            category: "Housing",
                            commHeaderColumnStartIndex: 36,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 214, 254, 254]
                        }],
                        fields: [
                            // General
                            {
                                fieldName: "SQ_MI",
                                fieldType: "double",
                                tableHeader: "Area in square miles*",
                                fieldAlias: "Area in square miles",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "General",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TOT_POP",
                                fieldType: "long",
                                tableHeader: "Total population*",
                                fieldAlias: "Total Population",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MINORITY_POP",
                                fieldType: "long",
                                tableHeader: "Minority Population*",
                                fieldAlias: "Minority Population",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Age
                            {
                                fieldName: "MEDIAN_AGE",
                                fieldType: "double",
                                tableHeader: "Median Age*",
                                fieldAlias: "Median Age",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Under5",
                                fieldType: "long",
                                tableHeader: "Under 5*",
                                fieldAlias: "Under 5",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age5to17",
                                fieldType: "long",
                                tableHeader: "5 to 17*",
                                fieldAlias: "5 to 17",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age18to34",
                                fieldType: "long",
                                tableHeader: "18 to 34*",
                                fieldAlias: "18 to 34",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age35to49",
                                fieldType: "long",
                                tableHeader: "35 to 49*",
                                fieldAlias: "35 to 49",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50to64",
                                fieldType: "long",
                                tableHeader: "50 to 64*",
                                fieldAlias: "50 to 64",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65to84",
                                fieldType: "long",
                                tableHeader: "65 to 84*",
                                fieldAlias: "65 to 84",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age85Plus",
                                fieldType: "long",
                                tableHeader: "85 and over*",
                                fieldAlias: "85 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50Plus",
                                fieldType: "long",
                                tableHeader: "50 Plus*",
                                fieldAlias: "50 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "9",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age60Plus",
                                fieldType: "long",
                                tableHeader: "60 Plus*",
                                fieldAlias: "60 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "91",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65Plus",
                                fieldType: "long",
                                tableHeader: "65 Plus*",
                                fieldAlias: "65 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "92",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age70Plus",
                                fieldType: "long",
                                tableHeader: "70 Plus*",
                                fieldAlias: "70 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "93",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age75Plus",
                                fieldType: "long",
                                tableHeader: "75 Plus*",
                                fieldAlias: "75 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "94",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            },

                            // Race
                            {
                                fieldName: "WHITE",
                                fieldType: "long",
                                tableHeader: "White*",
                                fieldAlias: "White",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BLACK",
                                fieldType: "long",
                                tableHeader: "Black*",
                                fieldAlias: "Black",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NATIVE",
                                fieldType: "long",
                                tableHeader: "Native American*",
                                fieldAlias: "Native American",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASIAN",
                                fieldType: "long",
                                tableHeader: "Asian*",
                                fieldAlias: "Asian",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "PACIFIC",
                                fieldType: "long",
                                tableHeader: "Pacific Islander*",
                                fieldAlias: "Pacific Islander",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TWO_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Two or More*",
                                fieldAlias: "2 or more",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OTHER",
                                fieldType: "long",
                                tableHeader: "Other Race*",
                                fieldAlias: "Other",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Ethnicity
                            {
                                fieldName: "HISPANIC",
                                fieldType: "long",
                                tableHeader: "Hispanic*",
                                fieldAlias: "Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOT_HISPANIC",
                                fieldType: "long",
                                tableHeader: "Non-Hispanic*",
                                fieldAlias: "Non-Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Household Income
                            {
                                fieldName: "TOTAL_HOUSEHOLDS",
                                fieldType: "long",
                                tableHeader: "Households^",
                                fieldAlias: "Households",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartName: "Households",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_HOUSEHOLD_INCOME",
                                fieldType: "long",
                                tableHeader: "Median Household Income^",
                                fieldAlias: "Median Household Income",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartName: "Households",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_LESS_THAN_25000",
                                fieldType: "long",
                                tableHeader: "Less Than $25,000^",
                                fieldAlias: "&lt; 25K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_25000_TO_49999",
                                fieldType: "long",
                                tableHeader: "$25,000 to $50,000^",
                                fieldAlias: "25 - 50K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_50000_TO_99999",
                                fieldType: "long",
                                tableHeader: "$50,000 to $100,000^",
                                fieldAlias: "50 - 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_100000_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Greater Than $100,000^",
                                fieldAlias: "&gt; 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Poverty
                            {
                                fieldName: "TOTAL_FAMILY",
                                fieldType: "long",
                                tableHeader: "Families^",
                                fieldAlias: "Families",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Poverty",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "INCOME_BELOW_POVERTY_LEVEL",
                                fieldType: "long",
                                tableHeader: "Families in Poverty",
                                fieldAlias: "Families in Poverty",
                                percentOfField: "TOTAL_FAMILY",
                                densityAreaField: "SQ_MI",
                                category: "Poverty",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Educational Attainment
                            {
                                fieldName: "POPULATION_25_YEARS_AND_OVER",
                                fieldType: "long",
                                tableHeader: "Population 25  and older^",
                                fieldAlias: "Population 25  and older",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Educational Attainment",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "",
                                chartName: "Persons",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "LT9GRADE",
                                fieldType: "long",
                                tableHeader: "Less than 9th Grade^",
                                fieldAlias: "&lt; 9th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOHSDIPLOMA",
                                fieldType: "long",
                                tableHeader: " to 12th Grade^",
                                fieldAlias: "9th - 12th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HSGRAD",
                                fieldType: "long",
                                tableHeader: "High School Graduate^",
                                fieldAlias: "High School Grad",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "SOMECOLLEGE",
                                fieldType: "long",
                                tableHeader: "Some College^",
                                fieldAlias: "Some College",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASSOCIATES",
                                fieldType: "long",
                                tableHeader: "Associates Degree^",
                                fieldAlias: "Associates",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BACHELORS",
                                fieldType: "long",
                                tableHeader: "Bachelors Degree^",
                                fieldAlias: "Bachelors",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "GRADPROF",
                                fieldType: "long",
                                tableHeader: "Graduate or Professional Degree^",
                                fieldAlias: "Grad or Professional",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Housing
                            {
                                fieldName: "TOTAL_HU",
                                fieldType: "long",
                                tableHeader: "Housing Units*",
                                fieldAlias: "Total Housing Units",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OCCUPIED_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Units*",
                                fieldAlias: "Occupied",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "VACANT_HU",
                                fieldType: "long",
                                tableHeader: "Vacant Units*",
                                fieldAlias: "Vacant",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OWNER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Owner Units*",
                                fieldAlias: "Owner Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "RENTER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Renter Units*",
                                fieldAlias: "Renter Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_VALUE",
                                fieldType: "double",
                                tableHeader: "Median Housing Value^",
                                fieldAlias: "Median Housing Value",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_GROSS_RENT",
                                fieldType: "double",
                                tableHeader: "Median Rent^",
                                fieldAlias: "Median Gross Rent",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }
                        ]
                    },
                    censusTracts: {
                        name: "Demographic Summary",
                        restUrl: self.Census2010byBlockGroup + "/0",
                        whereClause: "OBJECTID > -1",
                        compareUrl: self.Census2010byBlockGroup + "/2",
                        compareWhereClause: "OBJECTID > -1",
                        comparePlaceField: "NAME",
                        summaryField: "NAME",
                        isTimeVaryingData: false,
                        source: "*Census 2010; ^American Community Survey 2009-2013",
                        treeViewMenu: [{
                            topic: "General",
                            category: "General",
                            commHeaderColumnStartIndex: 0,
                            commHeaderColumnSpan: 3,
                            commHeaderBackgroundFromARGB: [200, 173, 216, 230]
                        }, {
                            topic: "Age",
                            category: "Age",
                            commHeaderColumnStartIndex: 3,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 242, 221, 220]
                        }, {
                            topic: "Population by Race",
                            category: "Population by Race",
                            commHeaderColumnStartIndex: 11,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 234, 241, 221]
                        }, {
                            topic: "Population by Ethnicity",
                            category: "Population by Ethnicity",
                            commHeaderColumnStartIndex: 18,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 253, 233, 217]
                        }, {
                            topic: "Poverty",
                            category: "Poverty",
                            commHeaderColumnStartIndex: 20,
                            commHeaderColumnSpan: 2,
                            commHeaderBackgroundFromARGB: [200, 229, 224, 236]
                        }, {
                            topic: "Household Income",
                            category: "Household Income",
                            commHeaderColumnStartIndex: 22,
                            commHeaderColumnSpan: 6,
                            commHeaderBackgroundFromARGB: [200, 247, 250, 206]
                        }, {
                            topic: "Educational Attainment",
                            category: "Educational Attainment",
                            commHeaderColumnStartIndex: 28,
                            commHeaderColumnSpan: 8,
                            commHeaderBackgroundFromARGB: [200, 221, 217, 195]
                        }, {
                            topic: "Housing",
                            category: "Housing",
                            commHeaderColumnStartIndex: 36,
                            commHeaderColumnSpan: 7,
                            commHeaderBackgroundFromARGB: [200, 214, 254, 254]
                        }],
                        fields: [
                            // General
                            {
                                fieldName: "SQ_MI",
                                fieldType: "double",
                                tableHeader: "Area in square miles*",
                                fieldAlias: "Area in square miles",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "General",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TOT_POP",
                                fieldType: "long",
                                tableHeader: "Total population*",
                                fieldAlias: "Total Population",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MINORITY_POP",
                                fieldType: "long",
                                tableHeader: "Minority Population*",
                                fieldAlias: "Minority Population",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "General",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>01</span>General",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Age
                            {
                                fieldName: "MEDIAN_AGE",
                                fieldType: "double",
                                tableHeader: "Median Age*",
                                fieldAlias: "Median Age",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Under5",
                                fieldType: "long",
                                tableHeader: "Under 5*",
                                fieldAlias: "Under 5",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age5to17",
                                fieldType: "long",
                                tableHeader: "5 to 17*",
                                fieldAlias: "5 to 17",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age18to34",
                                fieldType: "long",
                                tableHeader: "18 to 34*",
                                fieldAlias: "18 to 34",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age35to49",
                                fieldType: "long",
                                tableHeader: "35 to 49*",
                                fieldAlias: "35 to 49",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50to64",
                                fieldType: "long",
                                tableHeader: "50 to 64*",
                                fieldAlias: "50 to 64",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65to84",
                                fieldType: "long",
                                tableHeader: "65 to 84*",
                                fieldAlias: "65 to 84",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age85Plus",
                                fieldType: "long",
                                tableHeader: "85 and over*",
                                fieldAlias: "85 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "Population by Age*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age50Plus",
                                fieldType: "long",
                                tableHeader: "50 Plus*",
                                fieldAlias: "50 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "9",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age60Plus",
                                fieldType: "long",
                                tableHeader: "60 Plus*",
                                fieldAlias: "60 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "91",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age65Plus",
                                fieldType: "long",
                                tableHeader: "65 Plus*",
                                fieldAlias: "65 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "92",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age70Plus",
                                fieldType: "long",
                                tableHeader: "70 Plus*",
                                fieldAlias: "70 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "93",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "Age75Plus",
                                fieldType: "long",
                                tableHeader: "75 Plus*",
                                fieldAlias: "75 and over",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Age",
                                rowID: "94",
                                groupID: "<span class='myHiddenClass'>02</span>Age",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            },

                            // Race
                            {
                                fieldName: "WHITE",
                                fieldType: "long",
                                tableHeader: "White*",
                                fieldAlias: "White",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BLACK",
                                fieldType: "long",
                                tableHeader: "Black*",
                                fieldAlias: "Black",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NATIVE",
                                fieldType: "long",
                                tableHeader: "Native American*",
                                fieldAlias: "Native American",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASIAN",
                                fieldType: "long",
                                tableHeader: "Asian*",
                                fieldAlias: "Asian",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "PACIFIC",
                                fieldType: "long",
                                tableHeader: "Pacific Islander*",
                                fieldAlias: "Pacific Islander",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "TWO_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Two or More*",
                                fieldAlias: "2 or more",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OTHER",
                                fieldType: "long",
                                tableHeader: "Other Race*",
                                fieldAlias: "Other",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Race",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>03</span>Population by Race",
                                chartCategory: "Population by Race*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Ethnicity
                            {
                                fieldName: "HISPANIC",
                                fieldType: "long",
                                tableHeader: "Hispanic*",
                                fieldAlias: "Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOT_HISPANIC",
                                fieldType: "long",
                                tableHeader: "Non-Hispanic*",
                                fieldAlias: "Non-Hispanic",
                                percentOfField: "TOT_POP",
                                densityAreaField: "SQ_MI",
                                category: "Population by Ethnicity",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>04</span>Population by Ethnicity",
                                chartCategory: "Population by Ethnicity*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Household Income
                            {
                                fieldName: "TOTAL_HOUSEHOLDS",
                                fieldType: "long",
                                tableHeader: "Households^",
                                fieldAlias: "Households",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartName: "Households",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_HOUSEHOLD_INCOME",
                                fieldType: "long",
                                tableHeader: "Median Household Income^",
                                fieldAlias: "Median Household Income",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Household Income",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "",
                                chartName: "Households",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_LESS_THAN_25000",
                                fieldType: "long",
                                tableHeader: "Less Than $25,000^",
                                fieldAlias: "&lt; 25K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_25000_TO_49999",
                                fieldType: "long",
                                tableHeader: "$25,000 to $50,000^",
                                fieldAlias: "25 - 50K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_50000_TO_99999",
                                fieldType: "long",
                                tableHeader: "$50,000 to $100,000^",
                                fieldAlias: "50 - 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HOUSEHOLDS_100000_OR_MORE",
                                fieldType: "long",
                                tableHeader: "Greater Than $100,000^",
                                fieldAlias: "&gt; 100K",
                                percentOfField: "TOTAL_HOUSEHOLDS",
                                densityAreaField: "SQ_MI",
                                category: "Household Income",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>05</span>Household Income",
                                chartCategory: "Household Income^",
                                chartName: "Households",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Poverty
                            {
                                fieldName: "TOTAL_FAMILY",
                                fieldType: "long",
                                tableHeader: "Families^",
                                fieldAlias: "Families",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Poverty",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "INCOME_BELOW_POVERTY_LEVEL",
                                fieldType: "long",
                                tableHeader: "Families in Poverty",
                                fieldAlias: "Families in Poverty",
                                percentOfField: "TOTAL_FAMILY",
                                densityAreaField: "SQ_MI",
                                category: "Poverty",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>06</span>Poverty",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Educational Attainment
                            {
                                fieldName: "POPULATION_25_YEARS_AND_OVER",
                                fieldType: "long",
                                tableHeader: "Population 25  and older^",
                                fieldAlias: "Population 25  and older",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Educational Attainment",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "",
                                chartName: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "LT9GRADE",
                                fieldType: "long",
                                tableHeader: "Less than 9th Grade^",
                                fieldAlias: "&lt; 9th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "NOHSDIPLOMA",
                                fieldType: "long",
                                tableHeader: " to 12th Grade^",
                                fieldAlias: "9th - 12th Grade",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "HSGRAD",
                                fieldType: "long",
                                tableHeader: "High School Graduate^",
                                fieldAlias: "High School Grad",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "SOMECOLLEGE",
                                fieldType: "long",
                                tableHeader: "Some College^",
                                fieldAlias: "Some College",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "ASSOCIATES",
                                fieldType: "long",
                                tableHeader: "Associates Degree^",
                                fieldAlias: "Associates",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "BACHELORS",
                                fieldType: "long",
                                tableHeader: "Bachelors Degree^",
                                fieldAlias: "Bachelors",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "GRADPROF",
                                fieldType: "long",
                                tableHeader: "Graduate or Professional Degree^",
                                fieldAlias: "Grad or Professional",
                                percentOfField: "POPULATION_25_YEARS_AND_OVER",
                                densityAreaField: "SQ_MI",
                                category: "Educational Attainment",
                                rowID: "8",
                                groupID: "<span class='myHiddenClass'>07</span>Educational Attainment",
                                chartCategory: "Educational Attainment^",
                                chartName: "Persons",
                                chartType: "column",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            },

                            // Housing
                            {
                                fieldName: "TOTAL_HU",
                                fieldType: "long",
                                tableHeader: "Housing Units*",
                                fieldAlias: "Total Housing Units",
                                percentOfField: "",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "1",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OCCUPIED_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Units*",
                                fieldAlias: "Occupied",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "2",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "VACANT_HU",
                                fieldType: "long",
                                tableHeader: "Vacant Units*",
                                fieldAlias: "Vacant",
                                percentOfField: "TOTAL_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "3",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "Housing Unit Occupancy*",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "OWNER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Owner Units*",
                                fieldAlias: "Owner Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "4",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "RENTER_OCC_HU",
                                fieldType: "long",
                                tableHeader: "Occupied Renter Units*",
                                fieldAlias: "Renter Occupied",
                                percentOfField: "OCCUPIED_HU",
                                densityAreaField: "SQ_MI",
                                category: "Housing",
                                rowID: "5",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "pie",
                                canSum: true,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_VALUE",
                                fieldType: "double",
                                tableHeader: "Median Housing Value^",
                                fieldAlias: "Median Housing Value",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "6",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }, {
                                fieldName: "MEDIAN_GROSS_RENT",
                                fieldType: "double",
                                tableHeader: "Median Rent^",
                                fieldAlias: "Median Gross Rent",
                                percentOfField: "",
                                densityAreaField: "",
                                category: "Housing",
                                rowID: "7",
                                groupID: "<span class='myHiddenClass'>08</span>Housing",
                                chartCategory: "",
                                chartType: "",
                                canSum: false,
                                class: "",
                                timePeriod: ""
                            }
                        ]
                    }

                };
            };
            return demographicConfig;
        }
    );
}());