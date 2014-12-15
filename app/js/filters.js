define([
	'angular'
], function(angular){
	
	'use strict';

	/* Filters */
	var app = angular.module('charsheet.filters', []);
	
	/**
	 * Filter template
	 */
	app.filter('emptyFilter', function() {
		return function(item){
			return true;
		};
	});
	
	/**
	 * Skill list filter
	 */
	app.filter('skillFilter', function(){
		return function(skills, character){
			var filtered = [];
            for ( var i = skills.length; i > 0; i = i - 1 ) {
            	var skill = angular.copy(skills[i-1]);
                if (character && character.skills[skill.id] || character.skills[skill.id] === 0){
                	skill.trained = true;
                	skill.level = character.skills[skill.id];
                	filtered.push(skill);
                } else if(skill.untrained) {
                	filtered.push(skill);
                }
            }
            return filtered;
		};
	});
});