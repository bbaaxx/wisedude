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
          var latlong = [positionData.coords.latitude,positionData.coords.longitude];
          var map = leaflet.map('locator-map').setView(latlong, 8);

          leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
              maxZoom: 18,
              id: 'bbaaxx.cienm7xac0h6rs6m3lhkxarr4',
              accessToken: 'pk.eyJ1IjoiYmJhYXh4IiwiYSI6ImNpZW5tN3hsbjBoOHNzc20yZDFmZHltaWMifQ.pokUST8M5Gpsw4HWMSZLyQ'
          }).addTo(map);

          var marker = leaflet.marker(latlong)
              .addTo(map)
              .bindPopup("<b>You</b><br>are here.")
              .openPopup();
        };

        return directive;
    }
})();
