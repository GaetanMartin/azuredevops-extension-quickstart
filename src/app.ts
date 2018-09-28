/// <reference types="vss-web-extension-sdk" />

VSS.require(["TFS/Dashboards/WidgetHelpers", "Charts/Services"], function (WidgetHelpers, Services) {
    WidgetHelpers.IncludeWidgetStyles();
    VSS.register("SimpleAreaChart", function () {
        return {
            load: function () {
                return Services.ChartsService.getService().then(function (chartService) {
                    var $container = $('#Chart-Container');
                    var chartOptions = {
                        "hostOptions": {
                            "height": "290",
                            "width": "300"
                        },
                        "chartType": "area",
                        "series": [{
                            "data": [12, 8, 7, 4]
                        }],
                        "xAxis": {
                            "labelValues": ["Design", "On Deck", "GP", "Development"]
                        },
                        "specializedOptions": {
                            "showLabels": "true",
                            "size": 200
                        }
                    };
                    chartService.createChart($container, chartOptions);
                    return WidgetHelpers.WidgetStatusHelper.Success();
                });
            }
        }
    });
    VSS.notifyLoadSucceeded();
});