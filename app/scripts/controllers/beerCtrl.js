beerAppApp.controller('BeerCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/beers.json').success(function(data) {
      	angular.forEach(data, function(item) {
          if (item.id == $routeParams.beerId) 
            $scope.beer = item;
        	console.log(item);
        });
    });
   
}]);