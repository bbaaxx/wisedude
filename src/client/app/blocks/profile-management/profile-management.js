(function() {
  'use strict';

  angular
    .module('blocks.profile-management')
    .factory('profileManagementService', profileManagementService);

  profileManagementService.$inject = ['$q', 'firebaseDataService', 'backandDataService'];

  /* @ngInject */
  function profileManagementService($q, firebaseDataService, backandDataService) {


    var service = {

    };

    return service;

    ////////////////////



  }
}());
