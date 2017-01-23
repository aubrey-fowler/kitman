app.filter('medalsFilter', function() {
	return function(countryArray, filter) {

		if (filter == null | filter === '') {
			return countryArray;
		}

		var outputArray = [];
		for(var i = 0; i < countryArray.length; i++) {

			if (filter == countryArray[i].totalGold || filter == countryArray[i].totalSilver || 
				    filter == countryArray[i].totalBronze ) {
				outputArray.push(countryArray[i]);
			}
		}

		return outputArray;
	}
});