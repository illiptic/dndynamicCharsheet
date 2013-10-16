define([
	'angular',
	'configs/configVapeur'
], function(angular, config){
	
	return angular.module('charsheet.controllers', []).controller('characterController', 
		['$scope', '$http',
	function ($scope, $http) {

		$scope.Math = window.Math;
		
		$scope.config = config;
		
		$scope.updateModifier = function(ability, score){
			var mod = Math.floor((score - 10) / 2);
			ability.modifier = mod;
			return mod;
		};
		
		$scope.loadCharacter = function(){
			console.log('loading');
			
			require(['text!characters/rahktul.json'], function(char){
				$scope.character = JSON.parse(char);
				$scope.$apply();
			});
		};
		
		
		$scope.onLevelChange = function(){
			$scope.updateSaves();
			$scope.updateBAB();
			$scope.updateMaxHP();
			$scope.updateMaxRegen();
			$scope.updateSkillPoints();
			$scope.updateFeatNumber();
		};
		
		$scope.onModifierChange = function(){
			//TODO: change all values based on modifier!
		};
	}]);

});