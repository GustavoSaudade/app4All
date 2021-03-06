'use strict';

app.controller('telaInicialController', ['$scope', '$http', '$state', function($scope, $http, $state){

    //realiza a chamada GET para a telaInicial
    $http({
      method: 'GET',
      url: 'http://dev.4all.com:3003/tarefa',
      //em caso de sucesso do Get, preenche o $scope.
    }).then(function successCallback(response) {
      $scope.buttonsHomeText = response.data.lista;
      console.log(response);
      //em caso de erro do GET, imprime o erro no console.
    }, function errorCallback(response) {
      console.log(response);
    });

  /**============== Métodos Actions dos botões da telaInicial ===============**/
  $scope.buttonsHome1Action = function() {
    $state.go('telaPrincipal', {urlId: 1});
  };

  $scope.buttonsHome2Action = function() {
    $state.go('telaPrincipal', {urlId: "b"});
  };

  $scope.buttonsHome3Action = function() {
    $state.go('telaPrincipal', {urlId: "c33"});
  };

  $scope.buttonsHome4Action = function() {
    $state.go('telaPrincipal', {urlId: "ultimo"});
  };
  /**============== Métodos Actions dos botões da telaInicial =END===========**/
}]);
