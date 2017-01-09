import * as angular from 'angular';

import HelloCtrl from './hello-world.controller';

export default angular.module('app.HelloWorld',[])
  .controller('HelloCtrl', HelloCtrl)
  .name;