describe('Olympic Data Factory Test', function() {
    var Factory;

    beforeEach(module('app'));

    beforeEach(inject(function(_OlympicDataFactory_) {
        Factory = _OlympicDataFactory_
    }));

    it('Should be defined (Factory)', function() {
        expect(Factory).toBeDefined();
    });

    it('Should have getOlympicResults function', function() {
        expect(angular.isFunction(Factory.getOlympicResults)).toBe(true);
    });
});