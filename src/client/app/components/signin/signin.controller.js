(function() {
  'use strict';

  angular
    .module('app.signin')
    .controller('SigninController', SigninController);

  SigninController.$inject = ['$scope', 'logger', 'profileManagementService'];
  /* @ngInject */
  function SigninController($scope, logger, profileManagementService) {
    var vmSgn = this;
    var bckaDs = void 0;
    var fbDs = void 0;

    vmSgn.title = 'Signin';

    vmSgn.email = 'test@example.com';
    vmSgn.password = 'test123';
    vmSgn.user = void 0;

    vmSgn.doSignin = doSignin;
    vmSgn.doSignout = doSignout;

    activate();

    ////////////////////

    function activate() {
      logger.info('Activated Signin View');
      profileManagementService
        .getCurrentUser()
        .then(function(currentUser) {
          if (currentUser) {
            vmSgn.user = currentUser;
          }
        });
    }

    function doSignin(signInMethod, formController) {
      var signInSetup;

      profileManagementService
        .userSignIn({
          provider: signInMethod,
          email: vmSgn.email || '',
          password: vmSgn.password || ''
        })
        .then(function(user) {
          logger.success('We have a user', user);
          vmSgn.user = user;
        })
        .catch(function(e) {
          logger.error(e);
        });

    }

    function doSignout() {
      // Only sign out a user if there is no user signed in
      if (vmSgn.user) {
        profileManagementService
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

  }
})();
