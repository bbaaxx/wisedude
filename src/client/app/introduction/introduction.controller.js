(function () {
    'use strict';

    angular
        .module('app.introduction')
        .controller('IntroductionController', IntroductionController);

    IntroductionController.$inject = ['logger'];
    /* @ngInject */
    function IntroductionController(logger) {
        var vm = this;
        vm.title = 'Introduction';

        activate();

        function activate() {
            logger.info('Activated Introduction View');
        }
    }
})();
