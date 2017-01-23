app.factory('OlympicDataFactory', function() {

    function formatParsedJsonData(originalData) {
        //group the data by country code
        var byCountry = _.groupBy(originalData, 'country');

        //count the number of bronze, silver, gold for each country
        for(var key in byCountry) {
            byCountry[key].totalMedals = byCountry[key].length;
            byCountry[key].totalGold = 0;
            byCountry[key].totalSilver = 0;
            byCountry[key].totalBronze = 0;
            byCountry[key].country = key;

            for(var i = 0; i < byCountry[key].length; i++) {
                if (byCountry[key][i].medal === 'gold') {
                    byCountry[key].totalGold += 1;
                } else if (byCountry[key][i].medal === 'silver') {
                    byCountry[key].totalSilver += 1;
                }
                else {
                    byCountry[key].totalBronze += 1;
                }
            }

            //remove uncessary data
            byCountry[key] = _.pick(byCountry[key], 
                ['totalMedals', 'totalBronze', 'totalSilver', 'totalGold', 'country', 'athlete', 'sex', 'event']
            );
        }

        return byCountry;
    }

    //sort and rank the data
    function sortAndRankFormattedData(formattedDataMap) {
        var formattedDataArray = _.values(formattedDataMap);
        formattedDataArray.sort(function(a, b) { return b.totalMedals - a.totalMedals });

        for (var i = 0; i < formattedDataArray.length; i++) {
            formattedDataArray[i].rank = i + 1;
        }

        return formattedDataArray;
    }

    return {
        getOlympicResults: function() {
            return sortAndRankFormattedData(formatParsedJsonData(RawOlympicsData));
        }  
    };
});