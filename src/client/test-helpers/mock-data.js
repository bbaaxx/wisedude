/* jshint -W079 */
var mockData = (function() {
  return {
    getMockStates: getMockStates
  };

  function getMockStates() {
    return [{
      state: 'introduction',
      config: {
        url: '/',
        templateUrl: 'app/introduction/introduction.html',
        title: 'introduction',
        settings: {
          nav: 1,
          content: '<i class="fa fa-introduction"></i> Introduction'
        }
      }
    }];
  }

})();
