angular.module('MyApp', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'https://images.unsplash.com/photo-1557655526-c97079fca862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      image: 'https://images.unsplash.com/photo-1554457946-28a62c032b8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      image: 'https://images.unsplash.com/photo-1545998316-3c42f69e22f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      image: 'https://images.unsplash.com/photo-1555447631-7fda3d923599?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    }
  ];
}