angular.module('desafiosquid', ['ngAnimate', 'ngRoute', 'ngResource'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/tags', {
			templateUrl: 'partials/principal.html',
			controller: 'TagsController'
		});

		$routeProvider.otherwise({redirectTo: '/tags'});

	});
