(function() {
	angular.module('pokedex.controllers', [])

	.controller('PokedexController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService) {
		
		var type = $routeParams.type;

		if(type) {
			pokemonService.byType(type).then(function(data) {
				$scope.pokemons = data;
			});

		} else {
			pokemonService.all().then(function(data) {
				$scope.pokemons = data;
			});
		}
	}])

	.controller('PokemonController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService) {
		$scope.pokemon = {};
		var name = $routeParams.name;

		pokemonService.byName(name)
			.then(function(data) {
				$scope.pokemon = data;
			});
	}])
	
	.controller('TabsController', function() {
		this.tab = 1;
		
		this.selectTab = function(tab) {
			this.tab = tab;
		}
	});

})();