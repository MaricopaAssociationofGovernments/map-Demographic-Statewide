﻿(function() {

    "use strict";

    define(

        function() {
            var cbrConfig = new function() {
                var self = this;
                self.mapServices = {
                    ACS2014byBlockGroup: appConfig.layerInfo[5].url
                };

                self.thematicMaps = [

                    // population related maps
                    {
                        NodeType: "cat",
                        Name: "Population",
                        ShortName: "Population",
                        Description: "Contains population related variables",
                        items: [
                        {
                                NodeType: "map",
                                LayerId: 0,
                                Name: "Total Population",
                                ShortName: "Total Population",
                                Service: "ACS2014byBlockGroup",
                                DefaultColorRamp: "OrRd",
                                DefaultColorScheme: "Sequential",
                                Description: "",
                                Source: "American Community Survey 2014",
                                FieldName: "TOTAL_POP",
                                Type: "number",
                                Placeholder: "7293"
                            }, {
                                NodeType: "map",
                                LayerId: 0,
                                Name: "Population Density",
                                ShortName: "People per Sq Mi",
                                Service: "ACS2014byBlockGroup",
                                DefaultColorRamp: "OrRd",
                                DefaultColorScheme: "Sequential",
                                Description: "",
                                Source: "American Community Survey 2014",
                                FieldName: "POP_PER_SQMI",
                                Type: "number",
                                Placeholder: "39292.78"
                            }, {
                                NodeType: "map",
                                LayerId: 0,
                                Name: "Percent Minority Population",
                                ShortName: "% Minority Population",
                                Service: "ACS2014byBlockGroup",
                                DefaultColorRamp: "OrRd",
                                DefaultColorScheme: "Sequential",
                                Description: "",
                                Source: "American Community Survey 2014",
                                FieldName: "PCT_MINORITY",
                                AsPercentages: true,
                                Type: "percent"
                            },

                            // age cohort maps
                            {
                                NodeType: "cat",
                                Name: "Age",
                                ShortName: "Age",
                                Description: "Population by Age",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Median Age",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Median Age",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "MEDIAN_AGE",
                                    Type: "number",
                                    Placeholder: "82.7"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Under Age 5",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Under Age 5",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_UNDER5",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 5 to 17",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 5 - 17",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_5TO17",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 18 to 34",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 18 - 34",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_18TO34",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 35 to 49",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 35 - 49",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_35TO49",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 50 to 64",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 50 - 64",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_50TO64",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 65 to 84",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 65 - 84",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_65TO84",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population Age 85 and Over",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Age 85 and Over",
                                    DefaultColorRamp: "YlGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_AGE_85PLUS",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            },

                            // pop by race maps
                            {
                                NodeType: "cat",
                                Name: "Population by Race",
                                ShortName: "Population by Race",
                                Description: "...",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent White",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% White",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_WHITE",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Black",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Black",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_BLACK",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Asian",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Asian",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_ASIAN",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Native American",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Native American",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_NATIVE",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Pacific Islander",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Pacific Islander",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_PACIFIC",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Two Or More Races",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Two or More Races ",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_TWO_OR_MORE",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Other Race",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Other Race",
                                    DefaultColorRamp: "YlGnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_OTHER",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            },

                            // pop by ethnicity maps
                            {
                                NodeType: "cat",
                                Name: "Population by Ethnicity",
                                ShortName: "Population by Ethnicity",
                                Description: "...",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Hispanic",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Hispanic",
                                    DefaultColorRamp: "GnBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HISPANIC",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            },

                            // household income
                            {
                                NodeType: "cat",
                                Name: "Household Income",
                                ShortName: "Household Income",
                                Description: "...",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Total Households",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Total Households",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "TOTAL_HOUSEHOLDS",
                                    Type: "number",
                                    Placeholder: "1831"

                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Household Density",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Households per Sq Mi",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "HH_PER_SQMI",
                                    Type: "number",
                                    Placeholder: "18641.23"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Median Household Income",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Median Income",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "MEDIAN_HOUSEHOLD_INCOME",
                                    Type: "number",
                                    Placeholder: "250002"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Households with Income Less Than 25K",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Income Less Than 25K",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HH_LESS_THAN_25K",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Households with Income 25K to 50K",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Income 25k to 50k",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HH_25K_TO_49K",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Households with Income 50K to 100K",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Income 50k to 100k",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HH_50K_TO_99K",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Households with Income 100K Or More",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Income 100K or More",
                                    DefaultColorRamp: "PuBuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HH_100K_PLUS",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            },

                            // poverty maps
                            {
                                NodeType: "cat",
                                Name: "Poverty",
                                ShortName: "Poverty",
                                Description: "...",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Total Families",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Total Families",
                                    DefaultColorRamp: "BuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "TOTAL_FAMILY",
                                    Type: "number",
                                    Placeholder: "1480"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Family Density",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Families per Sq Mi",
                                    DefaultColorRamp: "BuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "FAMILIES_PER_SQMI",
                                    Type: "number",
                                    Placeholder: "9527"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent Families Below Poverty Level",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Families Below Poverty Level",
                                    DefaultColorRamp: "BuGn",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_POVERTY",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            },


                            // educational attainment
                            {
                                NodeType: "cat",
                                Name: "Educational Attainment",
                                ShortName: "Educational Attainment",
                                Description: "...",
                                items: [{
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Population 25 or Older",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Population 25 or Older",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "POPULATION_25_YEARS_AND_OVER",
                                    Type: "number",
                                    Placeholder: "6409"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Population Density (age 25 and over)",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "Population 25 and Older per Sq Mi",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "POP25PLUS_PER_SQMI",
                                    Type: "number",
                                    Placeholder: "20708"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Education Less than 9th Grade",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Less than 9th Grade",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_LT9GRADE",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Education 9th to 12th Grade",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% 9th to 12th Grade",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_NOHSDIPLOMA",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population High School Graduates",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% High School / GED",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_HSGRAD",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Some College",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Some College",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_SOMECOLLEGE",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Associates Degree",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Associates Degree",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_ASSOCIATES",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Bachelors Degree",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Bachelors Degree",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_BACHELORS",
                                    AsPercentages: true,
                                    Type: "percent"
                                }, {
                                    NodeType: "map",
                                    LayerId: 0,
                                    Name: "Percent of Population with Graduate or Professional Degree",
                                    Service: "ACS2014byBlockGroup",
                                    ShortName: "% Graduate or Professional Degree",
                                    DefaultColorRamp: "PuBu",
                                    DefaultColorScheme: "Sequential",
                                    Description: "",
                                    Source: "American Community Survey 2014",
                                    FieldName: "PCT_GRADPROF",
                                    AsPercentages: true,
                                    Type: "percent"
                                }]
                            }
                        ]
                    },
                    {
                        NodeType: "cat",
                        Name: "Workforce",
                        ShortName: "Workforce",
                        Description: "...",
                        items: [

                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"Total Workers Age 16+","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2014","FieldName":"TOTAL_WORKERS_16PLUS","Type":"number","AsPercentages":false,"Placeholder":3063},
                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"Civilian Population Age 16+","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2015","FieldName":"CivPop16plus","Type":"number","AsPercentages":false,"Placeholder":3063},
                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"Civilian Population Age 18+","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2016","FieldName":"CivPop18plus","Type":"number","AsPercentages":false,"Placeholder":3063},
                            {
                                NodeType: "cat",
                                Name: "Education",
                                ShortName: "Education",
                                Description: "...",
                                items: [
                                
                                    {
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Less than 9th Grade",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_LT9GRADE",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Without High School Diploma",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_NOHSDIPLOMA",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% High School Graduates",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_HSGRAD",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Some College",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_SOMECOLLEGE",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Associates Degree",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_ASSOCIATES",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Bachelors Degree",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_BACHELORS",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    },{
                                        NodeType: "map",
                                        LayerId: 0,
                                        Name: "",
                                        Service: "ACS2014byBlockGroup",
                                        ShortName: "% Graduate or Professional",
                                        DefaultColorRamp: "PuRd",
                                        DefaultColorScheme: "Sequential",
                                        Description: "",
                                        Source: "American Community Survey 2014",
                                        FieldName: "PCT_GRADPROF",
                                        Type: "percent",
                                        AsPercentages: true,
                                        Placeholder: "3063"
                                    }
                                
                                ]
                            },
                            {
                                NodeType: "cat",
                                Name: "Occupation",
                                ShortName: "Occupation",
                                Description: "...",
                                items: [
                                
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Management, business, science, and arts occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2014","FieldName":"PCT_MgBizSciArt","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Management, business, and financial occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2015","FieldName":"PCT_MgBizFin","Type":"percent","AsPercentages":"TRUE","Placeholder":3064},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Management occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2016","FieldName":"PCT_Mgmt","Type":"percent","AsPercentages":"TRUE","Placeholder":3065},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Business and financial operations occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2017","FieldName":"PCT_BizFin","Type":"percent","AsPercentages":"TRUE","Placeholder":3066},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Computer, engineering, and science occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2018","FieldName":"PCT_CompEngSci","Type":"percent","AsPercentages":"TRUE","Placeholder":3067},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Computer and mathematical occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2019","FieldName":"PCT_CompMath","Type":"percent","AsPercentages":"TRUE","Placeholder":3068},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Architecture and engineering occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2020","FieldName":"PCT_ArchEngin","Type":"percent","AsPercentages":"TRUE","Placeholder":3069},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Life, physical, and social science occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2021","FieldName":"PCT_LifePhysSocSci","Type":"percent","AsPercentages":"TRUE","Placeholder":3070},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Education, legal, community service, arts, and media occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2022","FieldName":"PCT_EduLegComArtMedia","Type":"percent","AsPercentages":"TRUE","Placeholder":3071},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Community and social service occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2023","FieldName":"PCT_CommSocServ","Type":"percent","AsPercentages":"TRUE","Placeholder":3072},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Legal occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2024","FieldName":"PCT_Legal","Type":"percent","AsPercentages":"TRUE","Placeholder":3073},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Education, training, and library occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2025","FieldName":"PCT_EduTrainLib","Type":"percent","AsPercentages":"TRUE","Placeholder":3074},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Arts, design, entertainment, sports, and media occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2026","FieldName":"PCT_ArtEntSportMedia","Type":"percent","AsPercentages":"TRUE","Placeholder":3075},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Healthcare practitioners and technical occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2027","FieldName":"PCT_HealthTechnical","Type":"percent","AsPercentages":"TRUE","Placeholder":3076},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Health diagnosing and treating practitioners and other technical occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2028","FieldName":"PCT_HealthDiagTechOcc","Type":"percent","AsPercentages":"TRUE","Placeholder":3077},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Health technologists and technicians ","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2029","FieldName":"PCT_HealthTech","Type":"percent","AsPercentages":"TRUE","Placeholder":3078},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Service occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2030","FieldName":"PCT_ServiceOcc","Type":"percent","AsPercentages":"TRUE","Placeholder":3079},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Healthcare support occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2031","FieldName":"PCT_HealthSupport","Type":"percent","AsPercentages":"TRUE","Placeholder":3080},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Protective service occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2032","FieldName":"PCT_ProtectiveServ","Type":"percent","AsPercentages":"TRUE","Placeholder":3081},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Firefighting and prevention, and other protective service workers including supervisors","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2033","FieldName":"PCT_Firefighting","Type":"percent","AsPercentages":"TRUE","Placeholder":3082},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Law enforcement workers including supervisors","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2034","FieldName":"PCT_LawEnforcement","Type":"percent","AsPercentages":"TRUE","Placeholder":3083},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Food preparation and serving related occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2035","FieldName":"PCT_FoodPrep","Type":"percent","AsPercentages":"TRUE","Placeholder":3084},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Building and grounds cleaning and maintenance occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2036","FieldName":"PCT_GroundsMaint","Type":"percent","AsPercentages":"TRUE","Placeholder":3085},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Personal care and service occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2037","FieldName":"PCT_PersonalCare","Type":"percent","AsPercentages":"TRUE","Placeholder":3086},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Sales and office occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2038","FieldName":"PCT_SalesOfficeOcc","Type":"percent","AsPercentages":"TRUE","Placeholder":3087},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Sales and related occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2039","FieldName":"PCT_SalesOcc","Type":"percent","AsPercentages":"TRUE","Placeholder":3088},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Office and administrative support occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2040","FieldName":"PCT_OfficeAdmin","Type":"percent","AsPercentages":"TRUE","Placeholder":3089},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Natural resources, construction, and maintenance occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2041","FieldName":"PCT_NatResources","Type":"percent","AsPercentages":"TRUE","Placeholder":3090},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Farming, fishing, and forestry occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2042","FieldName":"PCT_FarmFish","Type":"percent","AsPercentages":"TRUE","Placeholder":3091},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Construction and extraction occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2043","FieldName":"PCT_Construction","Type":"percent","AsPercentages":"TRUE","Placeholder":3092},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Installation, maintenance, and repair occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2044","FieldName":"PCT_InstRepair","Type":"percent","AsPercentages":"TRUE","Placeholder":3093},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Production, transportation, and material moving occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2045","FieldName":"PCT_ProdTransMaterial","Type":"percent","AsPercentages":"TRUE","Placeholder":3094},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Production occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2046","FieldName":"PCT_Production","Type":"percent","AsPercentages":"TRUE","Placeholder":3095},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Transportation occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2047","FieldName":"PCT_Transportation","Type":"percent","AsPercentages":"TRUE","Placeholder":3096},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Material moving occupations","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2048","FieldName":"PCT_MaterialMoving","Type":"percent","AsPercentages":"TRUE","Placeholder":3097}
                                
                                ]
                            }
                        ]
                    },

                     {
                        NodeType: "cat",
                        Name: "Transportation",
                        ShortName: "Transportation",
                        Description: "...",
                        items: [
                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"Population Age 16+","DefaultColorRamp":"OrRd","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2015","FieldName":"CivPop16plus","Type":"number","AsPercentages":false,"Placeholder":3063},
                            {
                                NodeType: "cat",
                                Name: "Vehicle Count",
                                ShortName: "Vehicle Count",
                                Description: "...",
                                items: [
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% No Vehicle","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2014","FieldName":"PCT_NO_VEHICLE","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% One Vehicle","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2015","FieldName":"PCT_ONE_VEHICLE","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Two Vehicles","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2016","FieldName":"PCT_TWO_VEHICLES","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Three Vehicles","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2017","FieldName":"PCT_THREE_VEHICLES","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Four Vehicles","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2018","FieldName":"PCT_FOUR_VEHICLES","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Five Vehicles","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2019","FieldName":"PCT_FIVE_PLUS_VEHICLES","Type":"percent","AsPercentages":"TRUE","Placeholder":3063}
                                ]
                            },
                            {
                                NodeType: "cat",
                                Name: "Mode of Transportation",
                                ShortName: "Mode of Transportation",
                                Description: "...",
                                items: [
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% CAR TRUCK VAN","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2014","FieldName":"PCT_CAR_TRUCK_VAN","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Drove Alone","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2015","FieldName":"PCT_DROVE_ALONE","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Car Pooled","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2016","FieldName":"PCT_CARPOOLED","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Bus","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2017","FieldName":"PCT_BUS","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Rail","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2018","FieldName":"PCT_RAIL","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Taxi","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2019","FieldName":"PCT_TAXI","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Motorcycle","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2020","FieldName":"PCT_MOTORCYCLE","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Bicycle","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2021","FieldName":"PCT_BICYCLE","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Walked","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2022","FieldName":"PCT_WALKED","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Other Means","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2023","FieldName":"PCT_OTHER_MEANS","Type":"percent","AsPercentages":"TRUE","Placeholder":3063},
                                            {"NodeType":"map","LayerId":0,"Name":null,"Service":"ACS2014byBlockGroup","ShortName":"% Worked from Home","DefaultColorRamp":"PuGr","DefaultColorScheme":"Sequential","Description":null,"Source":"American Community Survey 2024","FieldName":"PCT_WORKED_FROM_HOME","Type":"percent","AsPercentages":"TRUE","Placeholder":3063}
                                ]
                            }
                        ]
                    },
                    // housing maps
                    {
                        NodeType: "cat",
                        Name: "Housing",
                        ShortName: "Housing",
                        Description: "Contain housing units related variables",
                        items: [{
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Total Housing Units",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Total Housing Units",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "TOTAL_HU",
                            Type: "number",
                            Placeholder: "3063"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Housing Unit Density",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Housing Units per Sq Mi",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "HU_PER_SQMI ",
                            Type: "number",
                            Placeholder: "23096"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Vacancy Rate",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Vacancy Rate",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "VACANCY_RATE",
                            AsPercentages: true,
                            Type: "percent"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Percent Seasonal Units",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "% Seasonal Units",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "PCT_SEASONAL",
                            AsPercentages: true,
                            Type: "percent"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Non-Seasonal Vacancy Rate",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Non-Seasonal Vacancy Rate",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "NON_SEASONAL_VACANCY_RATE",
                            AsPercentages: true,
                            Type: "percent"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Median Home Value",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Median Home Value",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "MEDIAN_VALUE",
                            Type: "number",
                            Placeholder: "1000002"
                        }, {
                            NodeType: "map",
                            LayerId: 0,
                            Name: "Median Gross Rent",
                            Service: "ACS2014byBlockGroup",
                            ShortName: "Median Gross Rent",
                            DefaultColorRamp: "PuRd",
                            DefaultColorScheme: "Sequential",
                            Description: "",
                            Source: "American Community Survey 2014",
                            FieldName: "MEDIAN_GROSS_RENT",
                            Type: "number",
                            Placeholder: "2002"
                        }, {
                            NodeType: "cat",
                            Name: "Tenure",
                            ShortName: "Tenure",
                            Description: "...",
                            items: [{
                                NodeType: "map",
                                LayerId: 0,
                                Name: "Percent Owner Occupied",
                                Service: "ACS2014byBlockGroup",
                                ShortName: "% Owner Occupied",
                                DefaultColorRamp: "YlOrBr",
                                DefaultColorScheme: "Sequential",
                                Description: "",
                                Source: "American Community Survey 2014",
                                FieldName: "PCT_OWNER_OCCUPIED_HU",
                                AsPercentages: true,
                                Type: "percent"
                            }, {
                                NodeType: "map",
                                LayerId: 0,
                                Name: "Percent Renter Occupied",
                                Service: "ACS2014byBlockGroup",
                                ShortName: "% Renter Occupied",
                                DefaultColorRamp: "YlOrBr",
                                DefaultColorScheme: "Sequential",
                                Description: "",
                                Source: "American Community Survey 2014",
                                FieldName: "PCT_RENTER_OCCUPIED_HU",
                                AsPercentages: true,
                                Type: "percent"
                            }]
                        }]
                    }
                ];
            };
            return cbrConfig;
        }
    );
}());