(function() {
  'use strict';

  angular
    .module('app.shefotest')
    .controller('ShefotestController', ShefotestController);

  ShefotestController.$inject = ['logger', '$scope'];
  /* @ngInject */
  function ShefotestController(logger, $scope) {
    var vm = this;
    vm.title = 'Shefotest';

    vm.doSubmit;

    vm.schema = {
      type: 'object',
      properties: {
        userName: {
          type: 'string',
          minLength: 2,
          title: 'Name',
          description: 'User Name'
        },
        password: {
          type: 'string',
          minLength: 2,
          title: 'Password',
          description: 'Password'
        },
        title: {
          type: 'string',
          enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
        }
      }
    };
    vm.form = [
      '*',
      // {
      //   type: 'submit',
      //   title: 'Save'
      // }
    ];
    vm.model = {};

    activate();

    function activate() {
      logger.info('Activated Shefotest View');
      vm.doSubmit = doSubmit;
    }

    function doSubmit(form) {
      logger.info('Form submitted');
      $scope.$broadcast('schemaFormValidate');

      // Then we check if the form is valid
      if (form.$valid) {
        // ... do whatever you need to do with your data.
        logger.success('Form is valid');
      }
    }

  }
})();
