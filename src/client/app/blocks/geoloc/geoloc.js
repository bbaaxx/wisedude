(function() {
  'use strict';

  angular
    .module('blocks.geoloc')
    .factory('geoloc', geoloc);

  geoloc.$inject = ['logger', '$window', '$q', 'exception'];

  /* @ngInject */
  function geoloc(logger, $window, $q, exception) {

    var service = {
      getPromisedPosition: getPromisedPosition,
    };

    return service;
    /////////////////////

    function getPromisedPosition() {
      var deferred = $q.defer();
      deferred.notify('Testing browser capabilities.');

      if ($window.navigator && window.navigator.geolocation) {
        deferred.notify('Requesting locaton.');
        $window.navigator.geolocation.getCurrentPosition(success, fail);
      } else {
        deferred.reject('This browser does not support geolocation');
      }

      function success(data) {
        deferred.notify('Acquired Location Data');
        deferred.resolve(data);
      }

      function fail(e) {
        deferred.reject(e);
      }

      return deferred.promise;

    }

  }
}());
