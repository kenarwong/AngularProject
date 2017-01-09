"use strict";
var angular = require("angular");
var hello_world_1 = require("./hello-world");
var Config = (function () {
    function Config($routeProvider) {
        $routeProvider
            .when("/", {
            template: require('./hello-world/hello.html'),
            controller: "HelloCtrl as vm"
        })
            .otherwise({ redirectTo: '/' });
    }
    return Config;
}());
Config.$inject = ['$routeProvider'];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = angular.module('app', [
    'ngRoute',
    hello_world_1.default
])
    .config(Config);
//# sourceMappingURL=app.js.map