/* jshint -W117, -W030 */
describe('IntroductionController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.introduction');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('IntroductionController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Introduction controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Introduction', function() {
        expect(controller.title).to.equal('Introduction');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });
    });
  });
});
