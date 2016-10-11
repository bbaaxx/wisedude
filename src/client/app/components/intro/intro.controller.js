(function() {
  'use strict';

  angular
    .module('app.intro')
    .controller('IntroController', IntroController);

  IntroController.$inject = ['logger', 'backandDataService', 'firebaseDataService', 'COLORS'];
  /* @ngInject */
  function IntroController(logger, backandDataService, firebaseDataService, COLORS) {
    var vmNtr = this;
    vmNtr.title = 'Intro';

    vmNtr.doThat = doThat;

    activate();

    function activate() {
      logger.info('Activated Intro View');
      var bckaDs = backandDataService;
      var fbDs = firebaseDataService;

      // bckaDs.getList('primitives')
      // .then(function(data) {
      //   console.log('primitives', data.data.data);
      // });
      // bckaDs.getList('reversePrimitives')
      // .then(function(data) {
      //   console.log('reversePrimitives', data.data.data);
      // });

      // $http.get('https://api.imgur.com/3/g/memes/', {
      //   // cs: cf99132c9bc533eaafaea8301dbaf441e79a6cf0
      //   headers: {
      //     'Authorization': 'Client-ID 23b1c3a31e3a3d5'
      //   }
      // })

    }

    function doThat() {
      logger.success('I pass');
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
