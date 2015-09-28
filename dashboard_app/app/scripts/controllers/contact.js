
var app = angular.module("dbApp");
app.controller('contact', function ($scope, $window,$http) {
  // $scope.tabs = [
  //   { title:'Information' },
  //   { title:'Query', disabled: true },
  //   { title:'Confirmation', disabled: true }
  // ];
 
  $http.get('/api/location')
  .then(function(response) {
        $scope.tabs=response.data.locations;
   }, function() {
        console.log("SORRY");
   });

  $http.get('/api/category')
  .then(function(response) {
        $scope.cats=response.data.categories;
   }, function() {
        console.log("SORRY");
   });

  $scope.mytime = new Date();
  $scope.info=true;
  console.log($scope.fname);
  console.log($scope.lname);
  console.log($scope.email);
  console.log($scope.phone);
  console.log($scope.location);

  $scope.rate = 5;
  $scope.max = 10;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];

  
});