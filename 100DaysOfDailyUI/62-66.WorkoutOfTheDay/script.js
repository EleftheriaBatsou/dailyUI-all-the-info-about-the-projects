angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope, $mdDialog) {

$scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Note s Widget')
      .textContent('Enter your note below')
      .placeholder('I am a note!!')
      .ariaLabel('note here')
      .initialValue('I am a note!!')
      .targetEvent(ev)
      .required(true)
      .ok('Okay!')
      .cancel('No, I will not a dd a note');

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'Your note is: ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t add a note';
    });
  };
  
  
  
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen
    })
    .then(function(answer) {
      
    }, function() {
      
    });
  }
  
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
   $scope.user = null;
   $scope.users = null;
   $scope.users =  $scope.users  || [
        { id: 1, name: 'Newbie' },
        { id: 2, name: 'Senior' },
        { id: 3, name: 'Super-Advanced' }
      ];
    
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
 
  
});