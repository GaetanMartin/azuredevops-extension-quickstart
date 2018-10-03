/// <reference types="vss-web-extension-sdk" />

VSS.require(["TFS/Dashboards/WidgetHelpers", "Charts/Services"], function (WidgetHelpers, Services) {
    var $container = $('#Chart-Container');
    WidgetHelpers.IncludeWidgetStyles();
    VSS.register("SimpleAreaChart", function () {
        return {
            load: function (widgetSettings) {
                // Extract the data from widgetSettings.customSettings
                var settings = JSON.parse(widgetSettings.customSettings.data);
                return Services.ChartsService.getService().then(function (chartService) {
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
            },
            reload: function(widgetSettings) {
                console.log(widgetSettings);
                $container.empty();
                return this.load(widgetSettings);
            }
        }
    });
    VSS.notifyLoadSucceeded();
});