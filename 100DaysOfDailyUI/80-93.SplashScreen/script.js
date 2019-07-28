angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('MainCtrl', function () {
    this.isContinue = false;
  
    this.project = {
      special: true,
      rating1: 3200,
      isDisabled: true
    };
  
});