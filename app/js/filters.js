define([
	'angular'
], function(angular){
	
	'use strict';

	/* Filters */
	var app = angular.module('charsheet.filters', []);
	
	app.filter('abilityModifier', function() {
		return function(score) {
			return Math.floor((score - 10) / 2);
		};
	});
	
});