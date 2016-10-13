(function() {
  'use strict';

  angular
    .module('blocks.profile-management')
    .factory('profileManagementService', profileManagementService);

  profileManagementService.$inject = ['$q', 'firebaseDataService', 'backandDataService'];

  /* @ngInject */
  function profileManagementService($q, firebaseDataService, backandDataService) {
    var currentUser = void 0;
    var authResults = void 0;

    var service = {
      userSignIn: userSignIn,
      userSignOut: userSignOut,
      getCurrentUser: getCurrentUser
    };

    return service;

    ////////////////////

    function userSignIn(signInData) {
      var deferred = $q.defer();

      // Switch providers
      switch (signInData.provider) {
        case 'password':

          firebaseDataService
            .signInWithEmailAndPassword(signInData.email, signInData.password)
            .then(function(user) {
              currentUser = user;
              deferred.resolve(getCurrentUser());
            })
            .catch(function(e) {
              deferred.reject(e);
            });
          break;

        case 'google':

          firebaseDataService
            .signInWithGoogleAuth(true)
            .then(function(results) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              // var token = result.credential.accessToken;
              // The signed-in user info.
              // var user = result.user;
              authResults = results;
              currentUser = results.user;
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
          currentUser = void 0;
          return currentUser;
        })
        .catch(function(e) {
          throw new Error('Error signin user out', e);
        });
    }

    function getCurrentUser() {
      return firebaseDataService.getCurrentUser();
    }

  }
}());
