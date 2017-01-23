
var assert = require('assert');
var flatten = require('../src/array-flatten');

describe('Test JavaScript flatten function', function () {

    it('Should flatten array of nested arrays ( [[1, 2, [3]], 4] )', function () {
        assert.deepStrictEqual(
            flatten( [[1, 2, [3]], 4] ),
            [1, 2, 3, 4]
        );
    });

    it('Should flatten array of nested arrays ( [[1, 2, [3]], 4] )', function () {
        assert.deepStrictEqual(
            flatten( [[1, 2, [3]], 4] ),
            [1, 2, 3, 4]
        );
    });

    it('Should flatten array of nested arrays ( [[null, undefined, [3]], 4] )', function () {
        assert.deepStrictEqual(
            flatten( [[null, undefined, [3]], 4] ),
            [null, undefined, 3, 4]
        );
    });

    it('Should flatten array of nested arrays ( [[null, undefined, [null]], null] )', function () {
        assert.deepStrictEqual(
            flatten( [[null, undefined, [null]], null] ),
            [null, undefined, null, null]
        );
    });

    it('Should flatten array of nested arrays ( [[1, 2, [null]], 4] )', function () {
        assert.deepStrictEqual(
            flatten( [[1, 2, [null]], 4] ),
            [1, 2, null, 4]
        );
    });

});