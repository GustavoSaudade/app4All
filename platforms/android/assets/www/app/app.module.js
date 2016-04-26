'use strict';
//modulo angular do App -> Inicio da Aplicação
var app = angular.module('app4AllModule', ['ui.router']);

//Configurando o Módulo para usar dependências de Routes
app.config(function($stateProvider, $urlRouterProvider){

  //Caso usuário digite outra url, encaminha para telaInicial.
  $urlRouterProvider.otherwise("/telaInicial");

  //Rota principal da Aplicação(telaInicial).
  $stateProvider
    .state('telaInicial', {
      url: "/telaInicial",
      templateUrl: "app/sections/telaInicial/telaInicial.html",
      controller: 'telaInicialController'
    })
    //Rota da Aplicação(telaPrincipal).
    .state('telaPrincipal', {
      url: "/telaPrincipal/:urlId",
      templateUrl: "app/sections/telaPrincipal/telaPrincipal.html",
      controller: 'telaPrincipalController'
    })
    //Rota da Aplicação(telaDeServicos).
    .state('telaDeServicos', {
      url: "/telaDeServicos",
      templateUrl: "app/sections/telaDeServicos/telaDeServicos.html"
    });
});
