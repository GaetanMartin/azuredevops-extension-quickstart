VSS.require("TFS/Dashboards/WidgetHelpers", function (WidgetHelpers) {
    VSS.register("SimpleAreaChart.Configuration", function () {   
        
        return {
            // Load will render the widget configuration
            load: function (widgetSettings, widgetConfigurationContext) {
                
                // TODO: Write code here

                return WidgetHelpers.WidgetStatusHelper.Success();
            },
            // Called on click on save button
            onSave: function() {
                var customSettings = {
                    data: JSON.stringify({
                            my_parameter: "value"
                        })
                };
                return WidgetHelpers.WidgetConfigurationSave.Valid(customSettings); 
            }
        }
    });
    VSS.notifyLoadSucceeded();
});