var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider) {
    $routeProvider.when("/",
        {
            templateUrl: "Views/Home.html",
            controller:"Home"
        })
    .when("/Home",{
        templateUrl: "Views/Home.html",
        controller:"Home"
    })
        .when("/Add",
        {
            templateUrl: "Views/Add.html",
            controller:"Add"
        }
        )
        .when("/Details/:id",
        {
            templateUrl: "Views/Details.html",
            controller:"Detail"
        })
        .otherwise(
        {
            templateUrl: "Views/Error.html"
        }
        );

});
myApp.factory('SuperHeros', function () {
    return [];
});
myApp.controller('Detail', function ($scope, SuperHeros, $routeParams) {
    if (SuperHeros[$routeParams.id]) {
        $scope.selectedHero = SuperHeros[$routeParams.id];
    }
    else {
        $scope.selectedHero = "ERRRORRROROROROOROROROR";
    }
});
myApp.controller('Home', function ($scope, SuperHeros) {
    $scope.SuperHeros = SuperHeros;
});
myApp.controller('Add', function ($scope, SuperHeros) {
    $scope.SuperHeros = SuperHeros;
    $scope.AddHero = function (name) {
        var hero = name;
        SuperHeros.push(hero);
    };
});