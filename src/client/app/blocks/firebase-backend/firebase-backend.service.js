(function() {
  'use strict';

  angular
    .module('blocks.firebase-backend')
    .factory('firebaseBackendService', firebaseBackendService);

  firebaseBackendService.$inject = ['firebase'];

  /* @ngInject */
  function firebaseBackendService(firebase) {
    var service = {

    };
  
    initialize();

    return service;
    /////////////////////

    function initialize() {
      // See https://firebase.google.com/docs/web/setup#project_setup for how to
      // auto-generate this config
      var config = {
        apiKey: "AIzaSyCOrXOOZxq91pNYEudMLou2gx9iP3TO5Vc",
        authDomain: "wise-dude.firebaseapp.com",
        databaseURL: "https://wise-dude.firebaseio.com",
        storageBucket: "",
      };
      
      firebase.initializeApp(config);
      
      console.log('firebase', firebase);
      console.log('firebase.database().ref()', firebase.database().ref())
    }

  }
} ());
