module HelloWorld {

    class HelloCtrl {
        helloText = 'Hello World!';
    }
    angular.module('AngularApp')
        .controller('HelloCtrl', HelloCtrl);
}