var appController = angular.module('appController', []);

appController.controller('ListController',  function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
  });
});

appController.controller('DetailsController',  function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
    $scope.whichItem = $routeParams.itemId;
  });
});
