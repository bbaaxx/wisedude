(function() {
  'use strict';

  angular
    .module('app.signin')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', 'logger', 'backandDataService', 'firebaseDataService'];
  /* @ngInject */
  function SigninController($scope, logger, backandDataService, firebaseDataService) {
    var vmSgn = this;
    var bckaDs = null;
    var fbDs = null;

    vmSgn.title = 'Signin';

    vmSgn.email = 'test@example.com';
    vmSgn.password = 'test123';
    vmSgn.user = {};

    vmSgn.doSignin = doSignin;
    vmSgn.doSignout = doSignout;

    activate();

    ////////////////////

    function activate() {
      logger.info('Activated Signin View');
      bckaDs = backandDataService;
      fbDs = firebaseDataService;
    }

    function doSignin(formController) {
      logger.info('formController', formController);
      fbDs
        .signInWithEmailAndPassword(vmSgn.email, vmSgn.password)
        .then(function(user) {
          logger.log('We have a user', user);
          vmSgn.user = user;
          user.getToken().then(function(token) {
            logger.log(token);
          });
          $scope.$apply();
          logger.success('Logged user in');
        });
    }
    function doSignout() {
      fbDs
        .signOutUser()
        .then(function() {
          logger.info('User signed out');
          vmSgn.user = {};
          $scope.$apply();
        })
        .catch(function(e) {
          logger.error('Error signin out?', e);
        });
    }

  }
})();
