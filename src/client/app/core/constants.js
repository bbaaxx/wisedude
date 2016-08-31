/* global toastr:false, moment:false, L:false, firebase:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('firebase', firebase)
    .constant('leaflet', L);
})();
