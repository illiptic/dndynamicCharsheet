define({

	creationPoints: 35,
	
	/**
	 * Cost of enhancing life point gain per level by 2
	 */
	lplCost: 2,
	/**
	 * Cost of enhancing skill point gain per level by 2
	 */
	splCost: 2,
	
	/**
	 * The base gain of life points per level
	 * enhanced by constitution bonus and "lpl bonus"
	 */
	baseLpl: 4,
	/**
	 * The base gain of skill points per level
	 * enhanced by int bonus and "spl bonus"
	 */
	baseSpl: 2,
	/**
	 * Number of feats to choose from
	 */
	startingFeatCount: 1,
	
	/**
	 * Calculates the number of creation points left.
	 * @param char
	 * @returns {Number}
	 */
	creationPointsLeft: function(char){
		var count = this.creationPoints;
		
		var saves = char.saves;
		var abilities = char.abilities;
		
		for (var s in saves) {
			if(saves[s]){
				count -= 2;
			}
		}
		
		for(var a in abilities){
			var ablty = abilities[a];
			count -= this.abilityCost(ablty);
		}
		
		count -= (this.lplCost * char.lpl);
		count -= (this.splCost * char.spl);
		
		return count;
	},
	
	abilities: [
		{id: 'str', name: 'Force'},
		{id: 'dex', name: 'Dexterité'},
		{id: 'con', name: 'Constitution'},
		{id: 'int', name: 'Intelligence'},
		{id: 'wis', name: 'Sagesse'},
		{id: 'cha', name: 'Charisme'}
	],
	saves: [
		{id: 'ref', name: 'Réflexes'},
		{id: 'fort', name: 'Vigueur'},
		{id: 'will', name: 'Volonté'}
	],
	combat: [
		{id: 'init', name: 'Initiative'},
		{id: 'melee', name: 'Corps à corps'},
		{id: 'range', name: 'Distance'}
	],
	
	
	feats : [ 
		{
			id : 'combatExpertise',
			name : 'Expertise de combat',
			description : '+CA / -att',
			cost: 1,
			natural: true
		},
		{
			id : 'powerAttack',
			name : 'Attaque en puissance',
			description : '+deg / -att',
			cost: 1,
			natural: true
		},
		{
			id : 'killerInstinct',
			name : 'Instinct de tueur',
			description : '+init / -att',
			cost: 1,
			natural: true
		},
		{
			id : 'hunterPatience',
			name : 'Patience du chasseur',
			description : '+att / -2init',
			cost: 1,
			natural: true
		},
		{
			id : 'kamikazeCharge',
			name : 'Charge kamikaze',
			description : '+att / -2CA',
			cost: 1,
			natural: true
		}
		
	],

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
				id : 'savant0',
				name : 'savant',
				skills : [ 'compConnaissance0', 'compConnaissance1',
						'compConnaissance2', 'compConnaissance3',
						'compConnaissance4' ]
			},
			{
				id : 'savant1',
				name : 'savant',
				skills : [ 'compConnaissance5', 'compConnaissance6',
						'compConnaissance7', 'compConnaissance8',
						'compConnaissance9' ]
			},
			{
				id : 'savant2',
				name : 'savant',
				skills : [ 'compConnaissance10', 'compConnaissance11',
						'compConnaissance12', 'compConnaissance13',
						'compConnaissance14' ]
			},
			{
				id : 'savant3',
				name : 'savant',
				skills : [ 'compConnaissance15', 'compConnaissance16',
						'compConnaissance17', 'compConnaissance18',
						'compConnaissance19' ]
			},
			{
				id : 'savant4',
				name : 'savant',
				skills : [ 'compConnaissance20', 'compConnaissance21',
						'compConnaissance22', 'compConnaissance23',
						'compConnaissance24' ]
			}],

	skills: [
        {id: 'compAcrobatie', name: 'Acrobatie', ability: 'dex'},
        {id: 'compBluff', name: 'Bluff', ability: 'cha', untrained: true},
        {id: 'compEquilibre', name: 'Equilibre', ability: 'dex', untrained: true},
        {id: 'compEscalade', name: 'Escalade', ability: 'str', untrained: true},
        {id: 'compSaut', name: 'Saut', ability: 'str', untrained: true},
        {id: 'compDiscretion', name: 'Discrétion', ability: 'dex', untrained: true},
        {id: 'compMouvementSilencieux', name: 'Mvmt Silencieux', ability: 'dex', untrained: true},
        {id: 'compCrochetage', name: 'Crochetage', ability: 'dex'},
        {id: 'compDesamorcage', name: 'Desamorçage', ability: 'int'},
        {id: 'compFouille', name: 'Fouille', ability: 'int', untrained: true},
        {id: 'compContrefacon', name: 'Contrefaçon', ability: 'int', untrained: true},
        {id: 'compEstimation', name: 'Estimation', ability: 'int', untrained: true},
        {id: 'compRenseignement', name: 'Renseignement', ability: 'cha', untrained: true},
        {id: 'compEvasion', name: 'Evasion', ability: 'dex', untrained: true},
        {id: 'compMaitriseCordes', name: 'Maitrise des cordes', ability: 'dex', untrained: true},
        {id: 'compRepresentation', name: 'Représentation', ability: 'cha', untrained: true},
        {id: 'compVolalaTire', name: 'Vol à la tire', ability: 'dex'},
        {id: 'compDressage', name: 'Dressage', ability: 'cha'},
        {id: 'compIntimidation', name: 'Intimidation', ability: 'cha', untrained: true},
        {id: 'compEquitation', name: 'Equitation', ability: 'dex', untrained: true},
        {id: 'compNatation', name: 'Natation', ability: 'str', untrained: true},
        {id: 'compDiplomatie', name: 'Diplomatie', ability: 'cha', untrained: true},
        {id: 'compPsycho', name: 'Psychologie', ability: 'wis', untrained: true},
        {id: 'compDeguisement', name: 'Deguisement', ability: 'cha', untrained: true},
        {id: 'compDetection', name: 'Detection', ability: 'wis', untrained: true},
        {id: 'compPerceptionAuditive', name: 'Perception Auditive', ability: 'wis', untrained: true},
        {id: 'compConcentration', name: 'Concentration', ability: 'con', untrained: true},
        {id: 'compPremierSecours', name: 'Premiers Secours', ability: 'int', untrained: true},
        {id: 'compAlchimie', name: 'Alchimie', ability: 'int', locked: true},
        {id: 'compArtMagie', name: 'Art de la magie', ability: 'int', locked: true},
        {id: 'compMekamagie', name: 'Mékamagie', ability: 'int', locked: true},
        {id: 'compConnaissance0', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance1', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance2', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance3', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance4', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance5', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance6', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance7', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance8', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance9', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance10', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance11', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance12', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance13', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance14', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance15', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance16', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance17', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance18', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance19', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance20', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance21', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance22', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance23', name: 'Conn:', ability: 'int', subskills: true},
        {id: 'compConnaissance24', name: 'Conn:', ability: 'int', subskills: true}
    ],

	abilityMod : function(value) {
		return Math.floor((value - 10) / 2);
	},
	
	abilityCost: function(value){
		var cost = 0;
		switch(value){
			case 20: cost += 3;
			case 19: cost += 3;
			case 18: cost += 2;
			case 17: cost += 2;
			case 16: cost += 1;
			case 15: cost += 1;
			case 14:
			case 13:
			case 12:
			case 11:
				cost += value-10;
				break;
			
			case 3: cost -= 2;
			case 4: cost -= 1;
			case 5: cost -= 1;
			case 6:
			case 7:
			case 8:
			case 9: cost += value-10;
			
		}
		
		return cost;
	},
	
	/**
	 * The number of max life points, depending on the level
	 * @param char
	 * @returns {Number}
	 */
	maxLifePoints: function(char){
		var increment = this.baseLpl + (2 *char.lpl) + this.abilityMod(char.abilities.con);
		
		return char.level * increment;
	},
	
	skillPoints: function(char){
		var increment = this.baseSpl + (2 * char.spl) + this.abilityMod(char.abilities.int);
		
		return (char.level + 3) * increment;
	},
	
	skillPointsLeft: function(char){
		var total = this.skillPoints(char);
		
		var sum = 0;
		for(var s in char.skills){
			sum += char.skills[s];
		}
		
		return total - sum;
	},
	
	skillTotal: function(char, skill){
		
	},
	
	featCount: function(char){
		var increment = 1;
		
		return startingFeatCount + char.level * increment;
	},
	
	abilityFeats: function(char){
		return Math.floor(char.level / 4);
	},
	
	featCostReductions: function(char){
		return Math.floor(char.level / 3) + 1;
	},
	
	weakSave: function(level){
		return Math.floor(level/3);
	},
	
	strongSave: function(level){
		return Math.floor(level/2) + 2;
	},
	
	armorClass: function(char){
		
	}

});
