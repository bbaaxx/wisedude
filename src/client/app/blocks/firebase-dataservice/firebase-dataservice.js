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
      signOutUser: signOutUser
    };

    return service;
    /////////////////////

    function createUserWithEmailAndPassword(email, password) {
      return firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    function signInWithEmailAndPassword(email, password) {
      return firebase.auth().signInWithEmailAndPassword(email,password);
    }

    function signOutUser() {
      return firebase.auth().signOut();
    }
  }
} ());
