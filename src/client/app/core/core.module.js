(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize', 'ngMaterial', 'ngplus',
      'ui.router', 'backand',

      'schemaForm', 'jsonFormatter',

      'blocks.exception',
      'blocks.logger',
      'blocks.router',
      'blocks.geoloc',
      'blocks.auth-service',
      'blocks.firebase-dataservice',
      'blocks.backand-dataservice',
      'blocks.profile-management',
      'blocks.utils'

    ]);
})();
