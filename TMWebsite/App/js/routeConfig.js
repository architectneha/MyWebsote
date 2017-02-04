/// <reference path="angular.js" />
/// <reference path="angular-route.js" />
/// <reference path="tmwapp.js" />

tmwapp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "App/Pages/HomePage.html",
        controller: "App/Controllers/HomeController"
    })
    .when("/Login", {
        templateUrl: "App/Pages/LoginPage.aspx",
        controller: "App/Controllers/LoginController"
    })
    .otherwise({
        redirectTo : "/"
    });
    $locationProvider.html5Mode(true);
});