'use strict';

app.controller('telaInicialController', ['$scope', '$http', '$state', function($scope, $http, $state){

    $http({
      method: 'GET',
      url: 'http://dev.4all.com:3003/tarefa',

    }).then(function successCallback(response) {
      $scope.buttonsHomeText = response.data.lista;
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    });


  $scope.buttonsHome1Action = function() {
    $state.go('telaPrincipal', {urlId: 1});
  };

  $scope.buttonsHome2Action = function() {
    alert("buttonsHome2Action");
  };
  $scope.buttonsHome3Action = function() {
    alert("buttonsHome3Action");
  };
}]);
