#!/usr/bin/env node

var FS = require('fs'),
	JSMIN = require('./build/jsmin').jsmin;

/**
 * Minifield the code
 */
var data = FS.readFileSync('jquery.browser.selector.js', 'UTF-8');	
	
FS.writeFile(
	'jquery.browser.selector.min.js',
	JSMIN(data, 2, data.split('(function')[0]).replace('\n\n', ''), 
	function(error){
		
		if(error) throw error;
	
		console.log('----- Minifield version created/updated!');
	
	}
);