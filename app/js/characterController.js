define([
	'angular',
	'configs/configVapeur'
], function(angular, config){
	
	return angular.module('charsheet.controllers', []).controller('characterController', 
		['$scope', '$http', 'skillFilterFilter',
	function ($scope, $http, skillFilter) {

		$scope.defaultChar = {
				"level": 0,
				"abilities":{
					"str":10,
					"dex":10,
					"con":10,
					"int":10,
					"wis":10,
					"cha":10
				},
				"saves":{
					"ref": false,
					"will": false,
					"fort": false
				},
				"feats": [
					{ id : 'combatExpertise', costReduc: 0 },
					{ id : 'powerAttack', costReduc: 0 },
					{ id : 'killerInstinct', costReduc: 0 },
					{ id : 'hunterPatience', costReduc: 0 },
					{ id : 'kamikazeCharge', costReduc: 0 }
				],
				"skillGroups":{
					
				},
				"skills":{
					
				},
				"lpl": 0,
				"spl": 0
		};
		
		$scope.character = angular.copy($scope.defaultChar);
			
		$scope.Math = window.Math;
		
		$scope.config = config;
		
		$scope.newCharacter = function(){
			$scope.character = angular.copy($scope.defaultChar);
		};
		
		$scope.loadCharacter = function(){
			console.log('loading');
			
			require(['text!characters/rahktul.json'], function(char){
				$scope.character = JSON.parse(char);
				$scope.loaded = true;
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
		
		$scope.skillList = skillFilter($scope.config.skills, $scope.character);
		
		$scope.skillGroupCount = 0;
		
		$scope.onSkillGroupChange = function(){
			var charGroups = $scope.character.skillGroups;
			var groups = $scope.config.skillGroups;
			
			var savedSkills = angular.copy($scope.character.skills);
			var charSkills = {};
			
			var skillGroupCount = 0;
			for ( var i = groups.length; i > 0; i = i - 1 ) {
				var group = groups[i-1];
				if(charGroups[group.id]){
					skillGroupCount++;
					for(var j = 0; j < group.skills.length; j = j + 1){
						var skill = group.skills[j];
						var val = savedSkills[skill] || 0;
						charSkills[skill] = val;
					}
				}
				
			}
			
			$scope.character.skills = charSkills;
			$scope.skillGroupCount = skillGroupCount;
			$scope.skillList = skillFilter($scope.config.skills, $scope.character);
		};
	}]);

});