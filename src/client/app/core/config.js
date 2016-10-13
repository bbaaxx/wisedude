(function() {
  'use strict';

  var core = angular.module('app.core');

  /**
   * Global configuration
   */

  /**
   * Initialize the config value to be kept thorough the execution
   * insertable as a value
   * @type {Object}
   */
  var baseConfig = {
    appErrorPrefix: '[Wisedude Hiccup] ',
    appTitle: 'Wisedude'
  };

  core.value('config', baseConfig);

  // Configure global settings
  core.config(configureApp);

  configureApp.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];
  /* @ngInject */
  function configureApp($logProvider, routerHelperProvider, exceptionHandlerProvider) {
    if ($logProvider.debugEnabled) {
      $logProvider.debugEnabled(true);
    }
    exceptionHandlerProvider.configure(baseConfig.appErrorPrefix);
    routerHelperProvider.configure({
      // docTitle: config.appTitle + ': '
      docTitle: ''
    });
  }

  // Angular material config provider
  // TODO: this should be moved to its own file
  core.config(ngMaterialThemes);

  ngMaterialThemes.$inject = ['$mdThemingProvider', '$mdIconProvider'];

  function ngMaterialThemes($mdThemingProvider, $mdIconProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

    $mdIconProvider
      .defaultFontSet('fa'); // This sets our default fontset className.
  }

  /**
   * Toastr configuration
   */
  core.config(toastrConfig);
  toastrConfig.$inject = ['toastr'];
  /* @ngInject */
  function toastrConfig(toastr) {
    toastr.options.timeOut = 2000;
    toastr.options.positionClass = 'toast-bottom-right';
  }

})();
