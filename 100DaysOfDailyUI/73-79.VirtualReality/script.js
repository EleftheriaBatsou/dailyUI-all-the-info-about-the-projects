angular.module('MyApp', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope, $mdDialog, $timeout) {
  
  $scope.showPreOrder = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };

  function DialogController($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
  }
  
  
  $scope.showAlert = function(ev) {
    $mdDialog.show({
      template: '<md-dialog id="plz_wait" style="box-shadow:none">' +
        '<md-dialog-content layout="row" layout-margin layout-padding layout-align="center center" aria-label="wait">' +
        '<md-progress-circular md-mode="indeterminate" md-diameter="40"></md-progress-circular>' +
        'Download should start shortly. Thank you' +
        '</md-dialog-content>' +
        '</md-dialog>',
      parent: angular.element(document.body),
      clickOutsideToClose: false,
      fullscreen: false,
      escapeToClose: false
    });
    $timeout(function() {
      $mdDialog.cancel();
    }, 5000);
  };
});