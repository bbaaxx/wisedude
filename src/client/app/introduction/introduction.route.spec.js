/* jshint -W117, -W030 */
describe('introduction routes', function () {
    describe('state', function () {
        var view = 'app/introduction/introduction.html';

        beforeEach(function() {
            module('app.introduction', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state introduction to url /introduction ', function() {
            expect($state.href('introduction', {})).to.equal('/introduction');
        });

        it('should map /introduction route to introduction View template', function () {
            expect($state.get('introduction').templateUrl).to.equal(view);
        });

        it('of introduction should work with $state.go', function () {
            $state.go('introduction');
            $rootScope.$apply();
            expect($state.is('introduction'));
        });
    });
});
