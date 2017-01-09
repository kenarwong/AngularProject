import * as angular from 'angular';
require("jquery");

import HelloWorld from './hello-world';

class Config {
    constructor($routeProvider: angular.route.IRouteProvider) {
        $routeProvider
            .when("/", {
                template: require('./hello-world/hello.html'),
                controller: "HelloCtrl as vm"
            })
            .otherwise({ redirectTo: '/' });
    }
}
Config.$inject = ['$routeProvider'];

export default angular.module('app', [
        require('angular-route'),
        HelloWorld
    ])
    .config(Config);