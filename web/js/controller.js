var appController = angular.module('appController', ['ngAnimate']);

appController.controller('ListController',  function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
  });
});

appController.controller('DetailsController',  function($scope, $http, $routeParams) {
  function getAppById(id, apps) {
    for(var i = 0; i < apps.length; i++) {
      if(apps[i].name.toLowerCase() === id.toLowerCase()) {
        return apps[i];
      }
    }
  }

  $http.get('js/data.json').success(function(data) {
    $scope.apps = data;
    $scope.whichItem = $routeParams.itemId;
    $scope.item = getAppById($routeParams.itemId, data);
  });
});
