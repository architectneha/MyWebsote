/// <reference path="angular.js" />
/// <reference path="angular-route.js" />
/// <reference path="tmwapp.js" />

tmwapp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "App/Pages/HomePage.html",
        controller: "App/Controllers/HomeController.js"
    })
    .when("/Login", {
        templateUrl: "App/Pages/LoginPage.aspx",
        controller: "App/Controllers/LoginController.js"
    })
    .otherwise({
        redirectTo : "/"
    });
    $locationProvider.html5Mode(true);
});