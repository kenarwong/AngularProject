import * as angular from 'angular';

module app {
    class Config {
        constructor($routeProvider: angular.route.IRouteProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "Scripts/app/hello-world/hello.html",
                    controller: "HelloCtrl as vm"
                })
                .otherwise({ redirectTo: '/' });
        }
    }
    Config.$inject = ['$routeProvider'];

    var mainApp = angular.module('AngularApp', ['ngRoute']);
    
    class HelloCtrl {
        helloText = 'Hello World!';
    }
    angular.module('AngularApp')
        .controller('HelloCtrl', HelloCtrl);

    mainApp.config(Config);
}