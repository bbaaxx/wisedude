(function() {
  'use strict';

  angular
    .module('app.intro')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'intro',
        config: {
          url: '/',
          templateUrl: 'app/components/intro/intro.html',
          controller: 'IntroController',
          controllerAs: 'vmNtr',
          title: 'Intro',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Intro'
          }
        }
      }
    ];
  }
})();
