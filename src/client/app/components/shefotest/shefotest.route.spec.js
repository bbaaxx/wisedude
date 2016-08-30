/* jshint -W117, -W030 */
describe('shefotest routes', function() {
  describe('state', function() {
    var view = 'app/components/shefotest/shefotest.html';

    beforeEach(function() {
      module('app.shefotest', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state shefotest to url /shefotest ', function() {
      expect($state.href('shefotest', {})).to.equal('/shefotest');
    });

    it('should map /shefotest route to shefotest View template', function() {
      expect($state.get('shefotest').templateUrl).to.equal(view);
    });

    it('of shefotest should work with $state.go', function() {
      $state.go('shefotest');
      $rootScope.$apply();
      expect($state.is('shefotest'));
    });
  });
});
