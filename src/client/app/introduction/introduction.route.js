(function() {
    'use strict';

    angular
        .module('app.introduction')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'introduction',
                config: {
                    url: '/',
                    templateUrl: 'app/introduction/introduction.html',
                    controller: 'IntroductionController',
                    controllerAs: 'vm',
                    title: 'Introduction',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Introduction'
                    }
                }
            }
        ];
    }
})();
