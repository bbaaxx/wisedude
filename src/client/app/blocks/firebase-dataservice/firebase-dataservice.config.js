(function() {
  'use strict';

  angular
    .module('blocks.firebase-dataservice')
    .run(fbDsRun);

  /**
   * Firebase configuration run block
   */
  fbDsRun.$inject = ['firebase', 'FIREBASE_CONFIG'];
  /* @ngInject */
  function fbDsRun(firebase, FIREBASE_CONFIG) {
    // This if makes sure we are running a single
    // firebase app config.
    if (firebase.apps.length < 1) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
  }

})();
