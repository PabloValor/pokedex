!function(){angular.module("pokedex.services",[]).factory("pokemonService",["$http","$q",function(e,n){function o(){var o=n.defer();return e.get("/pokemons.json").success(function(e){o.resolve(e)}),o.promise}return{all:o}}])}();