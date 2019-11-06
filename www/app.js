// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {

  // $pages;

  $routeProvider
    .when("/", {
      templateUrl: "/templates/hem.html",
      // $pages = {title:"Hem"}
    })
    .when("/verksamhet", {
      templateUrl: "/templates/verksamhet.html"
    })
    .when("/allaVerksamheter", {
      templateUrl: "/templates/AllaVerksamheter.html"
    })
    .when("/kontakt", {
      templateUrl: "/templates/kontakt.html"
    })
    .when("/om-oss", {
      templateUrl: "/templates/om-oss.html"
    })
    .otherwise({
      templateUrl: "/templates/404.html"
    });

  $locationProvider.html5Mode(true);
}]);