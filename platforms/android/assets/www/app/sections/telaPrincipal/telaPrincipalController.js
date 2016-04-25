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
    $scope.latitude = response.data.latitude;
    $scope.longitude = response.data.longitude;
    initialize();
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });

  function initialize() {
    var myLatLng = {lat: $scope.latitude, lng: $scope.longitude};

    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!',
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }

  //$scope.$on('$viewContentLoaded', initialize());

  $scope.clickSearch = function() {
    alert("SearchAction!");
  }


}]);
