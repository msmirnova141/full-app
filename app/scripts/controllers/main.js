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



  beerAppApp.controller('sort2', ['$scope', '$filter', function($scope, $filter) {

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

    $scope.beers =

        [
         {name:'33 ACRES OF OCEAN', info: 'West Coast Pale ale', type:'Pale ale', popularity:'5', status:41, region:'BC', favorite: 'favorite'},
         {name:'SMOOTH CRIMINAL',info: 'Dry Irish Stout', type:'Stout', popularity:'3.6', status:92, region:'BC', favorite: 'false'},
         {name:'LIGHTS OUT STOUT',info: '', type:'Stout', popularity:'4.7', status:66, region:'Oregon', favorite: 'favorite'},
         {name:'N2 SERIES',info: 'Milk Stout', type:'Stout', popularity:'5', status:23, region:'BC', favorite: 'false'},
         {name:'OLD RASPUTIN',info: 'Russian Imperial Stout', type:'Stout', popularity:'2.3', status:16, region:'CA', favorite: 'false'},
         {name:'PERFECT STORM',info: 'Outmeal Stout', type:'Stout', popularity:'3.7', status:13, region:'BC', favorite: 'false'},
         {name:'SCRUMPY', type:'Cider',info: '', popularity:'4', status:78, region:'BC', favorite: 'false'},
         {name:'TRADITIONAL CIDER', info: '',type:'Cider', popularity:'5', status:73, region:'BC', favorite: 'false'},
         {name:'HALLELUJAH HOPRICOT CIDER', info: '',type:'Cider', popularity:'4', status:39, region:'Oregon', favorite: 'favorite'},
         {name:'33 ACRES OF DARKNESS SCHWARZBIER',info: '', type:'Larger', popularity:'4.9', status:100, region:'BC', favorite: 'false'},
         {name:'HOPARAZZI INDIA PALE LAGER',info: '', type:'Larger', popularity:'3.6', status:77, region:'BC', favorite: 'false'},
         {name:'PILSNER',info: '', type:'Larger', popularity:'4.4', status:74, region:'BC', favorite: 'false'},
         {name:'LARGER',info: '', type:'Larger', popularity:'4.8', status:13, region:'BC', favorite: 'false'},
         {name:'EURO TRASH IPL',info: '', type:'Larger', popularity:'2', status:11, region:'Oregon', favorite: 'false'},
         {name:'FAT TUG IPA',info: '', type:'India Pale Ale', popularity:'3', status:90, region:'BC', favorite: 'false'},
         {name:'THE IMMORTAL IPA',info: '', type:'India Pale Ale', popularity:'4', status:84, region:'WA', favorite: 'false'},
         {name:'GO TO IPA',info: '', type:'India Pale Ale', popularity:'4.3', status:24, region:'CA', favorite: 'false'},
         {name:'AMNESIAC DOUBLE IPA',info: '', type:'India Pale Ale', popularity:'3', status:17, region:'BC', favorite: 'false'},
         {name:'HOPDEMONIUM IPA',info: '', type:'india Pale Ale', popularity:'3', status:0, region:'BC', favorite: 'false'},
         {name:'ALE',info: '', type:'Pale ale', popularity:'5', status:85, region:'BC', favorite: 'false'},
         {name:'ESB',info: '', type:'Pale ale', popularity:'4.1', status:61, region:'BC', favorite: 'false'}];
    
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

