define([
	'angular'
], function(angular){
	
	'use strict';

	/* Filters */
	
	angular.module('charsheet.filters', []).
	  filter('abilityModifier', function() {
	    return function(score) {
	      return Math.floor((score - 10) / 2);
	    };
	  });

});