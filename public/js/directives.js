(function() {
	angular.module('pokemon.directives', [])

	.directive('pokemonName', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-name.html'
		}
	})

	.directive('pokemonImage', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-image.html'
		}
	})

	.directive('pokemonData', function() {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-data.html'
		}
	})

	.directive('pokemonStats', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-stats.html'
		}
	})

	.directive('pokemonEvolution', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-evolution.html'
		}
	})

	.directive('pokemonType', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-type.html'
		}
	})

	.directive('pokemonComments', function() {
		return {
			restrict: 'E',
			templateUrl: '/partials/pokemon-comments.html',
			controller: function() {
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
			},
			controllerAs: 'cmtsCtlr'
		}
	});

})();