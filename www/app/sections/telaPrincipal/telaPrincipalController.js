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

  function initialize() {
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  }

  $scope.$on('$viewContentLoaded', initialize());

  $scope.clickSearch = function() {
    alert("SearchAction!");
  }

  $scope.initMap = function() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }


}]);
