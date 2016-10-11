/* jshint -W117, -W030 */
describe('IntroController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.intro');
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

    controller = $controller('IntroController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Intro controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.ok;
    });

    describe('after activate', function() {
      it('should have title of Intro', function() {
        expect(controller.title).to.equal('Intro');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
