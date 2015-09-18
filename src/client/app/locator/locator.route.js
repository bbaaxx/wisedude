(function() {
    'use strict';

    angular
        .module('app.locator')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'locator',
                config: {
                    url: '/locator',
                    templateUrl: 'app/locator/locator.html',
                    controller: 'LocatorController',
                    controllerAs: 'vm',
                    title: 'Locator',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Locator'
                    }
                }
            }
        ];
    }
})();
