export const Pokedex: {[speciesid: string]: SpeciesData} = {
	raticate: {
		num: 20,
		name: "Raticate",
		types: ["Normal", "Poison"],
		baseStats: {hp: 78, atk: 101, def: 120, spa: 55, spd: 80, spe: 111},
		abilities: {0: "Guts", 1: "Burn Heal", H: "Poison Point"},
		heightm: 0.7,
		weightkg: 18.5,
		eggGroups: ["Field"],
		inherit: true,
	},
	raticatealola: {
		num: 20,
		name: "Raticate-Alola",
		types: ["Dark", "Ghost"],
		baseStats: {hp: 85, atk: 81, def: 110, spa: 40, spd: 110, spe: 77},
		abilities: {0: "Gluttony", 1: "Simple", H: "Thick Fat"},
		heightm: 0.7,
		weightkg: 25.5,
		eggGroups: ["Field"],
		inherit: true,
	},
	pikachu: {
		num: 25,
		name: "Pikachu",
		types: ["Electric", "Normal"],
		baseStats: {hp: 65, atk: 55, def: 70, spa: 50, spd: 75, spe: 100},
		abilities: {0: "Static Cling", H: "Motor Drive"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Field", "Fairy"],
		inherit: true,
	},
	pikachurockstar: {
		num: 25,
		name: "Pikachu-Rock-Star",
		types: ["Electric", "Steel"],
		gender: "F",
		baseStats: {hp: 70, atk: 120, def: 90, spa: 90, spd: 70, spe: 100},
		abilities: {0: "Iron Fist", H: "Punk Rock"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachubelle: {
		num: 25,
		name: "Pikachu-Belle",
		types: ["Ice", "Fairy"],
		gender: "F",
		baseStats: {hp: 75, atk: 50, def: 115, spa: 65, spd: 55, spe: 55},
		abilities: {0: "Technician"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachuidol: {
		num: 25,
		name: "Pikachu-Idol",
		types: ["Electric", "Fairy"],
		gender: "F",
		baseStats: {hp: 80, atk: 30, def: 50, spa: 55, spd: 85, spe: 115},
		abilities: {0: "Cute Charm", H: "Pixilate"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachuphd: {
		num: 25,
		name: "Pikachu-PhD",
		types: ["Electric", "Grass"],
		gender: "F",
		baseStats: {hp: 80, atk: 55, def: 140, spa: 90, spd: 95, spe: 80},
		abilities: {0: "Magic Bounce", H: "Analytic"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachulibre: {
		num: 25,
		name: "Pikachu-Libre",
		types: ["Fighting", "Dark"],
		gender: "F",
		baseStats: {hp: 80, atk: 110, def: 55, spa: 50, spd: 55, spe: 65},
		abilities: {0: "Defiant"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachupartner: {
		num: 25,
		name: "Pikachu-Partner",
		types: ["Electric", "Rock"],
		gender: "M",
		baseStats: {hp: 65, atk: 80, def: 110, spa: 55, spd: 50, spe: 55},
		abilities: {0: "Lightning Rod"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	pikachustarter: {
		num: 25,
		name: "Pikachu-Starter",
		types: ["Electric", "Water"],
		baseStats: {hp: 85, atk: 90, def: 60, spa: 105, spd: 75, spe: 125},
		abilities: {0: "Static", 1: "Lightning Rod", H: "Mold Breaker"},
		heightm: 0.4,
		weightkg: 6,
		eggGroups: ["Undiscovered"],
	},
	sandslashlustrous: {
		num: 28,
		name: "Sandslash-Lustrous",
		types: ["Ground", "Fairy"],
		baseStats: {hp: 93, atk: 111, def: 75, spa: 69, spd: 85, spe: 97},
		abilities: {0: "Sand Rush", H: "Pixilate"},
		heightm: 1,
		weightkg: 29.5,
		eggGroups: ["Field"],
	},
	sandslashalola: {
		num: 28,
		name: "Sandslash-Alola",
		types: ["Ice", "Electric"],
		baseStats: {hp: 75, atk: 130, def: 80, spa: 100, spd: 80, spe: 80},
		abilities: {0: "Illuminate", H: "Slush Rush"},
		heightm: 1.2,
		weightkg: 55,
		eggGroups: ["Field"],
		inherit: true,
	},
	ninetalessteamwork: {
		num: 38,
		name: "Ninetales-Steamwork",
		types: ["Fire", "Water"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 80, atk: 70, def: 80, spa: 120, spd: 90, spe: 100},
		abilities: {0: "Queenly Majesty", H: "Regenerator"},
		heightm: 1.1,
		weightkg: 19.9,
		eggGroups: ["Field"],
	},
	ninetalesalola: {
		num: 38,
		name: "Ninetales-Alola",
		types: ["Ice", "Steel"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 80, atk: 90, def: 85, spa: 120, spd: 85, spe: 100},
		abilities: {0: "Slush Rush", 1: "Air Lock", H: "Snow Warning"},
		heightm: 1.1,
		weightkg: 19.9,
		eggGroups: ["Field"],
		inherit: true,
	},
	dugtrio: {
		num: 51,
		name: "Dugtrio",
		types: ["Ground", "Dark"],
		baseStats: {hp: 75, atk: 110, def: 90, spa: 45, spd: 90, spe: 135},
		abilities: {0: "Sand Rush", 1: "Super Luck", H: "Unseen Fist"},
		heightm: 0.7,
		weightkg: 33.3,
		eggGroups: ["Field"],
		inherit: true,
	},
	dugtrioalola: {
		num: 51,
		name: "Dugtrio-Alola",
		types: ["Ground", "Steel"],
		baseStats: {hp: 65, atk: 110, def: 150, spa: 55, spd: 105, spe: 60},
		abilities: {0: "Sand Force", 1: "Iron Barbs", H: "Tangling Hair"},
		heightm: 0.7,
		weightkg: 66.6,
		eggGroups: ["Field"],
		inherit: true,
	},
	slowbro: {
		num: 80,
		name: "Slowbro",
		types: ["Water", "Ground"],
		baseStats: {hp: 90, atk: 75, def: 140, spa: 95, spd: 75, spe: 30},
		abilities: {0: "Oblivious", 1: "Shell Armor", H: "Sand Spit"},
		heightm: 1.6,
		weightkg: 78.5,
		eggGroups: ["Monster", "Water 1"],
		inherit: true,
	},
	slowbrogalar: {
		num: 80,
		name: "Slowbro-Galar",
		types: ["Psychic", "Water"],
		baseStats: {hp: 95, atk: 95, def: 110, spa: 110, spd: 70, spe: 30},
		abilities: {0: "Regenerator", 1: "Merciless", H: "Quick Draw"},
		heightm: 1.6,
		weightkg: 70.5,
		eggGroups: ["Monster", "Water 1"],
		inherit: true,
	},
	farfetchd: {
		num: 83,
		name: "Farfetch\u2019d",
		types: ["Dark", "Flying"],
		baseStats: {hp: 92, atk: 110, def: 85, spa: 38, spd: 92, spe: 110},
		abilities: {0: "Super Luck", H: "Defiant"},
		heightm: 0.8,
		weightkg: 15,
		eggGroups: ["Flying", "Field"],
	},
	farfetchdgalar: {
		num: 83,
		name: "Farfetch\u2019d-Galar",
		types: ["Fighting", "Ground"],
		baseStats: {hp: 62, atk: 125, def: 115, spa: 58, spd: 72, spe: 85},
		abilities: {0: "Harvest", 1: "Scrappy", H: "Unburden"},
		heightm: 0.8,
		weightkg: 15,
		evos: ["Sirfetch\u2019d"],
		eggGroups: ["Flying", "Field"],
	},
	muk: {
		num: 89,
		name: "Muk",
		types: ["Poison", "Ground"],
		baseStats: {hp: 115, atk: 105, def: 90, spa: 65, spd: 105, spe: 50},
		abilities: {0: "Sticky Hold", 1: "Poison Touch", H: "Water Absorb"},
		heightm: 1.2,
		weightkg: 30,
		eggGroups: ["Amorphous"],
		inherit: true,
	},
	mukoilslick: {
		num: 89,
		name: "Muk-Oilslick",
		types: ["Poison", "Dark"],
		baseStats: {hp: 105, atk: 125, def: 80, spa: 65, spd: 105, spe: 75},
		abilities: {0: "Gluttony", 1: "Poison Touch", H: "Power of Alchemy"},
		heightm: 1,
		weightkg: 52,
		eggGroups: ["Amorphous"],
	},
	exeggutor: {
		num: 103,
		name: "Exeggutor",
		types: ["Grass", "Fairy"],
		baseStats: {hp: 95, atk: 95, def: 75, spa: 125, spd: 115, spe: 65},
		abilities: {0: "Sticky Hold", 1: "Harvest", H: "Ripen"},
		heightm: 2,
		weightkg: 120,
		eggGroups: ["Grass"],
		inherit: true,
	},
	exeggutorlighthouse: {
		num: 103,
		name: "Exeggutor-Lighthouse",
		types: ["Grass", "Electric"],
		baseStats: {hp: 95, atk: 100, def: 85, spa: 110, spd: 100, spe: 80},
		abilities: {0: "Chlorophyll", 1: "Frisk", H: "Harvest"},
		heightm: 10.9,
		weightkg: 415.6,
		eggGroups: ["Grass"],
	},
	weezing: {
		num: 110,
		name: "Weezing",
		types: ["Poison", "Steel"],
		baseStats: {hp: 60, atk: 60, def: 110, spa: 125, spd: 155, spe: 80},
		abilities: {0: "Heatproof", H: "Steelworker"},
		heightm: 1.2,
		weightkg: 9.5,
		eggGroups: ["Amorphous"],
		inherit: true,
	},
	weezingking: {
		num: 110,
		name: "Weezing-King",
		types: ["Dark", "Fairy"],
		baseStats: {hp: 150, atk: 95, def: 85, spa: 95, spd: 60, spe: 50},
		abilities: {0: "Neutralizing Gas"},
		heightm: 3,
		weightkg: 16,
		eggGroups: ["Amorphous"],
	},
	slowking: {
		num: 199,
		name: "Slowking",
		types: ["Water", "Electric"],
		baseStats: {hp: 95, atk: 75, def: 75, spa: 90, spd: 135, spe: 30},
		abilities: {0: "Own Tempo", 1: "Natural Cure", H: "Electric Surge"},
		heightm: 2,
		weightkg: 79.5,
		eggGroups: ["Monster", "Water 1"],
		inherit: true,
	},
	slowkinggalar: {
		num: 199,
		name: "Slowking-Galar",
		types: ["Poison", "Dark"],
		baseStats: {hp: 95, atk: 55, def: 100, spa: 110, spd: 100, spe: 30},
		abilities: {0: "Sturdy", 1: "Aftermath", H: "Regenerator"},
		heightm: 1.8,
		weightkg: 79.5,
		eggGroups: ["Monster", "Water 1"],
		inherit: true,
	},
	corsola: {
		num: 222,
		name: "Corsola",
		types: ["Rock", "Fairy"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 75, atk: 85, def: 105, spa: 145, spd: 105, spe: 45},
		abilities: {0: "Hustle", H: "Immunity"},
		heightm: 0.6,
		weightkg: 5,
		eggGroups: ["Water 1", "Water 3"],
	},
	corsoul: {
		num: 222,
		name: "Corsoul",
		types: ["Ghost", "Water"],
		genderRatio: {M: 0.25, F: 0.75},
		baseStats: {hp: 100, atk: 100, def: 70, spa: 70, spd: 100, spe: 70},
		abilities: {0: "Levitate", H: "Liquid Scales"},
		heightm: 0.6,
		weightkg: 0.5,
		eggGroups: ["Water 1", "Water 3"],
	},
	linoone: {
		num: 264,
		name: "Linoone",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 73, atk: 103, def: 73, spa: 127, spd: 97, spe: 97},
		abilities: {0: "Beast Boost"},
		heightm: 0.5,
		weightkg: 32.5,
		eggGroups: ["Field"],
		inherit: true,
	},
	linoonepunk: {
		num: 264,
		name: "Linoone-Punk",
		types: ["Dark", "Normal"],
		baseStats: {hp: 73, atk: 70, def: 81, spa: 100, spd: 71, spe: 150},
		abilities: {0: "Punk Rock"},
		heightm: 0.5,
		weightkg: 32.5,
		eggGroups: ["Field"],
	},
	castform: {
		num: 351,
		name: "Castform",
		types: ["Normal"],
		baseStats: {hp: 80, atk: 75, def: 65, spa: 110, spd: 95, spe: 110},
		abilities: {0: "Forecast", H: "Neutralizing Gas"},
		heightm: 0.3,
		weightkg: 0.8,
		eggGroups: ["Fairy", "Amorphous"],
		otherFormes: null,
		formeOrder: null,		
	},
	castformfirestorm: {
		num: 351,
		name: "Castform-Firestorm",
		types: ["Fire", "Flying"],
		baseStats: {hp: 88, atk: 60, def: 70, spa: 120, spd: 115, spe: 97},
		abilities: {0: "Mountaineer", 1: "Solar Power", H: "Sharpshooter"},
		heightm: 0.3,
		weightkg: 0.8,
		eggGroups: ["Fairy", "Amorphous"],
	},
	castformthunderstorm: {
		num: 351,
		name: "Castform-Thunderstorm",
		types: ["Water", "Electric"],
		baseStats: {hp: 75, atk: 80, def: 70, spa: 100, spd: 110, spe: 115},
		abilities: {0: "Levitate", 1: "Water Absorb", H: "Sharpshooter"},
		heightm: 0.3,
		weightkg: 0.8,
		eggGroups: ["Fairy", "Amorphous"],
	},
	castformsnowy: {
		num: 351,
		name: "Castform-Snowy",
		types: ["Ice", "Ground"],
		baseStats: {hp: 70, atk: 60, def: 140, spa: 100, spd: 80, spe: 75},
		abilities: {0: "Stamina", 1: "Sand Stream", H: "Sand Rush"},
		heightm: 0.3,
		weightkg: 0.8,
		eggGroups: ["Fairy", "Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
		forme: null,
		requiredAbility: null,
		battleOnly: null,
	},
	kyogre: {
		num: 382,
		name: "Kyogre",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 85, spa: 100, spd: 85, spe: 80},
		abilities: {0: "Drizzle", H: "Swift Swim"},
		heightm: 4.5,
		weightkg: 352,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
	},
	kyogreprimal: {
		num: 382,
		name: "Kyogre-Primal",
		types: ["Water", "Ice"],
		gender: "N",
		baseStats: {hp: 110, atk: 100, def: 100, spa: 125, spd: 100, spe: 65},
		abilities: {0: "Primordial Sea"},
		heightm: 9.8,
		weightkg: 430,
		eggGroups: ["Undiscovered"],
		baseSpecies: null,
		forme: null,
		requiredItem: null,
		changesFrom: null,
		battleOnly: null,
	},
	groudon: {
		num: 383,
		name: "Groudon",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 100, atk: 140, def: 120, spa: 50, spd: 70, spe: 70},
		abilities: {0: "Drought", H: "Chlorophyll"},
		heightm: 3.5,
		weightkg: 950,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
	},
	groudonprimal: {
		num: 383,
		name: "Groudon-Primal",
		types: ["Fire", "Rock"],
		gender: "N",
		baseStats: {hp: 110, atk: 125, def: 110, spa: 125, spd: 65, spe: 65},
		abilities: {0: "Desolate Land"},
		heightm: 5,
		weightkg: 999.7,
		eggGroups: ["Undiscovered"],
		baseSpecies: null,
		forme: null,
		requiredItem: null,
		changesFrom: null,
		battleOnly: null,
	},
	deoxyswood: {
		num: 386,
		name: "Deoxys-Wood",
		types: ["Grass", "Fighting"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 80, spa: 110, spd: 90, spe: 60},
		abilities: {0: "Flower Veil", H: "Triage"},
		heightm: 1.7,
		weightkg: 60.8,
		eggGroups: ["Undiscovered"],
	},
	deoxysgem: {
		num: 386,
		name: "Deoxys-Gem",
		types: ["Dragon", "Rock"],
		gender: "N",
		baseStats: {hp: 60, atk: 115, def: 75, spa: 115, spd: 75, spe: 110},
		abilities: {0: "Life Gem"},
		heightm: 1.7,
		weightkg: 60.8,
		eggGroups: ["Undiscovered"],
	},
	deoxystank: {
		num: 386,
		name: "Deoxys-Tank",
		types: ["Dragon", "Psychic"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 125, spa: 105, spd: 105, spe: 60},
		abilities: {0: "Guts", 1: "Pressure", H: "Soul-Heart"},
		heightm: 1.7,
		weightkg: 60.8,
		eggGroups: ["Undiscovered"],
	},
	deoxysspeed: {
		num: 386,
		name: "Deoxys-Speed",
		types: ["Psychic", "Fire"],
		gender: "N",
		baseStats: {hp: 50, atk: 90, def: 85, spa: 90, spd: 85, spe: 140},
		abilities: {0: "Pressure", H: "Power Core"},
		heightm: 1.7,
		weightkg: 60.8,
		eggGroups: ["Undiscovered"],
	},
	wormadam: {
		num: 413,
		name: "Wormadam",
		types: ["Bug", "Grass"],
		gender: "F",
		baseStats: {hp: 75, atk: 90, def: 110, spa: 65, spd: 110, spe: 145},
		abilities: {0: "Flower Veil", 1: "Intimidate", H: "Adaptability"},
		heightm: 0.5,
		weightkg: 6.5,
		eggGroups: ["Bug"],
		inherit: true,
	},
	wormadamsandy: {
		num: 413,
		name: "Wormadam-Sandy",
		types: ["Bug", "Ground"],
		gender: "F",
		baseStats: {hp: 80, atk: 109, def: 145, spa: 69, spd: 75, spe: 66},
		abilities: {0: "Thick Fat", 1: "Dry Skin", H: "Overcoat"},
		heightm: 0.5,
		weightkg: 6.5,
		eggGroups: ["Bug"],
	},
	fibormadam: {
		num: 413,
		name: "Fibormadam",
		types: ["Bug", "Steel"],
		gender: "F",
		baseStats: {hp: 70, atk: 65, def: 120, spa: 90, spd: 120, spe: 85},
		abilities: {0: "Sturdy", H: "Heatproof"},
		heightm: 0.5,
		weightkg: 6.5,
		eggGroups: ["Bug"],
	},
	rotom: {
		num: 479,
		name: "Rotom",
		types: ["Electric", "Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 55, def: 105, spa: 97, spd: 105, spe: 90},
		abilities: {0: "Levitate", 1: "Prankster", H: "Speed Boost"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
	},
	rotomheat: {
		num: 479,
		name: "Rotom-Heat",
		types: ["Fire", "Fairy"],
		gender: "N",
		baseStats: {hp: 70, atk: 50, def: 80, spa: 130, spd: 90, spe: 100},
		abilities: {0: "Sturdy"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	rotomwash: {
		num: 479,
		name: "Rotom-Wash",
		types: ["Water", "Steel"],
		gender: "N",
		baseStats: {hp: 120, atk: 120, def: 95, spa: 50, spd: 95, spe: 50},
		abilities: {0: "Volt Absorb", H: "Water Cycle"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	rotomfrost: {
		num: 479,
		name: "Rotom-Frost",
		types: ["Ice", "Fighting"],
		gender: "N",
		baseStats: {hp: 79, atk: 47, def: 86, spa: 121, spd: 109, spe: 109},
		abilities: {0: "Snow Warning", 1: "Multiscale", H: "No Guard"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	rotomfan: {
		num: 479,
		name: "Rotom-Fan",
		types: ["Flying", "Steel"],
		gender: "N",
		baseStats: {hp: 100, atk: 65, def: 80, spa: 105, spd: 80, spe: 90},
		abilities: {0: "Air Lock"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	rotommow: {
		num: 479,
		name: "Rotom-Mow",
		types: ["Grass", "Steel"],
		gender: "N",
		baseStats: {hp: 75, atk: 129, def: 105, spa: 60, spd: 65, spe: 96},
		abilities: {0: "Mold Breaker", 1: "Sap Sipper", H: "Steelworker"},
		heightm: 0.3,
		weightkg: 0.3,
		eggGroups: ["Amorphous"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	giratina: {
		num: 487,
		name: "Giratina",
		types: ["Ghost", "Dragon"],
		gender: "N",
		baseStats: {hp: 150, atk: 130, def: 65, spa: 100, spd: 65, spe: 80},
		abilities: {0: "Cursed Body", H: "Aerial Menace"},
		heightm: 4.5,
		weightkg: 750,
		eggGroups: ["Undiscovered"],
	},
	giratinashadow: {
		num: 487,
		name: "Giratina-Shadow",
		types: ["Dragon", "Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Levitate", H: "Shadow World"},
		heightm: 6.9,
		weightkg: 650,
		eggGroups: ["Undiscovered"],
	},
	shaymin: {
		num: 492,
		name: "Shaymin",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 60, def: 105, spa: 85, spd: 90, spe: 85},
		abilities: {0: "Poison Heal", H: "Oblivious"},
		heightm: 0.2,
		weightkg: 2.1,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
	},
	shayminsky: {
		num: 492,
		name: "Shaymin-Sky",
		types: ["Grass", "Flying"],
		gender: "N",
		baseStats: {hp: 65, atk: 93, def: 125, spa: 93, spd: 75, spe: 127},
		abilities: {0: "Cloud Nine", 1: "Flower Gift", H: "Drought"},
		heightm: 0.4,
		weightkg: 5.2,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	darmanitan: {
		num: 555,
		name: "Darmanitan",
		types: ["Fire", "Dark"],
		baseStats: {hp: 105, atk: 140, def: 75, spa: 50, spd: 75, spe: 95},
		abilities: {0: "Sheer Force"},
		heightm: 1.3,
		weightkg: 92.9,
		eggGroups: ["Field"],
		otherFormes: null,
		formeOrder: null,
		inherit: true,
	},
	darmanitanzen: {
		num: 555,
		name: "Darmanitan-Zen",
		types: ["Psychic", "Steel"],
		baseStats: {hp: 125, atk: 60, def: 105, spa: 90, spd: 125, spe: 5},
		abilities: {0: "Comatose"},
		heightm: 1.3,
		weightkg: 92.9,
		eggGroups: ["Field"],
		baseSpecies: null,
		forme: null,
		requiredAbility: null,
		battleOnly: null,
	},
	darmanitangalar: {
		num: 555,
		name: "Darmanitan-Galar",
		types: ["Ice", "Rock"],
		baseStats: {hp: 80, atk: 135, def: 105, spa: 95, spd: 50, spe: 105},
		abilities: {0: "No Guard", H: "Technician"},
		heightm: 1.7,
		weightkg: 120,
		eggGroups: ["Field"],
		otherFormes: null,
		formeOrder: null,
		inherit: true,
	},
	darmanitangalarzen: {
		num: 555,
		name: "Darmanitan-Galar-Zen",
		types: ["Ice", "Fire"],
		baseStats: {hp: 105, atk: 80, def: 55, spa: 80, spd: 90, spe: 140},
		abilities: {0: "Regenerator", H: "Rare Cold"},
		heightm: 1.7,
		weightkg: 120,
		eggGroups: ["Field"],
		baseSpecies: null,
		forme: null,
		requiredAbility: null,
		battleOnly: null,
	},
	tornadus: {
		num: 641,
		name: "Tornadus",
		types: ["Fighting", "Flying"],
		gender: "M",
		baseStats: {hp: 90, atk: 125, def: 85, spa: 71, spd: 90, spe: 99},
		abilities: {0: "Aerilate", H: "Technician"},
		heightm: 1.5,
		weightkg: 63,
		eggGroups: ["Undiscovered"],
	},
	cummulus: {
		num: 641,
		name: "Cummulus",
		types: ["Flying"],
		genderRatio: {M: 0.33, F: 0.33, N: 0.34},
		baseStats: {hp: 130, atk: 60, def: 60, spa: 90, spd: 100, spe: 100},
		abilities: {0: "Natural Cure"},
		heightm: 1.4,
		weightkg: 63,
		eggGroups: ["Undiscovered"],
	},
	thundurus: {
		num: 642,
		name: "Thundurus",
		types: ["Electric"],
		gender: "M",
		baseStats: {hp: 89, atk: 85, def: 120, spa: 100, spd: 95, spe: 61},
		abilities: {0: "Levitate", H: "Cloud Burst"},
		heightm: 1.5,
		weightkg: 61,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
	},
	thundurustherian: {
		num: 642,
		name: "Thundurus-Therian",
		types: ["Electric", "Dragon"],
		gender: "M",
		baseStats: {hp: 79, atk: 95, def: 90, spa: 135, spd: 60, spe: 116},
		abilities: {0: "Levitate"},
		heightm: 3,
		weightkg: 61,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
	},
	landorus: {
		num: 645,
		name: "Landorus",
		types: ["Ground", "Flying"],
		gender: "M",
		baseStats: {hp: 86, atk: 109, def: 90, spa: 85, spd: 90, spe: 100},
		abilities: {0: "Sand Force", H: "Sheer Force"},
		heightm: 1.5,
		weightkg: 68,
		eggGroups: ["Undiscovered"],
	},
	landorusbengal: {
		num: 645,
		name: "Landorus-Bengal",
		types: ["Ground", "Flying"],
		gender: "M",
		baseStats: {hp: 90, atk: 115, def: 75, spa: 115, spd: 95, spe: 99},
		abilities: {0: "Intimidate", H: "Pack Leader"},
		heightm: 1.3,
		weightkg: 68,
		eggGroups: ["Undiscovered"],
	},
	keldeo: {
		num: 647,
		name: "Keldeo",
		types: ["Water", "Fighting"],
		gender: "N",
		baseStats: {hp: 91, atk: 124, def: 110, spa: 70, spd: 84, spe: 89},
		abilities: {0: "Swift Swim", 1: "Inner Focus", H: "Stamina"},
		heightm: 1.4,
		weightkg: 48.5,
		eggGroups: ["Undiscovered"],
	},
	swordeo: {
		num: 647,
		name: "Swordeo",
		types: ["Rock", "Fighting"],
		gender: "N",
		baseStats: {hp: 91, atk: 62, def: 90, spa: 118, spd: 90, spe: 99},
		abilities: {0: "Intrepid Sword", 1: "Sand Force", H: "Victory Star"},
		heightm: 1.4,
		weightkg: 48.5,
		eggGroups: ["Undiscovered"],
	},
	meloetta: {
		num: 648,
		name: "Meloetta",
		types: ["Normal", "Fairy"],
		gender: "N",
		baseStats: {hp: 89, atk: 87, def: 77, spa: 128, spd: 128, spe: 91},
		abilities: {0: "Serene Grace", 1: "Misty Coat", H: "Pressure"},
		heightm: 0.6,
		weightkg: 6.5,
		eggGroups: ["Undiscovered"],
	},
	meloettafighter: {
		num: 648,
		name: "Meloetta-Fighter",
		types: ["Normal", "Fighting"],
		gender: "N",
		baseStats: {hp: 90, atk: 108, def: 90, spa: 67, spd: 77, spe: 128},
		abilities: {0: "Clear Body", 1: "Mold Breaker", H: "Technician"},
		heightm: 0.6,
		weightkg: 6.5,
		eggGroups: ["Undiscovered"],
	},
	genesect: {
		num: 649,
		name: "Genesect",
		types: ["Bug", "Steel"],
		gender: "N",
		baseStats: {hp: 75, atk: 105, def: 105, spa: 105, spd: 80, spe: 100},
		abilities: {0: "Magic Guard"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
	},
	genesectdouse: {
		num: 649,
		name: "Genesect-Douse",
		types: ["Water", "Steel"],
		gender: "N",
		baseStats: {hp: 90, atk: 100, def: 80, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Flare Boost"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
		otherFormes: null,
		formeOrder: null,
		baseSpecies: null,
		changesFrom: null,
		requiredItem: null,
	},
	genesecttypedelta: {
		num: 649,
		name: "Genesect-Type-Delta",
		types: ["Electric", "Psychic"],
		gender: "N",
		baseStats: {hp: 101, atk: 95, def: 75, spa: 95, spd: 75, spe: 109},
		abilities: {0: "Galvanize", H: "Psychic Surge"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
	},
	genesectmolten: {
		num: 649,
		name: "Genesect-Molten",
		types: ["Bug", "Fire"],
		gender: "N",
		baseStats: {hp: 70, atk: 90, def: 135, spa: 90, spd: 95, spe: 50},
		abilities: {0: "Drought", H: "Flash Fire"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
	},
	genesectfreezer: {
		num: 649,
		name: "Genesect-Freezer",
		types: ["Bug", "Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 115, def: 75, spa: 60, spd: 75, spe: 115},
		abilities: {0: "Mountaineer"},
		heightm: 1.5,
		weightkg: 82.5,
		eggGroups: ["Undiscovered"],
	},
	vivillonspirit: {
		num: 666,
		name: "Vivillon-Spirit",
		types: ["Bug", "Ghost"],
		baseStats: {hp: 80, atk: 125, def: 95, spa: 55, spd: 80, spe: 105},
		abilities: {0: "Shield Dust", 1: "Cursed Body", H: "Multiscale"},
		heightm: 1.2,
		weightkg: 17,
		eggGroups: ["Bug"],
		otherFormes: null,
		cosmeticFormes: null,
		formeOrder: null,
		forme: null,
		baseSpecies: null,
	},
	vivillonfancy: {
		num: 666,
		name: "Vivillon-Fancy",
		types: ["Bug", "Flying"],
		baseStats: {hp: 71, atk: 90, def: 80, spa: 105, spd: 75, spe: 119},
		abilities: {0: "Protean"},
		heightm: 1.2,
		weightkg: 17,
		eggGroups: ["Bug"],
		baseSpecies: null,
		cosmeticFormes: null,
		forme: null,
		formeOrder: null,
		changesFrom: null,
	},
	vivilloncombat: {
		num: 666,
		name: "Vivillon-Combat",
		types: ["Bug", "Fighting"],
		baseStats: {hp: 100, atk: 55, def: 90, spa: 95, spd: 110, spe: 90},
		abilities: {0: "Levitate", 1: "Tinted Lens", H: "No Guard"},
		heightm: 1.2,
		weightkg: 17,
		eggGroups: ["Bug"],
		baseSpecies: null,
		cosmeticFormes: null,
		forme: null,
		formeOrder: null,
		changesFrom: null,
	},
	aegishield: {
		num: 681,
		name: "Aegishield",
		types: ["Ghost", "Steel"],
		baseStats: {hp: 60, atk: 60, def: 140, spa: 50, spd: 130, spe: 60},
		abilities: {0: "Filter"},
		heightm: 1.7,
		weightkg: 53,
		eggGroups: ["Mineral"],
	},
	aegislash: {
		num: 681,
		name: "Aegislash",
		types: ["Ghost", "Fighting"],
		baseStats: {hp: 60, atk: 140, def: 50, spa: 90, spd: 50, spe: 110},
		abilities: {0: "Defiant"},
		heightm: 1.7,
		weightkg: 53,
		eggGroups: ["Mineral"],
	},
	gourgeist: {
		num: 711,
		name: "Gourgeist",
		types: ["Fire", "Grass"],
		baseStats: {hp: 70, atk: 65, def: 115, spa: 135, spd: 105, spe: 85},
		abilities: {0: "Flash Fire", 1: "Solar Power", H: "Poison Heal"},
		heightm: 0.9,
		weightkg: 12.5,
		eggGroups: ["Amorphous"],
		inherit: true,
	},
	gourgeistfae: {
		num: 711,
		name: "Gourgeist-Fae",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 90, atk: 80, def: 85, spa: 95, spd: 80, spe: 105},
		abilities: {0: "Prankster", H: "Magic Guard"},
		heightm: 0.7,
		weightkg: 9.5,
		eggGroups: ["Amorphous"],
	},
	gourgeistpulpy: {
		num: 711,
		name: "Gourgeist-Pulpy",
		types: ["Ghost", "Grass"],
		baseStats: {hp: 120, atk: 95, def: 70, spa: 90, spd: 70, spe: 40},
		abilities: {0: "Pulp Up", H: "Prankster"},
		heightm: 1.1,
		weightkg: 14,
		eggGroups: ["Amorphous"],
	},
	supergeist: {
		num: 711,
		name: "Supergeist",
		types: ["Ghost", "Fire"],
		baseStats: {hp: 60, atk: 104, def: 117, spa: 104, spd: 117, spe: 98},
		abilities: {0: "Pressure", 1: "Frisk", H: "Perish Body"},
		heightm: 1.7,
		weightkg: 39,
		eggGroups: ["Amorphous"],
	},
	zygardewyrm: {
		num: 718,
		name: "Zygarde-Wyrm",
		types: ["Dragon", "Bug"],
		gender: "N",
		baseStats: {hp: 88, atk: 71, def: 101, spa: 122, spd: 99, spe: 79},
		abilities: {0: "Aura Break", 1: "Power Construct", H: "Weak Armor"},
		heightm: 5,
		weightkg: 305,
		eggGroups: ["Undiscovered"],
	},
	zygardecanid: {
		num: 718,
		name: "Zygarde-Canid",
		types: ["Dragon", "Dark"],
		gender: "N",
		baseStats: {hp: 88, atk: 101, def: 99, spa: 71, spd: 79, spe: 122},
		abilities: {0: "Aura Break", 1: "Power Construct", H: "Strong Jaw"},
		heightm: 1.2,
		weightkg: 33.5,
		eggGroups: ["Undiscovered"],
	},
	zygardegoliath: {
		num: 718,
		name: "Zygarde-Goliath",
		types: ["Dragon", "Ground"],
		gender: "N",
		baseStats: {hp: 88, atk: 99, def: 122, spa: 79, spd: 101, spe: 71},
		abilities: {0: "Aura Break", 1: "Power Construct", H: "Unaware"},
		heightm: 4.5,
		weightkg: 610,
		eggGroups: ["Undiscovered"],
	},
	lycanday: {
		num: 745,
		name: "Lycanday",
		types: ["Ground", "Fire"],
		baseStats: {hp: 75, atk: 115, def: 95, spa: 65, spd: 80, spe: 112},
		abilities: {0: "Tough Claws"},
		heightm: 0.8,
		weightkg: 25,
		eggGroups: ["Field"],
	},
	lycanrocspectre: {
		num: 745,
		name: "Lycanroc-Spectre",
		types: ["Normal", "Ghost"],
		baseStats: {hp: 90, atk: 120, def: 95, spa: 60, spd: 83, spe: 82},
		abilities: {0: "Keen Eye", 1: "Cursed Body", H: "Illusion"},
		heightm: 1.1,
		weightkg: 25,
		eggGroups: ["Field"],
	},
	lycanrocdusk: {
		num: 745,
		name: "Lycanroc-Dusk",
		types: ["Rock"],
		baseStats: {hp: 95, atk: 147, def: 105, spa: 55, spd: 105, spe: 70},
		abilities: {0: "Tough Claws", 1: "Solid Rock", H: "Shadow Shield"},
		heightm: 0.8,
		weightkg: 25,
		eggGroups: ["Field"],
		inherit: true,
	},
	silvally: {
		num: 773,
		name: "Silvally",
		types: ["Normal"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 105, spa: 115, spd: 95, spe: 95},
		abilities: {0: "Adaptability"},
		heightm: 2.3,
		weightkg: 100.5,
		otherFormes: null,
		formeOrder: null,
		inherit: true,
	},
	silvallybug: {
		num: 773,
		name: "Silvally-Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 95, atk: 115, def: 95, spa: 95, spd: 95, spe: 105},
		abilities: {0: "Tinted Lens"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallydark: {
		num: 773,
		name: "Silvally-Dark",
		types: ["Dark"],
		gender: "N",
		baseStats: {hp: 115, atk: 95, def: 95, spa: 95, spd: 95, spe: 105},
		abilities: {0: "Dark Aura"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallydragon: {
		num: 773,
		name: "Silvally-Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 105, atk: 95, def: 95, spa: 95, spd: 95, spe: 115},
		abilities: {0: "Multiscale"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyelectric: {
		num: 773,
		name: "Silvally-Electric",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 95, spa: 115, spd: 95, spe: 105},
		abilities: {0: "Electric Surge"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyfairy: {
		num: 773,
		name: "Silvally-Fairy",
		types: ["Fairy"],
		gender: "N",
		baseStats: {hp: 115, atk: 95, def: 95, spa: 95, spd: 95, spe: 105},
		abilities: {0: "Misty Surge"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyfighting: {
		num: 773,
		name: "Silvally-Fighting",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 95, atk: 115, def: 95, spa: 95, spd: 105, spe: 95},
		abilities: {0: "Scrappy"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyfire: {
		num: 773,
		name: "Silvally-Fire",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 95, spa: 115, spd: 105, spe: 95},
		abilities: {0: "Steam Engine"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyflying: {
		num: 773,
		name: "Silvally-Flying",
		types: ["Flying"],
		gender: "N",
		baseStats: {hp: 95, atk: 105, def: 95, spa: 95, spd: 115, spe: 95},
		abilities: {0: "Gale Wings"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyghost: {
		num: 773,
		name: "Silvally-Ghost",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 115, spa: 105, spd: 95, spe: 95},
		abilities: {0: "Prankster"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallygrass: {
		num: 773,
		name: "Silvally-Grass",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 95, atk: 115, def: 95, spa: 95, spd: 95, spe: 105},
		abilities: {0: "Grassy Surge"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyground: {
		num: 773,
		name: "Silvally-Ground",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 105, atk: 95, def: 95, spa: 95, spd: 95, spe: 115},
		abilities: {0: "Mold Breaker"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyice: {
		num: 773,
		name: "Silvally-Ice",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 95, spa: 95, spd: 105, spe: 115},
		abilities: {0: "Refrigerate"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallypoison: {
		num: 773,
		name: "Silvally-Poison",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 95, spa: 105, spd: 95, spe: 115},
		abilities: {0: "Corrosion"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallypsychic: {
		num: 773,
		name: "Silvally-Psychic",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 105, atk: 95, def: 95, spa: 115, spd: 95, spe: 95},
		abilities: {0: "Magic Guard"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallyrock: {
		num: 773,
		name: "Silvally-Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: {hp: 95, atk: 105, def: 95, spa: 95, spd: 95, spe: 115},
		abilities: {0: "Sand Stream"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallysteel: {
		num: 773,
		name: "Silvally-Steel",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 95, atk: 105, def: 95, spa: 115, spd: 95, spe: 95},
		abilities: {0: "Magnet Pull"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	silvallywater: {
		num: 773,
		name: "Silvally-Water",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 95, atk: 95, def: 115, spa: 105, spd: 95, spe: 95},
		abilities: {0: "Water Absorb"},
		heightm: 2.3,
		weightkg: 100.5,
		baseSpecies: null,
		requiredItem: null,
		changesFrom: null,
	},
	mimikyu: {
		num: 778,
		name: "Mimikyu",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 60, atk: 70, def: 110, spa: 90, spd: 145, spe: 75},
		abilities: {0: "Dazzling", H: "Regenerator"},
		heightm: 0.2,
		weightkg: 0.7,
		eggGroups: ["Amorphous"],
	},
	mimikyusparkstone: {
		num: 778,
		name: "Mimikyu-Sparkstone",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 84, atk: 115, def: 71, spa: 50, spd: 121, spe: 100},
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Cursed Body"},
		heightm: 0.2,
		weightkg: 0.7,
		eggGroups: ["Amorphous"],
	},
	cramorant: {
		num: 845,
		name: "Cramorant",
		types: ["Flying"],
		baseStats: {hp: 120, atk: 90, def: 90, spa: 90, spd: 90, spe: 90},
		abilities: {0: "Mold Breaker"},
		heightm: 0.8,
		weightkg: 18,
		eggGroups: ["Water 1", "Flying"],
		otherFormes: null,
		formeOrder: null,
	},
	cramorantswimmer: {
		num: 845,
		name: "Cramorant-Swimmer",
		types: ["Flying", "Water"],
		baseStats: {hp: 120, atk: 85, def: 85, spa: 108, spd: 75, spe: 111},
		abilities: {0: "As One (Arrokuda)"},
		heightm: 0.8,
		weightkg: 18,
		eggGroups: ["Water 1", "Flying"],
	},
	cramorantgorging: {
		num: 845,
		name: "Cramorant-Gorging",
		types: ["Electric", "Flying"],
		baseStats: {hp: 80, atk: 110, def: 105, spa: 110, spd: 75, spe: 115},
		abilities: {0: "Static", H: "Unburden"},
		heightm: 0.8,
		weightkg: 18,
		eggGroups: ["Water 1", "Flying"],
		baseSpecies: null,
		forme: null,
		changesFrom: null,
		requiredAbility: null,
		battleOnly: null,
	},
	eiscue: {
		num: 875,
		name: "Eiscue",
		types: ["Ice", "Water"],
		baseStats: {hp: 100, atk: 100, def: 135, spa: 85, spd: 110, spe: 50},
		abilities: {0: "Ice Face"},
		heightm: 1.4,
		weightkg: 89,
		eggGroups: ["Water 1", "Field"],
		otherFormes: null,
		formeOrder: null,
	},
	eiscuenoice: {
		num: 875,
		name: "Eiscue-Noice",
		types: ["Ice", "Poison"],
		baseStats: {hp: 70, atk: 100, def: 95, spa: 90, spd: 90, spe: 135},
		abilities: {0: "Water Bubble"},
		heightm: 1.4,
		weightkg: 89,
		eggGroups: ["Water 1", "Field"],
		baseSpecies: null,
		forme: null,
		requiredAbility: null,
		battleOnly: null,
	},
	morpekomarsh: {
		num: 877,
		name: "Morpeko-Marsh",
		types: ["Grass", "Dark"],
		baseStats: {hp: 80, atk: 100, def: 95, spa: 50, spd: 115, spe: 110},
		abilities: {0: "Strong Jaw", H: "Wash Up"},
		heightm: 0.3,
		weightkg: 3,
		eggGroups: ["Field", "Fairy"],
	},
	morvilant: {
		num: 877,
		name: "Morvilant",
		types: ["Electric", "Poison"],
		baseStats: {hp: 100, atk: 95, def: 75, spa: 90, spd: 75, spe: 110},
		abilities: {0: "Intimidate", H: "Pillage"},
		heightm: 0.3,
		weightkg: 3,
		eggGroups: ["Field", "Fairy"],
	},
	zacian: {
		num: 888,
		name: "Zacian",
		types: ["Fairy", "Fighting"],
		gender: "N",
		baseStats: {hp: 85, atk: 112, def: 85, spa: 70, spd: 85, spe: 108},
		abilities: {0: "Misty Surge"},
		heightm: 2.8,
		weightkg: 110,
	},
	zaciancrowned: {
		num: 888,
		name: "Zacian-Crowned",
		types: ["Fairy", "Steel"],
		gender: "N",
		baseStats: {hp: 80, atk: 144, def: 105, spa: 70, spd: 105, spe: 71},
		abilities: {0: "Mold Breaker", H: "Stalwart"},
		heightm: 2.8,
		weightkg: 355,
		requiredItem: null,
	},
	zamazenta: {
		num: 889,
		name: "Zamazenta",
		types: ["Fighting", "Poison"],
		gender: "N",
		baseStats: {hp: 80, atk: 95, def: 110, spa: 70, spd: 75, spe: 115},
		abilities: {0: "Intimidate"},
		heightm: 2.9,
		weightkg: 210,
	},
	zamazentacrowned: {
		num: 889,
		name: "Zamazenta-Crowned",
		types: ["Fighting", "Steel"],
		gender: "N",
		baseStats: {hp: 80, atk: 115, def: 134, spa: 70, spd: 125, spe: 51},
		abilities: {0: "Bulletproof", H: "Stalwart"},
		heightm: 2.9,
		weightkg: 785,
		requiredItem: null,
	},
	eternatus: {
		num: 890,
		name: "Eternatus",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: {hp: 90, atk: 70, def: 60, spa: 130, spd: 95, spe: 110},
		abilities: {0: "Infiltrator", H: "Magic Bounce"},
		heightm: 20,
		weightkg: 950,
		eggGroups: ["Undiscovered"],
	},
	manustorm: {
		num: 890,
		name: "Manustorm",
		types: ["Fighting", "Dragon"],
		gender: "N",
		baseStats: {hp: 110, atk: 170, def: 85, spa: 30, spd: 105, spe: 50},
		abilities: {0: "Iron Fist", 1: "Rough Skin", H: "Defiant"},
		heightm: 100,
		weightkg: 0,
		eggGroups: ["Undiscovered"],
	},
};
