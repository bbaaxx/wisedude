/* jshint -W117, -W030 */
describe('ShefotestController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.shefotest');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    scope = $rootScope.$new();
    controller = $controller('ShefotestController', {
      $scope: scope,
      firebaseBackendService: {}
    });
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Shefotest controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Shefotest', function() {
        expect(controller.title).to.equal('Shefotest');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have a doSubmit method', function() {
        expect(controller.doSubmit).to.be.a('function');
      });

    });
  });
});
