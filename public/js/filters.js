(function() {
	angular.module('pokemon.filters', [])

	.filter('imageify', function() {
		return function(input) {
			var url = 'build/img/pokemons/' 
				+ input.toLowerCase() + '.jpg';
			return url;
		}
	});

})();