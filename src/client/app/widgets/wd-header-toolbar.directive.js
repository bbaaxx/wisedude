(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('wdHeaderToolbar', wdHeaderToolbar);

  /* @ngInject */
  function wdHeaderToolbar() {
    //Usage:
    //<div wd-header-toolbar title="{{vm.title}}"></div>

    var directive = {

      templateUrl: 'app/widgets/ws-header-toolbar.html',
      restrict: 'EA',
      controller: controller,
    };
    return directive;

    ///////

    /* @ngInject */
    function controller($scope, authService) {
      $scope.signout = authService.userSignOut;
    }
  }
})();
