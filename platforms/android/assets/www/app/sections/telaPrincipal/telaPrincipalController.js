'use strict';

app.controller('telaPrincipalController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){

  //realiza a chamada GET para a telaPrincipal
  $http({
    method: 'GET',
    url: 'http://dev.4all.com:3003/tarefa/'+$stateParams.urlId,

  //em caso de sucesso do Get, preenche o $scope.
  }).then(function successCallback(response) {
    $scope.responseJson = response.data;
    $scope.imagemDaPaginaUrl = response.data.urlFoto;
    $scope.titulo = response.data.titulo;
    $scope.logoUrl = response.data.urlLogo;
    $scope.textoDaSecao = response.data.texto;
    $scope.telefone = response.data.telefone;
    $scope.latitude = response.data.latitude;
    $scope.longitude = response.data.longitude;
    $scope.endereco = response.data.endereco;
    $scope.comentarios = response.data.comentarios;
    //chamada do método do mapa, para gerar localização
    initialize();
    console.log(response);

  //em caso de erro do GET, imprime o erro no console.
  }, function errorCallback(response) {
    console.log(response);
  });

  /** ===================== Atributos da telaPrincipal ===================== **/
  $scope.showPopUp = false;
  /** ===================== Atributos da telaPrincipal =FIM================= **/

  /** ===================== Métodos da telaPrincipal ======================= **/
  $scope.clickSearch = function() {
    alert("SearchAction!");
  }

  $scope.clickEndereco =function() {
    $scope.showPopUp = true;
  }

  $scope.clickClosePopUp = function() {
    $scope.showPopUp = false;
  }

  $scope.clickComentarios = function() {
    var element_to_scroll_to = document.getElementById('comentariosContent');
    element_to_scroll_to.scrollIntoView();
  }
  /** ===================== Métodos da telaPrincipal =FIM=================== **/

  /** ===================== Método do Mapa ================================= **/
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
  /** ===================== Método do Mapa =FIM============================= **/

}]);
