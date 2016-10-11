(function() {
  'use strict';

  angular
    .module('app.signin')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'signin',
        config: {
          url: '/signin',
          templateUrl: 'app/components/signin/signin.html',
          controller: 'SigninController',
          controllerAs: 'vmSgn',
          title: 'Signin',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Signin'
          }
        }
      }
    ];
  }
})();
