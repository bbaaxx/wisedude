/* jshint -W117, -W030 */
describe('SigninController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.signin');
    bard.inject(
      '$controller', '$log', '$q',
      '$rootScope', 'backandDataService',
      'firebaseDataService'
    );
  });

  beforeEach(function() {

    bard.mockService(backandDataService, {
      getList: $q.when({
        data: { data: 'data'}
      }),
      _default: $q.when([])
    });
    bard.mockService(firebaseDataService, {
      somestuff: $q.when({}),
      _default: $q.when([])
    });
    _scope = $rootScope.$new();
    controller = $controller('SigninController', { $scope: _scope});

    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Signin controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.ok;
    });

    describe('after activate', function() {
      it('should have title of Signin', function() {
        expect(controller.title).to.equal('Signin');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
