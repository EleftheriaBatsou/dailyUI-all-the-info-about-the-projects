angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope, $mdDialog) {
    this.myDate = new Date();
  
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };
  
  
  
  $scope.showOptions = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog2.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen
    })
      .then(function(answer) {

    }, function() {

    });
  }

  function DialogController($scope, $mdDialog) {
    $scope.users = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
      ];
    
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
});