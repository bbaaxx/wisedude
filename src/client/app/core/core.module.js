(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngMaterial', 'ngplus',
      'ui.router',

      'schemaForm',

      'blocks.exception',
      'blocks.logger',
      'blocks.router',
      'blocks.geoloc',
      'blocks.utils'

    ]);
})();
