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

        function isFunction(func) {
            return func && {}.toString.call(func) === '[object Function]';
        }

    }
}());
