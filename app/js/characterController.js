define([
	'angular'
], function(angular){
	
	return angular.module('charsheet.controllers', []).controller('characterController', 
		['$scope', 
	function ($scope) {

		$scope.Math = window.Math;
		
		$scope.updateModifier = function(ability, score){
			var mod = Math.floor((score - 10) / 2);
			ability.modifier = mod;
			return mod;
		};
		
		$scope.loadCharacter = function(){
			require(['text!characters/rahktul.json'], function(char){
				$scope.character = JSON.parse(char);
				$scope.$apply();
			});
		};
		
		
		$scope.skills = [
	        {id: 'compAcrobatie', name: 'Acrobatie', ability: 'dex'},
	        {id: 'compBluff', name: 'Bluff', ability: 'cha'},
	        {id: 'compEquilibre', name: 'Equilibre', ability: 'dex'},
	        {id: 'compEscalade', name: 'Escalade', ability: 'for'},
	        {id: 'compSaut', name: 'Saut', ability: 'for'},
	        {id: 'compDiscretion', name: 'Discrétion', ability: 'dex'},
	        {id: 'compMouvementSilencieux', name: 'Mouvement Silencieux', ability: 'dex'},
	        {id: 'compCrochetage', name: 'Crochetage', ability: 'dex'},
	        {id: 'compDesamorcage', name: 'Desamorçage', ability: 'int'},
	        {id: 'compFouille', name: 'Fouille', ability: 'int'},
	        {id: 'compContrefacon', name: 'Contrefaçon', ability: 'int'},
	        {id: 'compEstimation', name: 'Estimation', ability: 'int'},
	        {id: 'compRenseignement', name: 'Renseignement', ability: 'cha'},
	        {id: 'compEvasion', name: 'Evasion', ability: 'dex'},
	        {id: 'compMaitriseCordes', name: 'Maitrise des cordes', ability: 'dex'},
	        {id: 'compRepresentation', name: 'Représentation', ability: 'cha'},
	        {id: 'compEscamotage', name: 'Escamotage', ability: 'dex'},
	        {id: 'compDressage', name: 'Dressage', ability: 'cha'},
	        {id: 'compIntimidation', name: 'Intimidation', ability: 'cha'},
	        {id: 'compEquitation', name: 'Equitation', ability: 'dex'},
	        {id: 'compNatation', name: 'Natation', ability: 'for'},
	        {id: 'compDiplomatie', name: 'Diplomatie', ability: 'cha'},
	        {id: 'compPsycho', name: 'Psychologie', ability: 'sag'},
	        {id: 'compDeguisement', name: 'Deguisement', ability: 'cha'},
	        {id: 'compDetection', name: 'Detection', ability: 'sag'},
	        {id: 'compPerceptionAuditive', name: 'Perception Auditive', ability: 'sag'},
	        {id: 'compConcentration', name: 'Concentration', ability: 'con'},
	        {id: 'compPremierSecours', name: 'Premiers Secours', ability: 'int'},
	        {id: 'compConnaissance', name: 'Connaissance', ability: 'int', subskills: true},
	        {id: 'compAlchimie', name: 'Alchimie', ability: 'int', locked: true},
	        {id: 'compArtMagie', name: 'Art de la magie', ability: 'int', locked: true},
	        {id: 'compMekamagie', name: 'Mékamagie', ability: 'int', locked: true},
	    ];
	}]);

});