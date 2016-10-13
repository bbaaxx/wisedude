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
      scope: {
        'title': '@',
        'currentUser': '='
      },
      templateUrl: 'app/widgets/ws-header-toolbar.html',
      restrict: 'EA',
      link: link
    };
    return directive;

    function link(scope, element, attr) {
      // scope.toggleContent = function() {
      //   if (scope.allowCollapse === 'true') {
      //     var content = angular.element(element).siblings('.widget-content');
      //     content.toggle();
      //   }
      // };
    }
  }
})();
