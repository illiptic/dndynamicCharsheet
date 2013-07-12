require.config({
	paths: {
		angular: 'lib/angular/angular',
		text: 'lib/require/text'
	},
	baseUrl: 'js',
	shim: {
		'angular' : {'exports' : 'angular'}
	}
});

require( [
	'angular',
	'app'
], function(angular, app) {
	'use strict';
	
	angular.bootstrap(document, [app['name']]);
});