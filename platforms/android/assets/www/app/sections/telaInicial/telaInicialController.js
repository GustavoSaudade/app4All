'use strict';

app.controller('telaInicialController', ['$scope', '4AllWebService' function($scope, 4AllWebService){

  MyService.query(function(data) {
    $scope.ServiceData = data;
  });


  $scope.message = "App4All";
}]);
