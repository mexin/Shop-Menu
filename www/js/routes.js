angular
  .module('VintageMenu')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    });

  $urlRouterProvider.otherwise('/main');
}
