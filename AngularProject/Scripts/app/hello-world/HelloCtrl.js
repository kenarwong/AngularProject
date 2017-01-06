var HelloWorld;
(function (HelloWorld) {
    var HelloCtrl = (function () {
        function HelloCtrl() {
            this.helloText = 'Hello World!';
        }
        return HelloCtrl;
    }());
    angular.module('AngularApp')
        .controller('HelloCtrl', HelloCtrl);
})(HelloWorld || (HelloWorld = {}));
//# sourceMappingURL=HelloCtrl.js.map