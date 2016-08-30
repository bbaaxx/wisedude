/* jshint -W117, -W030 */
describe('intro routes', function() {
  describe('state', function() {
    var view = 'app/components/intro/intro.html';

    beforeEach(function() {
      module('app.intro', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state intro to url /intro ', function() {
      expect($state.href('intro', {})).to.equal('/');
    });

    it('should map /intro route to intro View template', function() {
      expect($state.get('intro').templateUrl).to.equal(view);
    });

    it('of intro should work with $state.go', function() {
      $state.go('intro');
      $rootScope.$apply();
      expect($state.is('intro'));
    });
  });
});
