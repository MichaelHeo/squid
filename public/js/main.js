angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/tags', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.otherwise({redirectTo: '/tags'});

	});
