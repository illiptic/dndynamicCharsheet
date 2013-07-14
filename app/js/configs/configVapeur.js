define({

	feats : [ {
		id : 'expertiseCombat',
		name : 'Expertise de combat',
		description : 'blabla'
	} ],

	skillGroups : [
			{
				id : 'athlete',
				name : 'athlete',
				skills : [ 'compAcrobatie', 'compEquilibre', 'compEscalade',
						'compSaut' ]
			},
			{
				id : 'infiltrateur',
				name : 'infiltrateur',
				skills : [ 'compDiscretion', 'compMouvementSilencieux',
						'compCrochetage', 'compDesamorcage' ]
			},
			{
				id : 'fouineur',
				name : 'fouineur',
				skills : [ 'compFouille', 'compContrefacon', 'compEstimation',
						'compRenseignement' ]
			},
			{
				id : 'saltimbanque',
				name : 'saltimbanque',
				skills : [ 'compEvasion', 'compMaitriseCordes',
						'compRepresentation', 'compEscamotage' ]
			},
			{
				id : 'chevalier',
				name : 'chevalier',
				skills : [ 'compDressage', 'compIntimidation',
						'compEquitation', 'compNatation' ]
			},
			{
				id : 'negociateur',
				name : 'negociateur',
				skills : [ 'compDiplomatie', 'compBluff', 'compPsycho',
						'compDeguisement' ]
			},
			{
				id : 'sentinelle',
				name : 'sentinelle',
				skills : [ 'compDetection', 'compPerceptionAuditive',
						'compConcentration', 'compPremierSecours' ]
			},
			{
				id : 'savant',
				name : 'savant',
				skills : [ 'compConnaissance', 'compConnaissance',
						'compConnaissance', 'compConnaissance',
						'compConnaissance' ],
				multiple : true
			} ],

	skills : [ {
		id : 'compAcrobatie',
		name : 'Acrobatie',
		ability : 'dex'
	}, {
		id : 'compBluff',
		name : 'Bluff',
		ability : 'cha'
	}, {
		id : 'compEquilibre',
		name : 'Equilibre',
		ability : 'dex'
	}, {
		id : 'compEscalade',
		name : 'Escalade',
		ability : 'for'
	}, {
		id : 'compSaut',
		name : 'Saut',
		ability : 'for'
	}, {
		id : 'compDiscretion',
		name : 'Discr�tion',
		ability : 'dex'
	}, {
		id : 'compMouvementSilencieux',
		name : 'Mouvement Silencieux',
		ability : 'dex'
	}, {
		id : 'compCrochetage',
		name : 'Crochetage',
		ability : 'dex'
	}, {
		id : 'compDesamorcage',
		name : 'Desamorçage',
		ability : 'int'
	}, {
		id : 'compFouille',
		name : 'Fouille',
		ability : 'int'
	}, {
		id : 'compContrefacon',
		name : 'Contrefaçon',
		ability : 'int'
	}, {
		id : 'compEstimation',
		name : 'Estimation',
		ability : 'int'
	}, {
		id : 'compRenseignement',
		name : 'Renseignement',
		ability : 'cha'
	}, {
		id : 'compEvasion',
		name : 'Evasion',
		ability : 'dex'
	}, {
		id : 'compMaitriseCordes',
		name : 'Maitrise des cordes',
		ability : 'dex'
	}, {
		id : 'compRepresentation',
		name : 'Représentation',
		ability : 'cha'
	}, {
		id : 'compEscamotage',
		name : 'Escamotage',
		ability : 'dex'
	}, {
		id : 'compDressage',
		name : 'Dressage',
		ability : 'cha'
	}, {
		id : 'compIntimidation',
		name : 'Intimidation',
		ability : 'cha'
	}, {
		id : 'compEquitation',
		name : 'Equitation',
		ability : 'dex'
	}, {
		id : 'compNatation',
		name : 'Natation',
		ability : 'for'
	}, {
		id : 'compDiplomatie',
		name : 'Diplomatie',
		ability : 'cha'
	}, {
		id : 'compPsycho',
		name : 'Psychologie',
		ability : 'sag'
	}, {
		id : 'compDeguisement',
		name : 'Deguisement',
		ability : 'cha'
	}, {
		id : 'compDetection',
		name : 'Detection',
		ability : 'sag'
	}, {
		id : 'compPerceptionAuditive',
		name : 'Perception Auditive',
		ability : 'sag'
	}, {
		id : 'compConcentration',
		name : 'Concentration',
		ability : 'con'
	}, {
		id : 'compPremierSecours',
		name : 'Premiers Secours',
		ability : 'int'
	}, {
		id : 'compConnaissance',
		name : 'Connaissance',
		ability : 'int',
		subskills : true
	}, {
		id : 'compAlchimie',
		name : 'Alchimie',
		ability : 'int',
		locked : true
	}, {
		id : 'compArtMagie',
		name : 'Art de la magie',
		ability : 'int',
		locked : true
	}, {
		id : 'compMekamagie',
		name : 'Mékamagie',
		ability : 'int',
		locked : true
	}, ],

	abilityMod : function(value) {
		return Math.floor((value - 10) / 2);
	}

});
