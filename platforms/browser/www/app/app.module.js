'use strict';

var app = angular.module('app4AllModule', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  //Caso não indique a rota, encaminha para telaInicial.
  $urlRouterProvider.otherwise("/telaInicial");

  //Rota principal da Aplicação.
  $stateProvider
    .state('telaInicial', {
      url: "/telaInicial",
      templateUrl: "app/sections/telaInicial/telaInicial.html",
      controller: 'telaInicialController'
    })
    .state('telaPrincipal', {
      url: "/telaPrincipal/:urlId",
      templateUrl: "app/sections/telaPrincipal/telaPrincipal.html",
      controller: 'telaPrincipalController'
    });
});
