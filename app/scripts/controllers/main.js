'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */

beerAppApp.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'

    ];

    $scope.data = {
      selectedIndex : 0,
      secondLocked : true,
      secondLabel : "Item Two"
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };


    }); 

beerAppApp.controller('sort2', ['$scope', '$filter','$http', function($scope,$filter, $http) {
      
    $scope.beers = {};
      $http.get('json/beers.json').success(function(data) {
      $scope.beers = data;
    });

  	$scope.tabs = [
      { title: 'Status'},
      { title: 'Popularity'}
     
      
    ];
    $scope.tabs = $scope.tabs;
    $scope.selectedIndex = 1;
  
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      for (var j = 0; j < tabs.length; j++) {
        if (tab.title == tabs[j].title) {
          $scope.tabs.splice(j, 1);
          break;
        }
      }
    };


 
    var orderBy = $filter('orderBy');
    $scope.filters = { };

    
    $scope.predicate = '';



    $scope.tabPredicate = function (tabIndex){
    	if (tabIndex == 1){
    		$scope.predicate = '-popularity';
        
    	}
    	if (tabIndex == 0){
    		$scope.predicate = '-status';
       
    	}

        
         
      }

  

    $scope.order = function(predicate, reverse) {
      $scope.beers = orderBy($scope.beers, predicate, reverse);
    };
    $scope.order('-status',false);

	}]);

