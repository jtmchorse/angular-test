var myApp = angular.module('myApp', [
  'ngRoute',
  'appController'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/appGallery', {
    templateUrl: 'partials/main.html',
    controller: 'ListController'
  }).when('/detail/:itemId', {
    templateUrl: 'partials/detail.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/appGallery'
  });

}]);