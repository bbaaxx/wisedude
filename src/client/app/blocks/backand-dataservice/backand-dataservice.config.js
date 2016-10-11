(function() {
  'use strict';

  var backandDs = angular
    .module('blocks.backand-dataservice');

  /**
   * Backand configuration
   */
  backandDs.config(backandConfig);
  backandConfig.$inject = ['BackandProvider', 'BACKAND_CONFIG'];
  /* @ngInject */
  function backandConfig(BackandProvider, BACKAND_CONFIG) {
    BackandProvider.setAppName(BACKAND_CONFIG.appName);
    BackandProvider.setSignUpToken(BACKAND_CONFIG.signUpToken);
    BackandProvider.setAnonymousToken(BACKAND_CONFIG.anonymousToken);
    // BackandProvider.runSocket(BACKAND_CONFIG.runSocket); //enable web sockets
  }

})();
