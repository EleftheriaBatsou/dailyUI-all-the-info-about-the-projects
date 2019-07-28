angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})
.controller('SubheaderAppCtrl', function($scope, $mdDialog) {
    var imagePath = 'img/list/60.jpeg';
    $scope.messages = [
      {
        destination : 'https://images.unsplash.com/photo-1561229032-820f593637ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'Greece',
        city: 'Athens',
        best_for: 'Best for: Historical monuments',
        notes: "Schedule: All year long, but preferably during spring that the weather is nice and you can walk in the beatufull historical streets."
      },
      {
        destination : 'https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'Greece',
        city: 'Mikonos',
        best_for: 'Best for: Parties',
        notes: "Schedule: From May to October. Life can be quite expensive but I am sure if you like parties you ll enjoy it."
      },
      {
        destination : 'https://images.unsplash.com/photo-1562528856-be97bfa26c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'Italy',
        city: 'Rome',
        best_for: 'Best for: Arts',
        notes: "Schedule: Rome, Milan, will always be there for you"
      },
      {
        destination : 'https://images.unsplash.com/photo-1562725380-a8de31347ec6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'French',
        city: 'Paris',
        best_for: 'Best for: Couture Fashion',
        notes: "Schedule: Paris Fashion Week in September"
      },
      {
        destination : 'https://images.unsplash.com/photo-1559924046-26005a0aceb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'Germany',
        city: 'Berlin',
        best_for: 'Best for: Street arts',
        notes: "Schedule: Everytime there is a big event/announcement, you ll find it in Berlin"
      },
      {
        destination : 'https://images.unsplash.com/photo-1563532579684-ea56925cbefc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'The Netherlands',
        city: 'Amsterdam',
        best_for: 'Best for: Parties :) ',
        notes: "Schedule: Mostly in Spring, but Amsterdam is always fun to visit"
      },
      {
        destination : 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        country: 'Greece',
        city: 'Thessaloniki',
        best_for: 'Best for: Relaxation',
        notes: "Schedule: All time long"
      }
    ];
 
  
    // Hotels
    $scope.showHotels = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
  };
  
    // Flights
    $scope.showFlights = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog2.tmpl.html',
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
  
    // Flights
});