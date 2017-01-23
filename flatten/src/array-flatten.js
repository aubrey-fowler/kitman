var flatten = function(input) {
    var result = [];

    for (var i = 0; i < input.length; i++) {

        if (Object.prototype.toString.call(input[i]) === '[object Array]') {
            result = result.concat(flatten(input[i]));
        } else {
            result.push(input[i]);
        }

    }

    return result;
};

module.exports = flatten;