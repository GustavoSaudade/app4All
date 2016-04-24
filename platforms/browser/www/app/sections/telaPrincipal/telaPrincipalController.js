'use strict';

app.controller('telaPrincipalController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $http({
    method: 'GET',
    url: 'http://dev.4all.com:3003/tarefa/'+$stateParams.urlId,

  }).then(function successCallback(response) {
    $scope.responseJson = response.data;
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });

}]);
