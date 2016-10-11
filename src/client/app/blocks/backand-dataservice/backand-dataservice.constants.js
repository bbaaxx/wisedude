(function () {
  'use strict';

  angular
    .module('blocks.backand-dataservice')
    .constant('BACKAND_CONFIG', {
      appName: 'wisedude',
      signUpToken: '915f4088-3517-4d55-8acc-8c3619cf5f9e',
      anonymousToken: 'ec84f322-bb1d-4f70-aa79-fefed5e623b7',
      runSocket: true
    });

})();
