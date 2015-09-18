/* jshint -W117, -W030 */
describe('locator routes', function () {
    describe('state', function () {
        var view = 'app/locator/locator.html';

        beforeEach(function() {
            module('app.locator', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state locator to url /locator ', function() {
            expect($state.href('locator', {})).to.equal('/locator');
        });

        it('should map /locator route to locator View template', function () {
            expect($state.get('locator').templateUrl).to.equal(view);
        });

        it('of locator should work with $state.go', function () {
            $state.go('locator');
            $rootScope.$apply();
            expect($state.is('locator'));
        });
    });
});
