(function() {
	var app = angular.module('pokedex', []);

	app.controller('PokemonController', function() {
		this.pokemon = {
			id: '001',
			name: 'Bulbasour',
			species: 'Seed Pokemon',
			type: ['Grass', 'Poison'],
			height: "2'4",
			weight: '15.2 lbs',
			abillities: ['Overgrow', 'Chlorophyll'],
			stats: {
				hp: 45,
				attack: 49,
				defense: 49,
				"sp.atk": 65,
				"sp.def": 65,
				speed: 45,
				total: 318
			},
			evolution: ["Bulbasour", "Ivysaur", "Venusaur"]
		};
	});
})();