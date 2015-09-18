(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('wdWidgetMapBasic', wdWidgetMapBasic);

    /* @ngInject */
    function wdWidgetMapBasic() {
        //Usage:
        //<div ht-widget-header title="vm.map.title"></div>
        // Creates:
        // <div ht-widget-header=""
        //      title="Movie"
        //      allow-collapse="true" </div>
        var directive = {
            scope: {
                'height': '@'
            },
            // templateUrl: 'app/widgets/widget-map-basic.html',
            restrict: 'EA'
        };
        
        function buildMap(){
            
        };
        return directive;
    }
})();
