"use strict";
var angular = require("angular");
var app;
(function (app) {
    var Config = (function () {
        function Config($routeProvider) {
            $routeProvider
                .when("/", {
                templateUrl: "Scripts/app/hello-world/hello.html",
                controller: "HelloCtrl as vm"
            })
                .otherwise({ redirectTo: '/' });
        }
        return Config;
    }());
    Config.$inject = ['$routeProvider'];
    var mainApp = angular.module('AngularApp', ['ngRoute']);
    var HelloCtrl = (function () {
        function HelloCtrl() {
            this.helloText = 'Hello World!';
        }
        return HelloCtrl;
    }());
    angular.module('AngularApp')
        .controller('HelloCtrl', HelloCtrl);
    mainApp.config(Config);
})(app || (app = {}));
//# sourceMappingURL=app.js.map