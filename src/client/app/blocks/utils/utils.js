(function() {
    'use strict';

    angular
        .module('blocks.utils')
        .factory('utils', utils);

    utils.$inject = [];

    /* @ngInject */
    function utils() {

        var service = {
            isFunction: isFunction
        };

        return service;
        /////////////////////

        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
        }

    }
}());
