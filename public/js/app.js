(function() {
	var app = angular.module('pokedex', [
		'ngRoute',
		'pokedex.controllers',
		'pokemon.directives',
		'pokemon.filters',
		'pokedex.services'
	]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/pokedex.html',
				controller: 'PokedexController'
			})
			.when('/pokemon/:id', {
				templateUrl: 'views/pokemon.html',
				controller: 'PokemonController',
				controllerAs: 'pkmCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

})();