(function(_) {
	angular.module('pokedex.controllers', [])

	.controller('PokedexController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService) {
		
		var type = $routeParams.type;

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

	.controller('CommentsController', ['$routeParams', function($routeParams){
		this.name = $routeParams.name;

		this.comment = {}; //current comment
		this.comments = [];
		this.show = false;

		this.toggle = function() {
			this.show = !this.show;
		};

		this.anonymousChanged = function() {
			if(this.comment.anonymous === true) {
				this.comment.email = "";
			}
		};

		this.addComment = function() {
			this.comment.date = Date.now();
			this.comments.push(this.comment);
			this.comment = {};
		};
			
	}]);

})(_);