var app = angular.module("azishapidin", ["ngRoute", "ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "halaman/home.html",
        controller : "homeController"
    })
    .when("/about", {
        templateUrl : "halaman/about.html",
        controller : "aboutController"
    })
    .when("/contact", {
        templateUrl : "halaman/contact.html",
        controller : "contactController"
    })
});
app.controller('homeController', function($scope) {
    var elemen=angular.element(document.querySelector('.overview'));
    elemen.addClass('active');
    var elemen=angular.element(document.querySelector('.about'));
    elemen.removeClass('active');
    var elemen=angular.element(document.querySelector('.contact'));
    elemen.removeClass('active');
});
app.controller('aboutController', function($scope) {
    var elemen=angular.element(document.querySelector('.about'));
    elemen.addClass('active');
    var elemen=angular.element(document.querySelector('.overview'));
    elemen.removeClass('active');
    var elemen=angular.element(document.querySelector('.contact'));
    elemen.removeClass('active');
});
app.controller('contactController', function($scope, $http) {
    var elemen=angular.element(document.querySelector('.contact'));
    elemen.addClass('active');
    var elemen=angular.element(document.querySelector('.overview'));
    elemen.removeClass('active');
    var elemen=angular.element(document.querySelector('.about'));
    elemen.removeClass('active');
});
