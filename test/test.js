/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	dirname = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-dirname', function tests() {

	it( 'should export a function', function test() {
		expect( dirname ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided a path which is not a string', function test() {
		var values,
			i;

		values = [
			5,
			null,
			NaN,
			true,
			undefined,
			[],
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function badValue() {
				dirname( value );
			};
		}
	});

	it( 'should return a directory name', function test() {
		var expected,
			values,
			i;

		values = [
			'/index.js',
			'foo/bar/home.html',
			'.gitignore',
			'./.travis.yml',
			'/foo/bar/README.md'
		];

		expected = [
			'/',
			'foo/bar',
			'',
			'.',
			'/foo/bar'
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.strictEqual( dirname( values[ i ] ), expected[ i ], values[ i ] );
		}
	});

});
