(function() {
  'use strict';

  angular
    .module('app.intro')
    .controller('IntroController', IntroController);

  IntroController.$inject = ['logger', 'profileManagementService', 'COLORS'];
  /* @ngInject */
  function IntroController(logger, profileManagementService, COLORS) {
    var vmNtr = this;
    vmNtr.title = 'Intro';

    activate();

    function activate() {
      logger.info('Activated Intro View');
    }

    function randomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
    }

    function randomSpan() {
      var r = Math.random();
      if (r < 0.8) {
        return 1;
      } else if (r < 0.9) {
        return 2;
      } else {
        return 3;
      }
    }

  }
})();
