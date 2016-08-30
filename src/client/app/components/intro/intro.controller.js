(function() {
  'use strict';

  angular
    .module('app.intro')
    .controller('IntroController', IntroController);

  IntroController.$inject = ['logger'];
  /* @ngInject */
  function IntroController(logger) {
    var vm = this;
    vm.title = 'Intro';

    activate();

    function activate() {
      logger.info('Activated Intro View');
    }

  }
})();
