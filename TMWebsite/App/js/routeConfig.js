/// <reference path="angular.js" />
/// <reference path="angular-route.js" />
/// <reference path="tmwapp.js" />

tmwapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "../Pages/HomePage.html",
        controller: "../Controllers/HomeController.js"
    })
    .when("/Login", {
        templateUrl: "../Pages/LoginPage.aspx",
        controller: "../Controllers/LoginController.js"
    })
    .otherwise({
        redirectTo : "/"
    });
});