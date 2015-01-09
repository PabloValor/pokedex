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
			.when('/about', {
				templateUrl: 'views/about.html'
			})
			.when('/:type', {
				templateUrl: 'views/pokedex.html',
				controller: 'PokedexController'
			})
			.when('/pokemon/:name', {
				templateUrl: 'views/pokemon.html',
				controller: 'PokemonController',
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

})();