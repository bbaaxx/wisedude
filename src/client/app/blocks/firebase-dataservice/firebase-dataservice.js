(function() {
  'use strict';

  angular
    .module('blocks.firebase-dataservice')
    .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['firebase'];

  /* @ngInject */
  function firebaseDataService(firebase) {
    var service = {
      createUserWithEmailAndPassword: createUserWithEmailAndPassword,
      signInWithEmailAndPassword: signInWithEmailAndPassword,
      signInWithGoogleAuth: signInWithGoogleAuth,
      signOutUser: signOutUser
    };

    return service;
    /////////////////////

    function createUserWithEmailAndPassword(email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    function signInWithEmailAndPassword(email, password) {
      return firebase.auth()
        .signInWithEmailAndPassword(email, password);
    }

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

    function signOutUser() {
      return firebase.auth().signOut();
    }
  }
}());
