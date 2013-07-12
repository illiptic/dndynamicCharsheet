define([
	'angular',
	'filters',
	'directives',
	'characterController'
], function(angular){

	'use strict';

	// Declare app level module which depends on filters, and services
	return angular.module('charsheet', ['charsheet.filters', 'charsheet.directives', 'charsheet.controllers']);

});