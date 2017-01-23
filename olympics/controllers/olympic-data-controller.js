app.controller('OlympicDataController', function ($scope, OlympicDataFactory) {
    $scope.searchText = null;
    $scope.olympicResults = OlympicDataFactory.getOlympicResults();
});
