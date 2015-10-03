'use strict';

var fs = require( 'fs' ),
	path = require( 'path' ),
	dirname = require( './../lib' );

var files,
	fpath,
	base,
	stat,
	dir,
	i;

base = path.resolve( __dirname, '..' );
files = fs.readdirSync( base );

for ( i = 0; i < files.length; i++ ) {
	fpath = path.join( base, files[ i ] );
	stat = fs.statSync( fpath );
	if ( !stat.isDirectory() ) {
		dir = dirname( fpath );
		console.log( '%s --> %s', fpath, dir );
	}
}

