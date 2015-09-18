(function() {
    'use strict';

    angular
        .module('blocks.geoloc')
        .factory('geoloc', geoloc);

    geoloc.$inject = ['logger', '$window', '$q', 'exception'];

    /* @ngInject */
    function geoloc(logger, $window, $q, exception) {
        
        var service = {
            //initialPosition: null,
            getCurrentPosition: getCurrentPosition,
            getPromisedPosition: getPromisedPosition
        };
        
        //getCurrentPosition(service.initialPosition);
        return service;
        /////////////////////

        function getPromisedPosition() {
            var deferred = $q.defer();
            deferred.notify('Testing browser capabilities.');
            if ($window.navigator && window.navigator.geolocation) {
                deferred.notify('Requesting locaton.');
                $window.navigator.geolocation.getCurrentPosition(success, fail);
            }
            else {
                exception.catcher('This browser does not support geolocation');
            }
            
            function success(data) {
                logger.success('Succesfully acquired location data', data.coords, "Gotcha !");
                deferred.notify('Acquired Location Data');
                deferred.resolve(data);
            }
            function fail(e) {
                logger.error('Failed to acquire location data', e, 'I\'m sad');
                deferred.reject(e);
            }
            
            return deferred.promise;
        }
        
        function getCurrentPosition(holder) {
            
            getPromisedPosition().then(success, fail, progress);
            
            function success(geoData) {
                if (isFunction(geoData)) {
                    return holder();
                }
                return holder = geoData;
            }
            function fail(e) {
                exception.catcher(e);
            }
            function progress(update) {
                logger.info(update,{},'Geoloc update');
            }
            
        }
        
        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }

    }
}());
