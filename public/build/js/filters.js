!function(){angular.module("pokemon.filters",[]).filter("normalize",function(){return function(e){return e=e.replace("♀","f").replace("♂","m").replace(/\W+/g,""),e.toLowerCase()}}).filter("imageify",["$filter",function(e){return function(r){var n="build/img/pokemons/"+e("normalize")(r)+".jpg";return n}}])}();