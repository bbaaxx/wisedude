(function() {
  'use strict';

  angular
    .module('blocks.backand-dataservice')
    .factory('backandDataService', backandDataService);

  backandDataService.$inject = ['$http', 'Backand', 'logger'];

  /* @ngInject */
  function backandDataService($http, Backand, logger) {
    var service = {
      getList: getList
    };

    return service;

    //////////

    function buildCallParams(method, name, sort, filter, pageSize, pageNumber) {
      return {
        url: Backand.getApiUrl() + '/1/objects/' + name,
        method: method,
        params: {
          sort: sort || '',
          filter: filter || '',
          pageSize: pageSize || 20,
          pageNumber: pageNumber || 1
        }
      };
    }

    function getList(name, sort, filter, pageSize, pageNumber) {
      return $http(
        buildCallParams('GET', name, sort, filter, pageSize, pageNumber)
      );
    }

    function createItem() {

    }
  }
})();
