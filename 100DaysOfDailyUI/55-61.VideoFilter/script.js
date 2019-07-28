angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope, $mdDialog) {

$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('You are about to buy this cool filter')
      .textContent('If you have a coupon, please apply it below')
      .placeholder('Coupon Code')
      .ariaLabel('Dog name')
      .initialValue('Apply coupon')
      .targetEvent(ev)
      .required(true)
      .ok('Okay!')
      .cancel('proceed to payment');

    $mdDialog.show(confirm).then(function(result) {
      
    }, function() {
     
    });
  };
  
});