'use strict';

var app = angular.module('app4AllModule', ['ui.router', require('angular-resource')]);

app.config(function($stateProvider, $urlRouterProvider){

  //Caso não indique a rota, encaminha para telaInicial.
  $urlRouterProvider.otherwise("/telaInicial");

  //Rota principal da Aplicação.
  $stateProvider
    .state('telaInicial', {
      url: "/telaInicial",
      templateUrl: "app/sections/telaInicial/telaInicial.html"
    });
});
