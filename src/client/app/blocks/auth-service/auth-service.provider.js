(function() {
  'use strict';

  angular
    .module('blocks.auth-service')
    .provider('authService', AuthServiceProvider);

  AuthServiceProvider.$inject = ['$stateProvider'];
  /* @ngInject */
  function AuthServiceProvider($stateProvider) {

    var config = {};

    this.configure = function(cfg) {
      angular.extend(config, cfg);
    };

    this.$get = AuthService;

    ///////////////

    AuthService.$inject = ['$rootScope', '$q', 'logger', 'firebaseDataService'];
    /* @ngInject */
    function AuthService($rootScope, $q, logger, firebaseDataService) {
      var currentUser = void 0;
      var authResults = void 0;

      var service = {
        userSignIn: userSignIn,
        userSignOut: userSignOut,
        getCurrentUser: getCurrentUser,
        checkIfSignedIn: checkIfSignedIn,
        asyncCheckIfSignedIn: asyncCheckIfSignedIn
      };

      init();

      return service;

      //////////

      function init() {
        // Install an event listener on $rootScope to update
        // the currentUser on update.
        $rootScope.$on('authStateUpdate', function(evt, data) {
          $rootScope.currentUser = data;
        });

        firebaseDataService
          .getCurrentUser()
          .then(function(user) {
            if (user) {
              updateAuthProperties(user);
            }
          })
          .catch(function(e) {
            updateAuthProperties(null);
          });
      }

      //////////

      function updateAuthProperties(newUser, oaResults) {
        currentUser = newUser || void 0;
        authResults = oaResults || void 0;
        $rootScope.$broadcast('authStateUpdate', currentUser);
      }

      function userSignIn(signInData) {
        var deferred = $q.defer();

        // Switch providers
        switch (signInData.provider) {
          case 'password':

            firebaseDataService
              .signInWithEmailAndPassword(signInData.email, signInData.password)
              .then(function(user) {
                updateAuthProperties(user);
                deferred.resolve(getCurrentUser());
              })
              .catch(function(e) {
                deferred.reject(e);
              });
            break;

          case 'google':

            firebaseDataService
              .signInWithGoogleAuth(true)
              .then(function(oaResult) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = oaResult.credential.accessToken;
                updateAuthProperties(oaResult.user, oaResult);
                deferred.resolve(getCurrentUser());
              })
              .catch(function(e) {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // The email of the user's account used.
                // var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                deferred.reject(e);
              });
            break;

          default:
            deferred.reject(new Error('invalid sign in provider: ', signInData.provider));
        }

        return deferred.promise;
      }

      function userSignOut() {
        return firebaseDataService
          .signOutUser()
          .then(function() {
            updateAuthProperties(null);
          })
          .catch(function(e) {
            throw new Error('Error signin user out', e);
          });
      }

      function checkIfSignedIn() {
        return currentUser ? true : false;
      }

      function asyncCheckIfSignedIn() {
        return getCurrentUser()
          .then(function(user) {
            if (!user) { throw new Error(); }
            return $q.resolve(true);
          })
          .catch(function(e) {
            return $q.reject(false);
          });
      }

      function getCurrentUser() {
        // if (currentUser) {
        //   return $q.when(currentUser);
        // }
        return firebaseDataService.getCurrentUser();
      }

    } // End AuthService

  }
}());
