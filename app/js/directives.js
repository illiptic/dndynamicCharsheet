define([
	'angular'
], function(angular){
	
	'use strict';
	
	/* Directives */
	var app = angular.module('charsheet.directives', []);
	
	
//	app.directive('contenteditable', function() {
//		return {
//			require : 'ngModel',
//			link : function(scope, elm, attrs, ctrl) {
//				// view -> model
//				elm.bind('blur', function() {
//					scope.$apply(function() {
//						ctrl.$setViewValue(elm.text());
//					});
//				});
//	
//				// model -> view
//				ctrl.$render = function(value) {
//					elm.html(value || this.$modelValue);
//				};
//	
//				// load init value from model
//				elm.html(scope.$eval(elm.attr('ng-model')));
//			}
//		};
//	});
	
	app.directive('ngEnter', function() {
	    return function(scope, elm, attrs) {
	        elm.bind('keypress', function(e) {
	            if (e.charCode === 13) scope.$apply(attrs.ngEnter);
	        });
	        
	        elm.bind('blur', function() {
	            scope.editMode=false;
	            scope.$apply();
	        });
	    };
	});

	
	app.directive('inlineEdit', function() {
	    return {
	        restrict: 'E',
	        // can be in-lined or async loaded by xhr
	        // or inlined as JS string (using template property)
	        templateUrl: 'templates/inlineEdit.html',
	        scope: {
	            model: '=' 
	        }
	    };
	});

	
	app.directive('focus', function(){
		return function(scope, element, attr){
			scope.$watch(attr.focus, function focusAction(value){
				if(value) {
					element[0].focus();
				}
			});
		};
	});

});