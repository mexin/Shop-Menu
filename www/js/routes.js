angular
  .module('VintageMenu')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('splash' ,{
      url: '/',
      templateUrl: 'templates/root.html'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainController'
    })
    .state('producto', {
      url: '/producto/:id',
      templateUrl: 'templates/producto.html',
      controller: 'productController'
    })
    .state('carrito', {
      url: '/carrito',
      templateUrl: 'templates/carrito.html',
      controller: 'senderController'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'settingsController'
    });

  $urlRouterProvider.otherwise('/');
}
