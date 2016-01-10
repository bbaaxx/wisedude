/* global toastr:false, moment:false, L:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('leaflet', L);
})();
