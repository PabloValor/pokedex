(function(_) {
	angular.module('pokedex.controllers', [])

	.controller('PokedexController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService) {
		
		var type = $routeParams.type;
		var pokemons = [];

		if(type) {
			pokemonService.byType(type).then(function(data) {
				$scope.pokemons = data;
				$scope.type = type;
				$scope.groupped = partition(data, 4);
			});

		} else {
			pokemonService.all().then(function(data) {
				$scope.pokemons = data;
				$scope.groupped = partition(data, 4);
			});
		}

		function partition(data, n) {
			return _.chain(data).groupBy(function(element, index){
				return Math.floor(index / n);
			}).toArray().value();
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
	})

	.controller('CommentsController', ['$scope','$routeParams', function($scope,$routeParams){
		$scope.name = $routeParams.name;

		$scope.comment = {}; //current comment
		$scope.comments = [];
		$scope.show = false;

		$scope.toggle = function() {
			$scope.show = !$scope.show;
		};

		this.anonymousChanged = function() {
			if($scope.comment.anonymous === true) {
				$scope.comment.email = "";
			}
		};

		$scope.addComment = function() {
			$scope.comment.date = Date.now();
			$scope.comments.push($scope.comment);
			$scope.comment = {};
		};
			
	}]);

})(_);