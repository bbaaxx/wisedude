(function () {
    'use strict';

    angular
        .module('app.locator')
        .controller('LocatorController', LocatorController);

    LocatorController.$inject = ['logger', 'geoloc', 'leaflet', 'exception'];
    /* @ngInject */
    function LocatorController(logger, geoloc, leaflet, exception) {
        var vm = this;
        vm.title = 'Locator';
        
        vm.currentPosition = null;
        vm.updateCurrentPosition = updateCurrentPosition;
        
        activate();

        function updateCurrentPosition() {
            geoloc.getPromisedPosition().then(success,fail);
            function success(data) {
                return vm.currentPosition = data;
            }
            function fail(e) {
                return exception.catcher(e);
            }
        }
        
        function activate() {
            logger.info('Activated Locator View');
            vm.updateCurrentPosition()
            
            geoloc.getPromisedPosition().then(doTheMap,function(e) {
                logger.error('Something went wrong!') 
            });
            
            // This should not be here
            function doTheMap(positionData){
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
        }
    }
})();
