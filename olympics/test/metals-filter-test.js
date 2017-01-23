describe('Medals Filter Test', function () {

    var $filter;
    var originalList = [
        {
            'country': 'CAN',
            'rank': 1,
            'totalMedals': 50,
            'totalGold': 25,
            'totalSilver': 10,
            'totalBronze': 15
        },
        {
            'country': 'JPY',
            'rank': 2,
            'totalMedals': 30,
            'totalGold': 15,
            'totalSilver': 10,
            'totalBronze': 5
        },
        {
            'country': 'USA',
            'rank': 3,
            'totalMedals': 10,
            'totalGold': 1,
            'totalSilver': 10,
            'totalBronze': 0
        }
    ];

    beforeEach(function () {
        module('app');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('Should return the original array (input: null)', function () {
        var result = $filter('medalsFilter')(originalList, null);
        expect(result).toEqual(originalList);
    });

    it('Should return the original array (input: undefined)', function () {
        var result = $filter('medalsFilter')(originalList, undefined);
        expect(result).toEqual(originalList);
    });

    it('Should return the original array (input: empty string)', function () {
        var result = $filter('medalsFilter')(originalList, '');
        expect(result).toEqual(originalList);
    });

    it('Should return USA only (input: 0)', function () {
        var result = $filter('medalsFilter')(originalList, 0);
        expect(result).toEqual([originalList[2]]);
    });

    it('Should return CAN only (input: 25)', function () {
        var result = $filter('medalsFilter')(originalList, 25);
        expect(result).toEqual([originalList[0]]);
    });

    it('Should return the original array (input: 10)', function () {
        var result = $filter('medalsFilter')(originalList, 10);
        expect(result).toEqual(originalList);
    });

});