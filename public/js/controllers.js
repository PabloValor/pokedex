(function() {
	angular.module('pokedex.controllers', [])

	.controller('PokedexController', ['$scope', '$http', function($scope, $http) {
		$scope.pokemons = [];

		$http.get('/pokemons.json')
			.success(function(data) {
				$scope.pokemons = data;
			});
	}])

	.controller('PokemonController', ['$scope', function($scope) {
		$scope.pokemon = {
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
	}])
	
	.controller('TabsController', function() {
		this.tab = 1;
		
		this.selectTab = function(tab) {
			this.tab = tab;
		}
	});

})();