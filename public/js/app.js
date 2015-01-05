(function() {
	var app = angular.module('pokedex', [
		'ngRoute',
		'pokedex.controllers',
		'pokemon.directives',
		'pokemon.filters'
	]);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/pokemon.html',
				controller: 'PokemonController',
				controllerAs: 'pkmCtrl'
			});
	}]);

})();