(function() {
  'use strict';

  angular
    .module('app.signin')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', 'logger', 'authService'];
  /* @ngInject */
  function SigninController($scope, logger, authService) {
    var vmSgn = this;
    var bckaDs = void 0;
    var fbDs = void 0;

    vmSgn.title = 'Signin';

    vmSgn.email = 'test@example.com';
    vmSgn.password = 'test123';
    vmSgn.user = void 0;
    vmSgn.formVisible = false;

    vmSgn.doSignin = doSignin;
    vmSgn.doSignout = doSignout;
    vmSgn.showForm = showForm;

    activate();

    ////////////////////

    function activate() {
      logger.info('Activated Signin View');
      $scope.$on('authStateUpdate', function(evt, data) {
        vmSgn.user = data;
      });
    }

    function doSignin(signInMethod, formController) {
      var signInSetup;

      authService
        .userSignIn({
          provider: signInMethod,
          email: vmSgn.email || '',
          password: vmSgn.password || ''
        })
        .catch(function(e) {
          logger.error(e);
        });

    }

    function doSignout() {
      // Only sign out a user if there is no user signed in
      if (vmSgn.user) {
        authService
          .userSignOut()
          .then(function(user) {
            logger.success('User signed out');
            vmSgn.user = user;
            $scope.$apply();
          })
          .catch(function(e) {
            logger.error(e);
          });
      }
    }

    function showForm(shouldWe) {
      vmSgn.formVisible = shouldWe;
    }

  }
})();
