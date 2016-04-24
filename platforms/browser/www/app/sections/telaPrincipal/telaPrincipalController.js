'use strict';

app.controller('telaPrincipalController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $http({
    method: 'GET',
    url: 'http://dev.4all.com:3003/tarefa/'+$stateParams.urlId,

  }).then(function successCallback(response) {
    $scope.responseJson = response.data;
    $scope.imagemDaPaginaUrl = response.data.urlFoto;
    $scope.titulo = response.data.titulo;
    $scope.logoUrl = response.data.urlLogo;
    $scope.textoDaSecao = response.data.texto;
    $scope.telefone = response.data.telefone;
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });



  $scope.clickSearch = function() {
    alert("SearchAction!");
  }

  

}]);
