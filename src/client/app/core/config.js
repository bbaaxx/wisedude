(function() {
  'use strict';

  var core = angular.module('app.core');

  /**
   * Toastr configuration
   */
  core.config(toastrConfig);
  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

  /**
   * Global configuration
   */

  /**
   * Initialize the config value to be kept thorough the execution
   * insertable as a value
   * @type {Object}
   */
  var config = {
    appErrorPrefix: '[wisedude Hiccup] ',
    appTitle: 'Wisedude'
  };

  core.value('config', config);
  core.config(configure);
  configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];

  /* @ngInject */
  function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(config.appErrorPrefix);
    routerHelperProvider.configure({
      docTitle: config.appTitle + ': '
    });
  }

  // Angular material theming provider
  // TODO: this should be moved to its own file
  core.config(ngMaterialThemes);

  ngMaterialThemes.$inject = ['$mdThemingProvider'];

  function ngMaterialThemes($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
    .primaryPalette('yellow')
    .dark();
  }

})();
