"use strict";
var app_1 = require("../app");
var HelloCtrl = (function () {
    function HelloCtrl() {
        this.helloText = 'Hello World!';
    }
    return HelloCtrl;
}());
exports.HelloCtrl = HelloCtrl;
app_1.app.controller('HelloCtrl', HelloCtrl);
//# sourceMappingURL=HelloCtrl.js.map