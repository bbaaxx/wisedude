(function() {
  'use strict';

  angular
    .module('app.shefotest')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'shefotest',
        config: {
          url: '/shefotest',
          templateUrl: 'app/components/shefotest/shefotest.html',
          controller: 'ShefotestController',
          controllerAs: 'vm',
          title: 'Shefotest',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Shefotest'
          }
        }
      }
    ];
  }
})();
