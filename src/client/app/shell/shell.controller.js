(function() {
  'use strict';

  angular
    .module('app.shell')
    .controller('ShellController', ShellController);

  ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger', 'authService'];
  /* @ngInject */
  function ShellController($rootScope, $timeout, config, logger, authService) {
    var vm = this;
    vm.busyMessage = 'Please wait ...';
    vm.isBusy = true;
    $rootScope.showSplash = true;
    vm.navline = {
      title: config.appTitle,
      text: 'by Codetitlan',
      link: 'http://twitter.com/codetitlan'
    };

    activate();

    ////////////////////

    function activate() {
      logger.success(config.appTitle + ' loaded!', null);
      hideSplash();
    }

    function hideSplash() {
      //Force a 1 second delay so we can see the splash.
      $timeout(function() {
        $rootScope.showSplash = false;
      }, 1000);
    }

  }
})();
