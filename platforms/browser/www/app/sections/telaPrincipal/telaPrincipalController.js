'use strict';

app.controller('telaPrincipalController', ['$scope', '$stateParams', function($scope, $stateParams){
  $scope.message = $stateParams.urlId;
}]);
