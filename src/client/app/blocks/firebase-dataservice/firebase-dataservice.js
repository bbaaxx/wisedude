(function() {
  'use strict';

  angular
    .module('blocks.firebase-dataservice')
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['$q','firebase'];

  /* @ngInject */
  function firebaseDataService($q, firebase) {
    var service = {
      createUserWithEmailAndPassword: createUserWithEmailAndPassword,
      signInWithEmailAndPassword: signInWithEmailAndPassword,
      signInWithGoogleAuth: signInWithGoogleAuth,
      getCurrentUser: getCurrentUser,
      signOutUser: signOutUser
    };

    return service;
    /////////////////////

    /**
     * Creates a user using email and password.
     * @return Promise
     */
    function createUserWithEmailAndPassword(email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    /**
     * Sign in using simple email and password.
     * @return Promise
     */
    function signInWithEmailAndPassword(email, password) {
      return firebase.auth()
        .signInWithEmailAndPassword(email, password);
    }

    /**
     * Sign in using google auth
     * @return Promise
     */
    function signInWithGoogleAuth(popup) {
      var gaProvider = new firebase.auth.GoogleAuthProvider();
      var authenticationFunction;
      if (popup) {
        authenticationFunction = 'signInWithPopup';
      } else {
        authenticationFunction = 'signInWithRedirect';
      }
      return firebase.auth()[authenticationFunction](gaProvider);
    }

    /**
     * Returns the current user
     * @return Promise
     */
    function getCurrentUser() {
      var deferred = $q.defer();

      firebase.auth()
        .onAuthStateChanged(authChgObserver, authErrorObserver);

      /////

      function authChgObserver(user) {
        if (user) {
          deferred.resolve(user)
        } else {
          deferred.reject('User is not signed in');
        }
      }
      function authErrorObserver(e) {
        deferred.reject('auth observer: errored: ', e);
      }

      return deferred.promise;
    }

    /**
     * Signs out the current user
     * @return Promise
     */
    function signOutUser() {
      return firebase.auth().signOut();
    }
  }
}());
